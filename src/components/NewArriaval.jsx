import { Link } from "react-router-dom";
import "./BestSelling.css";

const NewArrival = () => {
  return (
    <div className="bestSelling">
      <div className="flex justify-start items-center gap-3 mb-3">
        <span className="w-5 h-10 bg-secondary inline-block rounded"></span>
        <span className="font-semibold text-secondary">Featured</span>
      </div>
      <div className="flex justify-between relative">
        <p className="font-semibold text-xl md:text-4xl">New Arrival</p>
      </div>

      <div className="new-arrival mt-10 mb-5 grid grid-cols-1 md:grid-rows-2 gap-2 md:grid-cols-[repeat(auto-fill,_minmax[200px,_1fr])]">
        <div className=" relative md:row-span-2  md:col-span-1 bg-black ">
          <img
            src="../src/img/ps5.png"
            alt="ps5"
            className="w-full h-full object-contain object-bottom"
          />
          <div className="flex flex-col gap-1 absolute bottom-1 left-1 right-1">
            <h2 className="font-semibold text-2xl  text-white ">
              PlayStation 5
            </h2>
            <p className="text-sm text-gray-300">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link to={"/product"} className="underline w-full text-white">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative h-44 md:col-start-2 md:col-end-4 bg-black w-full md:h-auto ">
          <div className="flex flex-col gap-1 absolute bottom-1 left-1 right-1">
            <h2 className="font-semibold text-2xl  text-white ">
              Women’s Collections
            </h2>
            <p className="text-sm text-gray-300">
              Featured woman collections that give you another vibe.
            </p>
            <Link
              to={"/category/womanfasion"}
              className="underline w-full text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative grid justify-items-center  md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3  bg-black ">
          <img
            src="../src/img/speakers.png"
            alt="ps5"
            className="w-1/2 h-auto self-center "
          />
          <div className="flex flex-col gap-1 absolute bottom-1 left-1 right-1">
            <h2 className="font-semibold text-2xl  text-white ">Speakers</h2>
            <p className="text-sm text-gray-300">Amazon wireless speakers.</p>
            <Link to={"/product"} className="underline w-full text-white">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="relative grid justify-items-center md:col-start-3 md:col-end-4 md:row-start-2 bg-black ">
          <img
            src="../src/img/perfume.png"
            alt="ps5"
            className="w-1/2 h-auto self-center"
          />
          <div className="flex flex-col gap-1 absolute bottom-1 left-1 right-1">
            <h2 className="font-semibold text-2xl  text-white ">Perfume</h2>
            <p className="text-sm text-gray-300">GUCCI INTENSE OUD EDP.</p>
            <Link
              to={"category/product"}
              className="underline w-full text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewArrival;
