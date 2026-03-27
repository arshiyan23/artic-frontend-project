import { gsap } from '~/helpers/gsap/InitGSAP'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const TitleAnimation = (element, y = 50, duration = 1, delay = 0, ease = 'power2.out') => {
  if (element) {
    gsap.from(element, {
      y,
      opacity: 0,
      duration,
      delay,
      ease,
    });
  }
};

export const TitleAnimationForClass = (selector, y = 50, duration = 1, stagger = 0, ease = "power2.out", delay = 0) => {
  const elements = document.querySelectorAll(selector);
  
  if (!elements.length) return; // Return early if no elements are found

  gsap.set(elements, { y, autoAlpha: 0 });

  ScrollTrigger.batch(elements, {
      onEnter: (batch) => {
          gsap.to(batch, {
              y: 0,
              autoAlpha: 1,
              duration,
              ease,
              stagger,
              delay // Adding the delay parameter here
          });
      },
      start: "top 90%",
      end: "bottom center",
      scrub: true
  });
};



export function animateTitleLines(className, y = 50, duration = 1, ease = 'power2.out', stagger = 0.2) {
  const heading = document.querySelector(className);

  if (!heading) return;

  gsap.from(heading, {
    y,
    opacity: 0,
    duration,
    ease,
    stagger, // Animate each line sequentially
  });
}



export function animateTitleWords(className, triggerClassSelector = '', y = 50, duration = 1, ease = 'power2.out', stagger = 0.2, onScroll = false) {
  const heading = document.querySelector(className);
  const triggerElement = triggerClassSelector ? document.querySelector(triggerClassSelector) : heading;

  if (!heading) return;

  const words = splitTextIntoWords(heading);

  if (onScroll) {
    // Ensure triggerElement is valid
    if (!triggerElement) return;

    // Trigger animation on scroll
    gsap.from(words, {
      y,
      opacity: 0,
      duration,
      ease,
      stagger,
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 24%",
        toggleActions: "play none none none",
      }
    });
  } else {
    // Trigger animation on load
    gsap.from(words, {
      y,
      opacity: 0,
      duration,
      ease,
      stagger,
    });
  }
}
function splitTextIntoWords(element) {
  const text = element.innerText.trim();
  const wordsArray = text.split(' ');
  element.innerHTML = '';

  const wordElements = wordsArray.map((word, index) => {
    const wordSpan = document.createElement('span');
    wordSpan.style.display = 'inline-block';
    wordSpan.textContent = word;
    element.appendChild(wordSpan);

    // Add a space after each word except the last one
    if (index < wordsArray.length - 1) {
      const spaceSpan = document.createElement('span');
      spaceSpan.style.display = 'inline-block';
      spaceSpan.innerHTML = '&nbsp;'; // Use non-breaking space
      element.appendChild(spaceSpan);
    }

    return wordSpan;
  });

  return wordElements;
}


// Animate letter
export function animateTitleLetters(className, y = 50, duration = 1, ease = 'power2.out', stagger = 0.05) {
  const heading = document.querySelector(className);

  if (!heading) return;

  const letters = splitTextIntoLetters(heading);

  gsap.from(letters, {
    y,
    opacity: 0,
    duration,
    ease,
    stagger, // Animate each letter sequentially
  });
}

function splitTextIntoLetters(element) {
  const text = element.innerText.trim();
  element.innerHTML = '';
  const letterElements = Array.from(text).map(letter => {
    const letterSpan = document.createElement('span');
    letterSpan.style.display = 'inline-block';
    letterSpan.textContent = letter;
    element.appendChild(letterSpan);
    return letterSpan;
  });
  return letterElements;
}
