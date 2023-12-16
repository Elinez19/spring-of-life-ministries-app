import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="w-fulll relative h-full border-none outline-none">
      <div className="absolute bottom-[20%] left-[20px] top-[50%] w-full max-w-[1250px] -translate-y-[50%] space-y-2 rounded-lg bg-[#ffffffa2] p-4 sm:max-w-[350px] sm:rounded-none sm:bg-transparent sm:p-0 md:left-[70px] lg:space-y-4">
        <h3 className="text-[24px] text-white lg:text-[26px]">{title}</h3>
        <h2 className="whitespace-nowrap text-[3px] font-extrabold leading-[1] text-white md:text-[30px] lg:text-[36px]">
          {mainTitle}
        </h2>

        {/* <h3 className="text-[24px] text-white">
          Spring of Life is a non-profit making Christian ministry
          <b className="text-[20px] md:text-[24px] lg:text-[30px]">{price}</b>
        </h3> */}
        <div className="inline-block cursor-pointer rounded-lg p-2  text-[14px] text-white md:text-[16px]">
          Spring of Life is a non-profit making Christian ministry
        </div>
      </div>

      <Image
        className="h-[100%] w-[100%] rounded-xl object-cover object-right md:h-auto md:object-left-bottom"
        src={img}
        alt="banner"
        width={8000}
        height={4000}
      />
    </div>
  );
};

export default Slide;
