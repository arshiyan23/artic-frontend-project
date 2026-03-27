
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// 01
// Heading Animation by Yvalue
export function applyHeadingPageAnimation(className, yValue) {
  gsap.set(className, { y: yValue, autoAlpha: 0 });
  ScrollTrigger.batch(className, {
    onEnter: (batch) => {
      gsap.to(batch, {
        y: 0,
        autoAlpha: 1,
        duration: 4,
        stagger: 0.1,
        ease: "power2.out",
      });
    },
    start: "top 90%",
    end: "bottom center",
    scrub: true,
  });
}
// 02
// Paper Sliding Images (rolling)
export function applyPaperSlideEffect(className) {
  let container = document.querySelector(`.${className}`);
  
  if (container) {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: { 
        trigger: container, 
        start: "top 40%", 
        end: "bottom 20%", 
        toggleActions: "restart none none reset", 
        once: true 
      }
    });
    
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, { yPercent: -100, duration: 1.5, ease: 'Power1.out' });
    tl.from(image, { yPercent: 100, scale: 1.1, duration: 1.5, ease: 'Power1.out' }, "<");
  }
}
// 03
// Function to set up GSAP animation with dynamic height
export function setupGSAPWithDynamicHeight(selector, dynamicHeight) {
  gsap.set(selector, { height: "0%", autoAlpha: 0 });

  ScrollTrigger.create({
    trigger: selector,
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    onEnter: () => {
      gsap.to(selector, {
        autoAlpha: 1,
        height: dynamicHeight,
        duration: 3,
        stagger: 1,
        ease: "power2.out"
      });
    },
  });
}

