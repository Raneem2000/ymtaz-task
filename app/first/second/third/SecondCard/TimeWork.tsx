import ArrowLeft from "@/assets/Icon/arrow-left";
import ArrowRight from "@/assets/Icon/arrow-right";
import React from "react";

const TimeWork = () => {
  const timeWork = [
    { id: "11:00 ص" },
    { id: "10:30 ص" },
    { id: "10:30 ص" },
    { id: "10:30 ص" },
    { id: "10:30 ص" },
  ];
  return (
    <div className="flex justify-evenly items-center gap-2">
      <ArrowLeft />
      <div className=" bg-backGround rounded-md w-28 h-60  text-center ">
        <div className="bg-primary text-white rounded-md p-1.5 ">
          الاثنين 02/03
        </div>
        <div className="mt-2 text-white bg-primary m-3 rounded-full">
          10:30 ص
        </div>
        {timeWork.map((item) => (
          <div className="mt-2 text-gray2 hover:text-white hover:bg-primary hover:m-3 hover:rounded-full">
            {item.id}
          </div>
        ))}
      </div>
      <div className=" bg-backGround rounded-md w-28 h-60  text-center ">
        <div className="bg-primary text-white rounded-md p-1.5 ">غدا</div>
        <div className="mt-2 text-white bg-primary m-3 rounded-full">
          10:30 ص
        </div>
        {timeWork.map((item) => (
          <div className="mt-2 text-gray2 hover:text-white hover:bg-primary hover:m-3 hover:rounded-full">
            {item.id}
          </div>
        ))}{" "}
      </div>
      <div className=" bg-backGround text-white rounded-md w-28 h-60  text-center ">
        <div className="bg-primary rounded-md p-1.5 ">اليوم</div>
        <div className="mt-16 text-gray2">لا يوجد مواعيد متاحة</div>
      </div>
      <ArrowRight />
    </div>
  );
};

export default TimeWork;
