import React, { useEffect, useState } from "react";

export default function Clock() {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const destination = new Date("oct 10,2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);
      if (destination < 0) {
        clearInterval(interval.current);
      } else {
        setDay(days);
        setHour(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(() => {
    countDown();
  }, []);
  return (
    <div className="flex justify-between items-center my-4 text-white  w-[100%] md:w-[80%]  ">
      <div className="flex flex-col justify-center items-center text-sm">
        <span>{day}</span>
        <p>Days</p>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col justify-center items-center text-sm md:text-xl">
        <span>{hour}</span>
        <p>Hours</p>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col justify-center items-center text-sm md:text-xl">
        <span>{minutes}</span>
        <p>Minutes</p>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex flex-col justify-center items-center text-sm md:text-xl">
        <span>{seconds}</span>
        <p>Seconds</p>
      </div>
      <span className="text-2xl">:</span>
    </div>
  );
}
