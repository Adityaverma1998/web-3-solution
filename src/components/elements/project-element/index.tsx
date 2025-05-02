"use client"
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
// import CaseStudyEnquiryForm from "@/components/case-study-enquiry-form";
import ButtonFillEffect from '@/components/elements/button-fill-effect'
import {Project} from '@/constant'


interface ProjectElementProps {
    project: Project;
}

const ProjectElement: React.FC<ProjectElementProps> = ({ project }) => {
    const mapCaseStudies: Record<string, string> = {
        "cake-panda": "Cake-Panda",
        "clay-buck": "CLAY-BUCK",
        "edublock": "EduBlock",
        "maa-laxmi": "Maa-Laxmi",
        "mcardit-pg": "Mcardit-PG",
        "goldy": "Goldy"
    };

    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };


    return (
        <div className={'w-full h-full py-8 lg:py-24 md:py-8 grid grid-cols-12 gap-8'}>
           
            <div className={`col-span-12 md:col-span-4 w-full h-full mobile-portfolio-image rounded-sm z-50 sm:hidden`}>
                <Image src={`/images/projects/${project.imageUrl}.webp`} className={'bg-cover rounded-sm'} alt={'aboutUs'} height={600} width={300} />
            </div>
            <div className={'col-span-12 md:row-span-8 lg:row-span-8 flex flex-col justify-start lg:justify-end md:justify-end gap-2 lg:gap-4 md:gap-4'}>
                <p className={'font-montserrat projectSectionTitle text-lg '}>{project.projectType}</p>
                <p className={'font-montserrat text-xl md:text-4xl lg:text-4xl font-bold pb-4'}>{project.title}</p>
                <div className={'flex flex-wrap pr-4 md:pr-8 lg:pr-20 gap-2 md:gap-2 lg:gap-4'}>
                    {project.features.map((feature: string, index: number) => (
                        <p key={index} className={'font-inter py-1 px-2 md:py-2 lg:py-3 text-sm md:text-base md:px-4 lg:px-8 border border-[#1E50FF]'}>
                            {feature}
                        </p>
                    ))}
                </div>
                <p className={'font-inter text-sm text-[#D7D7D7] sm:leading-7 py-4 line-clamp-3 sm:line-clamp-none'}>{project.description}</p>
                {(project.title==='EduBlock' || project.title==='Mcardit') &&  <div className={'z-10000 portfolio-m-button'}>
                    <ButtonFillEffect
                        // onClick={() => window.open(`/case-studies/${mapCaseStudies[project.readUrl]}.pdf`, '_blank')}
                        onClick={() => handleClickOpen()}
                        className={'font-inter button button--stroke text-md z-10000'}
                    >
                        View Case Study &rarr;
                    </ButtonFillEffect>
                </div>}
            </div>
        </div>
    );
};

export default ProjectElement;
