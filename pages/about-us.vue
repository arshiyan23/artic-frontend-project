<template>
  <div class="about" ref="main">

    <Head>
      <Title>{{ about?.data?.metatag[0]?.attributes?.content }}</Title>
      <Meta name="description" :content="about?.data?.metatag[1]?.attributes?.content" />
    </Head>
    
    <div id="smooth-wrapper">
      <div id="smooth-content" class="about">
        <div class="start-page pt-75">
          <div class="container">
            <div class="section-header">

              <h1 tabindex="0" class="ardf-1 page-main-heading mb-4 gsap_page_heading">
                {{ about?.data?.field_sections[0].field_hwd_main_title }}
              </h1>

              <div class="banner text-right" :aria-label="about.data.field_video_image_banner?.field_media_image?.meta?.alt">
                <div class="d-flex ml-auto play-video-btn " :style="imageStyle"
                  v-if="about?.data?.field_video_image_banner?.field_media_video_file?.uri?.url">
                   <!--  :style="imageStyle"  -->
                    <video 
                    tabindex="0"
                    aria-label="Video"  
                      v-if="about?.data?.field_video_image_banner?.field_media_video_file?.uri?.url" width="100%"
                      autoplay muted loop id="myVideo" ref="myVideo" 
                      preload="none">
                      <source muted
                        :src="imgBaseURL + about?.data?.field_video_image_banner?.field_media_video_file?.uri?.url"
                        :type="about?.data?.field_video_image_banner?.field_media_video_file?.filemime === 'image/gif' ? 'video/mp4' : about?.data?.field_video_image_banner?.field_media_video_file?.filemime" />
                      Your browser does not support HTML5 video.
                    </video>
                    <button 
                    
                      id="myVideoBtn"
                      class="glightbox btn-watch-video d-flex align-items-center border border-round ver"
                      @click="videoPlay()" >
                      <img  rel="preload"   v-if="isPlaying" src="~/assets/img/pause.svg" alt="Pause Button " />
                      <img  rel="preload"   v-if="!isPlaying" src="~/assets/img/play.svg" alt="Play Button"  />
                    </button>
                </div>
              </div>
            </div>
          </div>
          <section id="introduction" class="about-intro pb-0 ">

            <div class="container">
              <div class="row mb-0 intro">

                <div class="col-lg-3  d-xxl-block d-xl-block d-md-none d-sm-none d-none">
                  <div class="post-box">

                    <div class="text-start before-top-border gsmHeightZF_text" tabindex="0">
                      <h4 class="fs-5 mb-0 text-secondary pb-2 " >About Us</h4>
                    </div>
                    <div class="lineleft">
                      <div class="line-create gsmHeightZF-1 border-bottom-0">
                        <div class="verticalLine">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 ">
                  <div class="mb-3 pb-4 row  pb-m-10">
                    <h2 class="arfs-2 font-primary text-uppercase text-primary font-weight-medium dn-d db-m mb-4 mt-2"
                      tabindex="0">About
                      Artic</h2>
                    <div class="col-lg-12">
                      <div class="post-box mb-0 mb-m">
                        <div tabindex="0" class="intro-about gsapSection2paragraph">
                          <div class="mt-0 mb-3" v-html="about.data.field_sections[0].field_hwd_body.value"></div>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 d-xxl-block d-xl-block d-md-none d-sm-none  d-none">
                      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">

                        <div  tabindex="-1"
                          class="col-xl-4 col-md-6 px-md-3 px-2 my-md-3 my-2 overflow-hidden"
                          v-for="(aboutVision, index) in about.data.field_sections[0].field_icon_text_main">
                          <div class="services-box">
                            <div class="servicesbox_inner">
                              <div class="sb-icon" :aria-label="aboutVision?.field_icon?.field_media_svg?.meta?.alt">
                                <NuxtImg tabindex="0"
                                  :src="imgBaseURL + aboutVision?.field_icon?.field_media_image?.uri?.url" width="200"
                                  height="200"
                                  :alt="aboutVision?.field_icon?.field_media_svg?.meta?.alt || 'about us- Mission Vision Values'" 
                                  sizes="(max-width: 200px) 100vw, 200px" :quality="75" />
                                <h3 tabindex="0">{{ aboutVision.field_hwd_title }}</h3>
                              </div>

                              <div class="sb-content">
                                <h3  tabindex="-1">{{ aboutVision.field_hwd_title }}</h3>
                                <p tabindex="0">{{ aboutVision.field_hwd_description }}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div class="col-lg-12 dn-d d-xxl-none d-xl-none d-md-block d-sm-block">
                      <div class="accordion accordionmissionvision" id="accordionmissionvision">
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            
                            <button role="button"  class="accordion-button d-flex w-100" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapsevision" aria-expanded="true"
                              aria-controls="collapseOne">
                              <span  class="name">{{about.data.field_sections[0].field_icon_text_main[0].field_hwd_title }}</span>
                            </button>

                          </h2>
                          <div id="collapsevision" class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample">
                            <div class="sb-icon" tabindex="0"
                              :aria-label="about.data.field_sections[0].field_icon_text_main[0].field_icon?.field_media_svg?.meta?.alt">
                              <NuxtImg tabindex="0" sizes="(max-width: 64px) 100vw, 61px" :quality="75"
                                :src="imgBaseURL + about.data.field_sections[0].field_icon_text_main[0].field_icon?.field_media_image?.uri?.url"
                                width="61" height="64"
                                :alt="about.data.field_sections[0].field_icon_text_main[0].field_icon?.field_media_svg?.meta?.alt || 'about us- Mission Vision Values'" />
                            </div>
                            <div class="accordion-body">
                              <p tabindex="0">
                                {{about.data.field_sections[0].field_icon_text_main[0].field_hwd_description}}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button tabindex="0" class="accordion-button collapsed d-flex w-100" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapsmission" aria-expanded="false"
                              aria-controls="collapseTwo">
                              <span tabindex="0">
                                {{ about.data.field_sections[0].field_icon_text_main[1].field_hwd_title }}</span>
                            </button>

                          </h2>
                          <div id="collapsmission" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="sb-icon" tabindex="0"
                              :aria-label="about.data.field_sections[0].field_icon_text_main[1].field_icon?.field_media_svg?.meta?.alt">
                              <NuxtImg sizes="(max-width: 64px) 100vw, 61px" :quality="75"
                                :src="imgBaseURL + about.data.field_sections[0].field_icon_text_main[1].field_icon?.field_media_image?.uri?.url"
                                width="61" height="64"
                                :alt="about.data.field_sections[0].field_icon_text_main[1].field_icon?.field_media_svg?.meta?.alt || 'about us- Mission Vision Values'" />
                            </div>
                            <div class="accordion-body" tabindex="0">
                              <p>{{ about.data.field_sections[0].field_icon_text_main[1].field_hwd_description }}</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header">
                            <button tabindex="0" class="accordion-button collapsed d-flex w-100" type="button"
                              data-bs-toggle="collapse" data-bs-target="#collapsevalues" aria-expanded="false"
                              aria-controls="collapseThree">
                              <span class="name">
                                {{ about.data.field_sections[0].field_icon_text_main[2].field_hwd_title }}</span>
                            </button>

                          </h2>
                          <div id="collapsevalues" class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample">
                            <div class="sb-icon" tabindex="0"><img tabindex="0"
                                :src="imgBaseURL + about.data.field_sections[0].field_icon_text_main[2].field_icon?.field_media_image?.uri?.url"
                                width="61" height="64" alt="Arrow"></div>
                            <div class="accordion-body">
                              <p>{{ about.data.field_sections[0].field_icon_text_main[2].field_hwd_description }}</p>
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
          <section id="ourstrategyus" class="ourstrategyus about-intro pt-0 pb-0">
            <div class="container  d-xxl-block d-xl-block d-md-none d-sm-none  d-none">
              <div class="row mb-2 intro">
                <div class="col-lg-12 " >
                  <div class="post-box">
                    <div class="text-start " >
                      <div class="lineleft">
                        <div class="line-create border-top-0 hline-82">
                          <div class="verticalLine">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container " >
              <div class="row mb-3 intro">
                <div class="col-lg-3  d-xxl-block d-xl-block d-md-none d-sm-none d-none" >
                  <div class="post-box">

                    <div class="text-start">
                      <h4 class="arfs-7 mb-0 text-secondary color-white pb-2 pt-0" tabindex="0">Five Pillars</h4>
                    </div>

                  </div>
                </div>

                <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 ">
                  <div class="row  pb-5 pb-m">
                    <h2 class="gsmHeightZF_text22 arfs-2 text-white pb-lg-5 text-uppercase py-4 mb-2  pb-md-2 pb-sm-2"
                      tabindex="0">
                      our Strategy
                    </h2>
                    <div class="accordion" id="accordionExample">
                      <div v-for="(strategy, index) in about.data.field_sections[1].field_startegic_approach_about"
                        :key="index" class="accordion-item gsapSectionOTBoxes22">
                        <h2 class="accordion-header" >
                          <button class="accordion-button collapsed d-flex w-100" type="button"   
                            :class="{ 'active': openIndex === index }"  @click="toggle(index)">
                            <span class="no">{{ index + 1 }}</span>
                            <span class="name" >{{ strategy.field_about }}</span>
                          </button>
                        </h2>
                        <div :id="'collapse' + index" class="accordion-collapse collapse"
                          :class="{ show: openIndex === index }">
                          <div class="accordion-body pt-m">
                            <div v-html="strategy.field_description_aboutus.value"></div>
                            <div class="progress-bar" :class="{ active: progressBars[index] }"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </section>
          <section id="boardMember" class="about-intro pt-5 pb-0 mt-2 pt-m-20" ref="boardMemberRef" tabindex="0">
            <div class="container " >
              <div class="row mb-2 intro">
                <div class="col-lg-3  d-xxl-block d-xl-block d-md-none d-sm-none d-none" >
                  <div class="post-box">
                    <div class="text-start before-top-border gsmHeightZF_text2">
                      <h4 tabindex="0" class="arfs-7 mb-0 text-secondary pb-2 ">Our
                        Visionaries</h4>
                    </div>
                    <div class="lineleft">
                      <div class="line-create gsmHeightZF2">
                        <div class="verticalLine">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 ">
                  <div class="row ">
                    <h2 class="arfs-2 text-primary pb-5 mb-5 text-uppercase mb-m mb-s-20" tabindex="0"
                      ref="boardMemberHeadingRef">Board Members</h2>
                    <div class="col-lg-12  pb-5 mb-3 pb-m ">
                      <div class="row gy-5 gx-5">
                        <div v-for="(member, index) in members.data"
                          class="col-xl-4 col-md-6 d-flex  mt-s-29 gsapSectionBMBoxes">
                          <div class="team-member w-100">
                            <div class="member-img position-relative" tabindex="0"
                              :aria-label="member.field_our_legacy_member_image?.field_media_image?.meta?.alt">
                              <NuxtImg width="420" height="460" sizes="(max-width: 460px) 100vw, 460px" 
                                aria-label="Thumbnail"
                                :quality="75"
                                :src="member.field_about_us_image?.field_media_image?.image_style_uri?.board_members_section"
                                :alt="member.field_our_legacy_member_image?.field_media_image?.meta?.alt || 'image'"
                                class="img-fluid w-100" />
                            </div>
                            <div class="member-info px-0 border-top mt-2 border-bottom py-2">
                              <h5 tabindex="0" class="md:min-h-[48px]" >{{ member.field_board_member_name }}</h5>
                              <div class="member-des d-flex justify-content-between align-items-center md:min-h-[48px]">
                                <span tabindex="0">{{ member.field_designation }}</span>
                                <button @click="showPopup(member, index, $event)" tabindex="0" ref="popup"
                                  aria-label="open popup"> <img src="/assets/img/arrow-r-blue.svg"
                                    class="cursor-pointer" width="18" height="15" alt="Show member details" /></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-left pt-2 pb-5 mb-4 dn-m">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          <section id="boardmembers" class="about-intro pt-0 pb-0 mt-0">
            <div class="container " >
              <div class="row mb-3 intro">
                <div class="col-lg-3  d-xxl-block d-xl-block d-md-none d-sm-none d-none" >
                  <div class="post-box">
                    <div class="text-start">
                      <h4 class="arfs-7 mb-0 text-secondary pb-2 pt-0" tabindex="0">Our Team</h4>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-9 col-xl-9 col-lg-12 col-md-12 col-sm-12 ">
                  <div class="row ">
                    <h2 class="gsmHeightZF_text3 arfs-2 text-primary pb-5 mb-5 text-uppercase mb-m mb-s-20"
                      tabindex="0">Executive management
                    </h2>
                    <div class="col-lg-12  ">
                      <div class="row gy-5 gx-5">
                        <div v-for="(executive, index) in executives.data"
                          class="col-xl-4 col-md-6 d-flex  mt-s-29 gsapSectionOTBoxes">
                          <div class="team-member w-100">
                            <div class="member-img position-relative" tabindex="0"
                              :aria-label="executive?.field_executive_member_image?.field_media_image?.meta?.alt">
                              <NuxtImg width="420" height="460" sizes="(max-width: 420px) 100vw, 420px" :quality="75"
                                :src="executive?.field_executive_member_image?.field_media_image?.image_style_uri?.board_members_section"
                                :alt="executive?.field_executive_member_image?.field_media_image?.meta?.alt || 'Executive Member Image'"
                                class="img-fluid w-100" />
                            </div>
                            <div class="member-info px-0 border-top mt-2 border-bottom py-2">
                              <h5 tabindex="0" class="md:min-h-[48px]">{{ executive.title }}</h5>
                              <div class="member-des d-flex justify-content-between align-items-center md:min-h-[48px]">
                                <span tabindex="0">{{ executive.field_designation }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-left pt-2 pb-5 mb-4 mb-s-20 pb-m mb-m">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
        <!-- Footer -->
        <Footer />
      </div>
    </div>
    <!-- ====== -->
    <!-- Popups -->
    <!-- ====== -->
    <div id="membermessage" class="membermessage">
      <PopupComponent class="p-0" :isVisible="isPopupVisible" @close="closePopup">
        <div class="pb-0">
          <div class="row">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 img-popup" tabindex="0"
              :aria-label="memberPopupData?.field_about_us_image?.field_media_image?.meta?.alt">
              <NuxtImg class="cursor-pointer h-100" sizes="(max-width: 469px) 100vw, 460px" :quality="75"
                :src="memberPopupData?.field_about_us_image?.field_media_image?.image_style_uri?.board_members_section"
                width="469" height="638"
                :alt="memberPopupData?.field_about_us_image?.field_media_image?.meta?.alt || 'Board Member Image'" />
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6 data-content">
              <h1 tabindex="0" class="inline-block">{{ memberPopupData.field_board_member_name }}</h1>
              <br>
              <h5 tabindex="0" class="inline-block">{{ memberPopupData.field_designation }}</h5>
              <ul>
                <li tabindex="0" v-for="(items, index) in memberPopupData.field_popup_data">{{ items }}</li>
              </ul>
              <div class="arrow-left-right d-flex align-item-center">

                <button title="Previous member" tabindex="0" aria-label="Previous member" v-if="currentPopupDataKey > 0"
                  @click="previousMember('member', currentPopupDataKey, members)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                  </svg>
                </button>

                <button title="Next member" tabindex="0" aria-label="Next member"
                  v-if="currentPopupDataKey < members.data.length"
                  @click="nextMember('member', currentPopupDataKey, members)" @keydown="handleKeydown">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </button>

              </div>
            </div>

          </div>
        </div>

      </PopupComponent>

      <PopupComponent class="p-0" :isVisible="isExecPopupVisible" @close="closeExecPopup">
        <div class="pb-0">
          <div class="row">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 img-popup" tabindex="0"
              :aria-label="memberPopupData?.field_executive_member_image?.field_media_image?.meta?.alt">
              <NuxtImg class="cursor-pointer h-100" sizes="(max-width: 469px) 100vw, 469px" :quality="75"
                :src="executivePopupData?.field_executive_member_image?.field_media_image?.image_style_uri?.board_members_section"
                width="469" height="638"
                :alt="memberPopupData?.field_executive_member_image?.field_media_image?.meta?.alt || 'Executive Member Image'" />
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6 col-sm-12 data-content">
              <h1 tabindex="0">{{ executivePopupData?.field_executive_member_name }}</h1>
              <h5 tabindex="0">{{ executivePopupData?.field_designation }}</h5>
              <ul>
                <li tabindex="0" v-for="(items, index) in executivePopupData.field_popup_data">{{ items }}</li>
              </ul>
              <div class="arrow-left-right d-flex align-item-center">

                <button tabindex="0" aria-label="Previous Slider" v-if="currentPopupDataKey > 0"
                  @click="previousMember('executive', currentPopupDataKey, executives)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                  </svg>
                </button>

                <button tabindex="0" aria-label="Next Slide" v-if="currentPopupDataKey < executives.data.length"
                  @click="nextMember('executive', currentPopupDataKey, executives)" @keydown="handleKeydown">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </PopupComponent>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
  import { useRoute } from 'vue-router';
  import PopupComponent from '../components/Popup.vue';

  import gsap from 'gsap';
  import { InitSmoothness, pauseSmoother, resumeSmoother } from '~/helpers/gsap/InitGSAP';
  import { animateTitleLines, animateTitleWords } from '~/helpers/gsap/title-animation';
  import { initTextFadeInOnScroll, initSectionMarginAnimation } from '~/helpers/gsap/ParallaxBGTextFade';
  import { initPaperSlideAnimation, initPortfolioImageAnimation, initSlidingAnimation, initPortfolioImageAnimationWithTrigger } from '~/helpers/gsap/InitSlidingImage';
  import { initBatchWidthAnimation, initHeightAnimation, initWidthAnimationOnScroll } from '~/helpers/gsap/LineAnimations';

  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;

  let isPlaying = ref(true);
  let videoBtnTxt = ref('');
  // videoBtnTxt.value = '<span class="px-1"></span>PAUSE<span class="px-1"></span>';
  videoBtnTxt.value = '~/assets/img/pause.svg';
  const myVideo = ref();

  const imageWidth = ref(41);
  const maxScroll  = ref(500);

  // Define a ref to track the visibility of the popup
  const isPopupVisible = ref(false);
  const isExecPopupVisible = ref(false);

  const memberPopupData = ref();
  const executivePopupData = ref();
  const currentPopupDataKey = ref(1);

  const boardMemberHeadingRef = ref(null);
  const boardMemberRef = ref < HTMLDivElement | null > (null);
  const shareClickedItem = ref(null);

  const main = ref(null);
  let ctx = null;
  // Animation on mount
  const runAnimationSmother = (event = true) => {
      ctx = gsap.context(async () => {
        await InitSmoothness(event).then((s) => {
          animateTitleLines('.page-main-heading', 450, 1, 'power1.out', 3);
          initPortfolioImageAnimation(".gsap_video_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');
          initWidthAnimationOnScroll('.gsapXW', '.gsapXW', 2, 1, "power2.out", 100);
          // <!-- Section 02  -->
          animateTitleWords('.gsmHeightZF_text', '.gsmHeightZF_text', -150, 1, 'power1.out', 0.1, true);
          initHeightAnimation('.gsmHeightZF-1', '.gsmHeightZF_text', 5, 0, "power2.out", "100%", 2);
          initSlidingAnimation(".gsapSection2paragraph", ".gsapSection2paragraph", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".services-box", ".services-box", 200, 2, 1.2, "Power2.out");
          // <!-- Section 03  -->
          animateTitleWords('.gsmHeightZF_text2', '.gsmHeightZF_text2', -150, 1, 'power1.out', 0.1, true);
          initSlidingAnimation(".gsapSectionBMBoxes", ".gsapSectionBMBoxes", 200, 2, 0.8, "Power2.out");
          initHeightAnimation('.gsmHeightZF2', '.gsmHeightZF2', 5, 1, "power2.out", "100%", 2);
          // <!-- Section 04  -->
          animateTitleWords('.gsmHeightZF_text22', '.gsmHeightZF_text22', -150, 1, 'power1.out', 0.1, true);
          initSlidingAnimation(".gsapSectionOTBoxes22", ".gsapSectionOTBoxes22", 200, 2, 0.5, "Power2.out");
          // <!-- Section 04  -->
          animateTitleWords('.gsmHeightZF_text3', '.gsmHeightZF_text3', -150, 1, 'power1.out', 0.1, true);
          initSlidingAnimation(".gsapSectionOTBoxes", ".gsapSectionOTBoxes", 150, 2, 0.5, "Power2.out");
        })
          .catch(e => {
            console.log(e);
          });
      }, main.value);
    }
    onMounted(async () => {
      await nextTick();
      runAnimationSmother();
      // Image scaling based on scroll
      updateMaxScroll();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', updateMaxScroll);
    });
    onUnmounted(() => {
      if (ctx) ctx.revert();
      pauseSmoother();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateMaxScroll);
    });

  // Header Image
  // Image scaling based on scroll
  const updateMaxScroll = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Mobile
      maxScroll.value = 100;
    } else if (screenWidth < 1280) { // Laptop
      maxScroll.value = 300;
    } else { // Desktop
      maxScroll.value = 500;
    }
  };
  const handleScroll = () => {
    console.log("maxScroll.value", maxScroll.value);
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const newWidth = 41 + ((scrollTop / maxScroll.value) * (100 - 41));
    imageWidth.value = Math.min(newWidth, 100);
  };
  const imageStyle = computed(() => ({
    width: `${imageWidth.value}%`,
  }));

  // Define the methods to show and close the popup
  const showPopup = (member, currentKey, event) => {
    isPopupVisible.value = true;
    memberPopupData.value = member;
    currentPopupDataKey.value = currentKey;
    document.body.classList.add('noscroll');
    shareClickedItem.value = event.target.closest('button');
  };
  const closePopup = () => {
    isPopupVisible.value = false;
    memberPopupData.value = '';
    currentPopupDataKey.value = 0;
    document.body.classList.remove('noscroll');
    nextTick(() => {
      if (shareClickedItem.value) {
        shareClickedItem.value.focus();
      }
    });
  };
  const handleKeydown = (event) => {
    if (event.key === 'Tab' || event.key === ' ') {
      nextTick(() => {
        closePopup();
        boardMemberHeadingRef.value.focus();
        if (boardMemberRef.value) {
          boardMemberRef.value.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
  };
  function videoPlay() {
    if (isPlaying.value) {
      myVideo.value.pause()
      isPlaying.value = false;
      // videoBtnTxt.value = '<span class="px-1">.</span>PLAY<span class="px-1">.</span>';
      videoBtnTxt.value = '~/assets/img/play.svg';
    } else {
      myVideo.value.play()
      isPlaying.value = true;
      // videoBtnTxt.value = '<span class="px-1">.</span>PAUSE<span class="px-1">.</span>';
      videoBtnTxt.value = '~/assets/img/pause.svg';
    }
  }
  const nextMember = (type, currentKey, mdata) => {
    const nextKey = currentKey + 1;
    // Check if nextKey is beyond the array length
    if (nextKey >= mdata.data.length) {
      closePopup();
      return;
    }

    // Update the member or executive data
    if (type === 'member') {
      memberPopupData.value = mdata.data[nextKey];
      currentPopupDataKey.value = nextKey;
    } else if (type === 'executive') {
      executivePopupData.value = mdata.data[nextKey];
      currentPopupDataKey.value = nextKey;
    }
  };
  const previousMember = (type, currentKey, mdata) => {
    const prevKey = currentKey - 1;

    // Check if prevKey is before the start of the array
    if (prevKey < 0) {
      closePopup();
      return;
    }

    // Update the member or executive data
    if (type === 'member') {
      memberPopupData.value = mdata.data[prevKey];
      currentPopupDataKey.value = prevKey;
    } else if (type === 'executive') {
      executivePopupData.value = mdata.data[prevKey];
      currentPopupDataKey.value = prevKey;
    }
  };
  const showExecPopup = (executive, currentKey) => {
    isExecPopupVisible.value = true;
    executivePopupData.value = executive;
    currentPopupDataKey.value = currentKey;
  };
  const closeExecPopup = () => {
    isExecPopupVisible.value = false;
    executivePopupData.value = '';
    currentPopupDataKey.value = 0;
  };
  
  
  // About API call
  const { data: about } = await useFetch(apiBaseURL + '/jsonapi/node/landing_page/72537377-4833-4d5d-b1fe-beaa7b92a1ec', {
    server: false,
    method: 'GET',
    headers: {
      Authorization: `Basic ${apiAuthKey}`,
    },
  });
  // Board Members API call
  const { data: members } = await useFetch(apiBaseURL + '/jsonapi/node/board_members', {
    server: false,
    method: 'GET',
    headers: {
      Authorization: `Basic ${apiAuthKey}`,
    },
  });
  // Executive API call
  const { data: executives } = await useFetch(apiBaseURL + '/jsonapi/node/executive_management', {
    server: false,
    method: 'GET',
    headers: {
      Authorization: `Basic ${apiAuthKey}`,
    },
  });



  // Accordion state
  const openIndex = ref(null); // Use `null` to represent the closed state
  const progressBars = ref([]);
  const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
  }
  // Auto show/hide logic
  watch(openIndex, (newIndex) => {
    if (newIndex !== -1) {
      progressBars.value = progressBars.value.map((_, index) => index === newIndex);
      // setTimeout(() => {
      //   const nextIndex = (newIndex + 1) % about.value.data.field_sections[1].field_startegic_approach_about.length;
      //   openIndex.value = nextIndex;
      // }, 3000);
    }
  });
</script>
<style scoped>
  .start-page {
    padding-top: 120px;
  }
  .play-video-btn { 
    position: relative;
    align-items: center;
    width: 0%;
    justify-content: center;
    display: flex;
    transition:all 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  } 
  .play-video-btn button#myVideoBtn {
    align-items: center;
    position: absolute;
    top:auto;left:15px;
    right:auto;bottom:30px;
    margin:auto;
    z-index: 100;
    padding: 11px;
    border-radius: 100px;
    background: #ffffff8a;
    width: 100px;
    height: 100px;
    font-size: 14px;
    text-align: center;
    justify-content: center;
}

  @keyframes progress {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }
  .about .section-header .banner .img-fluid {
    transition: transform 0.1s ease-out, width 0.1s ease-out;
  }
  button.accordion-button.collapsed.d-flex.w-100.active:after {
    content: ' \00D7';
    background-image: none !important;
    transform: none !important;
  }
  .accordion-button:after {
    content: ' \002B';
    background-image: none !important;
    transform: none !important;
    font-size: 40px;
    position: relative;
    top: -14px;
  }

  .services-box:hover .sb-icon {
    display: none;
  }

  .about .accordion-body .progress-bar {
    border-bottom: solid 4px #FFFFFF;
    animation: progress 10s linear forwards;
    width: 100%;
  }

  .about .membermessage .popup-content .data-content {
    padding: 41px 0 0 18px;
  }

  .about .membermessage .popup-content h1 {
    padding-bottom: 0px;
    font-size: 24px;
    color: #243C6C;
    font-weight: 500;
  }

  .about .membermessage .popup-content h5 {
    font-size: 20px;
    color: #243C6C;
    font-weight: 400 !important;
  }

  .about .membermessage .popup-content ul {
    width: 97%;
    list-style: disc;
    padding: 18px 0px 0px 20px;
    list-style-position: outside;
    overflow-y: auto;
    height: 340px;
  }

  .about .membermessage .popup-content ul li {
    font-size: 16px;
    color: #243C6C;
    padding-bottom: 4px;
  }

  .about .membermessage .popup-content ul li::marker {
    font-size: 10px;
  }

  .about .arrow-left-right {
    padding: 20px 46px;
    justify-content: end;
  }

  .about .popup-content button.close-btn {
    background: #efefef;
    font-size: 28px;
  }

  .about .arrow-left-right button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border: 1px solid #243C6C;
    border-radius: 100px;
    height: 40px;
    width: 40px;
    margin: 0px 5px;
    color: #243C6C;
    font-size: 12px;
  }

  .about .membermessage .popup-content ul::-webkit-scrollbar {
    width: 3px;
  }

  .about .membermessage .popup-content ul::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .about .membermessage .popup-content ul::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

  .about .membermessage .popup-content .img-popup img {
    object-fit: cover;
  }

  @media (max-width: 1023px) {
    .about .membermessage .popup-content .data-content {
      padding: 47px 20px 0 10px;
    }
    .play-video-btn button#myVideoBtn {
      width: 70px;
      height:70px;
    }

  }
  @media (max-width: 768px) {
    .about .section-header {
      padding-bottom: 42px;
    }
  .play-video-btn button#myVideoBtn {
      width: 70px;
      height:70px;
    }

    .about .arrow-left-right {
      padding: 7px 0px;
    }

    .about .membermessage .popup-content ul {
      height: auto;
    }

    .about .membermessage .popup-content .data-content {
      padding: 20px 30px !important;
    }

    .about .membermessage .popup-content .img-popup {
      height: 440px;
    }

    .about .membermessage .popup-content .img-popup img.cursor-pointer {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .about .membermessage .popup-content h1 {
      font-size: 16px;
      padding-bottom: 0px !important;
    }

    .about .membermessage .popup-content h5 {
      font-size: 11px !important;
    }

    .about .membermessage .popup-content ul li {
      font-size: 12px;
      padding-bottom: 4px;
    }
  }

  @media (max-width: 499px) {

    .play-video-btn button#myVideoBtn {
      width: 40px;
      height:40px;
    }


    .about .membermessage .popup-content .img-popup {
      height: 250px !important;
      overflow: hidden;
    }

    .about .membermessage .popup-content .img-popup img.cursor-pointer {
      height: fit-content !important;
    }

    .about .membermessage .popup-content .data-content {
      padding: 20px 30px 15px !important;
    }

    .about .membermessage .popup-content ul {
      padding-top: 9px;
      height: auto;
    }

    .about .membermessage .popup-content ul li {
      padding-bottom: 1px;
    }

  }
</style>