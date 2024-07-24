import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MusicExclusive = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date(2024, 6, 12) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="grid col-span-2 md:col-span-3 ">
      <div className="music flex flex-col  md:flex-row items-center bg-black w-full ">
        <div className="flex basis-full  order-2 md:order-1 snap-start flex-col justify-center gap-2 items-start text-white text-xs pt-2 pl-2  md:pt-8 md:pl-8">
          <div className="flex justify-start items-center w-full gap-2 md:gap-5">
            <p className=" text-[#00FF66] my-3">Category</p>
          </div>
          <p className="justify-self-start text-2xl md:text-5xl">
            Enhance Your Music Experience
          </p>
          <div className="counterDown flex justify-between w-full pr-2  md:gap-3 md:justify-start ">
            <div className="days flex flex-col  justify-center items-center gap-0 bg-white rounded-full text-black w-16 h-16 my-3">
              <span className="rounded-full text-xs font-semibold">
                {timeLeft.hours || "0"}
              </span>
              <span className="rounded-full text-xs text-gray-600">hours</span>
            </div>
            <div className="hours flex flex-col  justify-center items-center gap-0 bg-white rounded-full text-black w-16 h-16 my-3">
              <span className="rounded-full text-xs font-semibold">
                {timeLeft.days || "0"}
              </span>
              <span className="rounded-full text-xs text-gray-600">days</span>
            </div>
            <div className="minutes flex flex-col  justify-center items-center gap-0 bg-white rounded-full text-black w-16 h-16 my-3">
              <span className="rounded-full text-xs font-semibold">
                {timeLeft.minutes || "0"}
              </span>
              <span className="rounded-full text-xs text-gray-600">
                minutes
              </span>
            </div>
            <div className="seconds flex flex-col  justify-center items-center gap-0 bg-white rounded-full text-black w-16 h-16 my-3">
              <span className="rounded-full text-xs font-semibold">
                {timeLeft.seconds || "0"}
              </span>
              <span className="rounded-full text-xs text-gray-600">
                seconds
              </span>
            </div>
          </div>
          <Link to={"/card"} className="items-center  mb-4 mx-auto md:mx-0">
            <button className="bg-[#00FF66] py-4 px-8 rounded">Buy now</button>
          </Link>
        </div>
        <div className="p-2 md:py-4 md:pr-8 order-1 md:order-2">
          {/* <img src="../src/img/bg-shadow1.jpg" alt="shadow" /> */}
          <img
            src="music-section.png"
            alt="iphone"
            className="rounded-full "
            style={{
              filter: "drop-shadow(-6px 17px 88px rgba(255, 255, 255, 0.5))",
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default MusicExclusive;
