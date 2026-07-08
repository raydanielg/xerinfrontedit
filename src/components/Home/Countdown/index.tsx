"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/constants/links";

const CountdownTimer = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="min-w-[72px] h-[72px] sm:h-20 sm:min-w-[80px] font-bold text-2xl sm:text-[32px] text-white rounded-xl flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/20 shadow-lg mb-2.5">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-custom-sm text-white/80 font-medium">{label}</span>
  </div>
);

const CounDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [mounted, setMounted] = useState(false);

  const deadline = "December, 31, 2026";

  const getTime = useCallback(() => {
    const time = Date.parse(deadline) - Date.now();
    if (time <= 0) return;
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  }, [deadline]);

  useEffect(() => {
    setMounted(true);
    getTime();
    const interval = setInterval(getTime, 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  if (!mounted) return null;

  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-1 rounded-2xl bg-gradient-to-br from-[#f47524] via-[#e06015] to-[#c04d0a] p-6 sm:p-10 lg:p-12 xl:p-16">
          <div className="absolute inset-0 bg-[url('/images/countdown/countdown-bg.png')] bg-cover bg-center opacity-20" />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="max-w-[480px] w-full text-center lg:text-left">
              <span className="inline-flex items-center gap-2 font-semibold text-sm text-white/90 bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18.3334C14.6024 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6024 1.66675 10 1.66675C5.39763 1.66675 1.66667 5.39771 1.66667 10.0001C1.66667 14.6025 5.39763 18.3334 10 18.3334Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M10 5.83337V10.8334L12.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Limited Time Offer
              </span>

              <h2 className="font-bold text-white text-2xl sm:text-3xl lg:text-[40px] lg:leading-[48px] mb-3">
                Daily Deals — Up to 50% Off
              </h2>

              <p className="text-white/80 text-sm sm:text-base mb-6">
                Shop top-rated products from verified sellers with secure checkout and Xerin Logistics delivery tracking.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                <CountdownTimer value={days} label="Days" />
                <span className="self-start mt-3 text-2xl sm:text-3xl font-bold text-white/60">:</span>
                <CountdownTimer value={hours} label="Hours" />
                <span className="self-start mt-3 text-2xl sm:text-3xl font-bold text-white/60">:</span>
                <CountdownTimer value={minutes} label="Minutes" />
                <span className="self-start mt-3 text-2xl sm:text-3xl font-bold text-white/60">:</span>
                <CountdownTimer value={seconds} label="Seconds" />
              </div>

              <Link
                href={ROUTES.shop}
                className="inline-flex items-center gap-2 font-semibold text-custom-sm text-[#f47524] bg-white py-3.5 px-10 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 mt-8"
              >
                Shop Deals Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#f47524" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>

            <div className="flex-shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl" />
              <Image
                src="/images/countdown/countdown-01.png"
                alt="Daily Deal - Xerin Market"
                width={380}
                height={350}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounDown;
