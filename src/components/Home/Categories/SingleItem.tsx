import { Category } from "@/types/category";
import React from "react";
import { ROUTES } from "@/constants/links";
import Image from "next/image";

const SingleItem = ({ item }: { item: Category }) => {
  return (
<<<<<<< HEAD
    <a href={ROUTES.shop} className="group flex flex-col items-center">
      <div className="max-w-[130px] w-full bg-gradient-to-b from-[#F2F3F8] to-[#e8eaf2] h-32.5 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300">
        <Image src={item.img} alt="Category" width={82} height={62} className="group-hover:scale-110 transition-transform duration-300" />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark bg-gradient-to-r from-[#f47524] to-[#f47524] bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-[#f47524]">
=======
    <a href={ROUTES.shop} className="group flex flex-col items-center p-3 rounded-xl transition-all duration-300 hover:-translate-y-1">
      <div className="max-w-[130px] w-full bg-[#F2F3F8] dark:bg-darkTheme-secondary-bg h-32.5 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-blue/10 group-hover:shadow-lg">
        <Image src={item.img} alt={item.title} width={82} height={62} className="object-contain transition-transform duration-300 group-hover:scale-110" />
      </div>

      <div className="flex justify-center">
        <h3 className="inline-block font-medium text-center text-dark dark:text-darkTheme-body-color bg-gradient-to-r from-blue to-blue bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px] group-hover:text-blue">
>>>>>>> 4044c5749eb3817622eebf17cca0439cd7d59baf
          {item.title}
        </h3>
      </div>
    </a>
  );
};

export default SingleItem;
