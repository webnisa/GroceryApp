import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { products } from "../data/products";

const SearchBar = () => {
  const { search, setSearch } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handelClick = () => {
    if (location.pathname !== "/search") {
      navigate("/search");
    }
  };

  const handelChange = (e) => {
    setSearch("");
    if (location.pathname === "/search") {
      setSearch(e.target.value);
    }
  };

  const handelSearch = () => {
    if (search.trim() !== "") {
      navigate("/SearchResult");
    }
  };

  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      handelSearch();
    }
  };

  const suggestions = products
    .filter((items) => items.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 6);

  return (
    <div className="relative flex items-center w-60 md:w-100 lg:w-150 h-10 border border-gray-300 rounded-xl px-3 bg-gray-100">
      <FaSearch className="text-gray-500 text-xl" />
      <input
        type="text"
        placeholder="Search for products..."
        readOnly={location.pathname !== "/search"}
        value={search}
        onClick={handelClick}
        onChange={(e) => {
          handelChange(e);
        }}
        onKeyDown={(e) => {
          handelKeyDown(e);
        }}
        className="flex-1 ml-2 outline-none cursor-pointer"
      />
      {search.trim() !== "" && location.pathname === "/search" && suggestions.length > 0 && (
        <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-xl shadow-lg z-50 overflow-hidden">
          {suggestions.map((items) => (
            <div key={items.id} className="m-2" onClick={()=>{
              setSearch(items.name)
              handelSearch();
            }}>
              {items.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
