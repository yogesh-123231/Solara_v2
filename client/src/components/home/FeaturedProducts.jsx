import Card from "../ui/Card";
import { useContext } from "react";
import { LoadingContext } from "../../pages/MainLayout";

const FeaturedProducts = () => {
  const { data, loading, slowServer } = useContext(LoadingContext);

  return (
    <>
      {loading && !data?.featured?.length && (
        <section className="Featured-products">
          <div className="product-container">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                style={{
                  width: "250px",
                  height: "320px",
                  borderRadius: "12px",
                  background: "#f0f0f0",
                }}
              />
            ))}
          </div>
          {slowServer && (
            <p style={{ textAlign: "center", marginTop: "1rem", color: "#666" }}>
              Server is waking up, please wait...
            </p>
          )}
        </section>
      )}

      {data?.featured && data.featured.length > 0 && (
        <>
          <section id="featuredProd" className="title">
            <h1>Featured Products</h1>
            <h2>The new modern design summer collection</h2>
          </section>

          <section className="Featured-products">
            <div className="product-container">
              {data.featured.map((item) => {
                return <Card key={item._id} {...item} />;
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default FeaturedProducts;
