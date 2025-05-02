"use client"
import Header from '@/components/header'
import ProjectElement from '@/components/portfolio'
import ContactUs from '@/components/contact-us'

export default function Home() {
  return (
    <>
    <div className={'px-12'}>
    <Header/>
    <ProjectElement/>
    <ContactUs/>

    </div>
   
    
    </>
  );
}
