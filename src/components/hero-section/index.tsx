"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSectionComponents = () => {
  return (
      <div className="flex flex-col items-center justify-center text-center px-6 py-20 space-y-5 bg-transparent">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-[#FF1E47] via-[#F9D949] to-[#0D16FF] bg-clip-text text-transparent">
              Build with Compliance
          </h1>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-gray-200">
              Deploy with Confidence
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl">
              Launch your next blockchain project with security, compliance, and confidence built-in from day one.
          </p>

          <div className="mt-6">
              <Link href={`${process.env.NEXT_PUBLIC_CALENDLY_LINK}`} target={'_blank'}>
                  <button className="flex items-center gap-3 px-6 py-3 rounded-xl text-white bg-[#0D16FF] hover:bg-blue-700 transition duration-300 shadow-lg">
                      <Image src="/images/schedule_calendar.svg" width={20} height={20} alt="calendar" />
                      <span className="text-base font-semibold">
          Book a Free Strategy Call
        </span>
                  </button>
              </Link>
          </div>
      </div>
  );
};

export default React.memo(HeroSectionComponents);
