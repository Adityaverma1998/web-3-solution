"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '@mui/material';

const ButtonFillEffect = (props: any) => {
    const buttonRef = useRef<any>(0);
    const flairRef = useRef<any>(0);

    useGSAP(() => {
        const buttonEl = buttonRef.current;
        const flairEl = flairRef.current;

        if (buttonEl && flairEl) {
            const xSet = gsap.quickSetter(flairEl, 'xPercent');
            const ySet = gsap.quickSetter(flairEl, 'yPercent');
            const hasFill = buttonEl.classList.contains('button--fill');

            const getXY = (e: any) => {
                const { left, top, width, height } = buttonEl.getBoundingClientRect();

                const x = gsap.utils.mapRange(0, width, 0, 100, e.clientX - left);
                const y = gsap.utils.mapRange(0, height, 0, 100, e.clientY - top);

                return { x, y };
            };

            const onMouseEnter = (e: any) => {
                const { x, y } = getXY(e);

                xSet(x);
                ySet(y);

                if (hasFill) {
                    gsap.to(flairEl, {
                        opacity: 1,
                        duration: 1,
                        ease: 'power2.out',
                    });
                } else {
                    gsap.to(flairEl, {
                        scale: 1,
                        duration: 1,
                        ease: 'power2.out',
                    });
                }
            };

            const onMouseLeave = (e: any) => {
                const { x, y } = getXY(e);

                gsap.killTweensOf(flairEl);

                if (hasFill) {
                    gsap.to(flairEl, {
                        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                        opacity: 0,
                        duration: 1,
                        ease: 'power2.out',
                    });
                } else {
                    gsap.to(flairEl, {
                        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                        scale: 0,
                        duration: 0.3,
                        ease: 'power2.out',
                    });
                }
            };

            const onMouseMove = (e: any) => {
                const { x, y } = getXY(e);

                gsap.to(flairEl, {
                    xPercent: x,
                    yPercent: y,
                    duration: hasFill ? 1 : 0.4,
                    ease: 'power2',
                });
            };

            buttonEl.addEventListener('mouseenter', onMouseEnter);
            buttonEl.addEventListener('mouseleave', onMouseLeave);
            buttonEl.addEventListener('mousemove', onMouseMove);

            return () => {
                buttonEl.removeEventListener('mouseenter', onMouseEnter);
                buttonEl.removeEventListener('mouseleave', onMouseLeave);
                buttonEl.removeEventListener('mousemove', onMouseMove);
            };
        }
    }, []);

    return (
        <Button ref={buttonRef as any} style={{
            "--button-stroke": "var(--color-surface-white)",
            "--button-hoverColor": "var(--color-just-black)",...props.style
        } as any} {...props}
        sx={{
            '&.Mui-disabled': {
                // backgroundColor: '#d3d3d3',
                color: 'gray',
                // cursor: 'not-allowed',
                borderColor: 'gray'
            },
        }}
        >
            <span ref={flairRef as any} className="button__flair"></span>
            <span className="button__label">{props.children}</span>
        </Button>
    );
};

export default ButtonFillEffect;
