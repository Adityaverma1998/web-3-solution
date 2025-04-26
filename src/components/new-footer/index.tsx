'use client'


import Image from "next/image";
import React from "react";
import {useMediaQuery} from "@mui/material";
import Magnetic from "../magnetic";

const NewFooter = () => {

    const hidden = useMediaQuery('(max-width:768px)');
    const footerContent = [
        {
            title: 'Blockchain',
            sections: [
                "Tokenization",
                "DApp",
                "Smart Contract",
                "NFT Marketplace",
                "Crypto Wallet",
                "Crypto Exchange",
            ]
        },
        {
            title: 'Web Development',
            sections: [
                "Custom Software",
                "Laravel",
                "PHP Web",
                "Node.js",
                "ReactJs",
                "Python",
            ]
        },
        {
            title: 'App Development',
            sections: [
                "iOS",
                "Android",
                "Hybrid",
                "React Native",
                "Flutter",
            ]
        },
        {
            title: 'Hire Developers',
            sections: [
                "Ethereum",
                "Cryptocurrency",
                "Crypto MLM",
                "Crypto Exchange",
                "Cryptocurrency Wallet",
            ]
        },
        {
            title: 'AI Services',
            sections: [
                "Data Engineering",
                "Generative AI"
            ]
        }
    ]


    return (
        <div
            className={'p-[1rem] sm:p-[2rem] lg:px-[7rem] xl:px-[6rem] 2xl:px-[6rem] w-full flex flex-col gap-4 relative footer-gradient pt-10'}>


            <div className={'md:hidden grid grid-cols-2 gap-4 footer-image'}>

                <div className={'h-full w-full'}>

                    <Image src={'/images/footer-bucle-icon.svg'} alt={'buclélabs'} height={40} width={130}
                           className={'h-full w-full object-contain'}/>
                </div>

                <div className={'flex flex-col gap-1'}>
                    <div className={'flex gap-2 mb-2'}>
                        <Image src={'/images/phone-call1.svg'} alt={'call'} height={24} width={24}/>

                        <div className={'flex flex-col gap-0 justify-center items-center'}>
                            <p className={'text-xs'}>
                                +91-8766232671
                            </p>
                        </div>
                    </div>

                    <div className={'flex gap-2 mb-2'}>
                        <Image src={'/images/email1.svg'} alt={'buclélabs'} height={24} width={24}/>

                        <div className={'flex flex-col gap-0 justify-center items-center'}>
                            <p className={'text-xs'}>
                                info@bucle.dev
                            </p>
                        </div>
                    </div>
                </div>

                {footerContent.map((item: any, index: number) => (
                    <div className={'flex flex-col gap-2 items-start'}>
                        <p className={'font-semibold font-inter'}>
                            {item?.title}
                        </p>
                        <div className={'flex flex-col gap-1'}>
                            {item?.sections.map((section: string, i: number) => (
                                <p className={'text-xs'}>
                                    {section}
                                </p>
                            ))}
                        </div>

                    </div>
                ))}

                <div className={'flex-col gap-2'}>
                    <p className={'font-semibold'}>
                        Connect with Us
                    </p>

                    <div className={'flex gap-2'}>
                        <Magnetic>
                            <a href="https://in.linkedin.com/company/bucle-labs"
                               target="_blank">
                                <button>
                                    <Image src={'/images/linkedIn-color.svg'} color={'red'} width={24}
                                           height={24}
                                           alt={'linkedIn'}/>
                                    {/*<FacebookIcon />*/}
                                </button>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://x.com/BucleLabs01?t=v_nzQAYhKzaQ5iM89LFYuA&s=09"
                               target="_blank">
                                <button className={'pt-1'}>
                                    <Image src={'/images/x-color.svg'} width={21} height={21}
                                           alt={'twitter'}/>
                                </button>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.facebook.com/people/BucléLabs-Pvt-Ltd/61560747057524/?mibextid=JRoKGi"
                               target="_blank">
                                <button>
                                    <Image src={'/images/facebook-color.svg'} color={'red'} width={24}
                                           height={24}
                                           alt={'facebook'}/>
                                    {/*<FacebookIcon />*/}
                                </button>
                            </a>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://www.instagram.com/buclelabs?utm_source=qr&igsh=djNuNWF0MnRvcXZq"
                               target="_blank">
                                <button>
                                    <Image src={'/images/insta-color.svg'} width={24} height={24}
                                           alt={'instagram'}/>
                                </button>
                            </a>
                        </Magnetic>

                    </div>
                </div>


            </div>

            <div className={'w-full hidden md:flex gap-10 md:w-full md:justify-between'}>

                <div className={'w-full flex gap-4 items-end justify-between'}>

                    <div className={'h-full '}>
                        <Image src={'/images/footer-bucle-icon.svg'} alt={'buclélabs'} height={40} width={130}
                               className={'h-full w-full object-contain'}/>
                    </div>


                    <div className={'flex flex-col gap-2 md:gap-8 w-full'}>

                        <div className={'flex justify-between'}>

                            <p className={'text-xs md:text-base md:w-[75%] w-full'}>
                                At BucléLabs, we believe in the power of technology to bring people together, create
                                opportunities, and drive innovation.
                            </p>

                            <div className={'hidden md:flex flex-col gap-2'}>
                                <p className={'font-semibold'}>
                                    Connect with Us
                                </p>

                                <div className={'flex gap-1 justify-between'}>
                                    <Magnetic>
                                        <a href="https://in.linkedin.com/company/bucle-labs"
                                           target="_blank">
                                            <button>
                                                <Image src={'/images/linkedIn-color.svg'} color={'red'} width={24}
                                                       height={24}
                                                       alt={'linkedIn'}/>
                                                {/*<FacebookIcon />*/}
                                            </button>
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://x.com/BucleLabs01?t=v_nzQAYhKzaQ5iM89LFYuA&s=09"
                                           target="_blank">
                                            <button className={'pt-1'}>
                                                <Image src={'/images/x-color.svg'} width={21} height={21}
                                                       alt={'twitter'}/>
                                            </button>
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://www.facebook.com/people/BucléLabs-Pvt-Ltd/61560747057524/?mibextid=JRoKGi"
                                           target="_blank">
                                            <button>
                                                <Image src={'/images/facebook-color.svg'} color={'red'} width={24}
                                                       height={24}
                                                       alt={'facebook'}/>
                                                {/*<FacebookIcon />*/}
                                            </button>
                                        </a>
                                    </Magnetic>
                                    <Magnetic>
                                        <a href="https://www.instagram.com/buclelabs?utm_source=qr&igsh=djNuNWF0MnRvcXZq"
                                           target="_blank">
                                            <button>
                                                <Image src={'/images/insta-color.svg'} width={24} height={24}
                                                       alt={'instagram'}/>
                                            </button>
                                        </a>
                                    </Magnetic>
                                    {/*<Image src={'images/x-color.svg'} alt={'call'} height={30} width={20}/>*/}
                                    {/*<Image src={'images/facebook-color.svg'} alt={'call'} height={30} width={20}/>*/}
                                    {/*<Image src={'images/insta-color.svg'} alt={'call'} height={30} width={20}/>*/}
                                </div>
                            </div>

                        </div>


                        <div className={'flex flex-col md:flex-row gap-4'}>

                            <div className={'flex gap-2 mb-2'}>
                                <Image src={'/images/phone-call1.svg'} alt={'call'} height={24} width={24}/>

                                <div className={'flex flex-col gap-0 justify-center items-center'}>
                                    <p className={'text-xs'}>
                                        +91-8766232671
                                    </p>
                                </div>
                            </div>

                            <div className={'flex gap-2 mb-2'}>
                                <Image src={'/images/email1.svg'} alt={'buclélabs'} height={24} width={24}/>

                                <div className={'flex flex-col gap-0 justify-center items-center'}>
                                    <p className={'text-xs'}>
                                        info@bucle.dev
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {!hidden && <div
                className={'w-full grid grid-cols-2 md:flex md:justify-between border-t border-b border-[#FFFFFF29] py-6 footer-image'}>


                {footerContent.map((item: any, index: number) => (
                    <div className={'flex flex-col gap-2 items-start'}>
                        <p className={'font-semibold font-inter'}>
                            {item?.title}
                        </p>
                        <div className={'flex flex-col gap-1'}>
                            {item?.sections.map((section: string, i: number) => (
                                <p className={'text-xs'}>
                                    {section}
                                </p>
                            ))}
                        </div>

                    </div>
                ))}

            </div>}

            <div className={'py-2 flex justify-between'}>
                <p className={'text-xs'}>2021 All Right Reserved</p>

                <div className={'flex gap-1 md:gap-8'}>

                    <p className={'text-xs text-[#FFFFFFCC] cursor-pointer'}>Terms of Service</p>
                    <p className={'text-xs text-[#FFFFFFCC] cursor-pointer'}>Privacy Policy</p>
                    <p className={'text-xs text-[#FFFFFFCC] cursor-pointer'}>Cookies</p>
                </div>
            </div>


        </div>
    )
}


export default NewFooter;