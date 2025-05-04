"use client"
import Header from '@/components/header'
import ProjectElement from '@/components/portfolio'
import ContactUs from '@/components/contact-us'
import OurTechStack from '@/components/our-tech-stack'
import {techStack} from '@/constant'
export default function Home() {
  return (
    <>
    <div className={'px-12'}>
    <Header/>
    <ProjectElement/>
    <ContactUs/>
                  <OurTechStack techStack={techStack}/>


    </div>
   
    
    </>
  );
}
