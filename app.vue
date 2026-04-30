<!-- App.vue -->
<template>
    <div :class="pageClass">
      <NuxtLoadingIndicator 
      height=10
      errorColor="repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)" 
      color="repeating-linear-gradient(to right,#E09235 0%,#E4C300 50%,#f6ca14 100%)"
      />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div> 
 
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';

// Define a ref to manage popup visibility
const isPopupVisible = ref(false);
const consentGiven = ref(false);
const necessary = ref(true);
const performance = ref(false);

// Use the `useCookieControl` composable provided by the module
const {
  cookieControl,
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();

// Show or close popup
const showPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;

  // Check the current page URL and add condition
  if (route?.path?.includes('search')) {
    const headingElement = document.querySelector('p.totalSearchResultRef');
    if (headingElement) {
      headingElement.focus();
    }
  } else {
    const headingElement = document.querySelector('.page-main-heading');
    if (headingElement) {
      headingElement.focus();
    }
  }
};

// Handle keydown for accessibility
const handleKeydownSavePreferences = (event: KeyboardEvent) => {
  if (event.key === 'Tab' || event.key === ' ') {
    const customEvent = new CustomEvent('focus-close-button');
    window.dispatchEvent(customEvent);
  }
};
const handleKeydown = (event: KeyboardEvent) => {
  const targetElement = event.target as HTMLElement;
  const isAccordionButton = targetElement.classList.contains('accordion-button');

  if ((event.key === 'Tab' || event.key === ' ') && isAccordionButton) {
    const isExpanded = targetElement.getAttribute('aria-expanded') === 'true';

    // Prevent default behavior of the key event
    event.preventDefault();

    if (!isExpanded) {
      // Trigger the click event on the target element only if it's not already expanded
      targetElement.click();
    }

    // Move focus to the next focusable element
    moveFocusToNextElement(targetElement);
  }
};
// Move focus to the next focusable element
const moveFocusToNextElement = (currentElement: HTMLElement) => {
  const focusableElements = 'a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';
  const elements = Array.from(document.querySelectorAll(focusableElements));
  const currentIndex = elements.indexOf(currentElement);
  if (currentIndex !== -1 && currentIndex < elements.length - 1) {
    const nextElement = elements[currentIndex + 1] as HTMLElement;
    nextElement.focus();
  }
};
// Accept or decline cookies
const acceptCookies = () => {
  Cookies.set('consentGiven', 'true', { expires: 365 });
  Cookies.set('cookies-consent', JSON.stringify({
    necessary: necessary.value,
    performance: true
  }), { expires: 365 });
  isPopupVisible.value = false;
};
const acceptAllCookies = () => {
  Cookies.set('consentGiven', 'true', { expires: 365 });
  Cookies.set('cookies-consent', JSON.stringify({
    necessary: necessary.value,
    performance: performance.value
  }), { expires: 365 });
  consentGiven.value = true;
  isPopupVisible.value = false;
};
const declineCookies = () => {
  Cookies.set('consentGiven', 'false', { expires: 365 });
  Cookies.set('cookies-consent', 'false', { expires: 365 });
  isPopupVisible.value = false;
};
// Redirect to a specific page
const redirectToPage = () => {
  window.location.href = "/cookiepolicy";
};
// Handle the popup visibility on page load
onMounted(() => {
  const consent = Cookies.get('consentGiven');
  if (consent === 'true' || consent === 'false') {
    isPopupVisible.value = false;
    document.body.style.overflow = 'unset';
  } else {
    showPopup();
    const event = new CustomEvent('focus-close-button');
    window.dispatchEvent(event);
  }

  // Hide loader when DOM is ready
  const hideLoader = () => {
    const loader = document.getElementById('Siteloader');
    if (loader) {
      loader.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };
  window.onload = hideLoader;
  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    document.addEventListener('DOMContentLoaded', hideLoader);
  }
});
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
}
.supply-chain-page header,
.supply-chain-page .footermain {
  /* display: none; */
  background-color: white;
}
</style>