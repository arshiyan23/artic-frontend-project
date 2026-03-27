import { gsap } from '~/helpers/gsap/InitGSAP'

export const initSectionMarginAnimation = (selector) => {

    // Determine start position based on window width
    const startPosition = window.innerWidth < 768 ? "top 20%" : "top 200%";

    gsap
      .timeline({
        scrollTrigger: {
          trigger: selector,
          start: startPosition,
          end: "top center",
          scrub: 1,
        },
      })
      .to(selector, {
        marginTop: 0,
        duration: 4,
        ease: "power2.out",
      })
      .to(selector, {
        marginTop: -300,
        duration: 4,
        ease: "power2.out",
      });
  };

  export const initTextFadeInOnScroll = (selector) => {
    gsap.set(selector, { autoAlpha: 0, scale: 0.9 });
    gsap.timeline({
        scrollTrigger: {
            trigger: selector,
            start: "top bottom",
            end: "top center",
            once: true, // Ensures the animation runs only once
            onEnter: () => {
                gsap.to(selector, {
                    autoAlpha: 1,
                    transformOrigin: "center center",
                    scale: 1,
                    ease: "power2.out",
                });
            }
        }
    });
};
