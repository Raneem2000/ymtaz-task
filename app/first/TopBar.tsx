"use client";
import Burger from "@/assets/Icon/burger";
import Logo from "@/assets/Icon/logo";
import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="flex text-sm  text-text_blue font-semibold items-center justify-between mx-7 my-3">
        <Burger />
        <ul className="hidden lg:flex md:flex sm:hidden gap-4 ">
          <li>سياسة الخصوصية</li>
          <li>أرقام التشغيل</li>
          <li>الدعم الفني </li>
          <li>اتصل بنا</li>
          <li>من نحن</li>
        </ul>
        <Logo />
      </div>
    </>
  );
};

export default TopBar;
