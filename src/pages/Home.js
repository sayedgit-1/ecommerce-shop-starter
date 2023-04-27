import React, { useContext } from "react";
// import products context
import { ProductContext } from "../contexts/ProductContext";
// import compoents
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get Products from product context
  const { products } = useContext(ProductContext);

  // get only men's and women's clothing category
  const filteredProduct = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProduct.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
