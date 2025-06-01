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
import { Link, Element } from 'react-scroll';

export default function Home() {
  return (
    <>
      <div className={'px-12 overflow-x-hidden'}>
        <Header />
        <Element name="company">
          <HeroSectionComponents/>
        </Element>
        <Element name="projects">
          <ProjectElement />
        </Element>
        <CoinsMarquee/>
        {/* <ServiceSection/> */}
        <div className={'pb-24'}>
          <Element name="technology">
            <OurTechStack techStack={techStack} />
          </Element>
        </div>
        <div className={'pb-24'}>
        <Element name="contact-us">
        <ContactUs />
        </Element>
        </div>

        <Footer />
      </div>


    </>
  );
}
