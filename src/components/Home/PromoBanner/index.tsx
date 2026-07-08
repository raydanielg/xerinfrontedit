import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/links";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F5F7] to-[#e8eaef] py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5 shadow-sm">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#f47524]/5 rounded-full blur-3xl" />
          <div className="max-w-[550px] w-full relative z-10">
            <span className="inline-flex items-center gap-2 font-semibold text-sm text-[#f47524] bg-[#f47524]/10 px-4 py-1.5 rounded-full mb-3">
              Shop Across Africa
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              Trusted Products, Fast Delivery
            </h2>

            <p className="text-dark-4 max-w-md">
              Discover products from trusted sellers with secure payments and
              Xerin Logistics order tracking from checkout to delivery.
            </p>

            <Link
              href={ROUTES.shop}
              className="inline-flex items-center gap-2 font-medium text-custom-sm text-white bg-gradient-to-r from-[#f47524] to-[#e06015] py-3 px-9.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-7.5"
            >
              Explore Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <Image
            src="/images/promo/promo-01.png"
            alt="Xerin Market shopping promotion"
            className="absolute bottom-0 right-4 lg:right-26 -z-1 drop-shadow-xl"
            width={274}
            height={350}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#DBF4F3] to-[#c8eceb] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 shadow-sm hover:shadow-md transition-shadow duration-200">
            <Image
              src="/images/promo/promo-02.png"
              alt="Sell on Xerin Market"
              className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
              width={241}
              height={241}
            />

            <div className="text-right">
              <span className="block text-lg text-dark mb-1.5">
                Sell on Xerin Market
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Grow Your Store Online
              </h2>

              <p className="font-semibold text-custom-1 text-teal">
                Reach buyers across Africa
              </p>

              <Link
                href={ROUTES.sellerRegister}
                className="inline-flex items-center gap-2 font-medium text-custom-sm text-white bg-gradient-to-r from-teal to-teal-dark py-2.5 px-8.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-9"
              >
                Start Selling
              </Link>
            </div>
          </div>

          <div className="relative z-1 overflow-hidden rounded-2xl bg-gradient-to-br from-[#FFECE1] to-[#ffdcc5] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 shadow-sm hover:shadow-md transition-shadow duration-200">
            <Image
              src="/images/promo/promo-03.png"
              alt="Xerin Logistics order tracking"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={200}
              height={200}
            />

            <div>
              <span className="block text-lg text-dark mb-1.5">
                Xerin Logistics
              </span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Track <span className="text-[#f47524]">Every</span> Order
              </h2>

              <p className="max-w-[285px] text-custom-sm text-dark-4">
                Follow delivery progress and order updates from dispatch to
                doorstep.
              </p>

              <Link
                href={ROUTES.trackOrder}
                className="inline-flex items-center gap-2 font-medium text-custom-sm text-white bg-gradient-to-r from-[#f47524] to-[#e06015] py-2.5 px-8.5 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-7.5"
              >
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
