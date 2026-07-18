import heroSectionImg from "../assets/images/main.png";
import ShopNow from "./ShopNow";

const HeroSection = () => {
  return (
    <div className="w-full px-3 lg:px-7">
      <div className="relative h-40 md:h-52 lg:h-65 rounded-2xl overflow-hidden">
        <img
          src={heroSectionImg}
          alt="Hero Section"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-emerald-900/70"></div>

        <div className="absolute top-4 left-5 md:left-10 lg:left-20 z-10 text-white font-bold">
          <p className="text-xs md:text-sm lg:text-xl mb-3">
            SUMMER HARVEST
          </p>

          <h1 className="text-xl md:text-3xl lg:text-5xl font-serif">
            Fresh Product,
            <br />
            delivered today
          </h1>

          <div className="mt-1 md:mt-2 lg:mt-2">
            <ShopNow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;