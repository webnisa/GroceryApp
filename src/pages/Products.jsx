import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";
import Card from "../components/Card";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="w-full h-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-1.5 md:gap-3 lg:gap-3 p-3 md:p-6 lg:p-8 pt-3">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}{" "}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
