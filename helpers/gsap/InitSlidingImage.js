import { gsap } from '~/helpers/gsap/InitGSAP';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const initSlidingAnimation = (selector, trigger, yStart, duration = 2, stagger = 0.3, ease = "Power1.out") => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return; // Return early if no elements are found
    gsap.set(elements, { y: yStart, autoAlpha: 0 });
    ScrollTrigger.create({
        trigger: trigger,      // The element that triggers the animation
        start: "top 130%",     // Start position of the trigger
        end: "bottom center",  // End position of the trigger
        scrub: true,
        onEnter: () => {
            gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration,
                stagger,
                ease
            });
        },
        invalidateOnRefresh: true // Ensure the trigger recalculates for new elements
    });
};
// Function to initialize paper sliding animations
export const initPaperSlideAnimation = (containerSelector, imageSelector, start = "top 40%", end = "bottom 20%", duration = 1.5, ease = 'Power1.out') => {
    const revealContainers = document.querySelectorAll(containerSelector);
    revealContainers.forEach((container) => {
        const image = container.querySelector(imageSelector);
        // Create GSAP timeline
        gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start,
                end,
                toggleActions: "play none none none", 
                once: true
            }
        })
        .set(container, { autoAlpha: 1 })
        .from(container, { yPercent: -100, duration, ease })
        .from(image, { yPercent: 100, scale: 1.1, duration, ease }, "<");
    });
};


// Function to initialize portfolio images animations
export const initPortfolioImageAnimation = (containerSelector, imageSelector, start = "top 0%", end = "bottom 20%", duration = 1.5, ease = 'Power1.out') => {
    const revealContainers = document.querySelectorAll(containerSelector);
    revealContainers.forEach((container) => {
        const image = container.querySelector(imageSelector);
        // Create GSAP timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start,
                end,
                toggleActions: "play none none none", // Ensure it only plays on enter
                once: true // Ensures it only happens once
            }
        });

        tl.set(container, { autoAlpha: 1 })
          .from(container, { yPercent: -100, duration, ease })
          .from(image, { yPercent: 100, scale: 1.1, duration, ease }, "<");
    });
};
export const initPortfolioImageAnimationWithTrigger = (containerSelector, imageSelector, triggerSelector, start = "top 0%", end = "bottom 20%", duration = 1.5, ease = 'Power1.out') => {
    const revealContainers = document.querySelectorAll(containerSelector);
    revealContainers.forEach((container) => {
        const image = container.querySelector(imageSelector);
        const triggerElement = document.querySelector(triggerSelector);
        
        if (!triggerElement) {
            console.warn(`Trigger element not found for selector: ${triggerSelector}`);
            return;
        }

        // Create GSAP timeline
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: triggerElement,
                start,
                end,
                toggleActions: "play none none none", // Ensure it only plays on enter
                once: true // Ensures it only happens once
            }
        });

        tl.set(container, { autoAlpha: 1 })
          .from(container, { yPercent: -100, duration, ease })
          .from(image, { yPercent: 100, scale: 1.1, duration, ease }, "<");
    });
};
