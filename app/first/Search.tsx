import Filter from "@/assets/Icon/filter";
import SearchLogo from "@/assets/Icon/searchLogo";
import React from "react";

const Search = () => {
  return (
    <div className="bg-white border border-gray rounded-md px-4 py-2 text-backGround mx-auto my-5 max-w-[400px]">
      <div className="flex items-center justify-between">
        <Filter />
        <input
          type="text"
          className="flex-grow mx-2 bg-transparent border-none focus:outline-none text-gray2"
        />
        <SearchLogo />
      </div>
    </div>
  );
};

export default Search;
