<template>
  <div class="details-pressrelease-template" ref="main">

    <Head>
      <Title>{{ pressRelease?.data?.metatag?.[0]?.attributes?.content }}</Title>
      <Meta name="description" :content="pressRelease?.data?.metatag?.[1]?.attributes?.content" />
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
                <li><a href="javascript:void(0);">Article</a></li>
              </ol>
            </div>
          </div>
          <!-- ===================== -->
          <!-- Press Release Details -->
          <!-- ===================== -->
          <div class="page-body">
            <!-- section 01 -->
            <div class="details-pressrelease-section bg-white">
              <div class="container">
                <!-- Start Row 01 -->
                <div class="row flex-lg-row flex-col-reverse">
                  <!-- content -->
                  <div class="col-lg-4 details-pressrelease-col-4">
                    <div class="d-flex flex-column justify-between h-100">
                      <div class="d-none d-lg-block overflow-hidden">
                        <h2 tabindex="0" class="pressRelease-title page-main-heading"
                          :title="pressRelease?.data?.title">
                          {{pressRelease?.data?.title}}
                        </h2>
                      </div>
                      <table class="w-100">
                        <tbody>
                        <tr>
                          <td tabindex="0">
                            <p>Author: {{pressRelease?.data?.field_author}}</p>
                            <hr class="gsapX-line1">
                          </td>
                          
                        </tr>
                        <tr>
                          <td tabindex="0">
                            <p>{{ formatDate(pressRelease?.data?.field_published_date)}}</p>
                            <hr class="gsapX-line2">
                            </td>
                        </tr>
                        <tr>
                          <td tabindex="0">
                            <p>Reading Time: {{pressRelease?.data?.field_reading_time}}</p>
                            <hr class="gsapX-line3">
                            </td>
                        </tr>
                        <tr>
                          <td style="padding: 0px 0px;">
                            <div class="d-flex justify-between align-items-center w-100 flex-wrap gap-3">
                              <span tabindex="0" class="">Download</span>
                              <div class="d-flex gap-2 justify-end">
                                <a aria-label="Download Arabic PDF" target="_blank"
                                  :href="getPressDownloadLink(pressRelease?.data?.field_download)"
                                  class="btn-white align-self-start"
                                  v-if="pressRelease?.data?.field_download?.length > 0">
                                  <span>Arabic</span>
                                  <i class="bi bi-arrow-down"></i>
                                </a>

                                <a aria-label="Download English PDF" target="_blank"
                                  :href="getPressEnglishDownloadLink(pressRelease?.data?.field_download_english)"
                                  class="btn-white align-self-start"
                                  v-if="pressRelease?.data?.field_download_english?.field_media_document">
                                  <span>English</span>
                                  <i class="bi bi-arrow-down"></i>
                                </a>
                              </div>
                            </div>
                            <hr class="gsapX-line3">
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex align-items-center justify-content-md-between">
                              <span class="pe-2" tabindex="0">Share:</span>
                              <div class="share-popup-body d-flex gap-3 justify-end">
                                <SocialShare tabindex="0" network="facebook" label="true"
                                  :url="imgBaseURL+route.fullPath">
                                  <template #icon><img width="30" height="30" src="../../assets/img/share/facebook.svg"
                                      alt="facebook" title="facebook"></template>
                                  <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                                </SocialShare>
                                <SocialShare tabindex="0" network="twitter" label="true"
                                  :url="imgBaseURL+route.fullPath">
                                  <template #icon><img width="30" height="30" title="twitter"
                                      src="../../assets/img/share/X.svg" alt="X"></template>
                                  <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                                </SocialShare>
                                <SocialShare tabindex="0" network="linkedin" label="true"
                                  :url="imgBaseURL+route.fullPath">
                                  <template #icon><img width="30" height="30" title="linkedin"
                                      src="../../assets/img/share/linkedin.svg" alt="linkedin"></template>
                                  <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                                </SocialShare>
                                <SocialShare tabindex="0" network="email" label="true" :url="imgBaseURL+route.fullPath">
                                  <template #icon><img width="30" height="30" title="email"
                                      src="../../assets/img/share/email.svg" alt="email"></template>
                                  <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                                </SocialShare>

                                <!-- <a target="_blank" :href="pressRelease?.data?.field_facebook_share"><img src="../../assets/img/share/facebook.svg" alt="facebook"><span class="hidden">facebook</span></a>
                                      <a target="_blank" :href="pressRelease?.data?.field_linkedin_share"><img src="../../assets/img/share/linkedin.svg" alt="linkedin"><span class="hidden">linkedin</span></a>
                                      <a target="_blank" :href="pressRelease?.data?.field_wats_app_share"><img src="../../assets/img/share/whatsapp.svg" alt="whatsapp"><span class="hidden">whatsapp</span></a>
                                      <a target="_blank" :href="pressRelease?.data?.field_twitter_share"><img src="../../assets/img/share/X.svg" alt="X"><span class="hidden">X</span></a>
                                      <a target="_blank" :href="pressRelease?.data?.field_thread_share"><img src="../../assets/img/share/threads.svg" alt="threads"><span class="hidden">threads</span></a>
                                      <a target="_blank" :href="pressRelease?.data?.field_email"><img src="../../assets/img/share/email.svg" alt="email"><span class="hidden">email</span></a> -->
                              </div>
                            </div>
                            <hr class="gsapX-line3">
                          </td>
                        </tr>
                      </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- slider -->
                  <div class="col-lg-8 details-pressrelease-col-8">
                    <!-- Mobile -->
                    <h2 class="mb-pressRelease-title" tabindex="0">
                      {{pressRelease?.data?.title}}
                    </h2>

                    <div class="mediaListing-slider h-100 ">
                      <div id="SliderNewsLG_1" class="carousel h-100 slide" data-bs-ride="carousel">

                        <div class="carousel-indicators d-md-none d-flex">
                          <button tabindex="0" v-for="(image, index) in pressRelease?.data?.field_press_release_gallery"
                            :key="index" type="button" :data-bs-target="'#carouselExampleIndicators'"
                            :data-bs-slide-to="index" :class="{ active: index === 0 }"
                            aria-label="Slide {{ index + 1 }}"></button>
                        </div>

                        <div class="carousel-inner h-100 ">
                          <div tabindex="0" v-for="(image, index) in pressRelease?.data?.field_press_release_gallery"
                            :key="index" :class="{ 'h-100 carousel-item gsap_video_paperAnimation gsapPaperSlideEffect': true, 'active': index === 0 }">
                            <img :src="getImageUrl(image?.field_media_image?.image_style_uri?.press_release_banner)"
                              class="d-block w-100 press_release_banner"
                              :alt="image?.field_media_image?.meta?.alt || 'Slide Image'">
                          </div>
                        </div>
                        <!-- Arrows -->
                        <div v-if="pressRelease?.data?.field_press_release_gallery?.length > 1">
                          <button aria-label="Previous slide" tabindex="0"
                            v-if="pressRelease?.data?.field_press_release_gallery?.length > 0"
                            class="carousel-control-prev d-md-block d-none" type="button"
                            data-bs-target="#SliderNewsLG_1" data-bs-slide="prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-arrow-left mx-auto" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button aria-label="Next slide" tabindex="0"
                            v-if="pressRelease?.data?.field_press_release_gallery?.length > 0"
                            class="carousel-control-next d-md-block d-none" type="button"
                            data-bs-target="#SliderNewsLG_1" data-bs-slide="next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-arrow-right mx-auto" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Row -->
                <!-- Start Row 02 -->
                <div class="pressRelease_Content_Section">
                  <div class="row">
                    <div class="col-lg-4  d-lg-block d-none">
                      <!-- <img :src="getImageUrl(pressRelease?.data?.field_left_image[0]?.field_media_image?.uri?.url)" alt="" class="lg:mb-[70px] img-fluid" /> -->
                      <!-- <img :src="getImageUrl(pressRelease?.data?.field_left_image[1]?.field_media_image?.uri?.url)" alt="" class="img-fluid" /> -->
                    </div>
                    <div class="col-lg-8">
                      <div tabindex="0" v-html="pressRelease?.data?.body?.value" class="details-body1-content gsapSection3paragraph ">
                      </div>

                      <div class="my-[28px] d-lg-none d-block gsapSection3paragraph">
                        <!-- <img :src="getImageUrl(pressRelease?.data?.field_left_image[0]?.field_media_image?.uri?.url)" alt="" class="lg:mb-[70px] lg:h-[auto] !h-[210px] w-100 img-fluid" /> -->
                      </div>


                      <!-- Bottom part -->
                      <div tabindex="0" v-html="BodyContent2?.data?.[0]?.body?.value" class="details-body2-content gsapSection3paragraph">
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Row -->
              </div>
            </div>
            <!-- ====================== -->
            <!--      More Products     -->
            <!-- ====================== -->
            <div class="site-more-products">
              <div class="container">
                <div class="section-h">
                  <div class="d-md-block d-none gsmHeightZF">
                    <div class="site-more-products-shape-h "></div>
                    <div class="site-more-products-shape-w "></div>
                  </div>
                  <p class="more-press-heading gsapSection3paragraph" tabindex="0">More Press Release</p>
                </div>
                <div tabindex="0" class="section-body" v-if="pressRelease?.data?.field_more_press_release?.length > 0">
                  <div class="press-more-grid">
                    <!-- Loop Start -->
                    <div v-for="(item, index) in pressRelease?.data?.field_more_press_release" :key="index"
                      class="press-more-grid-item">
                      <div :id="'SliderNewsSM_' + index"
                        class="carousel mediaListing-slider sm-mediaListing-slider slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                          <!-- Slide Items -->
                          <div v-for="(image, index) in item?.field_press_release_gallery" :key="index"
                            :class="{ 'carousel-item gsap_video_paperAnimation gsapPaperSlideEffect': true, 'active': index === 0 }">
                            <img tabindex="0"
                              :src="getImageUrl(image?.field_media_image?.image_style_uri?.media_news_2)"
                              class="d-block w-100 press_release_banner"
                              :alt="image?.field_media_image?.meta?.alt || 'Slide Image'">
                          </div>
                          <!-- Arrows -->
                          <div v-if="item?.field_press_release_gallery?.length > 1">
                            <button aria-label="Previous slide" tabindex="0"
                              class="carousel-control-prev d-md-flex d-none" type="button"
                              :data-bs-target="'#SliderNewsSM_' + index" data-bs-slide="prev">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                              </svg>
                              <span class="visually-hidden">Previous</span>
                            </button>
                            <button aria-label="Next slide" tabindex="0" class="carousel-control-next d-md-flex d-none"
                              type="button" :data-bs-target="'#SliderNewsSM_' + index" data-bs-slide="next">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                              </svg>
                              <span class="visually-hidden">Next</span>
                            </button>
                          </div>
                        </div>
                        <!-- Content -->
                        <div class="carousel-item-content right-1gsapSection3paragraph ">
                          <div class="ci-content-meta">
                            <span tabindex="0" class="date">{{ formatDate(item?.field_published_date)}}</span>
                            <button tabindex="0" class="share-icon" @click="openSharePopup(item, $event)">
                              <span class="sr-only">Share</span>
                              <img src="../../assets/img/share.svg" alt="" />
                            </button>
                          </div>
                          <h4 tabindex="0" class="press-more-grid-item-title">
                            {{item?.title}}
                          </h4>
                        </div>
                      </div>
                    </div>
                    <!-- Loop End -->
                  </div>
                </div>
              </div>
            </div>
          </div><!-- End Body -->
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
      openSharePopup(item) {
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
      },
    }
  };
</script>
<script setup>
  import placeholderImage from '/image_not_available.png';
  import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
  import gsap from 'gsap';
  import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
  import { animateTitleLines, animateTitleWords } from '~/helpers/gsap/title-animation';
  import { initPortfolioImageAnimation,initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';
  import { initBatchWidthAnimation, initHeightAnimation, initWidthAnimation } from '~/helpers/gsap/LineAnimations';

  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
  const route = useRoute();
  const paramID = route.params.id;
  const isLoading = ref(false);
  const pressReleaseData = useState('pressReleaseData');


  const closeSharePopupRef = ref(null);
  const main = ref(null);
    let ctx = null;
   // Animation on mount
   const runAnimationSmother = (event = true) => {
      ctx = gsap.context(async () => {
        await InitSmoothness(event).then((s) => {
          animateTitleWords('.page-main-heading', '.page-main-heading', 150, 1, 'power1.out', 0.1, false);
          // animateTitleLines('.page-main-heading', 150, 1, 'power1.out', 3);
          animateTitleLines('.gsap_page_paragrap', 108, 1, 'power1.out', 3);

          // Media Image Slide Down
          initSlidingAnimation(".gsapYPartners200", ".gsapYPartners200", 70, 2, 0.6, "Power2.out");
          initPortfolioImageAnimation(".gsap_video_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');
          initSlidingAnimation(".gsapSection3Heading", ".gsapSection3Heading", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".gsapSection3paragraph", ".gsapSection3paragraph", 130, 2, 0.3, "Power1.out");


          // Initialize height animations
          initHeightAnimation('.gsmHeightZF', '.introduction_text', 4, 2, "power2.out", "100%", 1);


            // Initialize width animations
        setTimeout(() => {
          initBatchWidthAnimation('.gsapX-line1', 3, 0, "power2.out");
          initBatchWidthAnimation('.gsapX-line2', 3, 0, "power2.out");
          initBatchWidthAnimation('.gsapX-line3', 3, 0, "power2.out");
        }, 10);
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

  const handleKeydown = () => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      nextTick(() => {
        closeSharePopupRef.value?.focus();
      });
      window.scrollTo({ behavior: 'smooth' });
    }
  }

  // Press Release api call
  const { data: pressRelease } = await useFetch(apiBaseURL + `/jsonapi/node/press_release/${paramID}`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    }
  });
  const { data: BodyContent2 } = await useFetch(apiBaseURL + `/jsonapi/block_content/press_release_body_2`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    }
  });


  // Helping Functions
  // Function to format the date
  const getImageUrl = (uri) => {
    return uri ? (uri) : placeholderImage;
  }
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
<style>
  .pressRelease-title {
    font-size: 16px;
    line-height: 22.4px;
  }

  .mb-pressRelease-title {
    font-size: 16px;
    line-height: 22.4px;
    margin-bottom: 15px;
    display: block;
  }

  .pressRelease_Content_Section .row .col-lg-8 {
    padding-top: 20px;
  }

  .details-body2-content,
  .details-body1-content {
    margin: 0;
    font-size: 14px;
    line-height: 22.6px;
  }

  /* 
  More Products
*/
  .site-more-products {
    margin-top: 0;
    margin-bottom: 10px;
    border-top-width: 4px;
    border-top-color: #292929;
  }

  .site-more-products-shape-h {
    height: 81px;
    background-color: black;
    width: 1px;
    margin-left: 9.5px;
  }

  .site-more-products-shape-w {
    height: 1px;
    background-color: black;
    width: 20px;
  }

  .more-press-heading {
    font-size: 16px;
    line-height: 22px;
    padding-top: 20px;
    margin-bottom: 10;
  }

  .press-more-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 10px;
  }

  .press-more-grid-item {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .press-more-grid-item-title {
    font-weight: 400;
    font-size: 12px;
    line-height: 16.6px;
    font-family: var(--font-default);
  }

  /* Default height */
  .press_release_banner {
    height: 200px;
  }

  /* =========== */
  /* Media Query */
  /* =========== */
  @media (min-width: 576px) {

    .details-body2-content,
    .details-body1-content {
      font-size: 16px;
      line-height: 26px;
    }
  }

  @media (min-width: 640px) {

    .mb-pressRelease-title,
    .pressRelease-title {
      font-size: 20px;
      line-height: 36px;
    }

    .press-more-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 30px;
    }

    .press_release_banner {
      height: 380px;
    }
  }

  @media (min-width: 768px) {

    .mb-pressRelease-title,
    .pressRelease-title {
      /*display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;*/
    }

    .pressRelease_Content_Section {
      padding-top: 72px;
    }

    .details-body2-content,
    .details-body1-content {
      font-size: 20px;
      line-height: 32px;
    }

    .site-more-products {
      margin-top: 78px;
      border-top-width: 10px;
    }

    .more-press-heading {
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 21px;
    }


    .press-more-grid-item {
      margin-top: 0;
      margin-bottom: 80px;
    }

    .press-more-grid-item-title {
      font-size: 16px;
      line-height: 26px;
    }

  }

  @media (min-width: 992px) {
    .pressRelease_Content_Section .row .col-lg-8 {
      padding-top: 0px;
    }
  }

  @media (min-width: 1024px) {
    .details-pressrelease-col-4 {
      padding-right: 40px !important;
    }

    .details-pressrelease-col-8 {
      padding-left: 10px !important;
    }

    .mb-pressRelease-title,
    .pressRelease-title {
      font-size: 32px;
      line-height: 40px;
    }

    .mb-pressRelease-title {
      display: none;
    }

    .press-more-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 72px;
    }

    .press_release_banner {
      height: 656px;
    }

    .press-more-grid-item-title {
      font-size: 20px;
      line-height: 28px;
    }

  }
</style>