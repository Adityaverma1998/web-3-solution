"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import React from "react";

interface ICoinsWithname {
  image: string;
  name: string;
}

const CoinsWithname = React.memo(({ image, name }: ICoinsWithname) => {
  return (
    <div className=" p-[2px] rounded-xl bg-gradient-to-r from-[#313131b8] to-[#131313b8] min-w-[180px]">
      <div className="h-[60px] bg-black rounded-xl py-4 px-6 flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="text-white font-medium text-sm">{name}</p>
      </div>
    </div>
  );
});
CoinsWithname.displayName = "CoinsWithname";

const chains: ICoinsWithname[] = [
  { image: "/images/chains/arbitrum-arb-logo.svg", name: "Arbitrum" },
  { image: "/images/chains/base-chain.svg", name: "Base Chain" },
  { image: "/images/chains/bitcoin.svg", name: "Bitcoin" },
  { image: "/images/chains/bnb-bnb-logo.svg", name: "BNB" },
  { image: "/images/chains/ethereum-eth-logo.svg", name: "Ethereum" },
  { image: "/images/chains/polygon-matic-logo.svg", name: "Polygon" },
  { image: "/images/chains/solana-sol-logo.svg", name: "Solana" },
  { image: "/images/chains/sphere.png", name: "Sphere" },
  { image: "/images/chains/texture.jpg", name: "Texture" },
];

const CoinsMarquee = () => {
  return (
    <section className="py-10">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Supported Chains
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Et ornare vel ac.
        </p>
      </div>
      <Marquee pauseOnHover gradient={false} speed={40} direction="right"> 
        <div className="flex gap-6 px-4">
          {chains.map((coin) => (
            <CoinsWithname
              key={coin.name}
              image={coin.image}
              name={coin.name}
            />
          ))}
        </div>
      </Marquee>
      <div className={'py-4'}>
      <Marquee pauseOnHover gradient={false} speed={40} direction="left">
        <div className="flex gap-6 px-4">
          {chains.map((coin) => (
            <CoinsWithname
            
              key={coin.name}
              image={coin.image}
              name={coin.name}
            />
          ))}
        </div>
      </Marquee>
      </div>
    </section>
  );
};

export default CoinsMarquee;
