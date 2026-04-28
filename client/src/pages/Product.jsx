import "../styles/products.css";
import Card from "../components/ui/Card";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import useDebounce from "../../hooks/useDebounce";
import Axios from "../Axios";
import Pagination from "./Pagination";
import FilterModal from "../components/FilterModal";
import TriangleLoader from "../components/ui/TriangleLoader";

const PRODUCT_CACHE_KEY = "productsPageData";

const Product = () => {
  const cachedData = JSON.parse(localStorage.getItem(PRODUCT_CACHE_KEY) || "null");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(cachedData?.totalPages || 1);
  const [products, setProducts] = useState(cachedData?.products || []);
  const [showModal, setShowModal] = useState(false);
  const debouncedValue = useDebounce(searchTerm, 800);
  const [loading, setLoading] = useState(!cachedData);
  const [slowServer, setSlowServer] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: { value: "createdAt_asc", label: "Latest First" },
    size: [],
    color: [],
    brand: [],
    category: "",
    price: { minPrice: 0, maxPrice: Infinity },
  });
  const [appliedFilters, setAppliedFilters] = useState({
    sortBy: { value: "createdAt_asc", label: "Latest First" },
    size: [],
    color: [],
    brand: [],
    category: "",
    price: { minPrice: 0, maxPrice: Infinity },
  });
  const [options, setOptions] = useState(cachedData?.options || null);

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        setSlowServer(true);
        controller.abort();
      }, 7000);

      setLoading(true);
      setSlowServer(false);
      try {
        const response = await Axios.get("/api/v1/product/filter", {
          signal: controller.signal,
          params: {
            sortBy: appliedFilters.sortBy?.value,
            size: appliedFilters.size,
            color: appliedFilters.color,
            brand: appliedFilters.brand,
            category: appliedFilters.category,
            minPrice: appliedFilters.price?.minPrice,
            maxPrice: appliedFilters.price?.maxPrice,
            search: debouncedValue,
            page: currentPage,
            limit: 12,
          },
        });
        setProducts(response.data.products || []);
        setTotalPages(Math.ceil(response.data.count / 12));
        setOptions({
          colors: response.data.colorOptions,
          brands: response.data.brandOptions,
          category: response.data.categoryOptions,
        });
        localStorage.setItem(
          PRODUCT_CACHE_KEY,
          JSON.stringify({
            products: response.data.products || [],
            totalPages: Math.ceil(response.data.count / 12),
            options: {
              colors: response.data.colorOptions,
              brands: response.data.brandOptions,
              category: response.data.categoryOptions,
            },
          })
        );
        console.log(response.data);
      } catch (error) {
        if (error?.name !== "CanceledError") {
          console.log(error);
        }
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };
    fetchData();
  }, [debouncedValue, currentPage, appliedFilters]);
  const canPreviousPage = currentPage > 1;
  const canNextPage = currentPage < totalPages;
  const gotoPage = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="Header_title search_header">
        <h1>Find your favorite Shoes Today</h1>
        <div className="searchBar">
          <div className="searchForm">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="What shoes are you looking for ?"
            />
            <div>
              <FiSearch />
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="open-modal"
            type="button"
          >
            Filter
          </button>
        </div>
        {showModal && (
          <FilterModal
            filters={filters}
            FilterOptions={options}
            changeFilter={(e) => setFilters({ ...filters, ...e })}
            onClose={() => setShowModal(false)}
            requestData={() => {
              setAppliedFilters(filters);
              setCurrentPage(1);
            }}
          />
        )}
      </div>
      {loading ? (
        <div>
          <TriangleLoader height="300px" />
          {slowServer && (
            <p style={{ textAlign: "center", marginTop: "0.5rem", color: "#666" }}>
              Server is waking up, please wait...
            </p>
          )}
        </div>
      ) : products && products.length > 0 ? (
        <>
          <section className="Featured-products featured-div">
            <div className="product-container">
              {products &&
                products.map((item) => {
                return <Card key={item._id} {...item} />;
              })}
            </div>
          </section>
          <Pagination
            totalPageCount={totalPages}
            canPreviousPage={canPreviousPage}
            previousPage={() => setCurrentPage(currentPage - 1)}
            canNextPage={canNextPage}
            nextPage={() => setCurrentPage(currentPage + 1)}
            gotoPage={gotoPage}
            pageIndex={currentPage - 1}
          />
        </>
      ) : (
        <div className="emptyProductList">
          <p>We couldn't find any matches!</p>
          <p>Please adjust your search criteria and try again.</p>
        </div>
      )}
    </>
  );
};

export default Product;
