"use client"
import Header from '@/components/header'
import ProjectElement from '@/components/portfolio'
import ContactUs from '@/components/contact-us'
import OurTechStack from '@/components/our-tech-stack'
import { techStack } from '@/constant'
import Footer from '@/components/footer'
import HeroSectionComponents from '@/components/hero-section';
import CoinsMarquee from '@/components/coins-marquee'
import ServiceSection from '@/components/service-section'
export default function Home() {
  return (
    <>
      <div className={'px-12'}>
        <Header />
        <HeroSectionComponents/>
        <ProjectElement />
        <CoinsMarquee/>
        <ServiceSection/>
        <div className={'pb-24'}>

        <OurTechStack techStack={techStack} />

        </div>
        <div className={'pb-24'}>

        <ContactUs />
        </div>

        <Footer />
      </div>


    </>
  );
}
