import React from "react";
import { ROUTES } from "@/constants/links";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="group bg-white dark:bg-darkTheme-secondary-bg rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-darkTheme-border-color m-1 relative">
      <div className="absolute top-4 right-4 text-[#f47524]/10">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
        </svg>
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.99984 1.66675L12.259 6.88341L17.9081 7.47508L13.634 11.5251L14.724 17.0584L9.99984 14.3417L5.27569 17.0584L6.36569 11.5251L2.09155 7.47508L7.74069 6.88341L9.99984 1.66675Z" fill="#f47524"/>
          </svg>
        ))}
      </div>

      <p className="text-dark-4 dark:text-darkTheme-body-color mb-6 leading-relaxed">
        &ldquo;{testimonial.review}&rdquo;
      </p>

      <a href={ROUTES.contact} className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-darkTheme-border-color">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#f47524]/20">
          <Image
            src={testimonial.authorImg}
            alt={testimonial.authorName}
            className="w-full h-full object-cover"
            width={50}
            height={50}
          />
        </div>

        <div>
          <h3 className="font-semibold text-dark dark:text-darkTheme-emphasis-text">
            {testimonial.authorName}
          </h3>
          <p className="text-custom-sm text-[#f47524] font-medium">
            {testimonial.authorRole}
          </p>
        </div>
      </a>
    </div>
  );
};

export default SingleItem;
