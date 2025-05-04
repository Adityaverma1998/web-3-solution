"use client";

import React from "react";

const HeroSectionComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8">
      <h2 className="text-4xl lg:text-6xl font-bold leading-[25px] lg:leading-[100px] ">Build with Compliance</h2>
      <h2 className="text-4xl lg:text-6xl font-bold">Build with Confidence</h2>
      <p className="mt-4 text-xl max-w-xl font-medium">
        Creating some game-changing products that invoke a sense of excitement,
        closeness, and satisfaction for users.
      </p>
    </div>
  );
};

export default React.memo(HeroSectionComponents);
