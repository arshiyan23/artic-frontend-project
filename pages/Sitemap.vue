<template>
  <section id="sitemap" class="sitemap">
    <Head>
        <Title>Sitemap | Al Rayyan | Tourism Investment Co. (ARTIC)</Title>
        <Meta name="description" content="Sitemap - ARTIC (Al Rayyan Tourism Investment Company) " />
    </Head>
    <div class="container">
      <div class="section-header">
        <h1 class="arfs-2 m-0 font-primary page-main-heading text-uppercase text-primary font-weight-medium" tabindex="0">Sitemap</h1>
      </div>
    </div><!-- End Google Maps -->
   
    <div class="container">

      <!-- Home -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">HomePage</h2>
        <div class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex" @click="navigateTo('/')">
              <span>Home</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div>


      <!-- About Us Page -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">About Us</h2>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/about-us')">
              <span>About Artic</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/about-us')">
              <span>Board Member</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/about-us')">
              <span>Leaders Message</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex" @click="navigateTo('/about-us')">
              <span>Our Strategy</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

      </div>



      <!-- Portfolio Page -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">Portfolio</h2>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/portfolio')">
              <span>OUR INVESTMENT PORTFOLIO</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div>

      <!-- Portfolio Page -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">Sustainability</h2>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/sustainability')">
              <span>Environment Initiatives</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/sustainability')">
              <span>Social Responsibility</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div>


      <!-- Media Page -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">Media</h2>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/media')">
              <span>News</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/media')">
              <span>PRESS RELEASE</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/media')">
              <span>VIDEO GALLERY</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div>



      <!-- Contact Page -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">Contact</h2>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/contact-us')">
              <span>Send Enquiry</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/contact-us')">
              <span>Office Location</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/contact-us')">
              <span>Career</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div>



      <!-- SUPPLY CHAIN Page -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">SUPPLY CHAIN</h2>
        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/supply-chain')">
              <span>ARTIC SUPPLY CHAIN</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div>



      <!-- Site Services -->
      <div class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7" tabindex="0">Site Services</h2>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/privacy-policy')">
              <span>Privacy</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/disclaimer')">
              <span>Disclaimer</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/accessibility')">
              <span>Accessibility</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

        <div  class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex"  @click="navigateTo('/sitemap')">
              <span>Sitemap</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>

      </div>






      <!-- <div v-for="(items, sectionTitle) in groupedData" :key="sectionTitle" class="row sitemapbtn-wrap md:border-b border-[#29292933] last:border-b-0 md:pb-[60px] md:mb-[60px] pb-[22px] mb-[0px]">
        <h2 class="arfs-7">{{ sectionTitle }}</h2>
        <div v-for="item in items" :key="item.title" class="col-lg-3 sitemapbtn">
          <div class="md:mt-[24px] mt-[11px]">
            <button class="arfs-7 d-flex" @click="navigateTo(item.href)">
              <span>{{ item.title }}</span>
              <i class="img">&nbsp;</i>
            </button>
          </div>
        </div>
      </div> -->


    </div>

  </section>

  <!-- Footer -->
  <Footer />
  
</template>

<script lang="ts" setup>
  import { computed, ref } from 'vue';
  import { useFetch, useRuntimeConfig } from '#imports';

  const config = useRuntimeConfig();
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;

  // State to store fetched data
  const pageData = ref<any>(null);

    // Fetch data from API
  const { data, error } = await useFetch<any>(apiBaseURL + '/system/menu/sitemap/linkset', {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    }
  });

  if (data.value) {
    pageData.value = data.value.linkset[0].item;
  }

  // Group data by top-level hierarchy for easier processing
  const groupedData = computed(() => {
    if (!pageData.value) return {};

    const grouped: Record<string, any[]> = {};
    pageData.value.forEach((item: any) => {
      const topLevel = item.hierarchy[0];
      if (!grouped[topLevel]) {
        grouped[topLevel] = [];
      }
      if (item.hierarchy.length > 1) {
        grouped[topLevel].push(item);
      }
    });

    // Convert hierarchical groupings to meaningful section titles
    const sections: Record<string, string> = {
      '0': 'HomePage',
      '1': 'About Us',
      '2': 'Portfolio',
      '3': 'Sustainability',
      '4': 'Media',
      '5': 'Contact',
      '6': 'Supply Chain',
      '7': 'Site Services'
    };
    return Object.keys(grouped).reduce((acc: Record<string, any[]>, key) => {
      const sectionTitle = sections[key] || `Section ${key}`;
      acc[sectionTitle] = grouped[key];
      return acc;
    }, {});
  });

  // Navigation function
  const navigateTo = (href: string) => {
    window.location.href = href;
  };
  
</script>

