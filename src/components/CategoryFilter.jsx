import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const categories = [
  "All",
  "Chocolates",
  "Sweets",
  "Biscuits",
  "Beverages",
  "Frozen Food",
  "Dairy",
  "Bakery",
  "Healthy Foods",
  "Personal Care",
  "Cleaning",
  "Beauty",
];

const CategoryFilter = () => {
  const { category, setCategory } = useContext(AppContext)
  return (
    <>
      <div className="flex gap-2 w-auto max-h-28 min-h-10 ml-3 md:ml-9 mt-3 lg:mt-5 flex-wrap">
        {categories.map((items) => (
          <button
            key={items}
            onClick={() => {
              setCategory(items);
            }}
            className={`rounded-4xl border-3 px-3 py-0.5 cursor-pointer lg:py-0 transition-all text-xs font-medium md:text-xl ${category === items ? "bg-emerald-700 text-white border-emerald-700" : "border-gray-300 text-gray-500"}`}
          >
            {items}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
