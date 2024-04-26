"use client";
import React, { useState } from "react";
import TimeWork from "./TimeWork";
import SerivcePrice from "./SerivcePrice";

const SecondCard = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="bg-white m-5 p-4 rounded shadow">
        <div className=" p-2">
          <h5 className="mb-1 text-lg font-bold flex flex-col items-end text-text_blue">
            معلومات الحجز
          </h5>
        </div>
        <div className="flex justify-center gap-5 items-center text-gray2">
          {/* First h4 */}
          <h4
            className={`cursor-pointer ${
              activeIndex === 0
                ? "border-b-2  border-text_blue font-bold text-text_blue"
                : ""
            }`}
            onClick={() => handleClick(0)}
          >
            أوقات العمل
          </h4>
          {/* Second h4 */}
          <h4
            className={`cursor-pointer ${
              activeIndex === 1
                ? "border-b-2 border-text_blue font-bold text-text_blue"
                : ""
            }`}
            onClick={() => handleClick(1)}
          >
            أسعار الخدمات
          </h4>
        </div>
        <div className="border border-backGround  mb-8"></div>
        {/* price of serveces */}
        {activeIndex === 1 && <SerivcePrice />}
        {/* time of works */}
        {activeIndex === 0 && <TimeWork />}
      </div>
    </div>
  );
};

export default SecondCard;
