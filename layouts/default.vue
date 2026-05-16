<template>

  <div id="Siteloader">
    <div class="flex flex-column gap-5 text-center align-items-center justify-content-center">
      <img class="img-fluid" src="~/assets/img/logow.svg" alt="Footer Logo" />
       <!-- Spinner Element -->
       <div class="spinner-container">
        <div class="spinner"></div>
      </div>
    </div>
</div>




  <Header />
  <slot />

  <div class="footermainsec">
    <div id="cookiessetting" class="cookiessetting">
      <PopupComponent :isVisible="isPopupVisible" @close="closePopup" role="alertdialog">
        <div class="pb-0">
          <div class="row">
            <div class="col data-content">
              <div class="cooketopsection">
                <h6 tabindex="0" class="h1" ref="coockiesPopupHeading">This site uses cookies to improve your experience.
                </h6>
                <p tabindex="0" class="policyd">
                  We use cookies to personalise content and to analyse our traffic. We
                  also share information about your use of our site with our analytics partners. View our 
                  <NuxtLink
                    to="/cookie-policy" 
                    target="_blank" 
                    aria-label="View our cookies page">cookies page.</NuxtLink>
                </p>
                <div class="d-flex align-items-center btnacccepdec">
                  <button role="button" tabindex="0" @click="declineCookies" class="btn-white align-self-start me-4"
                    aria-label="Decline Cookies">
                    <span>Decline Cookies</span>
                    <i class="bi bi-check"></i>
                  </button>
                  <button role="button" tabindex="0" @click="acceptCookies" class="view-all align-self-start"
                    aria-label="Accept all Cookies">
                    <span>Accept all Cookies</span>
                    <i class="bi bi-check"></i>
                  </button>
                </div>
              </div>
              <div class="message-detail">
                <div class="accordion accordion-flush" id="managecookiepreferences">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button role="button" tabindex="0" class="accordion-button collapsed" @keydown="handleKeydown"
                        type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                        aria-controls="flush-collapseOne">
                        <span> Manage Cookie Preferences</span>
                      </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                      data-bs-parent="#managecookiepreferences">
                      <div class="accordion-body">
                        <div class="acceptcookiessection">
                          <div class="">
                            <div class="tittle-policy"></div>
                            <div class="button">

                              <div class="p-0 form-check form-switch">
                                <label tabindex="0" class="form-check-label" for="flexSwitchCheckDefault">Strictly
                                  necessary cookies <span>(required)</span></label>
                                <input class="form-check-input" type="checkbox" v-model="necessary" checked="true"
                                  disabled id="flexSwitchCheckDefault">
                              </div>

                            </div>


                            <p tabindex="0">These cookies allow the website to remember choices you make and provide
                              enhanced, more personal features. The information these cookies collect may be anonymized
                              and they cannot track your browsing activity on other websites.</p>
                          </div>
                          <div class="">
                            <div class="tittle-policy"></div>
                            <div class="button">

                              <div class="p-0 form-check form-switch">
                                <label tabindex="0" class="form-check-label" for="flexSwitchCheckDefault">Performance
                                  cookies</label>
                                <input class="form-check-input" type="checkbox" v-model="performance"
                                  id="flexSwitchCheckDefault">
                              </div>

                            </div>


                            <p tabindex="0">These cookies allow us to recognise and count the number of visitors and to
                              see how visitors move around our website when they are using it. This helps us to improve
                              the way our website works, for example, by ensuring that users are finding what they are
                              looking for easily.</p>
                          </div>
                          <button class="btn-white align-self-start me-2" @click="acceptAllCookies"
                            @keydown="handleKeydownSavePreferences"><span>Save
                              Preferences</span></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PopupComponent>
    </div>
  </div>


 
</template>

<script setup lang="ts">
import { nextTick, ref, onMounted } from 'vue';

import { useRoute } from 'vue-router';
import Cookies from 'js-cookie';
import PopupComponent from '../components/Popup.vue';

const route = useRoute();
const isPopupVisible = ref(false);
const consentGiven = ref(false);
const necessary = ref(true);
const performance = ref(false);
const hideAfterPagePaint = async () => {
  const loader = document.getElementById('Siteloader');
  if (!loader) return;
  await nextTick();
  window.requestAnimationFrame(() => {
    window.setTimeout(() => {
      loader.classList.add('is-hidden');
    }, 450);
  });
};

// Show or close popup
const showPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;

  // Check the current page URL and add condition
  if (route?.path?.includes('search')) {
    const headingElement = document.querySelector('p.totalSearchResultRef') as HTMLElement | null;
    if (headingElement) {
      headingElement.focus();
    }
  } else {
    const headingElement = document.querySelector('.page-main-heading') as HTMLElement | null;
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
  hideAfterPagePaint();

  const consent = Cookies.get('consentGiven');
  if (consent === 'true' || consent === 'false') {
    isPopupVisible.value = false;
    document.body.style.overflow = 'unset';
  } else {
    showPopup();
    const event = new CustomEvent('focus-close-button');
    window.dispatchEvent(event);
  }
});
</script>
<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-menu {
  position: absolute;
  display: none;
}


.cookiessetting .popup-content .message-detail {
  margin-top: 20px;
}
.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch .form-check-input:focus {
  outline: auto;
}
.cookiessetting .popup-content .data-content {
  padding: 20px !important;
  font-size: 14px;
}
.cookiessetting .popup-content .h1 {
  padding-bottom: 26px;
  font-size: 16px;
  color: #243C6C;
  font-weight: 600;
}
.cookiessetting .popup-content h5 {
  font-size: 20px;
  color: #243C6C;
  font-weight: 400 !important;
}
.cookiessetting .popup-content .policyd {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 29px;
}
.cookiessetting .popup-content p a {
  color: #0065BE;
  text-decoration: underline;
}
.cookiessetting .popup-content .message-detail .accordion {
  padding: 12px;
  background: #F3F3F366;
  border: 1px solid #E8E8E8;
  border-radius: 12px;
  margin-bottom: 0px;
  max-height: 161px;
  overflow-y: auto;
}
.cookiessetting .popup-content .message-detail .accordion::-webkit-scrollbar {
  width: 8px;
}
.cookiessetting .popup-content .message-detail .accordion::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}
.cookiessetting .popup-content .message-detail .accordion-webkit-scrollbar-thumb {
  background: #CCCCCC;
  border-radius: 10px;
}
.cookiessetting .popup-content .message-detail .accordion::-webkit-scrollbar-thumb:hover {
  background: #6c757d;
}
.cookiessetting .popup-content .message-detail .accordion .accordion-header button.accordion-button {
  box-shadow: none;
  padding: 0;
  margin: 0px !important;
  background: transparent;
}

.cookiessetting .popup-content .btnacccepdec button.btn-white:hover {
  background-color: var(--color-orange);
  color: #fff !important;
}

.cookiessetting .popup-content .btnacccepdec button.btn-white i.bi.bi-check {
  background-color: var(--color-orange);
  background-image: url(/assets/icons/close-n.svg);
}

.cookiessetting .popup-content .btnacccepdec button.btn-white:hover i.bi.bi-check {
  background-color: #ffffff;
  background-image: url(/assets/icons/close-h.svg);
}

.cookiessetting .popup-content .btnacccepdec button.view-all:hover {
  background-color: var(--color-orange);
  color: #fff !important;
}

.cookiessetting .popup-content .btnacccepdec button.view-all i.bi.bi-check {
  background-color: var(--color-orange);
  background-image: url(/assets/icons/tick-n.svg);
}

.cookiessetting .popup-content .btnacccepdec button.view-all:hover i.bi.bi-check {
  background-color: #ffffff;
  background-image: url(/assets/icons/tick-h.svg);
}

.cookiessetting .popup-content .message-detail .accordion .accordion-header button.accordion-button.collapsed {
  padding: 0px;
  border-radius: 12px;
  margin-bottom: 20px;
  background: transparent;
}

.cookiessetting .popup-content .btnacccepdec {
  margin-bottom: 0px;
}

.cookiessetting .popup-content .btnacccepdec button {
  height: 44px;
  align-items: center;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch {
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body {
  visibility: visible;
  padding: 0;
  text-align: left;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body p {
  margin-bottom: 21px;
  font-size: 14px;
  font-weight: 400;
  padding: 8px 0 0 0;
  width: 100%;
  color: #292929;
}

.cookiessetting .popup-content .accordion-flush .accordion-item {
  background: transparent;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch label.form-check-label {
  font-size: 16px;
  font-weight: 500;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch label.form-check-label span {
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
}

.cookiessetting .popup-content .message-detail .accordion .accordion-header button.accordion-button span {
  text-decoration: underline;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch .form-check-input {
  width: 48px;
  font-size: 28px;
  border-color: #D4D4D4;
  background-color: #D4D4D4;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch .form-check-input:checked {
  width: 48px;
  font-size: 28px;
  border-color: #73CF3A;
  background-color: #73CF3A;
}

.cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check-input:focus {
  border-color: transparent;
  outline: 0;
  box-shadow: none;
}

.supply-chain-page .footermainsec .arrortop {
  display: none;
}

.scroll-top {
  display: none;
  position: fixed;
  z-index: 1000;
}

.scroll-top.active {
  display: flex;
}

@media (max-width: 768px) {

  .cookiessetting .popup-content .btnacccepdec button i {
    display: none;
  }

  .cookiessetting .popup-content p {
    height: 67%;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch label.form-check-label {
    font-size: 14px;
    font-weight: 500;
    width: 184px;
  }

  .cookiessetting .popup-content .h1 {
    font-size: 14px;
    padding-bottom: 0px !important;
    color: #292929;
    margin-bottom: 3px;
  }

  .cookiessetting .popup-content .data-content[data-v-3506faf6] {
    padding: 20px 15px 4px 15px !important;
    font-size: 14px;
  }

  .cookiessetting .popup-content h5 {
    font-size: 11px !important;
  }



  .cookiessetting .popup-content .btnacccepdec {
    margin-bottom: 0px;
    justify-content: space-between;
  }

  .cookiessetting .popup-content .policyd {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .cookiessetting .popup-content .btnacccepdec button.btn-white {
    color: #243C6C;
    border-color: #243C6C;
    background: #ffffff !important;
  }

  .cookiessetting .popup-content .btnacccepdec button.view-all {
    color: #ffffff !important;
    border-color: #243C6C;
    background: #243C6C !important;
  }

  .cookiessetting .popup-content .message-detail .accordion .accordion-header button.accordion-button {
    font-size: 12px;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch .form-check-input {
    font-size: 28px !important;
    height: 30px;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body p {
    font-size: 12px;
    height: auto;
    display: inline-block;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body button.btn-white {
    height: 44px !important;
    min-width: 120px;
    justify-content: center;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body button.btn-white span {
    width: 40px;
    overflow: hidden;
    height: 16px;
  }

  .cookiessetting .popup-content .accordion-button:after {
    font-size: 24px;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch .form-check-input {
    height: 25px;
    display: inline-block;
  }


}

@media (max-width: 1600px) {
  .cookiessetting .popup-content .h1 {
    font-size: 14px;
    padding-bottom: 15px;
  }

  .cookiessetting .popup-content .policyd {
    font-size: 14px;
    margin-bottom: 20px;
  }

}

@media (max-width: 499px) {


  .cookiessetting .popup-content .img-popup {
    height: 214px !important;
    overflow: hidden;
  }

  .cookiessetting .popup-content .img-popup img.cursor-pointer {
    height: fit-content !important;
  }

  .cookiessetting .popup-content .data-content {
    padding: 3px 6px 0px !important;
  }

  .cookiessetting .popup-content p {
    padding-top: 9px;
  }

  .footermainsec .popup-content button.close-btn {
    display: none;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch label.form-check-label {
    font-size: 14px;
    width: 214px;
  }

  .cookiessetting .popup-content .accordion-collapse.collapse.show .accordion-body .form-check.form-switch .form-check-input {
    height: 25px;
    display: inline-block;
  }

}
</style>
