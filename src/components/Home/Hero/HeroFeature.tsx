import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Trusted Sellers",
    description: "Verified vendors across Africa",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Xerin Logistics",
    description: "Real-time delivery tracking",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Secure Payments",
    description: "Mobile money, cards, and bank options",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Buyer Support",
    description: "Help with orders, returns, and refunds",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
<<<<<<< HEAD
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
        {featureData.map((item, key) => (
          <div
            className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            key={key}
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[#f47524]/10">
              <Image src={item.img} alt="icons" width={22} height={23} className="opacity-80" />
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base text-dark">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-dark-4">
                {item.description}
              </p>
=======
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4 p-4 rounded-lg bg-white/60 dark:bg-darkTheme-card/60 backdrop-blur-sm" key={key}>
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-blue/10 flex items-center justify-center">
              <Image src={item.img} alt="icons" width={24} height={24} className="object-contain" />
            </div>

            <div>
              <h3 className="font-medium text-base text-dark dark:text-white">{item.title}</h3>
              <p className="text-sm text-dark-4 dark:text-darkTheme-secondary-muted">{item.description}</p>
>>>>>>> 4044c5749eb3817622eebf17cca0439cd7d59baf
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
