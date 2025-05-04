"use client";
import Image from "next/image";
import React from "react";

interface ISocialMediaIcon {
    link: string;
    image: string;
    name: string;
}

const socialMediaLinks: ISocialMediaIcon[] = [
    { image: "/images/instagram.svg", link: "https://instagram.com", name: "Instagram" },
    { image: "/images/telegram.svg", link: "https://instagram.com", name: "Instagram" },
    { image: "/images/twitter.svg", link: "https://instagram.com", name: "Instagram" },

    // Add more items here...
];

const SocialMediaIcon = ({ name, image, link }: ISocialMediaIcon) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="bg-[#232121] p-2 rounded-lg hover:opacity-80 transition w-[50px] h-[50px] flex items-center justify-center">
            <Image src={image} alt={`${name} icon`} width={24} height={24} />
        </a>
    );
};

const SocialMedia = () => {
    return (
        <>
            <hr className=" h-0.5 border-t-0 bg-[#313131]" />
            <div className="my-12 flex  items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-[#]">Logo</h2>
                <div className="flex gap-4">
                    {socialMediaLinks.map((social, index) => (
                        <SocialMediaIcon key={index} {...social} />
                    ))}
                </div>

            </div>
            <hr className=" h-0.5 border-t-0 bg-[#313131]" />

        </>
    );
};

interface IheadingAndPara {
    heading: string;
    paraList: string[];
}

// Define the functional component
const HeadingAndParaComponent = ({ heading, paraList }: IheadingAndPara) => {
    return (
        <div>
            <h2 className={'text-[#075199] text-base lg:text-lg pb-3 lg:pb-6 font-semibold'}> {heading}</h2>
            <ul>
                {paraList.map((para, index) => (
                    <li key={index} className="text-[#FFFFFF] text-xs lg:text-sm font-normal py-1">{para}</li>
                ))}
            </ul>
        </div>
    );
};

// Wrap with React.memo
const HeadingAndPara = React.memo(HeadingAndParaComponent);

const blockchainlist: string[] = [
    "Tokenization",

    "DApp",

    "Smart Contract",

    "NFT Marketplace",

    "Crypto Wallet",

    "Crypto Exchange"
]

const Footer = () => {
    return (
        <footer className="py-6 ">
            <SocialMedia />
            <div className={'p-1 lg:p-3 w-full flex flex-col  lg:flex-row justify-between '}>
            <HeadingAndPara heading={"Blockchain"} paraList={blockchainlist} />
            <HeadingAndPara heading={"Blockchain"} paraList={blockchainlist} />
            <HeadingAndPara heading={"Blockchain"} paraList={blockchainlist} />

            <HeadingAndPara heading={"Blockchain"} paraList={blockchainlist} />



            </div>
            <hr className=" h-0.5 border-t-0 bg-[#313131]" />

        </footer>
    );
};

export default Footer;
