// src/components/CountdownTimer.js
import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(initialTime) - +new Date();
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
    <div className="flex gap-2 font-semibold text-2xl">
      <div className="flex flex-col justify-center items-center">
        <span className="text-xs">Days</span>
        <span>{timeLeft.days || "0"}</span>
      </div>
      :
      <div className="flex flex-col justify-center items-center">
        <span className="text-xs">Hours</span>
        <span>{timeLeft.hours || "0"}</span>
      </div>
      :
      <div className="flex flex-col justify-center items-center">
        <span className="text-xs">Minutes</span>
        <span>{timeLeft.minutes || "0"}</span>
      </div>
      :
      <div className="flex flex-col justify-center items-center">
        <span className="text-xs">Seconds</span>
        <span>{timeLeft.seconds || "0"}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
