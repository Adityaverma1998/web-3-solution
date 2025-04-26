'use client'

import React, {Suspense} from 'react';
import Image from "next/image";
import Link from "next/link";
import PointsList from "@/components/elements/GetInTouchFormSidePoints";
import ContactUsForm from '../contact-us-form';
import NewFooter from '../new-footer';

const ContactUsCompleteForm = () => {
    return (<div className={'overflow-x-hidden'}>
            
            <div id={'get-in-touch'} className={'container'}>

                <div
                    className={'mt-8 w-full grid grid-cols-1 md:grid-cols-2 p-8 lg:p-18 xl:p-24 md:p-12 contactUsSection'}>
                    <div className={'elements-container-4'}></div>
                    <div className={'elements-container-3'}></div>
                    <div className={'elements-container-2'}></div>
                    <div className={'elements-container-1'}></div>

                    <div className={' pr-0 lg:pr-8 md:pr-8 flex flex-col justify-between relative'}>


                        <div className={'flex justify-start flex-col'}>
                            <p className={'font-montserrat text-xl font-extralight text-start uppercase tracking-[3px] pb-2 sectionTitle'}>
                        <span>
                           GET IN TOUCH
                        </span>
                            </p>

                            <p className={'font-montserrat text-2xl sm:text-3xl sm:leading-[1.2] md:text-4xl md:pr-20 font-extrabold w-full lg:w-full break-words pb-4 lg:pb-0 md:pb-0'}>
                                <span>Start A Conversation By Filling Out The Form</span>
                            </p>


                        </div>
                        <div className={'w-full'}>
                            <PointsList />
                        </div>
                        <div
                            className={'flex-col md:flex-row justify-between md:py-8 lg:gap-10 max-w-max'}>
                            <div className={'pb-2 flex gap-2 w-fit'}>
                                <div className={'rounded-lg border border-gray-400 p-2 flex flex-col'}>
                                    <Image src={'/images/team/omar.png'} className={'rounded-lg'} width={120}
                                           height={200} alt={'placeholder'}/>
                                    <p className={'font-montserrat font-semibold text-center pt-2'}>Omar Khan</p>
                                    <p className={'font-inter text-[#FFFFFF52] text-md text-start tracking-wide'}>Sales
                                       Manager</p>
                                </div>
                               
                                    <Image src={'/images/arrow-curve.svg'}
                                           className={'absolute right-0 invisible lg:visible lg:bottom-28 -rotate-3'}
                                           width={260}
                                           height={200} alt={'placeholder'}/>

                            </div>
                            {/* <Link href={process.env.NEXT_PUBLIC_CALENDLY_LINK!} target={'_blank'}> */}
                            <button
                                className={'flex gap-2 justify-center items-center py-2.5 px-4 w-full bg-[#0D16FF] rounded-[10px]'}>
                                <Image src={'/images/schedule_calendar.svg'} width={18} height={18}
                                       alt={'placeholder'}/>
                                <span className={'text-sm'}>    Schedule on Calendly </span>
                            </button>
                            {/* </Link> */}

                        </div>

                    </div>

                    <Suspense>
                        <ContactUsForm nextPage={true}/>

                    </Suspense>


                </div>

            </div>
            <NewFooter/>
            {/*<Footer/>*/}
        </div>);
};

export default ContactUsCompleteForm;
