import { useRef, useContext } from "react";
import Card from "../ui/Card";
import Countdown from "../Countdown";
import { LoadingContext } from "../../pages/MainLayout";

const TrendingProducts = () => {
  const { data } = useContext(LoadingContext);
  const trendingRef = useRef(null);

  return (
    <>
      <Countdown />
      <div ref={trendingRef} style={{ marginBottom: "15px" }}></div>
      {data?.trending && data.trending.length > 0 && (
        <>
          <section id="trending" className="title">
            <h1>Hot Deal On Sales</h1>
            <h2>The new modern design summer collection</h2>
          </section>
          <section className="Featured-products">
            <div className="product-container">
              {data.trending.map((item) => {
                return <Card key={item._id} {...item} />;
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default TrendingProducts;
