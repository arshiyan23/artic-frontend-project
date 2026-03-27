<template>
  <div class="footermainsec">
    <footer v-if="route.name !== 'supply-chain'" class="footer footermain bg-purple ">
      <div class="container mt-0">
        <div class="footer-content footer-legal pt-5 ">
          <div class="row">
            <div class="col-md-6">

              <div class="mb-5">
                <NuxtLink v-if="route.path != '/'" to="/" class="navbar-brand mw-50">
                  <img class="img-fluid" loading="lazy"   src="/assets/img/logow.svg"
                    alt="Footer Logo" />
                </NuxtLink>
                <NuxtLink v-if="route.path == '/'" to="/" class="navbar-brand mw-50">
                  <img class="img-fluid" loading="lazy"   src="/assets/img/logow.svg"
                    alt="Footer Logo" />
                </NuxtLink>
              </div>

              <div class="working mb-3">
                <h4 tabindex="0" class="pb-0 mb-2">Working Hours</h4>
                <div class="social-links order-first order-lg-last mb-3 mb-lg-0">
                  <p tabindex="0">Sun-Thur: 8AM to 5PM</p>
                </div>
              </div>

            </div>
            <!-- Right -->
            <div class="col-md-6 ps-0">
              <div class="row m-0">
                <!-- 01 -->
                <div class="col-md-6 col-5 ">
                  <div class="footer-links">
                    <div class="site-links">
                      <h6 tabindex="0" class="arfs-6">Site</h6>
                      <ul class="nav flex-column ">
                        <li v-for="(fMenu, index) in footerMenu.linkset[0]?.item" :key="index" class="nav-item mb-0">
                          <NuxtLink :to="fMenu.href">
                            {{ fMenu?.title }}
                          </NuxtLink>
                          <!-- <a :href=" fMenu.href ">{{ fMenu.title }}</a> -->
                        </li>
                      </ul>
                    </div>
                    <div class="business">
                      <h6 tabindex="0" class="mt-4 arfs-6">Business</h6>
                      <ul class="nav flex-column ">
                        <li class="nav-item mb-1">
                          <NuxtLink :to="`mailto:${footerContact?.data[0]?.field_business}`"
                            class="text-decoration-underline">
                            {{ footerContact?.data[0]?.field_business }}
                          </NuxtLink>
                          <!-- <a :href="`mailto:${footerContact.data[0].field_business}`" class="text-decoration-underline">{{ footerContact.data[0].field_business }}</a> -->
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- 02 -->
                <div class="col-6 ofiice ps-sm-0">
                  <div class="footer-links">

                    <div class="office-links">
                      <h6 tabindex="0" class="arfs-6">Office</h6>
                      <ul class="nav flex-column" role="none">
                        <li class="nav-item mb-0">
                          <p tabindex="0">{{ footerContact?.data[0]?.field_address[0] }},<br>
                            {{ footerContact?.data[0]?.field_address[1] }} <br>{{
                              footerContact?.data[0]?.field_address[2] }} <br> {{
                              footerContact?.data[0]?.field_address[3] }}
                            </p>
                        </li>
                        <li class="nav-item mb-2">
                          <p class="contentinfo">
                            <span role="contentinfo" tabindex="0" aria-label="Telephone number">
                              <NuxtLink href="tel:+97444223888">{{ footerContact?.data[0]?.field_telephone }}</NuxtLink>
                            </span>
                            <br>
                            <span tabindex="0" aria-label="Fax number">
                              {{ footerContact?.data[0]?.field_fax }}
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>

                    <div class="business-m">
                      <h6 tabindex="0" class="mt-4 arfs-6">Business</h6>
                      <ul class="nav flex-column " role="none">
                        <li class="nav-item mb-1">
                          <NuxtLink to="javascript:void(0)" class="text-decoration-underline">
                            {{ footerContact?.data[0]?.field_business }}
                          </NuxtLink>
                          <!-- <a href="#" class="text-decoration-underline">{{ footerContact.data[0].field_business }}</a> -->
                        </li>
                      </ul>
                    </div>

                    <div class="career-links">
                      <h6 tabindex="0" class="mt-3 arfs-6">Career</h6>
                      <ul class="nav flex-column " role="none">
                        <li class="nav-item mb-1">
                          <NuxtLink :to="`mailto:${footerContact?.data[0]?.field_career}`"
                            class="text-decoration-underline">
                            {{ footerContact?.data[0]?.field_career }}
                          </NuxtLink>
                          <!-- <a :href="`mailto:${footerContact.data[0].field_career}`" class="text-decoration-underline">{{ footerContact.data[0].field_career }}</a> -->
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider mb-4 pb-3"> </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-xxl-5 col-xl-5 col-md-6 col-sm-12">
            <ul class="nav copy-write justify-content-md-between" role="none">
              <template v-for="(privacyy, index) in privacy?.linkset[0]?.item" :key="index">
                <li class="seprator-li" v-if="index !== 0">|</li>
                <li class="d-flex"><a :href="privacyy.href" class="nav-link px-0 text-muted color-white pt-0 ps-0">{{
                  privacyy.title }} </a></li>


              </template>
              <li class="seprator-li">|</li>
              <li class="nav-item d-flex">
                <a href="/cookie-policy" class="nav-link px-1 text-muted color-white pt-0 cursor-pointer">Cookie
                  Policy</a>
              </li>
            </ul>
          </div>
          <div class="col-xxl-6 col-xl-6 col-md-6 col-sm-12">
            <ul class="nav social-media justify-content-md-between" role="none">
              <template v-for="(social, index) in social.linkset[0].item" :key="index">
                <li class="d-flex seprator-li" v-if="index !== 0">|</li>
                <li class="d-flex">
                  <NuxtLink :to="social.href || '/'" target="_blank"
                    class="nav-link px-0 text-muted color-white pt-0 ps-0"
                    :aria-label="social.title === 'X' ? 'Twitter' : social.title">
                    {{ social.title }}
                    <span class="sr-only">&nbsp;</span>
                  </NuxtLink>
                </li>
              </template>
            </ul>
          </div>
        </div>

        <div class="d-flex justify-content pb-0 mb-0 py-4 my-4 border-top flex-wrap text-center">
          <p tabindex="0" class="copy-w">{{ footerContact?.data[0]?.field_copyright }}</p>
        </div>

      </div>
    </footer>

    <div class="arrortop">
      <button type="button" @click="scrollToTop"
        :class="['scroll-top', 'd-flex', 'align-items-center', 'justify-content-center', { active: isScrolled }]"
        name="ScrollTop" aria-label="Page Up">
        <img class="img-fluid" src="/assets/img/arrow-up.svg" width="18" height="18" alt="page up" loading="lazy"  />
      </button>
    </div>
  </div>


</template>
<script setup lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';

const config = useRuntimeConfig();
const route = useRoute();
const imgBaseURL = config.public.IMG_BASE_URL;
const apiBaseURL = config.public.API_BASE_URL;
const apiAuthKey = config.public.API_AUTH_KEY;

const { data: footerContact } = await useFetch(apiBaseURL + '/jsonapi/block_content/footer_block', {
  method: "GET",
  headers: {
    "Authorization": `Basic ${apiAuthKey}`
  }
});
const { data: social } = await useFetch(apiBaseURL + '/system/menu/social-media/linkset', {
  method: "GET",
  headers: {
    "Authorization": `Basic ${apiAuthKey}`
  }
});
const { data: privacy } = await useFetch(apiBaseURL + '/system/menu/footer/linkset', {
  method: "GET",
  headers: {
    "Authorization": `Basic ${apiAuthKey}`
  }
});
const { data: footerMenu } = await useFetch(apiBaseURL + '/system/menu/footer-menu/linkset', {
  method: "GET",
  headers: {
    "Authorization": `Basic ${apiAuthKey}`
  }
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
// Scroll to Top button visibility
const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 100;
};
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<style scoped>
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

@media (max-width: 499px) {
  .footermainsec .popup-content button.close-btn {
    display: none;
  }
}
</style>