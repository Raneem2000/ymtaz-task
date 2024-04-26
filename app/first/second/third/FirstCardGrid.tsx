import React from "react";
import Crown from "@/assets/Icon/crown";
import Frame from "@/assets/Icon/frame";
import Frame5 from "@/assets/Icon/frame5";
import Group from "@/assets/Icon/group";
import NahidPhoto from "@/assets/Icon/nagid-photo";
import Star from "@/assets/Icon/star";
import StarLight from "@/assets/Icon/star-light";
import VerfiyIcon from "@/assets/Icon/verfiy";

const FirstCardGrid = () => {
  const stars = Array.from({ length: 5 });
  return (
    <div>
      <div className="bg-white m-5 p-4 rounded shadow">
        <div className=" p-2">
          <h5 className="mb-1 text-text_blue text-lg font-bold flex flex-col items-end  ">
            المعلومات الشخصية
          </h5>
        </div>
        <div className="flex items-center  justify-end p-2 gap-4">
          <div className="flex  flex-col items-end gap-2">
            <h3 className="text-text_blue">عبد العزيز عبد الرحمن الربعي</h3>
            <span className="inline-flex items-center text-text_blue">
              <Crown />
              مستشار قانوني
            </span>
            <div className="flex text-sm gap-4 text-gray2">
              <a className="text-text_blue font-semibold">اظهر التقييمات</a>
              <span>التقييم العام من 154 من العملاء</span>
              <span>5.00</span>
              <Star />
            </div>
          </div>
          <div className="relative">
            <NahidPhoto />
            <div className="absolute top-0 right-0 p-2">
              <VerfiyIcon />{" "}
            </div>
          </div>
        </div>
        <div className="w-[400px] h-[100px] text-sm text-gray2 bg-backGround rounded-tl-3xl rounded-br-3xl ">
          <div className="flex gap-1 p-1 ">
            <span>
              تميز الاستشاري بالاحترافية والخبرة العالية في المسائل القانونية
            </span>
            <Group />
          </div>
          <div className="flex justify-between p-4 gap-2">
            <span>الخميس 3 فبراير 2024</span>
            <span>Abdullah Faleh</span>
            <StarLight />
          </div>
        </div>
      </div>

      {/* second */}
      <div className="bg-white m-5 p-4 rounded shadow">
        <div className=" p-2">
          <h5 className="mb-1 text-text_blue text-lg font-bold flex flex-col items-end">
            النبذة التعريفية
          </h5>
          <span className="text-sm flex items-end text-gray2">
            استشاري القانون عبد العزيز عبد الرحمن الربعي وهو محام مرخص في
            المملكة العربية السعودية، يحمل درجة البكالوريوس في القانون. يتمتع
            بخبرة تبلغ سنتين في مجال ممارسة القانون{" "}
          </span>
        </div>
      </div>

      {/* second */}
      <div className="bg-white m-5 p-4 rounded shadow">
        <div className="p-2">
          <h5 className="mb-1 text-text_blue text-lg font-bold flex flex-col items-end ">
            :تقييم العملاء
          </h5>
          <div className="flex justify-between gap-4  text-gray2">
            <div className="flex flex-col items-center">
              <Frame5 />
              <div>تقييم الاستشاري</div>
            </div>
            <div className="flex flex-col items-center">
              <Star />
              <div>تقييم المنصة</div>
            </div>
            <div className="flex flex-col items-center">
              <Star />
              <div>التقييم العام</div>
              <span>من 154 من العملاء</span>
            </div>
          </div>
        </div>
      </div>
      {/* fourht */}
      <div className="bg-white m-5 p-4 shadow">
        <div className="p-2">
          <div className="flex justify-between gap-4 text-gray2">
            <div className="flex flex-col gap-2">
              <Frame />
              <h5>تقييم الاستشاري</h5>
            </div>
            <div className="flex flex-col justify-end items-end gap-2">
              <StarLight />
              <span className="text-sm">التقييم العام</span>
              <span>
                “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية
                والفقهية
              </span>
              <span>الخميس 3 فبراير 2024</span>
            </div>
          </div>
        </div>
      </div>
      {/* fourht */}
      <div className="bg-white m-5 p-4 shadow">
        <div className="p-2">
          <div className="flex justify-between gap-4 text-gray2">
            <div className="flex flex-col gap-2">
              <Frame />
              <h5>تقييم الاستشاري</h5>
            </div>
            <div className="flex flex-col justify-end items-end gap-2">
              <div className="flex justify-center">
                {stars.map((_, index) => (
                  <div key={index}>
                    <StarLight />
                  </div>
                ))}
              </div>
              <span className="text-sm">التقييم العام</span>
              <span>
                “ استشارى ممتاز ومحترف وواعى بشكل كبير بمختلف القضايا القانونية
                والفقهية
              </span>
              <span>عبد الله فالح </span>
              <span>الخميس 3 فبراير 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstCardGrid;
