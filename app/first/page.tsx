import Icon1 from "@/assets/Icon/icon1";
import Icon2 from "@/assets/Icon/icon2";
import Icon3 from "@/assets/Icon/icon3";
import Icon4 from "@/assets/Icon/icon4";
import Icon5 from "@/assets/Icon/icon5";
import Icon6 from "@/assets/Icon/icon6";
import React from "react";
import Title from "./Title";
import Search from "./Search";
import TopBar from "./TopBar";
import Link from "next/link";

const FirstPage = () => {
  return (
    <>
      <TopBar />
      <Title text="الدليل الرقمي" />
      <Search />
      <div className="mx-24">
        <div className="grid grid-cols-1 text-black2 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-stretch">
          <Link href="/first/second">
            <div className="w-60 bg-white m-5 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
              <Icon2 />
              <div className="flex flex-col gap-1 items-center pb-5">
                <h5 className="mb-1 text-lg font-bold ">محكم</h5>
                <span className="text-sm text-gray2 hover:text-white">متوفر عدد 17</span>
              </div>
            </div>
          </Link>
          <Link href="/first/second">
            <div className="w-60 bg-white m-5 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
              <Icon3 />
              <div className="flex flex-col gap-1 items-center pb-5">
                <h5 className="mb-1 text-lg font-bold ">محامي مرخص</h5>
                <span className="text-sm text-gray2 ">متوفر عدد 17</span>
              </div>
            </div>
          </Link>

          <Link href="/first/second">
            <div className="w-60 bg-white m-5 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
              <Icon1 />
              <div className="flex flex-col gap-1 items-center pb-5">
                <h5 className="mb-1 text-lg font-bold ">موثق</h5>
                <span className="text-sm text-gray2 ">متوفر عدد 17</span>
              </div>
            </div>
          </Link>

          <Link href="/first/second">
            <div className="w-60 bg-white m-5 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
              <Icon6 />
              <div className="flex flex-col gap-1 items-center pb-5">
                <h5 className="mb-1 text-lg font-bold ">مأذون أنكحة</h5>
                <span className="text-sm text-gray2 ">متوفر عدد 17</span>
              </div>
            </div>
          </Link>

          <Link href="/first/second">
            <div className="w-60 bg-white m-5 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
              <Icon5 />
              <div className="flex flex-col gap-1 items-center pb-5">
                <h5 className="mb-1 text-lg font-bold ">ناظر وقف</h5>
                <span className="text-sm text-gray2 ">متوفر عدد 17</span>
              </div>
            </div>
          </Link>

          <Link href="/first/second">
            <div className="w-60 bg-white m-5 rounded-xl shadow-lg hover:bg-my-gradient hover:text-white delay-75">
              <Icon4 />
              <div className="flex flex-col gap-1 items-center pb-5">
                <h5 className="mb-1 text-lg font-bold ">باحث قانوني</h5>
                <span className="text-sm text-gray2 ">متوفر عدد 17</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FirstPage;
