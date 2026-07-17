import heroSectionImg from "../assets/images/main.png";
import ShopNow from "./ShopNow";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-65  pl-7 pr-8 relative upsideBox object-contain">
        <img src={heroSectionImg} className="w-full h-full rounded-2xl"></img>

        <div className="absolute top-4 left-20 text-white z-100 font-bold ">
          <p className="text-xl mb-3">SUMMER HARVEST</p>
          <h1 className="text-5xl font-serif">Fresh Product, 
            <br></br>
            delivered today</h1>
            <ShopNow/>
        </div>

      </div>
    </>
  );
};

export default HeroSection;
