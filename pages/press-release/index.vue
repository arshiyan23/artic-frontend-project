<template>
  <div class="press-release-page-template" tabindex="0" ref="main">
    <Loader :loading="isLoading"></Loader>

    <Head>
      <Title>{{ pressReleaseList?.list_page_meta_tags?.meta_title }}</Title>
      <Meta name="description" :content="pressReleaseList?.list_page_meta_tags?.meta_description" />
    </Head>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="start-page pt-75">
          <!-- site-breadcrumbs -->
          <div class="site-breadcrumbs pt-md-5 pt-3 mt-3 pb-md-4 pb-3">
            <div class="container">
              <ol class="d-flex align-items-center p-0 m-0">
                <li><a href="/">Home</a></li>
                <li><a href="/media">Media</a></li>
                <li><a href="/press-release">Press Release</a></li>
              </ol>
            </div>
          </div>
          <!-- ===================== -->
          <!-- Press Release Section -->
          <!-- ===================== -->
          <div class="page-body">
            <div class="press-release-section bg-white">
              <div class="container">
                <!-- Header -->
                <div class="section-head d-flex justify-content-between align-items-center">
                  <!-- L -->
                  <div class="heading-l">
                    <h2 tabindex="0" class="page-main-heading">PRESS RELEASE</h2>
                    <p class="mb-md-4 mb-2 gsap_page_paragrap">Keep up to date with all the latest news, press release and media content
                      from
                      the
                      Artic.</p>
                  </div>
                  <!-- R -->
                  <div class="heading-r d-flex justify-content-between align-items-center gsapSection3paragraph">
                    <div class="sort-by d-flex">
                      <div class="Sortby-filter year-sec d-flex border">
                        <span tabindex="0">Year</span>
                        <custom-select tabindex="0" v-model="selectedYear" placeholder="2024" :options="yearsList"
                          @change="sortByYear"></custom-select>
                      </div>
                    </div>
                    <div class="sort-by d-flex">
                      <div class="Sortby-filter d-flex border">
                        <span>Sort</span>
                        <custom-select tabindex="0" v-model="sortBy" placeholder="ASC" :options="sortedList"
                          @change="sortByFN"></custom-select>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Body -->
                <div class="section-body">
                  <!-- Loader -->
                  <div v-if="isLoading">
                    <div class="flex items-center space-x-6 mb-4">
                      <USkeleton class="h-[60px] w-[150px] me-4" />
                      <USkeleton class="h-[60px] w-full" />
                      <USkeleton class="h-[60px] w-[150px] ms-3" />
                    </div>

                    <div class="flex items-center space-x-6 mb-4">
                      <USkeleton class="h-[60px] w-[150px] me-4" />
                      <USkeleton class="h-[60px] w-full" />
                      <USkeleton class="h-[60px] w-[150px] ms-3" />
                    </div>

                    <div class="flex items-center space-x-6">
                      <USkeleton class="h-[60px] w-[150px] me-4" />
                      <USkeleton class="h-[60px] w-full" />
                      <USkeleton class="h-[60px] w-[150px] ms-3" />
                    </div>
                  </div>
                  <div class="press-release-container" v-if="!isLoading">
                    <!-- Loop -->
                    <div class="press-release-row justify-between gsapSection3paragraph" v-for="(item, index) in pressReleaseList.data"
                      :key="index">
                      <div class="press-release-content d-flex flex-1">
                        <!-- Date / Category -->
                        <p tabindex="0" class="pr-date-categories pe-lg-3 lg:!min-w-[233px]">
                          <span class="me-2">{{ formatDate(item?.field_published_date) }}</span>
                        </p>
                        <!-- Description -->
                        <a :href="'press-release/' + item?.id">
                          <p class="pr-description cursor-pointer">
                            {{ item?.title }}
                          </p>
                        </a>
                      </div>
                      <div class="press-release-meta d-flex gap-3 ml-auto ">

                        <a target="_blank" :href="getPressDownloadLink(item?.field_download)"
                          class="btn-white align-self-start" v-if="item?.field_download?.length > 0">
                          <span>Arabic</span>
                          <i class="bi bi-arrow-down"></i>
                        </a>

                        <a target="_blank" :href="getPressEnglishDownloadLink(item?.field_download_english)"
                          class="btn-white align-self-start" v-if="item?.field_download_english?.field_media_document">
                          <span>English</span>
                          <i class="bi bi-arrow-down"></i>
                        </a>

                        <button class="btn-share" @click="openSharePopup(item, $event)" aria-label="Share"
                          aria-labelledby="shareBtn" title="Share">
                          <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7.74745 10.3487L4.94812 8.82199C4.58265 9.2127 4.10811 9.48445 3.58617 9.60192C3.06423 9.71939 2.51902 9.67715 2.0214 9.48069C1.52378 9.28423 1.09676 8.94263 0.795833 8.50029C0.494905 8.05795 0.333984 7.53533 0.333984 7.00033C0.333984 6.46533 0.494905 5.9427 0.795833 5.50037C1.09676 5.05803 1.52378 4.71643 2.0214 4.51997C2.51902 4.32351 3.06423 4.28127 3.58617 4.39874C4.10811 4.51621 4.58265 4.78795 4.94812 5.17866L7.74812 3.652C7.58939 3.02264 7.66565 2.35699 7.9626 1.77984C8.25955 1.20269 8.75681 0.753652 9.36116 0.516907C9.96551 0.280162 10.6355 0.271962 11.2454 0.493845C11.8554 0.715728 12.3635 1.15246 12.6745 1.72217C12.9855 2.29188 13.078 2.95546 12.9347 3.58852C12.7914 4.22157 12.4222 4.78063 11.8962 5.16091C11.3702 5.54119 10.7235 5.71657 10.0775 5.65417C9.43142 5.59178 8.8303 5.2959 8.38679 4.82199L5.58679 6.34866C5.69426 6.77623 5.69426 7.22376 5.58679 7.65133L8.38679 9.178C8.83052 8.70432 9.43178 8.40874 10.0779 8.34667C10.7239 8.28459 11.3705 8.46027 11.8963 8.84079C12.4221 9.2213 12.7911 9.78053 12.9341 10.4136C13.077 11.0467 12.9842 11.7103 12.673 12.2798C12.3618 12.8494 11.8535 13.2859 11.2434 13.5075C10.6334 13.7291 9.96347 13.7206 9.35923 13.4837C8.75499 13.2467 8.25793 12.7975 7.96121 12.2202C7.66449 11.6429 7.58849 10.9773 7.74745 10.348M3.00079 8.33333C3.35441 8.33333 3.69355 8.19285 3.9436 7.9428C4.19365 7.69276 4.33412 7.35362 4.33412 7C4.33412 6.64637 4.19365 6.30723 3.9436 6.05719C3.69355 5.80714 3.35441 5.66666 3.00079 5.66666C2.64717 5.66666 2.30803 5.80714 2.05798 6.05719C1.80793 6.30723 1.66745 6.64637 1.66745 7C1.66745 7.35362 1.80793 7.69276 2.05798 7.9428C2.30803 8.19285 2.64717 8.33333 3.00079 8.33333ZM10.3341 4.33333C10.6877 4.33333 11.0269 4.19285 11.2769 3.9428C11.527 3.69276 11.6675 3.35362 11.6675 2.99999C11.6675 2.64637 11.527 2.30723 11.2769 2.05719C11.0269 1.80714 10.6877 1.66666 10.3341 1.66666C9.9805 1.66666 9.64136 1.80714 9.39131 2.05719C9.14126 2.30723 9.00079 2.64637 9.00079 2.99999C9.00079 3.35362 9.14126 3.69276 9.39131 3.9428C9.64136 4.19285 9.9805 4.33333 10.3341 4.33333ZM10.3341 12.3333C10.6877 12.3333 11.0269 12.1929 11.2769 11.9428C11.527 11.6928 11.6675 11.3536 11.6675 11C11.6675 10.6464 11.527 10.3072 11.2769 10.0572C11.0269 9.80714 10.6877 9.66666 10.3341 9.66666C9.9805 9.66666 9.64136 9.80714 9.39131 10.0572C9.14126 10.3072 9.00079 10.6464 9.00079 11C9.00079 11.3536 9.14126 11.6928 9.39131 11.9428C9.64136 12.1929 9.9805 12.3333 10.3341 12.3333Z"
                              fill="#292929" />
                          </svg>
                          <span id="shareBtn" class="sr-only">Share</span>
                        </button>
                      </div>
                    </div>
                    <!-- Pagination -->
                    <div class="text-center mb-md-5 mb-4 pb-lg-4">
                      <div class="site-pagination gsapSection3Heading">
                        <button :class="{ 'disabled': offSet === 0 }" v-show="pressReleaseList.data.length>20"
                          class="backbtn" @click="fetchPrevPage" aria-label="Previous Page" title="Previous Page">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                          </svg>
                          <span id="backBtn" class="hidden">Previous Page</span>
                        </button>
                        <ul class="justify-content-center">
                          <li v-for="page in pageCount" :key="page" :class="{ 'active': currentPage === page }">
                            <a href="javascript:void(0);" :aria-label="'Page ' + page" @click="goToPage(page)">{{ page
                              }}</a>
                          </li>
                        </ul>
                        <button class="nextbtn" v-show="pressReleaseList.data.length>20" href="javascript:void(0);"
                          :class="{ 'disabled': isLastPage }" @click="fetchNextPage" aria-label="Next Page"
                          title="Next Page">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                          </svg>
                          <span id="nextBtn" class="hidden">Next Page</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Data not found -->
                  <div class="p-3 text-center ">
                    <p tabindex="0" class="md:text-[20px] text-gray-500"
                      v-if="pressReleaseList?.data?.length === 0 && !isLoading">Data not found.</p>
                  </div>
                </div><!-- End Body -->
              </div>
            </div>
          </div>
        </div>
        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </div>
  <!-- Share Popup -->
  <div v-if="sharePopup" ref="sharePopup" class="share-popup-wrap" tabindex="0" role="dialog">
    <div class="share-popup-content">
      <button @click.stop="closeSharePopup" ref="closeSharePopupRef" class="close-button" tabindex="0"
        aria-label="close popup">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#EFEFEF" />
          <path d="M20 20L15 15M20 20L25 25M20 20L25 15M20 20L15 25" stroke="black" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="share-popup-body d-flex align-items-center gap-3">
        <h2 tabindex="0">Share Press release article</h2>
        <div class="sharepopup-contant">
          <SocialShare tabindex="0" network="facebook" label="true" :url="shareItem.links.self.href">
            <template #icon><img title="facebook" src="../../assets/img/share/facebook.svg" alt="facebook"></template>
            <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
          </SocialShare>
          <SocialShare tabindex="0" network="twitter" label="true" :url="shareItem.links.self.href">
            <template #icon><img title="twitter" src="../../assets/img/share/X.svg" alt="X"></template>
            <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
          </SocialShare>
          <SocialShare tabindex="0" network="linkedin" label="true" :url="shareItem.links.self.href">
            <template #icon><img title="linkedin" src="../../assets/img/share/linkedin.svg" alt="linkedin"></template>
            <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
          </SocialShare>
          <SocialShare tabindex="0" network="email" label="true" :url="shareItem.links.self.href" ref="shareEmail"
            @keydown="handleKeydown">
            <template #icon><img title="email" src="../../assets/img/share/email.svg" alt="email"></template>
            <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
          </SocialShare>
        </div>
      </div>
    </div>
  </div>
  <!-- End of popup -->
</template>

<script>
  export default {
    data() {
      return {
        sharePopup: false,
        shareItem: null,
        shareClickedItem: null
      };
    },
    watch: {
      sharePopup(newValue) {
        if (newValue) {
          this.$nextTick(() => {
            this.$refs.sharePopup.focus();
          });
        }
      }
    },
    methods: {
      // Share Popup - 
      openSharePopup(item, event) {
        this.sharePopup = true;
        this.shareItem = item;
        this.shareClickedItem = event.target.closest('button');
      },
      closeSharePopup(item) {
        this.sharePopup = false,
          this.shareItem = null;
        if (this.shareClickedItem) {
          this.$nextTick(() => {
            this.shareClickedItem.focus();
          });
        }
      }

    }
  };
</script>
<script setup>
    import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
    import gsap from 'gsap';
    import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
    import { animateTitleLines, animateTitleWords } from '~/helpers/gsap/title-animation';
    import { initPortfolioImageAnimation,initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';


  const config = useRuntimeConfig();
  
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
    const main = ref(null);
    let ctx = null;
    // Animation on mount
    const runAnimationSmother = (event = true) => {
      ctx = gsap.context(async () => {
        await InitSmoothness(event).then((s) => {
          animateTitleWords('.page-main-heading','.page-main-heading', 50, 1, 'power2.out', 0.2);
          animateTitleLines('.gsap_page_paragrap', 108, 1, 'power1.out', 3);

          // Media Image Slide Down
          initSlidingAnimation(".gsapYPartners200", ".gsapYPartners200", 70, 2, 0.6, "Power2.out");
          initPortfolioImageAnimation(".gsap_video_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');
          initSlidingAnimation(".gsapSection3Heading", ".gsapSection3Heading", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".gsapSection3paragraph", ".gsapSection3paragraph", 130, 2, 0.3, "Power1.out");

        })
          .catch(e => {
            console.log(e);
          });
      }, main.value);
    };
    
    onMounted(async () => {
      await nextTick();
      runAnimationSmother();
    });

    onUnmounted(() => {
      if (ctx) ctx.revert();
      pauseSmoother();
    });
  
  // Sort by order
  const sortedList = ['ASC', 'DESC', 'Older values']
  const sortBy = ref(sortedList[0])
  // Years
  const currentYear = new Date().getFullYear();
  const startYear = 2004;
  const endYear = currentYear;
  const yearsList = Array.from({ length: endYear - startYear + 1 }, (v, i) => endYear - i);
  const selectedYear = ref(currentYear);
  const pressReleaseList = useState('pressReleaseList');
  const isLoading = ref(false);
  // Pagination
  const totalItems = ref(0);
  const itemParPage = ref(20);
  const offSet = ref(0);

  const currentPage = computed(() => Math.ceil(offSet.value / itemParPage.value) + 1);
  const pageCount = computed(() => Math.ceil(totalItems.value / itemParPage.value));
  const isLastPage = computed(() => currentPage.value === pageCount.value);



  const closeSharePopupRef = ref(null);
  const handleKeydown = () => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      nextTick(() => {
        closeSharePopupRef.value?.focus();
      });
      window.scrollTo({ behavior: 'smooth' });
    }
  }
  // Default Data api call
  const fetchRecord = async () => {
    isLoading.value = true;
    const { data: pressRelease } = await useFetch(apiBaseURL + `/jsonapi/node/press_release?fields[node--press_release]=field_published_date,title,field_download,field_download_english&page[offset]=${offSet.value}&page[limit]=${itemParPage.value}`, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      }
    });
    pressReleaseList.value = pressRelease || [];
    totalItems.value = pressRelease?.value?.meta?.count || 0;
    isLoading.value = false;
  };

  // Helping Functions
  const fetchNextPage = async () => {
    if (isLastPage.value) return;
    offSet.value += itemParPage.value;
    await fetchRecord();
  };
  const fetchPrevPage = async () => {
    if (offSet.value === 0) return;
    offSet.value -= itemParPage.value;
    await fetchRecord();
  };
  const goToPage = async (page) => {
    offSet.value = (page - 1) * itemParPage.value;
    await fetchRecord();
  };

  // Fetch initial news data
  fetchRecord();
  // @Filter
  // sort By Year
  async function sortByYear(e) {
    isLoading.value = true;
    selectedYear.value = e;
    //const URL = `/jsonapi/node/press_release?fields[node--press_release]=field_published_date,title,field_download,field_download_english&filter[datefilter][condition][path]=field_published_date&filter[datefilter][condition][operator]=STARTS_WITH&filter[datefilter][condition][value]=${e}&page[offset]=${offSet.value}&page[limit]=${itemParPage.value}`;
    const URLS = `/jsonapi/node/press_release?fields[node--press_release]=field_published_date,title,field_download,field_download_english&sort[sort-field_published_date][path]=field_published_date&filter[datefilter][condition][path]=field_published_date&filter[datefilter][condition][operator]=STARTS_WITH&filter[datefilter][condition][value]=${e}&sort[sort-field_published_date][direction]=${sortBy.value}&page[offset]=${offSet.value}&page[limit]=${itemParPage.value}`;
    const pressReleaseByCountry = await useFetch(apiBaseURL + URLS, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      }
    });
    pressReleaseList.value = pressReleaseByCountry?.data || [];
    totalItems.value = pressReleaseByCountry?.value?.meta?.count || 0;
    isLoading.value = false;
  }
  // sort By Country
  async function sortByFN(e) {
    isLoading.value = true;
    sortBy.value = e;
    const URLS = `/jsonapi/node/press_release?fields[node--press_release]=field_published_date,title,field_download,field_download_english&sort[sort-field_published_date][path]=field_published_date&filter[datefilter][condition][path]=field_published_date&filter[datefilter][condition][operator]=STARTS_WITH&filter[datefilter][condition][value]=${selectedYear.value}&sort[sort-field_published_date][direction]=${e}&page[offset]=${offSet.value}&page[limit]=${itemParPage.value}`;

    const pressReleaseByCountry = await useFetch(apiBaseURL + URLS, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      }
    });
    pressReleaseList.value = pressReleaseByCountry?.data || [];
    totalItems.value = pressReleaseByCountry?.value?.meta?.count || 0;
    isLoading.value = false;
  }
  // =================
  // Helping Functions
  // =================
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return dateString ? new Date(dateString).toLocaleDateString('en-US', options) : '';
  };
  const getPressDownloadLink = (downloadItem) => {
    return imgBaseURL + downloadItem[0]?.field_media_document?.uri?.url || '';
  }
  const getPressEnglishDownloadLink = (downloadItem) => {
    return imgBaseURL + downloadItem?.field_media_document?.uri?.url || '';
  }

</script>