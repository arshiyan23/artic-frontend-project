<template>
  <Head>
    <Title>{{ portfolioList?.list_page_meta_tags?.meta_title }}</Title>
    <Meta name="description" :content="portfolioList?.list_page_meta_tags?.meta_description" />
  </Head>
  <Loader :loading="isLoading"></Loader>
  <div ref="main">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="portfolio-listing-p" ref="pageTopPosition">
          <div class="start-page pt-75">
            <section id="portfolio-listing" class="portfolio-list pt-2" ref="pageHeading">
              <div class="container">
                <div class=" section-header text-start d-flex justify-content-between align-items-center">
                  
                  <h1 tabindex="0" class=" arfs-2 page-main-heading">
                    Our investment portfolio
                  </h1>

                  <button tabindex="0" @click="showPopup" 
                    class="btn-white align-self-start ">
                    <span>View ARTIC Investment</span>
                    <i class="bi bi-arrow-right"></i>
                  </button>

                </div>

                <div class="breadcrumbs-list">
                  <div class="container">
                    <div class="d-flex justify-content-between align-items-center position-relative">
                      <div class="filter d-flex">

                        <span class="dn-m mr-2">Filter by :</span>
                        <ol class="dn-m">
                          <li class="firstli" ><a href="javascript:void(0)"
                              :class="defaultCategory=='Hotels' ? 'selected' : ''" @click="getFilter('Hotels')"><span
                                class="textfilter">Hotel</span><span class="closeicon">&nbsp;</span></a></li>
                          <li><a href="javascript:void(0)" :class="defaultCategory=='Retail' ? 'selected' : ''"
                              @click="getFilter('Retail')"><span class="textfilter">Retail</span><span
                                class="closeicon">&nbsp;</span></a></li>
                          <li><a href="javascript:void(0)" :class="defaultCategory=='Residences' ? 'selected' : ''"
                              @click="getFilter('Residences')"><span class="textfilter">Residential</span><span
                                class="closeicon">&nbsp;</span></a></li>
                          <li><a href="javascript:void(0)" :class="defaultCategory=='Services' ? 'selected' : ''"
                              @click="getFilter('Services')"><span class="textfilter">Service</span><span
                                class="closeicon">&nbsp;</span></a></li>
                        </ol>

                        <span class="dn-d">Filter by :</span>
                        <!-- <USelect v-model="country" :options="countries" /> -->
                        <custom-select class="dn-d" placeholder="Category" @click="getFilter($event)"
                          :options="catType"></custom-select>
                      </div>
                      <div class="line-b"></div>
                      <div class="sort-by d-flex">
                        <div class="Sortby-filter d-flex">
                          <span>Sort by :</span>
                          <custom-select 
                            class="desktopsortby" 
                            :key="customKey" 
                            aria-label="Sort by region"
                            v-model="sortBy" 
                            placeholder="MENA" 
                            :options="allSortBy"
                            @click="sortByCountry($event)">
                          </custom-select>
                          <custom-select 
                            class="mobilrsortby" 
                            aria-label="Sort by region" 
                            v-model="sortBy"
                            placeholder="REGION" 
                            :options="allSortBy" 
                            @click="sortByCountry($event)">
                          </custom-select>
                        </div>
                        <ol class="country-list dn-m" role="list">
                          <li >
                            <NuxtLink 
                              tabindex="0" 
                              aria-label="Europe"
                              @click="sortByCountry('Europe')" 
                              :class="defaultCountry=='Europe' ? 'countrySelected' : ''" 
                              role="button" 
                              :aria-pressed="defaultCountry === 'Europe' ? 'true' : 'false'">
                              Europe
                            </NuxtLink>
                          </li>
                          <li >
                            <NuxtLink 
                              tabindex="0" 
                              @click="sortByCountry('USA')" 
                              :class="defaultCountry=='USA' ? 'countrySelected' : ''" 
                              role="button" 
                              aria-label="USA"
                              :aria-pressed="defaultCountry === 'USA' ? 'true' : 'false'">
                              USA
                            </NuxtLink>
                          </li>
                          <li >
                            <button 
                              tabindex="0" 
                              @click="clearCountry" 
                              class="btn-white align-self-start" 
                              aria-label="Click to clear selection" 
                              role="button">
                              <span>Clear</span><i class="bi bi-check"></i>
                            </button>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 gx-4 pt-5">
                  <div class="propertyNotFound" v-if="portfolioList?.data?.length==0">
                    Sorry property not available !!!
                  </div>
                  <div v-for="(portfolioLists,index) in portfolioList.data" :key="index" :class="`col pb-4 mb-1 plp-d gsapYPartners200 gsapYPartners200-${index + 1}`">
                    <div class="portfolio-list-member overflow-hidden">
                      <div class="member-img position-relative ">
                        <div tabindex="0" :aria-label="portfolioLists.field_property_image?.field_media_image?.meta.alt">
                          <img
                            :src="portfolioLists?.field_property_image?.field_media_image?.image_style_uri?.portfolio_listing"
                            class="img-fluid "
                            :alt="portfolioLists.field_property_image?.field_media_image?.meta.alt || 'Member Image'">
                        </div>
                        <div class="social">
                          <!-- <NuxLink :to="`/portfolio/${portfolioLists.id}`" class="btn btn-success">
                                        View more  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                    </svg>
                    </NuxLink> -->
                          <button type="button" @click="navigateTo('/portfolio/'+portfolioLists.field_tags.name.toLowerCase()+portfolioLists.path.alias)"
                            class="btn btn-success">
                            View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="member-info px-0">
                        <span class="list-type">{{ portfolioLists.field_tags.name }}</span>
                        <h5 class="arfs-5">
                          <a :href="`/portfolio/${portfolioLists.field_tags.name.toLowerCase()+portfolioLists.path.alias}`" :title="portfolioLists.title">
                            {{portfolioLists.title }}
                          </a>
                        </h5>
                        <span>{{ portfolioLists.field_city_country }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="portfolioList?.data?.length<portfolioList?.meta?.count"
                  class="load-more-sec m-t-0 d-flex justify-content-lg-center pt-2 justify-content-sm-start dn-m">
                  <div class="load-m-content"> <a href="javascript:void(0)" class="btn-white align-self-start"
                      @click="loadMore()"><span>Load More</span><i class="bi bi-arrow-down"></i></a>
                  </div>
                </div>

              </div>
            </section>
          </div>
          <!-- Footer -->
          <Footer />
        </div>
      </div>
    </div>
  </div>
  <!-- ====== -->
  <!-- Popups -->
  <!-- ====== -->
  <div id="articInvestment" class="artic-Investment">
    <div v-if="isPopupVisible" class="popup-overlay popup" @click.self="closePopup" tabindex="0" role="dialog">
      <div class="popup-content" ref="popupContent">

        <button class="close-btn" @click="closePopup" tabindex="0" ref="closeButtonRef" id="closeButtonRef"
          aria-label="Close Popup">
          <span class="sr-only">Close Popup</span>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#EFEFEF" />
            <path d="M20 20L15 15M20 20L25 25M20 20L25 15M20 20L15 25" stroke="black" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div class="popup-body">
          <h1 class="arfs-4 font-primary text-uppercase text-primary font-weight-medium inline-block" tabindex="0"
            ref="InvestmentPortfoiloHeading">ARTIC Investment</h1>
          <div class="pb-3 datatable">
            <div class="full-img" style="max-height:60vh;">
              <img src="/assets/img/datatable.jpg" class="img-fluid w-100" alt="ARTIC Investment Portfoilo Image" />
            </div>
          </div>

          <div class="bg-white pt-3 pb-3 justify-content-left d-flex" ref="downloadInvestmentPortfolio">
            <a download target="_blank" tabindex="0"
              :href="imgBaseURL+investment.data[0].field_plp_downloads.field_media_document.uri.url"
              class="btn-white align-self-start" @keydown="handleKeydownDownloadInvestment">
              <span>Download Investment Portfoilo</span>
              <i class="bi bi-arrow-down"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, defineComponent, computed, nextTick } from 'vue';
  import { useRoute } from 'vue-router';
  import PopupComponent from '../../components/Popup.vue';
  import { boolean } from 'zod';

  import gsap from 'gsap';
  import { InitSmoothness, pauseSmoother, refreshSmoother } from '~/helpers/gsap/InitGSAP';
  import { TitleAnimation,animateTitleLines, animateTitleWords } from '~/helpers/gsap/title-animation';
  import { initPortfolioImageAnimationWithTrigger,initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';

  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;

  const page = ref(1);
  const investment = ref();
  page.value = 15;
  const defaultCategory = ref('all');
  const defaultCategory1 = ref('all');
  const defaultCountry = ref('all');
  const portfolioList = useState('portfolioList');
  const customKey = ref(0);

  const isPopupVisible = ref(false);
  const downloadInvestmentPortfolio = ref < HTMLDivElement | null > (null);
  const pageTopPosition = ref < HTMLDivElement | null > (null);
  const InvestmentPortfoiloHeading = ref(null);
  const closeButtonRef = ref(null);
  const popupContent = ref(null);
  const isLoading = ref(false);
  const pageHeading = ref(null);

const main = ref(null);
let ctx = null;
// Animation on mount

const runAnimationSmother = (event = true) => {
  ctx = gsap.context(async () => {
      await InitSmoothness(event).then((s) => {
        animateTitleWords('.page-main-heading','.page-main-heading', 50, 1, 'power2.out', 0.2);
        animateTitleLines('.gsap_page_heading', -150, 1, 'power2.out', 0.2);
        // initPortfolioImageAnimation(".gsapPaperSlideEffectPortfolio", "img", "top 0%", "bottom 20%", 1.5, 'Power2.out');
        // initSlidingAnimation(".gsapYPartners200-1", ".gsapYPartners200-1", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-2", ".gsapYPartners200-2", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-3", ".gsapYPartners200-3", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-4", ".gsapYPartners200-4", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-5", ".gsapYPartners200-5", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-6", ".gsapYPartners200-6", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-7", ".gsapYPartners200-7", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-8", ".gsapYPartners200-8", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-9", ".gsapYPartners200-9", 110, 1, 0.3, "Power2.out");
        // initSlidingAnimation(".gsapYPartners200-10", ".gsapYPartners200-10", 110, 1, 0.3, "Power2.out");

        const maxClasses = 20; // Adjust this number as needed

        // Iterate over possible class numbers
        for (let i = 1; i <= maxClasses; i++) {
            const className = `.gsapYPartners200-${i}`;
            
            // Check if elements with the current class exist
            if (document.querySelector(className)) {
                // Initialize animation for elements with the current class
                initSlidingAnimation(className, className, 110, 1, 0.3, "Power2.out");
            }
        }

    })
    .catch(e => {
      console.log(e);
    });
  }, main.value);
}

onMounted(async () => {
  await nextTick();
  runAnimationSmother();
});

onUnmounted(() => {
  if (ctx) ctx.revert();
  pauseSmoother();
});

async function loadMore() {
  // if (ctx) ctx.revert();
  // pauseSmoother();
  isLoading.value = true;
  // Record the current scroll position
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  try {
    page.value += 15;
    const loadMorePortfolio = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country`, {
      method: "GET",
      params: {
        'page[limit]': page.value
      },
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      }
    });
    
    // Update the portfolio list
    portfolioList.value = loadMorePortfolio;
    // await runAnimationSmother(false);
    // window.scrollTo(0, scrollTop);
    isLoading.value = false;

  } catch (error) {
    console.error('Error loading more portfolio items:', error);
    isLoading.value = false;
  }

  // Ensure loading state is reset in case of error
  isLoading.value = false;
}
const showPopup = () => {
  isPopupVisible.value = true;
  document.body.classList.add('noscroll');
  nextTick(() => {
    closeButtonRef.value?.focus();
  });
};
const closePopup = () => {
  isPopupVisible.value = false;
  document.body.classList.remove('noscroll');
  const headingElement = document.querySelector('.page-main-heading');
  if (headingElement) {
    headingElement.focus();
  }
}
const handleKeydownDownloadInvestment = () => {
  if (event.key === 'Tab' && !event.shiftKey) {
    event.preventDefault();
    closeButtonRef.value?.focus();
  }
}
let combinedReqData = [
    {
      "requestId": "plp_download",
      "uri": "/jsonapi/block_content/plp_download",
      "action": "view",
      "headers": {
        "Accept": "application/json"
      }
    },
    {
      "requestId": "plp_list",
      "uri": "/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&page[limit]=15",
      "action": "view",
      "headers": {
        "Accept": "application/json"
      }
    }
  ];
  // Portfolio api call
  const { data: portfolio } = await useFetch(apiBaseURL + '/subrequests?_format=json', {
    method: "POST",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    },
    body: combinedReqData
  })
  portfolioList.value = JSON.parse(portfolio.value.plp_list.body);
  investment.value = JSON.parse(portfolio.value.plp_download.body);
  const catType = ['Hotel', 'Retail', 'Residential', 'Service']
  const allSortBy = ['MENA', 'Algeria', 'Egypt', 'Saudi Arabia', 'Qatar', 'Europe', 'USA']
  const sortBy = ref(allSortBy[0])
  const countryN = ref('REGION');
  const pType = ref('CATEGORY');

  async function sortByCountry(countryName) {
    if (ctx) ctx.revert();
    pauseSmoother();
    // Check if countryName is a string and either 'Europe' or 'USA'
    if (typeof countryName === 'string' && (countryName === 'Europe' || countryName === 'USA')) {
      if (defaultCountry.value == countryName) {
        return false;
      }
      countryN.value = countryName;
      // defaultCategory.value='all'
      defaultCountry.value = countryName;
      customKey.value = customKey.value + 1;
    }
    // Check if countryName is an event object and its target innerText is not 'REGION' or an empty string
    else if (countryName?.target?.innerText && countryName.target.innerText !== 'REGION' && !countryName.target.innerText.startsWith('MENA') && countryName.target.innerText.trim() !== '' && countryName.target.innerText !== countryN.value.toUpperCase() && countryName.target.innerText !== defaultCountry.value.toUpperCase()) {
      if (countryN.value == countryName.target.innerText) {
        return false;
      }
      countryN.value = countryName.target.innerText;
      // defaultCategory.value='all'
      defaultCountry.value = countryName.target.innerText;

    } else {
      return; // Exit the function if the conditions are not met
      isLoading.value = false;
    }
    try {
      if (defaultCategory1.value == 'all') {

        isLoading.value = true;
        const portfolioByCountry = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country,&filter[taxonomy_term--portfolio_countries][condition][path]=field_protfolio_country.name&filter[taxonomy_term--portfolio_countries][condition][operator]=IN&filter[taxonomy_term--portfolio_countries][condition][value][]=${encodeURIComponent(countryN.value)}`, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });

        // Assign the fetched data to portfolioList
        portfolioList.value = portfolioByCountry;
        isLoading.value = false;

      } else {

        isLoading.value = true;
        const portfolioByCountry = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&filter[taxonomy_term--tags][condition][path]=field_tags.name&filter[taxonomy_term--tags][condition][operator]=IN&filter[taxonomy_term--tags][condition][value][]=${defaultCategory1.value}&filter[taxonomy_term--portfolio_countries][condition][path]=field_protfolio_country.name&filter[taxonomy_term--portfolio_countries][condition][operator]=IN&filter[taxonomy_term--portfolio_countries][condition][value][]=${encodeURIComponent(countryN.value)}`, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });

        // Assign the fetched data to portfolioList
        portfolioList.value = portfolioByCountry;
        isLoading.value = false;

      }

    } catch (error) {
      console.error('Error fetching portfolio by country:', error);
      isLoading.value = false;
    }
    isLoading.value = false;
    runAnimationSmother();
  }
  async function getFilter(propertyType) {
    if (ctx) ctx.revert();
    pauseSmoother();
    if (!propertyType || (typeof propertyType === 'string' && propertyType.trim() === '')) {
      return; // Exit if propertyType is empty
      isLoading.value = false;
    }

    const isStringType = typeof propertyType === 'string';

    // Determine the property type
    if (isStringType && ['Hotels', 'Retail', 'Residences', 'Services'].includes(propertyType)) {
      pType.value = propertyType;
      isLoading.value = true;
    } else if (propertyType?.target?.innerText && propertyType.target.innerText !== 'CATEGORY' && propertyType.target.innerText.trim() !== '' && checkCategory(propertyType.target.innerText)) {
      pType.value = propertyType.target.innerText;
      switch (pType.value) {
        case 'Hotel':
          pType.value = 'Hotels';
          break;
        case 'HOTEL':
          pType.value = 'Hotels';
          break;
        case 'Retail':
          pType.value = 'Retail';
          break;
        case 'RETAIL':
          pType.value = 'Retail';
          break;
        case 'Residential':
          pType.value = 'Residences';
          break;
        case 'RESIDENTIAL':
          pType.value = 'Residences';
          break;
        case 'Service':
          pType.value = 'Services';
          break;
        case 'SERVICE':
          pType.value = 'Services';
          break;
        default:
          pType.value = propertyType.target.innerText;
      }
      isLoading.value = true;
    } else if (propertyType == 'all') {
      pType.value = propertyType;
      isLoading.value = true;
    }
    else {
      return; // Exit if none of the conditions match
      isLoading.value = false;
    }


    defaultCategory1.value = pType.value;
    if (defaultCategory.value === pType.value) {
      defaultCategory.value = 'all';
      defaultCategory1.value = 'all';

    }

    try {
      if (defaultCategory1.value == 'all' && defaultCountry.value == 'all') {
        sortBy.value = allSortBy[0];
        defaultCategory.value = 'all';
        defaultCategory1.value = 'all';
        // Fetch the default portfolio
        const portfolio = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&page[limit]=15`, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });

        portfolioList.value = portfolio;
      } else if (defaultCategory1.value != 'all' && defaultCountry.value == 'all') {
        sortBy.value = allSortBy[0];
        // Fetch the portfolio by filter
        const portfolioByFilter = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&filter[taxonomy_term--tags][condition][path]=field_tags.name&filter[taxonomy_term--tags][condition][operator]=IN&filter[taxonomy_term--tags][condition][value][]=${encodeURIComponent(pType.value)}`, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });
        portfolioList.value = portfolioByFilter;
        defaultCategory.value = pType.value;
        defaultCategory1.value = pType.value;
      } else if (defaultCategory1.value == 'all' && defaultCountry.value != 'all') {
        sortBy.value = allSortBy[0];
        defaultCategory.value == 'all'
        // Fetch the portfolio by filter
        const portfolioByFilter = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country,&filter[taxonomy_term--portfolio_countries][condition][path]=field_protfolio_country.name&filter[taxonomy_term--portfolio_countries][condition][operator]=IN&filter[taxonomy_term--portfolio_countries][condition][value][]=${encodeURIComponent(defaultCountry.value)}`, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });
        portfolioList.value = portfolioByFilter;
        // defaultCategory.value = pType.value;
        // defaultCategory1.value = pType.value;
      } else {

        sortBy.value = allSortBy[0];
        // Fetch the portfolio by filter
        const portfolioByFilter = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&filter[taxonomy_term--tags][condition][path]=field_tags.name&filter[taxonomy_term--tags][condition][operator]=IN&filter[taxonomy_term--tags][condition][value][]=${defaultCategory1.value}&filter[taxonomy_term--portfolio_countries][condition][path]=field_protfolio_country.name&filter[taxonomy_term--portfolio_countries][condition][operator]=IN&filter[taxonomy_term--portfolio_countries][condition][value][]=${encodeURIComponent(defaultCountry.value)}`, {
          method: "GET",
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });
        portfolioList.value = portfolioByFilter;
        defaultCategory.value = pType.value;
        defaultCategory1.value = pType.value;

      }
      isLoading.value = false;
    } catch (error) {
      console.error('Error fetching portfolio by filter:', error);
      isLoading.value = false;
    }
    isLoading.value = false;
    runAnimationSmother();
  }
  async function getFilter2(propertyType) {

    if (!propertyType || (typeof propertyType === 'string' && propertyType.trim() === '')) {
      return; // Exit if propertyType is empty
      isLoading.value = false;
    }

    const isStringType = typeof propertyType === 'string';

    // Determine the property type
    if (isStringType && ['Hotels', 'Retail', 'Residences', 'Services'].includes(propertyType)) {
      isLoading.value = true;
      // Fetch the portfolio by filter
      const portfolioByFilter = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&filter[taxonomy_term--tags][condition][path]=field_tags.name&filter[taxonomy_term--tags][condition][operator]=IN&filter[taxonomy_term--tags][condition][value][]=${encodeURIComponent(propertyType)}`, {
        method: "GET",
        headers: {
          "Authorization": `Basic ${apiAuthKey}`
        }
      });
      portfolioList.value = portfolioByFilter;
    } else if (propertyType == 'all') {
      isLoading.value = true;
      // Fetch the default portfolio
      const portfolio = await $fetch(`${apiBaseURL}/jsonapi/node/portfolio?fields[node--portfolio]=path,field_property_image,field_tags,title,field_city_country&page[limit]=15`, {
        method: "GET",
        headers: {
          "Authorization": `Basic ${apiAuthKey}`
        }
      });

      portfolioList.value = portfolio;

    }

    isLoading.value = false;
    runAnimationSmother();
  }
  

  async function clearCountry() {
    defaultCountry.value = 'all';
    customKey.value = customKey.value + 1;
    getFilter2(defaultCategory1.value);
  }
  function checkCategory(cat) {

    if (cat == 'HOTEL' && pType.value == 'Hotels') {
      return false;
    } else if (cat == 'RETAIL' && pType.value == 'Retail') {
      return false;
    } else if (cat == 'RESIDENTIAL' && pType.value == 'Residences') {
      return false;
    } else if (cat == 'SERVICE' && pType.value == 'Services') {
      return false;
    } else {
      return true;
    }
    
  }
</script>
<style scoped>
.gsapPaperSlideEffectPortfolio,
  .gsapPaperSlideEffect {
    visibility: hidden;
    position: relative;
    overflow: hidden;
    transition: none !important;
  }

  .gsapPaperSlideEffectPortfolio img,
  .gsapPaperSlideEffect img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top center !important;
    transform-origin: top;
    transition: none !important;
  }

  .propertyNotFound {
    padding: 30px 15px;
    text-align: center;
    width: 100%;
    min-height: 350px;
  }

  .countrySelected {
    color: var(--color-orange);
    font-weight: bold;
  }

  .popup-content h1 {
    padding-bottom: 40px;
  }

  .gx-4 {
    --bs-gutter-x: 2.8rem !important;
  }

  .artic-Investment .datatable {
    overflow-y: auto;
  }

  @media (max-width: 768.99px) {
    .artic-Investment .datatable .full-img {
      width: 92vw;
      overflow-y: auto;
      max-width: 1000px;
    }

    .artic-Investment .datatable img {
      width: fit-content !important;
      max-width: fit-content !important;
      height: 411px;
    }
  }

  .artic-Investment .popup-content {
    padding: 12px !important;
  }




  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100000;
  }

  .popup-content h1 {
    padding-bottom: 40px;
  }

  .popup-content {
    background: white;
    padding: 20px 20px;
    border-radius: 5px;
    position: relative;
  }

  #enquiryform .popup-content {
    max-width: 600px;
  }

  .close-btn {
    background: #fff;
    border: none;
    border-radius: 60px;
    color: #000;
    cursor: pointer;
    font-size: 32px;
    height: 40px;
    line-height: 0;
    padding: 0;
    position: absolute;
    right: 16px;
    top: 19px;
    width: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;

  }

  .close-btn:focus {
    border-color: #000;
  }
</style>