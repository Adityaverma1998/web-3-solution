"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSectionComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8">
      <h2 className="text-4xl lg:text-6xl font-bold leading-[25px] lg:leading-[100px] ">Build with Compliance</h2>
      <h2 className="text-4xl lg:text-6xl font-bold">Build with Confidence</h2>
        <div className="m-4">
            <Link href={`${process.env.NEXT_PUBLIC_CALENDLY_LINK}`} target={'_blank'}>
                <button
                    className={'flex gap-2 justify-center items-center py-2.5 px-4 w-full bg-[#0D16FF] rounded-[10px]'}>
                    <Image src={'/images/schedule_calendar.svg'} width={18} height={18}
                           alt={'placeholder'}/>
                    <span className={'text-sm'}>    Schedule on Calendly </span>
                </button>
            </Link>
        </div>
    </div>
  );
};

export default React.memo(HeroSectionComponents);
