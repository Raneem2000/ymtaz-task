import React, { useState } from "react";
import FirstCardGrid from "./FirstCardGrid";
import SecondCard from "./SecondCard/SecondCard";
import TopBar from "../../TopBar";

const page = () => {
  return (
    <>
      <TopBar />
      <div className="grid grid-cols-1 md:grid-cols-2  justify-around items-stretch">
        {/* first card */}
        <SecondCard />
        {/* second card */}
        <FirstCardGrid />
      </div>
    </>
  );
};

export default page;
