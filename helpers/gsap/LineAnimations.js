import { gsap } from '~/helpers/gsap/InitGSAP'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initHeightAnimation = (selector, trigger, duration = 4, stagger = 2, ease = "power2.out", height = "100%", delay = 0) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;
    
    gsap.set(selector, { height: "0%", autoAlpha: 0 });
    ScrollTrigger.create({
        trigger,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onEnter: () => {
            gsap.to(selector, {
                autoAlpha: 1,
                height,
                duration,
                stagger,
                ease,
                delay 
            });
        },
    });
};


export const initWidthAnimation = (selector, trigger, duration = 3, stagger = 0, ease = "power2.out") => {
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    elements.forEach((element, index) => {
        const uniqueTrigger = `${trigger}-${index}`; // Create a unique trigger for each element

        gsap.set(element, { width: "0%", autoAlpha: 0 });

        ScrollTrigger.create({
            trigger: element, // Use the current element as the trigger
            id: uniqueTrigger, // Assign a unique ID to each ScrollTrigger instance
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onEnter: () => {
                gsap.to(element, {
                    autoAlpha: 1,
                    width: "100%",
                    duration,
                    stagger,
                    ease,
                });
            },
        });
    });
};

export const initWidthAnimationOnScroll = (selector, triggerSelector, duration = 3, stagger = 0, ease = "power2.out", minScroll = 0, maxScroll = 100) => {
    const elements = document.querySelectorAll(selector);
    const triggerElement = document.querySelector(triggerSelector);

    if (elements.length === 0 || !triggerElement) return;

    // Create a ScrollTrigger instance for each element
    elements.forEach((element) => {
        gsap.set(element, { width: "40%" }); // Set initial width

        ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 100%", 
            end: `+=${maxScroll}px`, // End when the scroll reaches `maxScroll` pixels
            scrub: 1, // Smooth scrubbing
            onUpdate: (self) => {
                // Calculate progress based on scroll position
                const scrollPosition = Math.max(self.scroll() - minScroll, 0); // Ensure scrollPosition is at least 0
                const progress = gsap.utils.clamp(0, 1, scrollPosition / (maxScroll - minScroll));
                
                // Calculate new width
                const newWidth = 40 + (progress * (100 - 40)); // Linear interpolation between 40% and 100%
                
                // Apply new width to the element
                gsap.to(element, {
                    width: `${newWidth}%`,
                    duration: 0, // Set duration to 0 to apply changes immediately
                    ease: ease
                });
            }
        });
    });
};



export const initBatchWidthAnimation = (selector, duration = 1, stagger = 0, ease = "power2.out") => {
    // Select elements based on the selector
    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return; // Return if no elements are found

    gsap.set(elements, { width: "0%", autoAlpha: 0 });
    ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
            gsap.to(batch, {
                autoAlpha: 1,
                width: "100%",
                duration,
                ease,
                stagger
            });
        },
        start: "top 90%",
        end: "bottom center",
        scrub: true
    });
};

// Check if the element exists
export const initBatchWidthLineAnimationCheck = (selector, duration = 1, stagger = 0, ease = "power2.out") => {
    const element = document.querySelector(selector);
    if (!element) return;
    gsap.set(element, { width: "0%", autoAlpha: 0 });
    ScrollTrigger.batch(selector, {
        onEnter: (batch) => {
            gsap.to(batch, {
                autoAlpha: 1,
                width: "100%",
                duration,
                ease,
                stagger
            });
        },
        start: "top 90%",
        end: "bottom center",
        scrub: true
    });
};