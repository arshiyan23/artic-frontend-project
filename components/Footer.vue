<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const config = useRuntimeConfig()
const route = useRoute()

const apiBaseURL = config.public.API_BASE_URL
const apiAuthKey = config.public.API_AUTH_KEY

// ✅ CORRECT (WITH BACKTICKS)
const { data: footerContact } = await useFetch(
  `${apiBaseURL}/jsonapi/block_content/footer_block`,
  {
    headers: {
      Authorization: `Basic ${apiAuthKey}`
    },
    default: () => ({ data: [] })
  }
)

const { data: social } = await useFetch(
  `${apiBaseURL}/system/menu/social-media/linkset`,
  {
    headers: {
      Authorization: `Basic ${apiAuthKey}`
    },
    default: () => ({ linkset: [] })
  }
)

const { data: privacy } = await useFetch(
  `${apiBaseURL}/system/menu/footer/linkset`,
  {
    headers: {
      Authorization: `Basic ${apiAuthKey}`
    },
    default: () => ({ linkset: [] })
  }
)

const { data: footerMenu } = await useFetch(
  `${apiBaseURL}/system/menu/footer-menu/linkset`,
  {
    headers: {
      Authorization: `Basic ${apiAuthKey}`
    },
    default: () => ({ linkset: [] })
  }
)

// scroll logic
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="footermainsec">
    <footer v-if="route.name !== 'supply-chain'" class="footer bg-purple">

      <div class="container">

        <!-- SITE MENU -->
        <ul>
          <li
            v-for="(fMenu, index) in (footerMenu?.linkset?.?.item || [])"
            :key="index"
          >
            <NuxtLink :to="fMenu.href">
              {{ fMenu.title }}
            </NuxtLink>
          </li>
        </ul>

        <!-- PRIVACY -->
        <ul>
          <template
            v-for="(privacyy, index) in (privacy?.linkset?.[0]?.item || [])"
            :key="index"
          >
            <li v-if="index !== 0">|</li>
            <li>
              <a :href="privacyy.href">
                {{ privacyy.title }}
              </a>
            </li>
          </template>
        </ul>

        <!-- SOCIAL -->
        <ul class="nav social-media">
          <template
            v-for="(item, index) in (social?.linkset?.[0]?.item || [])"
            :key="index"
          >
            <li v-if="index !== 0">|</li>
            <li>
              <a :href="item.href || '#'" target="_blank" rel="noopener">
                {{ item.title }}
              </a>
            </li>
          </template>

          <li v-if="!(social?.linkset?.[0]?.item?.length)">
            No social links
          </li>
        </ul>

        <!-- COPYRIGHT -->
        <p class="text-center">
          {{ footerContact?.data?.[0]?.field_copyright }}
        </p>

      </div>
    </footer>

    <!-- SCROLL BUTTON -->
    <button
      @click="scrollToTop"
      :class="['scroll-top', { active: isScrolled }]"
    >
      ↑
    </button>
  </div>
</template>

<style scoped>
.scroll-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.scroll-top.active {
  display: block;
}
</style>