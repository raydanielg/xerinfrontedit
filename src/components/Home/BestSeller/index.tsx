import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import shopData from "@/components/Shop/shopData";
import { ROUTES } from "@/constants/links";

const BestSeller = () => {
  return (
    <section className="overflow-hidden py-15">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark dark:text-darkTheme-body-color mb-1.5">
              <Image
                src="/images/icons/icon-07.svg"
                alt="icon"
                width={17}
                height={17}
              />
              Trending Now
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark dark:text-white">
              Best Sellers Across Africa
            </h2>
          </div>
          <Link
            href={ROUTES.shop}
            className="inline-flex font-medium text-custom-sm py-2.5 px-7 rounded-xl border border-gray-300 bg-white text-dark hover:bg-dark hover:text-white hover:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {shopData.slice(1, 7).map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>

        <div className="text-center mt-12.5">
          <Link
            href={ROUTES.shop}
            className="inline-flex font-medium text-custom-sm py-3 px-7 sm:px-12.5 rounded-xl border border-gray-300 bg-white text-dark hover:bg-dark hover:text-white hover:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
