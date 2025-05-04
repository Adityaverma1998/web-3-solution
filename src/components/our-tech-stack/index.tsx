'use client'


import React from "react";
import Image from "next/image";



interface techArray {
    expertise: string,
    techs: { img: string, toolTip: string }[],
}

interface TechStack {
    techStack: techArray[] | undefined,
}

const OurTechStack: React.FC<TechStack> = ({techStack}) => {


    return (<div className={'container w-full pt-28 relative tech-stack'}>
        {/*<div className={' flex justify-center'}>*/}
        {/*    <p className={'font-montserrat text-center text-sm uppercase tracking-[3px] trending-section-title'}>*/}
        {/*        <span>*/}
        {/*            Tech Stacks We Use*/}
        {/*        </span>*/}
        {/*    </p>*/}
        {/*</div>*/}

        <div className={'flex justify-center pb-8'}>
            <p className={'font-montserrat text-center text-lg md:text-[40px] font-bold w-full md:w-[80%] lg:w-[65%] break-words py-1 md:!leading-[48px]'}>
                <span>
                Our Technology Stack
                    </span>
            </p>
        </div>

        <div className={'w-full grid grid-cols-1 enquiry-card p-4 md:p-8'}>

            {techStack && techStack.map((item, index: number) => (
                <div className={'grid grid-cols-12 pt-2 pb-4'} key={index}>
                    <div className={'grid col-span-3 md:col-span-2 items-center justify-start '}>
                        <p className={'text-sm md:text-xl font-bold'}>
                            {item?.expertise}
                        </p>
                    </div>


                    <div className={'pl-2 md:pl-0 col-span-9 md:col-span-10'}>
                        <div className={'grid grid-cols-9 md:grid-cols-5 gap-y-2'}>
                            {item?.techs.map((imgTool: {img: string, toolTip: string}, index1: number) => (
                                <div className={'col-span-3 md:col-span-1 md:pb-2 w-full h-full pt-3 pb-4 px-3 flex justify-center items-center'} key={index1}>
                                    <div className={'w-[30px] h-[30px] flex flex-col gap-1 justify-center items-center'}>
                                        <Image src={`/images/techs/${imgTool?.img}`} alt={'idolIcon'} width={55} height={55} title={imgTool?.toolTip} className={'w-full h-full'} />
                                        <p className={'text-xs text-white text-center'}>
                                            {imgTool?.toolTip}
                                        </p>
                                    </div>
                                </div>
                            ))}


                        </div>
                        <div className={'bg-[#D9D9D933] mt-4 h-[1px] w-[100%] rounded-full'}></div>

                    </div>
                </div>
            ))}

        </div>

    </div>)
}


export default OurTechStack;