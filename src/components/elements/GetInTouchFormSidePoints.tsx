import React from 'react';
import Image from "next/image";

const points: string[] = [
    "Signed NDA to keep all project-related information confidential",
    "Free consultation for your project",
    "Transparent pricing policy",
    "Flexible engagement models",
    "SWIFT kick start to your project",
    "We always deliver the source code with the project"
];

const PointsList: React.FC = () => {
    return (
        <ul className={'list-none p-0 w-full space-y-2 pb-4 md:pb-0'}>
            {points.map((point, index) => (
                <li key={index} className={'w-full flex justify-start items-center gap-3 font-light font-inter'}>
                    <Image height={16} width={16} src={'/images/touch-check.svg'} alt={'pointLogo'}/>
                    {point}
                </li>

            ))}
        </ul>
    );
};

export default PointsList;
