'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '@/components/portfolio/portfolio.module.css';
import ProjectElement from '@/components/elements/project-element';
import { projects } from '@/constant';

const MobilePortfolio = dynamic(() => import('@/components/portfolio/mobile-portfolio'), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(
    () => {
      if (isMobile) return;

      const details = gsap.utils.toArray<HTMLDivElement>(`.${styles.desktopContentSection}`);
      const photos = gsap.utils.toArray<HTMLDivElement>(`.${styles.desktopPhoto}`);
      gsap.set(photos.slice(1), { yPercent: 100, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: `.${styles.gallery}`,
        start: 'top top',
        end: 'bottom bottom',
        pin: `.${styles.left}`,
        scrub: 3,
        anticipatePin: 1,
      });

      details.forEach((detail, index) => {
        const tl = gsap.timeline();

        tl.to(photos[index], { yPercent: 0, autoAlpha: 1 });
        if (photos[index - 1]) {
          tl.to(photos[index - 1], { yPercent: 0, autoAlpha: 0 }, '<');
        }

        ScrollTrigger.create({
          trigger: detail,
          start: 'top 50%',
          end: 'bottom 50%',
          animation: tl,
          scrub: 3,
        });
      });
    },
    { dependencies: [isMobile], scope: containerRef }
  );

  return (
    <div ref={containerRef}>
      <div className="container py-8 my-8 md:my-24 relative overflow-hidden portfolio-gradient">
        <div className="flex flex-col gap-4 pb-5">
          <p className="text-sm md:text-lg uppercase tracking-[3px] font-montserrat">
            Portfolio
          </p>
          <div>
            <p className="text-xl md:text-[40px] font-bold w-full md:w-[80%] lg:w-[50%] font-montserrat">
              Our projects
            </p>
            <p className="text-md font-light w-full md:w-[80%] lg:w-[50%] mt-4 text-[#D7D7D7] leading-7 font-inter">
              Projects for organizations across industries, from innovative startups to global enterprises.
            </p>
          </div>
        </div>

        {isMobile ? (
          <MobilePortfolio />
        ) : (
          <div className={`${styles.gallery} hidden sm:block`}>
            <div className={styles.left}>
              <div className={styles.desktopPhotos}>
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`${styles.desktopPhoto} ${styles.bg}`}
                  >
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={`/images/projects/${project.imageUrl}.webp`}
                      className="rounded-lg"
                      alt={project.title || 'project'}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.right}>
              {projects.map((project, index) => (
                <div key={index} className={styles.desktopContentSection}>
                  <ProjectElement project={project} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
