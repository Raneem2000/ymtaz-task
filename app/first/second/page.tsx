import Crown from "@/assets/Icon/crown";
import NahidPhoto from "@/assets/Icon/nagid-photo";
import StarLight from "@/assets/Icon/star-light";
import VerfiyIcon from "@/assets/Icon/verfiy";
import React from "react";
import TopBar from "../TopBar";
import Title from "../Title";
import Search from "../Search";
import Link from "next/link";
const SecondPage = () => {
  const cards = Array.from({ length: 6 });
  return (
    <>
      <TopBar />
      <Title text="محامي مرخص" />
      <Search />
      <div className="mx-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch">
          {cards.map((_, index) => (
            <Link key={index} href="/first/second/third">
              <div className="w-[250px] bg-white m-8 pt-1 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
                <div className="items-center flex justify-center mt-8 mb-2">
                  <NahidPhoto />
                </div>
                <div className="flex flex-col gap-2 items-center p-3 hover:text-white text-text_blue">
                  <div className="flex justify-end w-full items-center gap-1">
                    <h5 className="mb-1  font-bold">
                      عبد العزيز عبد الرحمن الربعي
                    </h5>
                    <VerfiyIcon />
                  </div>{" "}
                  <div className="flex justify-between items-center gap-2">
                    <Crown />
                    <span className="font-serif text-gray2">مستشار قانوني</span>
                  </div>{" "}
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-sm ">4.56 (35 مراجعة)</span>
                    <StarLight />
                  </div>{" "}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondPage;
