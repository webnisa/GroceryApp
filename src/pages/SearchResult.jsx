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

          <div className="grid grid-cols-6 gap-4 p-6">

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