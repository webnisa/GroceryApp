import Header from "../components/Header";
import HeroSection from "../components/Herosection";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
  const { search } = useContext(AppContext);

  return (
    <>
      <Header />

      <HeroSection />

      <CategoryFilter />

      <ProductCard />

      <Footer />
    </>
  );
}

export default Home;
