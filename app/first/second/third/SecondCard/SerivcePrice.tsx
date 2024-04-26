"use client";

import { SERVICE_PRICE } from "@/app/Api/Api";
import { Axios } from "@/app/Api/Axios";
import Loading from "@/app/Loading";
import { ReactQueryProvider } from "@/app/react-query-provider";
import StarLight from "@/assets/Icon/star-light";
import React from "react";
import { useQuery } from "react-query";

type Props = {
  slug: string;
  min_price: number;
  intro: string;
};
const SerivcePrice = () => {
  const { data, isLoading } = useQuery({
    queryFn: () => Axios.get(`${SERVICE_PRICE}`),
    queryKey: ["services"],
  });
  console.log(data?.data.data.lawyer.services);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        data?.data.data.lawyer.services.map((service: Props) => (
          <div className="bg-backGround mx-10 p-2 my-8 rounded shadow">
            <div className="">
              <div className="flex justify-between items-center gap-1">
                <div className="flex flex-col gap-2 w-44 ">
                  <span className="text-text_blue font-semibold">
                    سعر الخدمة
                  </span>
                  <span className="text-green">{service.min_price} ر.س</span>
                </div>
                <div className="flex flex-col gap-2 justify-end items-end">
                  <span className="font-bold text-text_blue inline-flex gap-1 ">
                    {service.slug}
                    <StarLight />
                  </span>
                  <span className="text-sm text-gray2">{service.intro}</span>
                </div>
              </div>
              <button className="mt-4 p-2 rounded-xl bg-primary text-white font-semibold w-full">
                طلب الخدمة
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SerivcePrice;
