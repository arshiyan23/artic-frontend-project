<template>
  <Head>
    <Title>{{ pfolioDetail?.data[0]?.metatag[0]?.attributes?.content }}---</Title>
    <Meta name="description" :content="pfolioDetail?.data[0]?.metatag[1]?.attributes?.content" />
  </Head>
  <div ref="main">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="portfolio-detail-p pt-5 mt-2" tabindex="0">
          <div class="start-page pt-75">
            <section id="portfolio-detail" class="portfolio-detail pt-2 pb-0">
              <div class="container">
                <div class="section-header text-start d-flex justify-content-between align-items-center pb-4 mb-1">
                  <div class="heading-l">
                    <div class="head-bet">
                      <a @click="handleBack()" class="arfs-8 d-flex" aria-label="back button">
                        <img src="/assets/img/lucide_arrow-up.svg" class="img-fluid" alt="">
                        Back
                      </a>

                      <button @click="showPopup" class="btn-orange align-self-start" aria-label="open popup ARTIC Team"
                        role="button">
                        <span>Contact ARTIC Team</span>
                        <i class="d-flex align-items-center p-0 justify-content-center">
                          <img src="/assets/img/arrow-right-short.svg" alt="arrow">
                        </i>
                      </button>
                    </div>

                    <h1 tabindex="0" ref="pageHeadingRef"
                      class="page-main-heading arfs-2 font-primary color-primary mb-0 mt-3">
                      {{ pfolioDetail?.data[0]?.title }}</h1>
                  </div>
                  <div class="heading-r gsapHeadingPage">
                    <button @click="showPopup" class="btn-orange align-self-start">
                      <span>Contact ARTIC Team</span>
                      <i class="d-flex align-items-center p-0 justify-content-center">
                        <img src="/assets/img/arrow-right-short.svg" alt="Contact ARTIC Team">
                      </i>
                    </button>
                    <h4 class="mt-4 mb-0 pt-2 arfs-7 color-default text-uppercase" tabindex="0">
                      {{ pfolioDetail?.data[0]?.field_city_country }}</h4>
                  </div>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div class="gsapPaperSlideEffect d-flex flex-column align-items-center position-relative w-100"
                  tabindex="0" :aria-label="pfolioDetail?.data[0]?.field_hero_banner.field_media_image.meta.alt">
                  <img :src="pfolioDetail?.data[0]?.field_hero_banner?.field_media_image?.image_style_uri?.portfolio_banner"
                    class="img-fluid " :alt="pfolioDetail?.data[0]?.field_hero_banner.field_media_image.meta.alt">
                </div>
              </div>
            </section>
            <section id="portfolio-intro" class="portfolio-intro pt-0 pb-0">
              <div class="container  line-sec">
                <div class="row mb-3 intro mb-m">
                  <div class="col-lg-12 ">
                    <div class="post-box">
                      <div class="text-start hline-82">
                        <div class="lineleft gsmHeightZF-1">
                          <div class="line-create border-top-0 --hline-82">
                            <div class="verticalLine">&nbsp;</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="container">
                <div class="row mb-3 intro mb-m">

                  <div class="col-lg-3  abt-sec">
                    <div class="post-box">
                      <div class="text-start" tabindex="0">
                        <h4 class="fs-5 mb-0 text-secondary pb-2 pt-0">About</h4>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-9  mt-m-16">
                    <div class="row ">
                      <div class="col-lg-12  ">
                        <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 map-btn">
                          <div class="col-lg-7 ">
                            <div class="post-box">
                              <div tabindex="0" class="post-img pb-0 pdp-des gsapSlideTop">
                                <span v-html="pfolioDetail?.data[0]?.body.value"></span>
                                <!-- <p class="arfs-6 font-weight-medium pt-0 mt-0 pb-4">The St. Regis Bal Harbour Resort is located
                              at 9703 Collins
                              Avenue, directly opposite the luxurious Bal Harbour Shops and near Miami’s vibrant South
                              Beach. The 27-storey oceanfront property features 216 elegant rooms and suites plus eight
                              apartments.</p>
    
                            <p class="pt-0 mt-0 pb-4">The hotel frequently earns the coveted AAA Five Diamond award, the
                              Forbes
                              Five Star award, and has been named among Conde Nast Traveler’s Hot List, Travel + Leisure’s
                              It List, Robb Report’s Top Hotels, and Virtuoso’s Best of the Best.</p>
    
                            <p class="pt-0 mt-0">Amenities at The St. Regis Bal Harbour include five distinctive dining
                              outlets, a 14,000sq ft Remède Spa,two luxurious ocean-view pools, and 13,000sq ft of indoor
                              function space and several outdoor venues, ideal for grand weddings and private receptions.
                            </p> -->
                                <div class="member-info px-0 text-sm-center text-lg-start mt-3 pt-2 dn-s">
                                  <!--<a :href="apiBaseURL+pfolioDetail?.data[0]?.field_download_to_learn_more?.field_media_document?.uri?.url" target="_blank" class="btn-white align-self-start">
                                  <span>Download to Learn More</span><i
                                  class="bi bi-arrow-down"></i>
                            </a>-->
                                  <!-- <a href="#" class="btn-white align-self-start"><span>Download to Learn More</span><i
                                  class="bi bi-arrow-down"></i></a> -->
                                </div>
                              </div>

                            </div>
                          </div>

                          <div class="col-lg-5 ">
                            <div class="post-box">
                              <div tabindex="0" role="img" aria-label="Map Image"
                                class="post-img map-sec gsapMapIMG gsapPaperImgEffect">
                                <div class="mapouter">
                                  <div class="gmap_canvas">
                                    <iframe class="gmap_iframe"
                                      :src="`https://maps.google.com/maps?width=600&height=500&hl=en&q=${pfolioDetail?.data[0]?.field_map_address}&t=&z=13&ie=UTF8&iwloc=B&output=embed`"
                                      title="Map showing {{ pfolioDetail?.data[0]?.field_map_address }}" role="none">
                                    </iframe>
                                    <a href="https://embedmapfree.com">embed google map</a>
                                  </div>
                                </div>
                                <!-- <img
                                  :src="pfolioDetail?.data[0]?.field_map_image?.field_media_image?.image_style_uri?.portfolio_map_image"
                                  class="img-fluid" alt="Map Image"> -->
                              </div>
                              <div class="">
                                <div class="post-box mapdown">
                                  <p tabindex="0" role="note" aria-label="Telephone number"
                                    class="mt-4 pt-1 mt-m-20 pt-m">{{ pfolioDetail?.data[0]?.field_address }}</p>
                                  <!-- <p class="mt-5 pt-1 mt-m-20 pt-m">9703 Collins Ave<br>Bal Harbour, FL, United States</p> -->
                                  <hr class="gsapX-line1">
                                  <p tabindex="0" class="mt-0"  title="Telephone number">
                                    Tel:
                                    <NuxtLink 
                                      :to="`tel:${pfolioDetail?.data[0]?.field_telephone}`" 
                                      aria-label="Call {{ pfolioDetail?.data[0]?.field_telephone }}" 
                                      title="Telephone: {{ pfolioDetail?.data[0]?.field_telephone }}">
                                      {{ pfolioDetail?.data[0]?.field_telephone }}
                                    </NuxtLink>
                                  </p>
                                  <hr class="gsapX-line2">
                                  <a class="mt-0 onhoverlink" tabindex="0" aria-label="Visit Website"
                                    :href="pfolioDetail?.data[0]?.field_website" role="link">
                                    <p class="m-0">Visit Website</p>
                                    <!--  <a :href="pfolioDetail?.data[0]?.field_website" class="website-link btn d-flex align-items-center justify-content-between p-0" target="_blank">
                                      <span>{{pfolioDetail?.data[0]?.field_website}}</span>
                              </a>
                              <a href="https://www.marriott.com" class="website-link btn d-flex align-items-center justify-content-between p-0">
                                www.project.com
                              </a> -->
                                    <img src="/assets/img/arrow_r.svg" class="img-fluid" alt="Arrow">
                                  </a>
                                  <hr class="gsapX-line3">

                                </div>
                              </div>
                              <div
                                class="member-info px-0 text-sm-center text-lg-start pt-2 pb-4 dn-d db-m downloadbtn">
                                <a tabindex="0" href="#" class="btn-white align-self-start"><span>Download to Learn
                                    More</span><i class="bi bi-arrow-down"></i></a>
                              </div>
                            </div>
                          </div>

                        </div>


                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            <section id="portfolio-center-sec" class="portfolio-center-sec pb-1">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 ">
                    <div class="post-box">
                      <div class="post-img pb-4 gsapPaperImgEffect gsapFeatureIMGJS1" tabindex="0"
                        :aria-label="pfolioDetail?.data[0]?.field_property_gallery[0]?.field_media_image?.meta?.alt"
                        role="img">
                        <img
                          :src="pfolioDetail?.data[0]?.field_property_gallery[0]?.field_media_image?.image_style_uri?.portfolio_top_image"
                          class="--img-fluid"
                          :alt="pfolioDetail?.data[0]?.field_property_gallery[0]?.field_media_image?.meta?.alt || 'Image'">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2  dn-sm">
                  <div class="col ">
                    <div class="post-box">
                      <div class="post-img pb-0 gsapPaperImgEffect gsapFeatureIMG2" tabindex="0"
                        :aria-label="pfolioDetail?.data[0]?.field_property_gallery[1]?.field_media_image?.meta?.alt">
                        <img
                          :src="pfolioDetail?.data[0]?.field_property_gallery[1]?.field_media_image?.image_style_uri?.portfolio_left_image"
                          class="img-fluid"
                          :alt="pfolioDetail?.data[0]?.field_property_gallery[1]?.field_media_image?.meta?.alt || 'Image'">
                      </div>
                      <div class="text-start dn-m">
                        <div class="lineleft">
                          <div class="line-create border-top-0 hline gsmHeightZF-4">
                            <div class="verticalLine ">&nbsp;</div>
                          </div>
                        </div>
                      </div>
                      <div class="text-start after-top-border pt-5 pt-m">
                        <h4 tabindex="0" class="mt-3 arfs-7 mb-0">Features</h4>
                      </div>
                      <div class="row">

                        <div class="col-lg-6  leftsidef">

                        </div>


                        <div class="col-lg-6  rightf">
                          <div class="post-box">
                            <div
                              v-for="(fetures, index) in pfolioDetail?.data[0]?.field_features[0]?.field_startegic_approach">
                              <p tabindex="0" class="mt-0">{{ fetures }}</p>
                              <hr :class="`gsapX-line-loop-${index}`">
                            </div>
                          </div>
                        </div>




                      </div>



                    </div>
                  </div>

                  <div class="col">
                    <div class="post-box">
                      <div class="post-img gsapPaperImgEffect gsapFeatureIMG3" tabindex="0"
                        :aria-label="pfolioDetail?.data[0]?.field_property_gallery[2]?.field_media_image?.meta?.alt">
                        <img
                          :src="pfolioDetail?.data[0]?.field_property_gallery[2]?.field_media_image?.image_style_uri?.portfolio_right_image"
                          class="--img-fluid"
                          :aria-label="pfolioDetail?.data[0]?.field_property_gallery[2]?.field_media_image?.meta?.alt"
                          :alt="pfolioDetail?.data[0]?.field_property_gallery[2]?.field_media_image?.meta?.alt || 'Image'">
                      </div>
                    </div>
                  </div>



                </div>
                <div class="for-mobile">
                  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2">
                    <div class="col-xl-6 col-md-6 ">
                      <div class="post-box">
                        <div class="post-img gsapPaperImgEffect gsapFeatureIMG4" tabindex="0"
                          :aria-label="pfolioDetail?.data[0]?.field_property_gallery[1].field_media_image.meta.alt">
                          <img
                            :src="apiBaseURL + pfolioDetail?.data[0]?.field_property_gallery[1]?.field_media_image?.uri?.url"
                            class="img-fluid"
                            :alt="pfolioDetail?.data[0]?.field_property_gallery[1].field_media_image.meta.alt || 'Image'">
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-md-6 pt-s-20">
                      <div class="post-box">
                        <div class="post-img h-100 gsapPaperImgEffect gsapFeatureIMG5" tabindex="0"
                          :aria-label="pfolioDetail?.data[0]?.field_property_gallery[2].field_media_image.meta.alt"><img
                            :src="apiBaseURL + pfolioDetail?.data[0]?.field_property_gallery[2]?.field_media_image?.uri?.url"
                            class="img-fluid h-100"
                            :alt="pfolioDetail?.data[0]?.field_property_gallery[2].field_media_image.meta.alt || 'Image'">
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-12 col-md-12 w-100 ">
                      <div class="post-box">
                        <div class="text-start dn-m">
                          <div class="lineleft h-65">
                            <div class="line-create border-top-0 hline gsmHeightZF-2">
                              <div class="verticalLine ">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                        <div class="text-start after-top-border pt-1">
                          <h4 tabindex="0" class="mt-3 arfs-7 mb-0">Features</h4>
                        </div>
                        <div class="row">

                          <div class="col-lg-6 ">

                          </div>


                          <div class="col-lg-6 aos-init mt-2 mt-m pt-s-20 aos-animate">
                            <div class="post-box">



                              <div
                                v-for="(fetures, index) in pfolioDetail?.data[0]?.field_features[0]?.field_startegic_approach"
                                :key="index">
                                <p class="mt-0" tabindex="0">{{ fetures }}</p>
                                <hr :class="`gsapX-line5-${index + 1}`">
                              </div>


                            </div>
                          </div>




                        </div>



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="nextproject" class="a-closer-look mt-5 border-top border-black pt-0 dn-s mb-5">
              <div class="container " data-aos="fade-up">
                <div class="row mb-3 intro">
                  <div class="col-lg-12 ">
                    <div class="post-box">
                      <div class="text-start ">
                        <div class="lineleft hline-82">
                          <div class="line-create border-top-0 gsmHeightZF-3">
                            <div class="verticalLine">&nbsp;</div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div class="container " data-aos="fade-up">
                <div class="row">

                  <div class="col-lg-3 ">
                    <div class="post-box">
                      <div class="text-start after-top-border">
                        <h4 tabindex="0" class="mt-0 pt-0 arfs-7  mb-0 ">Next Project</h4>
                      </div>

                    </div>
                  </div>

                  <div class="col-lg-5  pt-5">
                    <div class="post-box">
                      <div class="pt-5 mt-5 mt-t-0 pt-t-0 nextprojecttxt">
                        <h2 tabindex="0" class="arfs-1 pb-4 mt-4 pt-3 gsapSlideTop1">
                          {{ pfolioDetail?.data[0]?.field_next_project.title }}
                          <br>
                          {{ pfolioDetail?.data[0]?.field_next_project.field_city_country }}
                        </h2>
                        <a :href="`/portfolio/${pfolioDetail?.data[0]?.field_next_project.field_tags.name.toLowerCase()+pfolioDetail?.data[0]?.field_next_project.path.alias}`"
                          class="mt-3 gsapSlideTop1 next-btn" name="next" aria-label="Next Project">
                          <span class="sr-only">Next Project</span> &nbsp;
                        </a>
                        <!-- <a href="#" class="mt-5 next-btn">&nbsp;</a> -->
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 ">
                    <div class="post-box">
                      <div class="post-img gsapPaperImgEffect gsapFeatureIMG5" tabindex="0"
                        :aria-label="pfolioDetail?.data[0]?.field_next_project?.field_property_image?.field_media_image?.meta?.alt"
                        role="img">
                        <img
                          :src="pfolioDetail?.data[0]?.field_next_project?.field_property_image?.field_media_image?.image_style_uri?.portfolio_next_image"
                          class="img-fluid w-100"
                          :aria-label="pfolioDetail?.data[0]?.field_next_project?.field_property_image?.field_media_image?.meta?.alt"
                          :alt="pfolioDetail?.data[0]?.field_next_project?.field_property_image?.field_media_image?.meta?.alt || 'Image'">
                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </section>
            <section class="mt-2 p-d-p-menu-bottom p-0 dh-d">
              <div class="contant w-100 d-flex justify-content-between align-items-center">
                <a role="button" class="btn d-flex align-item-center btn-left" @click="$router.go(-1)" href="#"><svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                  </svg><span>Previous</span> </a>
                <a role="button" class="btn" href="/portfolio">Portfolio</a>
                <a role="button" class="btn d-flex  align-item-center btn-right"
                  :href="`/portfolio/${pfolioDetail?.data[0]?.field_next_project.field_tags.name.toLowerCase()+pfolioDetail?.data[0]?.field_next_project.path.alias}`"><span>Next</span> <svg
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg></a>
              </div>
            </section>
          </div>
        </div>
        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </div>
  <!-- ====== -->
  <!-- Popups -->
  <!-- ====== -->
  <div id="enquiryform">
    <div v-if="isPopupVisible" class="popup-overlay popup" role="dialog">
      <div class="popup-content">

        <button class="close-btn" @click="closePopup" tabindex="0" ref="closeButtonRef" aria-label="Close Popup">
          <span class="sr-only">Close Popup</span>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="20" fill="#EFEFEF" />
            <path d="M20 20L15 15M20 20L25 25M20 20L25 15M20 20L15 25" stroke="black" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>

        <div>
          <Loader :loading="isLoading"></Loader>
          <h1 class="arfs-7 font-primary color-default  font-weight-medium inline-block" tabindex="0" ref="popupHeading"
            aria-label="Heading of Enquiry Form Popup">
            Enquiry Form
          </h1>
          <div class="pb-3 contact  pt-0">
            <UForm :validate="validate" :schema="schema" role="form" :state="state" class="space-y-4 email-form"
              @submit="onSubmit">
              <div class="row">
                <div class="form-group mt-3">
                  <UFormGroup name="name">
                    <UInput type="text" placeholder="Name *" class="form-control" v-model="state.name" />
                  </UFormGroup>
                </div>

                <UFormGroup name="email" class="col-md-6 form-group">
                  <UInput placeholder="Email *" class="form-control" v-model="state.email" />
                </UFormGroup>


                <UFormGroup name="phone" class="col-md-6 form-group phonenumber">
                  <UInput placeholder="Phone *" class="form-control" v-model="state.phone" type="number"
                    @keypress="isNumber($event)" />
                </UFormGroup>

              </div>
              <UFormGroup name="message" class="form-group  mt-0">
                <UTextarea type="text" placeholder="Message *" class="form-control" v-model="state.message" />
              </UFormGroup>

              <UButton type="submit" class="view-all align-self-start mt-0" tabindex="0" @keydown="handleKeydown"
                aria-label=" Enquiry Form Send">
                <span>Send</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </div>

    <PopupComponent :isVisible="isOpen" @close="isOpen = false">

      <div class="p-3">
        <div class="popupglob">
          <div class="flex items-center justify-between">
            <h1 class="fs-5 text-secondry pb-2 font-primary">Success</h1>

          </div>
          <p class="fs-6 text-secondry mb-0">Thank you for your Enquiry.</p>
          <!-- <p>dfdg g fdgdf</p> -->
        </div>
      </div>
    </PopupComponent>
  </div>
</template>
<script setup lang="ts">
  import { onMounted, onUnmounted, nextTick, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import PopupComponent from '../../components/Popup.vue';
  import { z } from 'zod'
  import type { FormSubmitEvent } from '#ui/types';

  import gsap from 'gsap';
  import { InitSmoothness, pauseSmoother,resumeSmoother } from '~/helpers/gsap/InitGSAP';
  import { TitleAnimationForClass, animateTitleWords } from '~/helpers/gsap/title-animation';
  import { initPaperSlideAnimation, initPortfolioImageAnimation, initPortfolioImageAnimationWithTrigger } from '~/helpers/gsap/InitSlidingImage';
  import { initHeightAnimation, initWidthAnimation, initBatchWidthAnimation, initBatchWidthLineAnimationCheck } from '~/helpers/gsap/LineAnimations';

  const route = useRoute();
  const router = useRouter();
  const config = useRuntimeConfig();
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
  const propertyId = route.params.property;
  console.log("propertyId",propertyId)
  // Define a ref to track the visibility of the popup
  const isPopupVisible = ref(false);
  const closeButtonRef = ref(null);
  const pageHeadingRef = ref(null);
  const isLoading = ref(false);

  const main = ref(null);
  let ctx = null;
  // Animation on mount
  const runAnimationSmother = (event = true) => {
      ctx = gsap.context(async () => {
        await InitSmoothness(event).then((s) => {
          animateTitleWords('.page-main-heading', '.page-main-heading', 50, 1, 'power2.out', 0.2);
          TitleAnimationForClass('.gsapHeadingPage', 50, 2, 0.2);
          TitleAnimationForClass('.gsapSlideTop', 150, 4, 2);
          TitleAnimationForClass('.gsapSlideTop1', 150, 4, 0.2);

          initHeightAnimation('.gsmHeightZF-1', '.gsmHeightZF-1', 3, 1, "power2.out");
          initHeightAnimation('.gsmHeightZF-2', '.gsmHeightZF-2', 3, 1, "power2.out");
          initHeightAnimation('.gsmHeightZF-3', '.gsmHeightZF-3', 3, 1, "power2.out");
          initHeightAnimation('.gsmHeightZF-4', '.gsmHeightZF-4', 3, 1, "power2.out", "60px");

          // img
          initPaperSlideAnimation(".gsapPaperSlideEffect", "img", "top 40%", "bottom 20%", 1.5, 'Power1.out');
          initPaperSlideAnimation(".gsapMapIMG", "img", "top 40%", "bottom 20%", 1.5, 'Power1.out');

          // Initialize paper slide animations
          initPortfolioImageAnimationWithTrigger(".gsapFeatureIMGJS1", "img", ".gsapFeatureIMG2", "top 90%", "bottom 0%", 4, 'Power2.out');
          initPaperSlideAnimation(".gsapFeatureIMG2", "img", "top 20%", "bottom 20%", 4, 'Power2.out');
          initPortfolioImageAnimationWithTrigger(".gsapFeatureIMG3", "img", ".gsapFeatureIMG2", "top 0%", "bottom 0%", 4, 'Power2.out');

          initPaperSlideAnimation(".gsapFeatureIMG4", "img", "top 10%", "bottom 20%", 5, 'Power2.out');
          initPaperSlideAnimation(".gsapFeatureIMG5", "img", "top 10%", "bottom 20%", 5, 'Power2.out');

          // Initialize width animations
          setTimeout(() => {
            initBatchWidthAnimation('.gsapX-line1', 3, 0, "power2.out");
            initBatchWidthAnimation('.gsapX-line2', 3, 0, "power2.out");
            initBatchWidthAnimation('.gsapX-line3', 3, 0, "power2.out");

            initBatchWidthLineAnimationCheck('.gsapX-line-loop-0', 3, 0, "power2.out");
            initBatchWidthLineAnimationCheck('.gsapX-line-loop-1', 3, 0, "power2.out");
            initBatchWidthLineAnimationCheck('.gsapX-line-loop-2', 3, 0, "power2.out");
            initBatchWidthLineAnimationCheck('.gsapX-line-loop-3', 3, 0, "power2.out");
            initBatchWidthLineAnimationCheck('.gsapX-line-loop-4', 3, 0, "power2.out");
          }, 10);

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

  // Define the methods to show and close the popup
  const showPopup = () => {
    isPopupVisible.value = true;
    nextTick(() => {
      closeButtonRef.value?.focus();
    });
  }
  const closePopup = () => {
    isPopupVisible.value = false;
    nextTick(() => {
      pageHeadingRef.value?.focus();
    });
  }
  const handleBack = () => {
      if (router) {
          window.scrollTo(0, 0);
          setTimeout(() => {
              router.go(-1);
          }, 0);
      } else {
          console.warn('Router instance is not available');
      }
  };
  const handleKeydown = () => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      closeButtonRef.value?.focus();
    }
  },
  { data: pfolioDetail } = await useFetch(apiBaseURL + '/jsonapi/node/portfolio?filter[field_path][value]=/' + propertyId, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      }
    })
  const isOpen = ref(false)
  const schema = z.object({
    name: z.string().min(4, 'Name is very short').max(25, 'Name must be no longer than 25 characters'),
    email: z.string().email('Enter a valid email id'),
    // phone: z.string().min(10, 'Please enter valid phone number').max(12,'Max limit reached').regex(phoneRegex, 'Invalid Number!'),
    phone: z.number({ invalid_type_error: 'Only Phone number is allowed' }).gte(10, 'Enter complete phone no').lte(999999999999999, 'Phone no can not be more than 15 characters'),
    message: z.string().max(250, 'You have exceeded the maximum number of 250 characters in this field')
  })
  type Schema = z.output<typeof schema>
  const state = reactive({
    name: undefined,
    email: undefined,
    phone: undefined,
    message: undefined,
  })
  const validate = (state): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Enter your name' })
    if (!state.email) errors.push({ path: 'email', message: 'Enter your email' })
    if (!state.phone) errors.push({ path: 'phone', message: 'Enter your phone number' })
    if (!state.message) errors.push({ path: 'message', message: 'Enter your query/message' })

    // if (!state.password) errors.push({ path: 'password', message: 'Required1' })
    return errors
  }
  async function onSubmit(event: FormSubmitEvent<Schema>) {
    const name = event.data.name;
    const email = event.data.email;
    const phone = event.data.phone;
    const message = event.data.message;
    isLoading.value = true;

    const frmSubmit = await $fetch('/webform_rest/submit', {
      // immediate: false,
      baseURL: apiBaseURL,
      method: "POST",
      body: {
        webform_id: "contact",
        name: name,
        email: email,
        phone: phone,
        message: message
      },
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      },
    })

    if (frmSubmit.sid) {
      isPopupVisible.value = false;
      isLoading.value = false;
      isOpen.value = true;
      state.name = '';
      state.email = '';
      state.phone = '';
      state.message = '';
      document.body.classList.remove('noscroll');

    }
  }
  function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault();;
    } else {
      return true;
    }
  }


</script>
<style>
  .mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 306px;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 306px;
  }

  .gmap_iframe {
    width: 100% !important;
    height: 306px !important;
  }

  .gsapPaperImgEffect,
  .gsapPaperSlideEffect {
    visibility: hidden;
    position: relative;
    overflow: hidden;
    transition: none !important;
  }

  .gsapPaperImgEffect img,
  .gsapPaperSlideEffect img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform-origin: top;
    transition: none !important;
  }

  div#enquiryform .contact .email-form button svg.bi.bi-arrow-right {
    background: #E09235;
    width: 28px;
    height: 28px;
    border-radius: 100px;
    margin-left: 10px;
    padding: 7px;
  }

  .view-all:hover {
    background: var(--color-white);
    color: var(--color-primary) !important;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
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

  }
</style>
<style scoped>
  @media screen and (max-width: 768px) {

    .scroll-top.active {
      top: -44px;
    }

    .arrortop {
      padding: 37px 0 10px 0;
    }

  }

  @media screen and (max-width: 1023px) {

    .scroll-top.active {
      bottom: 54px;
    }

    .arrortop {
      padding: 37px 0 10px 0;
    }

  }


  .contact-sup {
    border-top: solid 10px #000;
    margin-top: 57px;
    padding-bottom: 125px;
  }

  .getintouch p {
    font-size: 18px;
    color: #292929;
  }

  .email-form .error-message {
    display: none;
    color: var(--color-white);
    background: var(--color-red);
    text-align: left;
    padding: 15px;
    font-weight: 600;
  }

  .email-form .error-message br+br {
    margin-top: 25px;
  }

  .email-form .sent-message {
    display: none;
    color: var(--color-white);
    background: var(--color-green);
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .popup-content h1 {
    padding-bottom: 17px;
  }


  div#enquiryform .contact .email-form {
    width: 100%;


  }

  .pb-3.contact.pt-0 {
    padding-top: 0px !important;
  }
</style>