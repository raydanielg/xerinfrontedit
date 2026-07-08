"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useCallback, useRef } from "react";
import testimonialsData from "./testimonialsData";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import SingleItem from "./SingleItem";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="overflow-hidden py-16.5 bg-gradient-to-b from-transparent to-[#f9f7f7] dark:to-darkTheme-body-bg">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-2 font-medium text-[#f47524] bg-[#f47524]/10 px-4 py-1.5 rounded-full mb-3">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" stroke="#f47524" strokeWidth="1.5"/>
                  <path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="#f47524" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Customer Stories
              </span>
              <h2 className="font-semibold text-2xl xl:text-heading-5 text-dark dark:text-darkTheme-emphasis-text">
                Trusted by Buyers and Sellers
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button onClick={handlePrev} className="swiper-button-prev !static !h-10 !w-10 !rounded-xl bg-white dark:bg-darkTheme-secondary-bg text-dark dark:text-darkTheme-body-color border border-gray-300 dark:border-darkTheme-border-color m-0 flex items-center justify-center hover:bg-[#f47524] hover:text-white hover:border-[#f47524] transition-all duration-200 shadow-sm">
                <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.4881 4.43057C15.8026 4.70014 15.839 5.17361 15.5694 5.48811L9.98781 12L15.5694 18.5119C15.839 18.8264 15.8026 19.2999 15.4881 19.5695C15.1736 19.839 14.7001 19.8026 14.4306 19.4881L8.43056 12.4881C8.18981 12.2072 8.18981 11.7928 8.43056 11.5119L14.4306 4.51192C14.7001 4.19743 15.1736 4.161 15.4881 4.43057Z" fill=""/>
                </svg>
              </button>

              <button onClick={handleNext} className="swiper-button-next !static !h-10 !w-10 !rounded-xl bg-white dark:bg-darkTheme-secondary-bg text-dark dark:text-darkTheme-body-color border border-gray-300 dark:border-darkTheme-border-color m-0 flex items-center justify-center hover:bg-[#f47524] hover:text-white hover:border-[#f47524] transition-all duration-200 shadow-sm">
                <svg className="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z" fill=""/>
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            ref={sliderRef}
            slidesPerView={3}
            spaceBetween={24}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonialsData.map((item, key) => (
              <SwiperSlide key={key}>
                <SingleItem testimonial={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
