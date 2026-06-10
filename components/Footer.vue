<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useFetch, useRuntimeConfig } from '#imports'
import { useRoute } from 'vue-router'

const config = useRuntimeConfig()
const route = useRoute()

const apiBaseURL = config.public.API_BASE_URL
const apiAuthKey = config.public.API_AUTH_KEY

const [{ data: footerContact }, { data: social }, { data: privacy }, { data: footerMenu }] = await Promise.all([
  useFetch<any>(
    `${apiBaseURL}/jsonapi/block_content/footer_block`,
    {
      headers: {
        Authorization: `Basic ${apiAuthKey}`
      },
      default: () => ({ data: [] })
    }
  ),
  useFetch<any>(
    `${apiBaseURL}/system/menu/social-media/linkset`,
    {
      headers: {
        Authorization: `Basic ${apiAuthKey}`
      },
      default: () => ({ linkset: [] })
    }
  ),
  useFetch<any>(
    `${apiBaseURL}/system/menu/footer/linkset`,
    {
      headers: {
        Authorization: `Basic ${apiAuthKey}`
      },
      default: () => ({ linkset: [] })
    }
  ),
  useFetch<any>(
    `${apiBaseURL}/system/menu/footer-menu/linkset`,
    {
      headers: {
        Authorization: `Basic ${apiAuthKey}`
      },
      default: () => ({ linkset: [] })
    }
  )
])

// Fallback mock data when backend is unavailable
if (!footerContact.value?.data?.length) {
  footerContact.value = {
    data: [{
      field_copyright: '©2024 Al-Rayyan Tourism Investment Co. (ARTIC). All rights reserved.',
      field_address: ['Al Rayyan Tourism Investment Company', 'City Tower, West Bay, Doha, Qatar.', 'P.O. Box 22465'],
      field_business: 'artic@artic.com.qa',
      field_career: 'recruitment@artic.com.qa',
      field_telephone: 'Tel: +974 44223888',
      field_fax: 'Fax: +974 44223800',
      field_working_hours: 'Sun-Thur: 8AM to 5PM',
      field_footer_logo: null
    }]
  }
}
if (!social.value?.linkset?.length) {
  social.value = { linkset: [{ item: [{ title: 'LinkedIn', href: 'https://www.linkedin.com/company/al-rayyan-tourism-investment-company/' }, { title: 'X', href: 'https://x.com/ARTIC_QA' }, { title: 'Facebook', href: 'https://www.facebook.com/artic_qa' }, { title: 'Instagram', href: 'https://www.instagram.com/artic_qa/' }, { title: 'YouTube', href: 'https://www.youtube.com/@artic108' }] }] }
}
if (!privacy.value?.linkset?.length) {
  privacy.value = { linkset: [{ item: [{ title: 'Privacy Policy', href: '/privacy-policy' }, { title: 'Cookie Policy', href: '/cookie-policy' }, { title: 'Disclaimer', href: '/disclaimer' }, { title: 'Accessibility', href: '/accessibility' }, { title: 'Supply Chain', href: '/supply-chain' }] }] }
}
if (!footerMenu.value?.linkset?.length) {
  footerMenu.value = { linkset: { item: [{ title: 'Home', href: '/' }, { title: 'About Us', href: '/about-us' }, { title: 'Portfolio', href: '/portfolio' }, { title: 'Media', href: '/media' }, { title: 'News', href: '/news' }, { title: 'Sustainability', href: '/sustainability' }, { title: 'Contact', href: '/contact-us' }] } }
}

// scroll logic
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

const contact = computed(() => footerContact.value?.data?.[0] || {})
const siteLinks = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about-us' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Sustainability', href: '/Sustainability' },
  { title: 'Media', href: '/media' },
  { title: 'Contact', href: '/contact-us' }
]
const legalLinks = [
  { title: 'Privacy', href: '/privacy-policy' },
  { title: 'Disclaimer', href: '/disclaimer' },
  { title: 'Accessibility', href: '/accessibility' },
  { title: 'Site Map', href: '/Sitemap' },
  { title: 'Cookie Policy', href: '/cookie-policy' }
]
const socialLinks = [
  { title: 'Linkedin', href: 'https://www.linkedin.com/company/al-rayyan-tourism-investment-company/' },
  { title: 'X', href: 'https://x.com/ARTIC_QA' },
  { title: 'Facebook', href: 'https://www.facebook.com/artic_qa' },
  { title: 'Instagram', href: 'https://www.instagram.com/artic_qa/' },
  { title: 'Youtube', href: 'https://www.youtube.com/@artic108' }
]

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="footermainsec">
    <footer v-if="route.name !== 'supply-chain'" class="artic-footer">
      <div class="artic-footer__inner">
        <div class="artic-footer__top">
          <div class="artic-footer__brand-area">
            <NuxtLink to="/" class="artic-footer__brand" aria-label="ARTIC home">
              <img src="/logow.svg" alt="ARTIC" />
            </NuxtLink>

            <div class="artic-footer__hours">
              <h3>Working Hours</h3>
              <p>{{ contact.field_working_hours || 'Sun-Thur: 8AM to 5PM' }}</p>
            </div>
          </div>

          <nav class="artic-footer__site" aria-label="Footer site links">
            <h3>Site</h3>
            <NuxtLink v-for="link in siteLinks" :key="link.title" :to="link.href">
              {{ link.title }}
            </NuxtLink>
            <div class="artic-footer__business">
              <h3>Business</h3>
              <a :href="`mailto:${contact.field_business || 'artic@artic.com.qa'}`">
                {{ contact.field_business || 'artic@artic.com.qa' }}
              </a>
            </div>
          </nav>

          <div class="artic-footer__contact">
            <div class="artic-footer__office">
              <h3>Office</h3>
              <p v-for="(line, index) in (contact.field_address || ['Al Rayyan Tourism Investment Company,', 'City Tower, West Bay, Doha, Qatar.', 'P.O. Box 22465'])" :key="index">
                {{ line }}
              </p>
              <p class="artic-footer__phone">{{ contact.field_telephone || 'Tel: +974 44223888' }}</p>
              <p>{{ contact.field_fax || 'Fax: +974 44223800' }}</p>
              <div class="artic-footer__career">
                <h3>Career</h3>
                <a :href="`mailto:${contact.field_career || 'recruitment@artic.com.qa'}`">
                  {{ contact.field_career || 'recruitment@artic.com.qa' }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="artic-footer__links-row">
          <nav class="artic-footer__legal" aria-label="Legal links">
            <NuxtLink v-for="link in legalLinks" :key="link.title" :to="link.href">
              {{ link.title }}
            </NuxtLink>
          </nav>

          <nav class="artic-footer__social" aria-label="Social media links">
            <a v-for="link in socialLinks" :key="link.title" :href="link.href" target="_blank" rel="noopener">
              {{ link.title }}
            </a>
          </nav>
        </div>

        <div class="artic-footer__bottom">
          <p>{{ contact.field_copyright || '@2024 Al-Rayyan Tourism Investment Co. (ARTIC) All rights reserved' }}</p>
        </div>
      </div>
    </footer>

    <!-- SCROLL BUTTON -->
    <button
      @click="scrollToTop"
      :class="['artic-footer__scroll-top', { active: isScrolled }]"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  </div>
</template>

<style scoped>
.artic-footer {
  background: #253f70;
  color: #fff;
  font-family: var(--font-secondary);
  padding: 60px 0 24px;
}

.artic-footer__inner {
  width: min(100%, 1786px);
  margin: 0 auto;
  padding: 0 52px;
}

.artic-footer__top {
  display: grid;
  grid-template-columns: minmax(360px, 1fr) minmax(180px, 260px) minmax(420px, 1fr);
  gap: 72px;
  min-height: 450px;
  padding-bottom: 60px;
}

.artic-footer h3 {
  margin: 0 0 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;
}

.artic-footer p,
.artic-footer a {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
}

.artic-footer a {
  text-decoration: none;
}

.artic-footer__brand-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.artic-footer__brand {
  display: inline-flex;
  width: min(306px, 100%);
}

.artic-footer__brand img {
  width: 100%;
  height: auto;
}

.artic-footer__hours h3 {
  font-size: 17px;
  margin-bottom: 6px;
}

.artic-footer__hours p,
.artic-footer__office p {
  margin: 0;
}

.artic-footer__site {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.artic-footer__site a {
  line-height: 1.6;
}

.artic-footer__contact {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
}

.artic-footer__phone {
  padding-top: 34px;
}

.artic-footer__business {
  margin-top: 46px;
}

.artic-footer__business a,
.artic-footer__career a {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.artic-footer__career {
  margin-top: 34px;
}

.artic-footer__links-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 170px;
  padding-bottom: 40px;

}

.artic-footer__legal,
.artic-footer__social {
  display: flex;
  align-items: center;
}

.artic-footer__legal {
  flex: 0 0 auto;
}

.artic-footer__social {
  flex: 1 1 auto;
}

.artic-footer__legal a,
.artic-footer__social a {
  position: relative;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  white-space: nowrap;
}

.artic-footer__legal a:not(:last-child),
.artic-footer__social a:not(:last-child) {
  margin-right: 62px;
}

.artic-footer__legal a:not(:last-child)::after,
.artic-footer__social a:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: -32px;
  width: 1px;
  height: 19px;
  background: rgba(255, 255, 255, 0.65);
  transform: translateY(-50%);
}

.artic-footer__social {
  justify-content: flex-start;
}

.artic-footer__social a:not(:last-child) {
  margin-right: 32px;
}

.artic-footer__social a:not(:last-child)::after {
  right: -16px;
}

.artic-footer__bottom {
  padding-top: 30px;
}

.artic-footer__bottom p {
  margin: 0;
  font-size: 15px;
  line-height: 1.3;
}

.artic-footer__scroll-top {
  display: none;
  position: fixed;
  right: 20px;
  bottom: 22px;
  z-index: 999;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 28px;
  line-height: 1;
  padding: 0;
}

.artic-footer__scroll-top.active {
  display: block;
}

@media (max-width: 1199.98px) {
  .artic-footer__top,
  .artic-footer__contact {
    grid-template-columns: 1fr 1fr;
    gap: 42px;
  }

  .artic-footer__links-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 34px;
  }

  .artic-footer__contact,
  .artic-footer__links-row {
    grid-column: 1 / -1;
  }

  .artic-footer__top {
    min-height: 0;
  }
}

@media (max-width: 767.98px) {
  .artic-footer {
    padding: 42px 0 22px;
  }

  .artic-footer__inner {
    padding: 0 24px;
  }

  .artic-footer__top,
  .artic-footer__links-row,
  .artic-footer__email-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .artic-footer__brand-area {
    gap: 70px;
  }

  .artic-footer p,
  .artic-footer a {
    font-size: 12px;
  }

  .artic-footer h3 {
    font-size: 17px;
  }

  .artic-footer__legal,
  .artic-footer__social {
    flex-wrap: wrap;
    gap: 18px 28px;
    justify-content: flex-start;
  }

  .artic-footer__legal a,
  .artic-footer__social a {
    font-size: 12px;
  }

  .artic-footer__legal a:not(:last-child),
  .artic-footer__social a:not(:last-child) {
    margin-right: 0;
  }

  .artic-footer__legal a::after,
  .artic-footer__social a::after {
    display: none;
  }

  .artic-footer__bottom p {
    font-size: 12px;
  }
}
</style>
