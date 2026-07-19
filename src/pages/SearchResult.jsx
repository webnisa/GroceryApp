import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";
import { products } from "../data/products";
import Card from "../components/Card";

const SearchResult = () => {
  const { search } = useContext(AppContext);

  const filteredProducts = products.filter((items) =>
    items.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      <main className="flex-1">

        {filteredProducts.length > 0 ? (

          <div className="w-full h-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-1.5 md:gap-3 lg:gap-3 p-3 md:p-6 lg:p-8 pt-3">

            {filteredProducts.map((items) => (
              <Card
                key={items.id}
                product={items}
              />
            ))}

          </div>

        ) : (

          <div className="text-center mt-20">

            <h1 className="text-4xl font-bold text-gray-500">
              No Products Found 
            </h1>

          </div>

        )}

      </main>

      <Footer />

    </div>
  );
};

export default SearchResult;