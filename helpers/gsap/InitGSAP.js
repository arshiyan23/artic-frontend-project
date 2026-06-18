import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

const smoother = ref(null);

// Initialize ScrollSmoother and GSAP plugins
export const InitSmoothness = (scrollZero = true) => {
    return new Promise((resolve) => {
        if (!smoother.value || !gsap) {
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

            smoother.value = ScrollSmoother.create({
                smooth: 2,
                effects: true,
                autoRefresh: true,
                normalizeScroll: false,
                ignoreMobileResize: true,
            });
            if(scrollZero){
              smoother.value.scrollTo(0, { duration: 0 });
            }
            // Initialize ScrollTrigger here
            ScrollTrigger.refresh();
        } else {
            console.log("ScrollSmoother instance already exists");
        }
        resolve();
        return smoother.value;
    });
};

export const pauseSmoother = () => {
  if (smoother.value) {
    smoother.value.kill();
    smoother.value = null;
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    console.log("Killing existing ScrollSmoother instance");
  }
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  document.documentElement.style.height = '';
  document.body.style.height = '';
};

export const resumeSmoother = () => {
  if (!smoother.value) {
    InitSmoothness();
  } else {
    console.log("ScrollSmoother instance already active");
  }
  refreshSmoother(); 
};

export const refreshSmoother = () => {
  if (smoother.value) {
    smoother.value.refresh();
    console.log("ScrollSmoother refreshed");
  }
};


// Export ScrollTrigger and gsap for easy access
export { gsap, ScrollTrigger };
