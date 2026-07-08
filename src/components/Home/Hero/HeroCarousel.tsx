"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/links";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[430px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-bold text-heading-3 sm:text-heading-1 bg-gradient-to-br from-[#f47524] to-[#e06015] bg-clip-text text-transparent">
                Xerin
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Market
                <br />
                Africa
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              Africa&apos;s Premier E-Commerce Marketplace
            </h1>

            <p className="text-dark-4">
              Connecting buyers, sellers, and Xerin Logistics across Africa
              through trusted digital commerce.
            </p>

            <Link
              href={ROUTES.shop}
              className="inline-flex items-center gap-2 font-medium text-white text-custom-sm rounded-xl bg-gradient-to-r from-[#f47524] to-[#e06015] py-3 px-9 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-10"
            >
              Shop Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/hero/hero-01.png"
              alt="Xerin Market shopping experience"
              width={351}
              height={358}
              className="drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[430px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-bold text-heading-3 sm:text-heading-1 bg-gradient-to-br from-[#f47524] to-[#e06015] bg-clip-text text-transparent">
                Sell
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Across
                <br />
                Africa
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              Grow Your Business With Xerin Market
            </h1>

            <p className="text-dark-4">
              List products, manage orders, and reach customers across African
              markets with a modern seller experience.
            </p>

            <Link
              href={ROUTES.sellerRegister}
              className="inline-flex items-center gap-2 font-medium text-white text-custom-sm rounded-xl bg-gradient-to-r from-[#f47524] to-[#e06015] py-3 px-9 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-10"
            >
              Start Selling
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <div className="flex-shrink-0">
            <Image
              src="/images/hero/hero-03.png"
              alt="Sell on Xerin Market"
              width={351}
              height={358}
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
