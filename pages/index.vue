<template>
  <Head>
      <Title>
        {{ homepage?.data?.metatag?.[0]?.attributes?.content || '' }}
      </Title>
      <Meta name="description" :content="homepage?.data?.metatag?.[1]?.attributes?.content || ''"/>
  </Head>
    
  <div class="homemain" ref="main">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <!-- Start Page -->
        <div class="aos-all">
          <section id="hero-fullscreen" class="px-0 pt-10 pb-0 hero-fullscreen d-flex align-items-center h-100">
            <div class="container mw-100 px-0">
              <div class="video-text">
                <h1 class="pt-0 ardf-1 page-main-heading" tabindex="0">
                  <span ref="title" class="color-primary">{{ homepage?.data?.field_banner_title }}</span>
                  <span ref="subtitle" class="text-white textwhiteset">{{ homepage?.data?.field_banner_sub_title }}</span>
                </h1>
              </div>

              <!-- Banner -->
              <div v-if="homepage?.data?.field_video_image_banner?.field_media_image?.image_style_uri" class="header_parallax__container">
                <div class="header_parallax__item"
                  :style="{ backgroundImage: `url(${withDrupalIndexPrefix(homepage?.data?.field_video_image_banner?.field_media_image?.image_style_uri?.portfolio_banner)})` }"
                  role="img"
                  aria-label="A portfolio banner showing [briefly describe the objects and text in the image]">
                </div>
              </div>
              <div class="d-flex justify-content-center">
              <!-- Video USE -->
              <video class="artic-video"
                width="100%" autoplay muted loop playsInline id="myVideo" ref="myVideo"
                preload="none"
                src="https://artcwbsv0007-prod.azurewebsites.net/sites/default/files/2024-10/Homepage.mp4">
                Your browser does not support HTML5 video.
              </video>
              
                <button id="myVideoBtn"
                  class="glightbox btn-watch-video d-flex align-items-center border border-round ver"
                  @click="videoPlay()" v-html="videoBtnTxt"></button>
              </div>

            </div>
          </section>
          <div class="allSectionParalax">
            <!-- 02 -->
            <section id="introduction" class="introduction introductionSection bg-purple bg-purple-shad pb-0">
              <div class="container">
                <!-- Row - 1 -->
                <div class="row mb-0 intro_row">
                  <div class="col-lg-3">
                    <div class="post-box aos-init">
                      <div class="text-start">
                        <h4 class="arfs-7 mb-0 text-secondary color-white pb-2 pt-2 introduction_text" tabindex="0">
                          {{ homepage?.data?.field_sections?.[0]?.field_title || '' }}</h4>
                      </div>

                      <div class="lineleft gsmHeightZF">
                        <div class="line-create ">
                          <div class="verticalLine">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="post-box border-bottom border-transparent">
                          <p tabindex="0" class="animated-text gsapTextFade introduction-heading">
                            {{ homepage?.data?.field_sections?.[0]?.field_title || '' }}
                          </p>
                          <div class="d-flex justify-content-left align-self-start ">
                            <NuxtLink to="/about-us" class="know-more"  data-aos-delay="400"
                              tabindex="0">
                              <span>Know more about us</span><i class="bi bi-arrow-right" role="presentation"></i>
                            </NuxtLink>
                          </div>
                          <hr class="gsapX-line  knowMoreAboutLine">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Row - 2 -->
                <div class="row latest_news_row">
                  <div class="col-lg-3 pb-0">
                    <div class="post-box">
                      <div class="text-start">
                        <h4 class="arfs-7 latestNews_text mb-0 text-secondary color-white pb-2 pt-2" tabindex="0">
                          Latest News
                        </h4>
                      </div>
                      <div class="lineleft ">
                        <div class="line-create gsamLatestNewsLine border-bottom-0">
                          <div class="verticalLine">&nbsp;</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-9 pb-5">
                    <div class="row gx-5">
                      <div v-for="(newss,index) in news?.data?.slice(0,3) || []" :key="index" class="pt-5 col-lg-4 pb-5">
                        <div class="post-box bm-4">
                          <div class="post-img pb-1 gsapLatestNewsThumb" tabindex="0" role="img"
                            :aria-label="(newss.field_news_thumbnail?.field_media_image?.meta?.alt || '') + index">
                            <NuxtImg width="100%" height="100%" loading="lazy"
                              :src="withDrupalIndexPrefix(newss.field_news_thumbnail?.field_media_image?.image_style_uri?.home_news)"
                              class="img-fluid  "
                              :alt="(newss.field_news_thumbnail?.field_media_image?.meta?.alt || '') + index" />
                          </div>
                          <!-- Content -->
                          <div class="gsapTopBottom">
                            <p tabindex="0" class="">{{ newss.title }}</p>
                            <NuxtLink to="/news" class="readmore stretched-link border-bottom " tabindex="0">
                              <span>Read More</span>
                            </NuxtLink>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div class="mt-2 gsapTopBottom">
                      <NuxtLink tabindex="0" to="/news" class="know-more align-self-start">
                        <span>See All News</span>
                        <i class="bi bi-arrow-right" role="presentation"></i>
                      </NuxtLink>
                    </div>

                  </div>
                </div>
              </div>
            </section>
            <!-- =================== -->
            <!-- Our Core Businesses -->
            <!-- =================== -->
            <section id="featured-services" class="featured-services pb-0 pt-0">
              <div v-if="businesses?.data?.length" class="container">
                <div class="row gy-4">
                  <!-- above section bottom part of line -->
                  <div class="text-start ">
                    <div class="lineleft  gsmHeightZF-3">
                      <div class="line-create border-top-0 hline">
                        <div class="verticalLine ">&nbsp;</div>
                      </div>
                    </div>
                  </div>

                  <div class="text-start after-top-border " >
                    <h4 tabindex="0" class="mt-2 arfs-7 mb-0">Our Core Businesses</h4>
                  </div>

                  <div class="mt-2 col-xl-3 col-md-6 d-flex first-coreBusinesses-col ">
                    <div class="lineleft gsmHeightZF-3">
                      <div class="line-create ">
                        <div class="verticalLine">&nbsp;</div>
                      </div>
                    </div>

                    <div class="service-item position-relative  gsapY100">
                      <div class="pl-0 ps-md-2 " data-aos-anchor-placement="bottom-bottom">
                        <h4 tabindex="0" class="ardf-2">{{ businesses?.data?.[0]?.name || '' }}</h4>
                        <p tabindex="0" class="arfs-6" role="heading" aria-level="2">{{
                          businesses?.data?.[0]?.description?.value || ''
                          }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex fs gsapY200">
                    <div class="service-item position-relative border-start ">
                      <div class="service-data " data-aos-anchor-placement="bottom-bottom">
                        <h4 tabindex="0" class="ardf-2">{{ businesses?.data?.[1]?.name || '' }}</h4>
                        <p tabindex="0" class="arfs-6" role="heading" aria-level="2">{{
                          businesses?.data?.[1]?.description?.value || ''
                          }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex fs gsapY300">
                    <div class="service-item position-relative border-start ">
                      <div class="service-data " data-aos-anchor-placement="bottom-bottom">
                        <h4 tabindex="0" class="ardf-2">{{ businesses?.data?.[2]?.name || '' }}</h4>
                        <p tabindex="0" class="arfs-6" role="heading" aria-level="2">{{
                          businesses?.data?.[2]?.description?.value || ''
                          }}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex fs gsapY400">
                    <div class="service-item position-relative border-start ">
                      <div class="service-data " data-aos-anchor-placement="bottom-bottom">
                        <h4 tabindex="0" class="ardf-2">{{ businesses?.data?.[3]?.name || '' }}</h4>
                        <p tabindex="0" class="arfs-6" role="heading" aria-level="2">{{
                          businesses?.data?.[3]?.description?.value || ''
                          }}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <!-- =================== -->
            <!-- Portfolio-->
            <!-- =================== -->
            <section id="portfolio" class="portfolio pt-2">
              <div class="container">
                <div class="text-start line-heading after-top-border gsapYCounterTitle">
                  <h4 tabindex="0" class="pt-0 arfs-7 mb-0">Our Iconic Properties</h4>
                </div>

                <div class="section-header gsapYPortfolio100">
                  <h2 tabindex="0" class="arfs-2">Portfolio</h2>
                </div>

                <div class="row gy-5 pt-5">
                  <div v-for="(portfolio, index) in (portfolios?.data?.slice(0, 6) || [])" :key="index"
                    class="m-t m-b col-xl-4 mb-4 col-md-6 d-flex">
                    <div class="portfolio-member  overflow-hidden">

                      <div class="member-img position-relative gsapPaperSlideEffectPortfolio">
                        <div class="" tabindex="0"
                          :aria-label="portfolio?.field_property_image?.field_media_image?.meta?.alt">
                          <NuxtImg :quality="75" loading="lazy"
                            :src="getPfolioImgUrl(portfolio)"
                            class="--img-fluid gsapPaperSlideEffectImg"
                            :alt="portfolio?.field_property_image?.field_media_image?.meta?.alt" />
                        </div>
                        <div class="social">
                          <button type="button" @click="navigateToPage('portfolio/'+portfolio.field_tags.name.toLowerCase()+portfolio.path.alias)" class="btn btn-success"
                            tabindex="0">
                            View more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-arrow-right-short" viewBox="0 0 16 16" role="presentation">
                              <path fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 1 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div class="member-info px-0 gsapYPortfolio120">
                        <h5 class="arfs-5"><button @click="navigateToPage('portfolio/'+portfolio.field_tags.name.toLowerCase()+portfolio.path.alias)" tabindex="0"
                            type="button">{{ portfolio.title }}</button></h5>
                        <span tabindex="0" class="line-clamp arfs-8">{{portfolio.body?.summary }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="m-t-0 d-flex justify-content-lg-center pt-2 justify-content-sm-start">
                  <NuxtLink tabindex="0" to="/portfolio" class="view-all align-self-start">
                    <span>View All Properties</span> <i class="bi bi-arrow-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </section>
            <!-- ============== -->
            <!-- 05 Counter Section -->
            <!-- ============ -->
            <section class="counters bsb-fact-5 py-5 py-md-5">
              <div class="container pb-5 pt-1">
                <div class="row">
                  <div class="col-12">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-12 col-md-3 p-0 border-start gsapYCounter100">
                          <div class="card border-0 bg-transparent">
                            <div tabindex="0" class="card-body text-center p-4 p-xxl-5 d-flex counter-show"
                              ref="counterShow">
                              <div class="mb-2 pe-2 count-number data h1">
                                {{homepage?.data?.field_sections?.[1]?.field_data_details?.[0]?.field_number}}</div>
                              <p class="mb-0" role="heading" aria-level="2">
                                {{homepage?.data?.field_sections?.[1]?.field_data_details?.[0]?.field_number_text}}</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-3 p-0 border-start gsapYCounter200">
                          <div class="card border-0 bg-transparent">
                            <div tabindex="0" class="card-body text-center p-4 p-xxl-5 d-flex">
                              <div class="mb-2 pe-2 data h1">
                                {{homepage?.data?.field_sections?.[1]?.field_data_details?.[1]?.field_number}}</div>
                              <p class="mb-0" role="heading" aria-level="2">
                                {{homepage?.data?.field_sections?.[1]?.field_data_details?.[1]?.field_number_text}} <br>
                                &nbsp;</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-3 p-0 border-start gsapYCounter300">
                          <div class="card border-0 bg-transparent">
                            <div tabindex="0" class="card-body text-center p-4 p-xxl-5 d-flex">
                              <div class="mb-2 pe-2  data h1">
                                {{homepage?.data?.field_sections?.[1]?.field_data_details?.[2]?.field_number}}
                              </div>
                              <p class="mb-0" role="heading" aria-level="2">
                                {{homepage?.data?.field_sections?.[1]?.field_data_details?.[2]?.field_number_text}} <br>
                                &nbsp;</p>
                            </div>
                          </div>
                        </div>
                        <div class="col-12 col-md-3 p-0 border-start gsapYCounter400">
                          <div class="card border-0 bg-transparent">
                            <div tabindex="0" class="card-body text-center p-4 p-xxl-5 d-flex last-counter">
                              <div class="mb-2 pe-2 data h1">
                                <span>$</span>
                                <div>{{homepage?.data?.field_sections?.[1]?.field_data_details?.[3]?.field_number}}</div>
                                <div class="d-flex flex-column justify-between">
                                  <strong role="heading" aria-level="2"
                                    class="">{{homepage?.data?.field_sections?.[1]?.field_data_details?.[3]?.field_number_text}}</strong>
                                  <p class="bn">bn</p>
                                </div>
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
            <!-- ================= -->
            <!-- 06 globalPresense -->
            <!-- ================= -->
            <section class="globalPresense pb-0">
              <div id="_globalPresense">
                <div class="section-header">
                  <h2 tabindex="0" class="arfs-2 text-uppercase pb-4">Our Global Presence</h2>
                </div>
                <Globe :markersData="homepage?.data?.field_sections?.[2]?.field_map_markers_data || []" @selectedMapData1="selectedMapData=$event;isOpen=true;" />
              </div>
            </section>
            <!-- ============== -->
            <!-- 07 Our Partner -->
            <!-- ============== -->
            <section class="our-partners-section bg-yellow">
              <div class="container">
                <h2 tabindex="0" class="arfs-2 text-sm-center gsapYPartners200"
                  style="background-color: #E09235; color: #ffffff;">Our Partners</h2>
                <div class="our-partners-boxes" v-if="partnerCards.length">
                  <div
                    v-for="(partner,index) in partnerCards"
                    :key="index"
                    class="up-single-box"
                  >
                    <NuxtImg
                      :src="partner.image"
                      :alt="partner.alt"
                    />
                  </div>
                </div>
              </div>
            </section>
            <!-- ============= -->
            <!-- 08 Our Legacy -->
            <!-- ============= -->
            <section id="ourlegacy" class="ourlegacy mt-5">
              <div class="container ">
                <div class="row">
                  <div class="col-lg-3"></div>
                  <div class="col-lg-9 text-start ps-0">
                    <div class="section-header">
                      <h4 tabindex="0" class="arfs-2 text-uppercase gsapLegacyTitle">
                        Our Legacy
                      </h4>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-7 d-flex flex-column">
                    <div class="row">
                      <div class="col-lg-5">
                        <div class="post-box">
                          <div class="text-start">
                            <h4 tabindex="0" class="arfs-7 mb-0 pb-2">Chairman Message</h4>
                          </div>
                          <div class="lineleft gsmHeightZF-4">
                            <div class="line-create">
                              <div class="verticalLine">&nbsp;</div>
                            </div>
                          </div>

                          <div class="post-img d-lg-none pb-3">
                            <NuxtImg role="img" tabindex="0" width="100%" height="100%" sizes="(max-width: 645px) 100vw, 761px" :quality="75" loading="lazy"
                              aria-label="chairmain"
                              :src="withDrupalIndexPrefix(legacyy?.data?.[0]?.field_our_legacy_member_image?.field_media_image?.image_style_uri?.home_our_legacy)"
                              class="img-fluid h-md-100"
                              :alt="legacyy?.data?.[0]?.field_our_legacy_member_image?.field_media_image?.meta?.alt" />
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-7">
                        <div class="post-box gsapLegacyContent">
                          <p tabindex="0" class="pt-0 mt-0">{{ legacyy?.data?.[0]?.field_message }}</p>
                          <div class="continue-reading text-left mt-3">
                            <button @click="showPopup(legacyy.data[0], $event)"
                              aria-label="Click here to Continue reading Chairman message"
                              class="d-flex align-items-center">
                              Continue reading
                              <img width="12" height="11" src="~/assets/img/continue-reading-arrow.svg"
                                alt="continue reading" class="ml-2" />
                            </button>
                          </div>
                          <div class="member-info px-0 text-end pt-4 pb-4" tabindex="0">
                            <h5>{{ legacyy?.data?.[0]?.field_board_member_name }}</h5><span>{{
                              legacyy?.data?.[0]?.field_designation
                              }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row h-100">
                      <div class="col-lg-5">
                        <div class="post-box">
                          <div class="text-start">
                            <h4 tabindex="0" class="arfs-7 mb-0 pb-2">Our Strategic Approach</h4>
                          </div>
                          <div class="lineleft gsmHeightZF-5">
                            <div class="line-create border-bottom-0">
                              <div class="verticalLine">&nbsp;</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-7">
                        <div class="d-flex h-100 align-items-end w-100">
                          <div class="post-box mt-5 mb-sm-0 mb-4 h-auto w-100 strategic_approach_content">
                            <div v-for="(strategic,index) in homepage?.data?.field_sections?.[4]?.field_startegic_approach"
                              :key="index">
                              <p tabindex="0" class="mt-5 pt-1 ">
                                {{ strategic }}
                              </p>
                              <hr class="strategic_approach_content__line">
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-5 d-none d-lg-block ">
                    <div class="col-lg-12 h-100 ">
                      <div class="post-box h-100 ps-lg-5">
                        <div class="post-img  Chairman-IMG  gsapChairManImg gsapPaperAnimationwrap">
                          <NuxtImg role="img" tabindex="0" width="100%" height="100%" loading="lazy"
                            :src="withDrupalIndexPrefix(legacyy?.data?.[0]?.field_our_legacy_member_image?.field_media_image?.image_style_uri?.home_our_legacy)"
                            :alt="legacyy?.data?.[0]?.field_our_legacy_member_image?.field_media_image?.meta?.alt" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="row">
                  <div class="col-lg-3 " >
                    <div class="post-box our-leadersip-left-line-wrap">

                      <div class="text-start our-leadersip">
                        <div class="lineleft">
                          <div class="line-create border-top-0 hline">
                            <div class="verticalLine ">&nbsp;</div>
                          </div>
                        </div>
                      </div>

                      <div class="text-start pt-0 " data-aos="zoom-in-right" data-aos-duration="2000">
                        <h4 tabindex="0" class="pt-0 arfs-7 mb-0 pb-2">Our Leadership</h4>
                      </div>

                    </div>
                  </div>

                  <!-- <div  class="col-lg-9 ps-lg-0"  v-if="legacyy?.data?.length >= 3"> -->
                    <div  class="col-lg-9 ps-lg-0"  v-if="Array.isArray(legacyy?.data) && legacyy.data.length >= 3">
                    <div class="row">
                      <div class="col-lg-6 aos-init mt-lg-5 mt-3 pe-lg-4" v-if="legacyy?.data?.length > 1">
                        <div class="post-box">
                          <div class="post-img pb-4 pb-lg-5 gsapPaperSlideEffect vice-chairman-IMG">
                            <NuxtImg role="img" tabindex="0" width="100%" height="100%" loading="lazy"
                              aria-label="Vice Chairman Image"
                              :src="withDrupalIndexPrefix(legacyy?.data?.[1]?.field_our_legacy_member_image?.field_media_image?.image_style_uri?.home_our_leadership) || ''"
                              class="img-fluid"
                              :alt="legacyy?.data?.[1]?.field_our_legacy_member_image?.field_media_image?.meta?.alt" />
                          </div>
                          <p tabindex="0" class="pt-0 mt-0  ">{{ legacyy?.data?.[1]?.field_message || '' }}</p>
                          <div class="continue-reading text-left mt-3">
                            <button @click="showPopup(legacyy?.data?.[1], $event)"
                              aria-label="Click here to Continue reading" class="d-flex align-items-center">
                              Continue reading
                              <img width="12" height="11" src="~/assets/img/continue-reading-arrow.svg"
                                alt="continue reading" class="ml-2" rel="preload"  />
                            </button>
                          </div>
                          <div class="member-info px-0 text-end pt-4 pt-lg-5 "tabindex="0">
                            <h5>{{ legacyy?.data?.[1]?.field_board_member_name }}</h5><span>{{
                              legacyy?.data?.[1]?.field_designation}}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-6 aos-init mt-lg-5 mt-3 ps-lg-4" v-if="legacyy?.data?.length > 1">
                        <div class="post-box">
                          <div class="post-img pb-4 pb-lg-5  gsapPaperSlideEffect ceo-IMG">
                            <NuxtImg role="img" tabindex="0" loading="lazy" class="img-fluid"
                              :src="withDrupalIndexPrefix(legacyy?.data?.[2]?.field_our_legacy_member_image?.field_media_image?.image_style_uri?.home_our_leadership) || ''"
                              :aria-label="'Managing Director & CEO Image'"
                              :alt="legacyy?.data?.[2]?.field_our_legacy_member_image?.field_media_image?.meta?.alt" />
                          </div>

                          <p tabindex="0" class="pt-0 mt-0  " >{{ legacyy?.data?.[2]?.field_message }}</p>
                          <div class="continue-reading text-left mt-3" >
                            <button  tabindex="0" aria-label="Click here to Continue reading"
                              @click="showPopup(legacyy?.data?.[2], $event)" class="d-flex align-items-center">
                              Continue reading
                              <img src="~/assets/img/continue-reading-arrow.svg" alt="" class="ml-2" rel="preload"  />
                            </button>
                          </div>
                          <div class="member-info px-0 text-end pt-3 pt-lg-5 "  tabindex="0">
                            <h5>{{ legacyy?.data?.[2]?.field_board_member_name }}</h5>
                            <span>{{ legacyy?.data?.[2]?.field_designation }}</span>
                          </div>

                        </div>
                      </div>
                      <div class="row">
                        <div class="col-lg-6 aboutusbtn d-flex pt-5 justify-content-lg-end justify-sm-start" v-if="legacyy?.data?.length > 1">
                          <NuxtLink to="/about-us" class="btn-white align-self-start me-lg-5">
                            <span>More About Us</span>
                            <i class="bi bi-arrow-right" role="presentation"></i>
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- ============ -->
            <!-- 09 Closer Look-->
            <!-- ============ -->
            <section id="a-closer-look" class="a-closer-look mt-4 pb-md-5 pb-4">
              <div class="container " data-aos="fade-down">
                <div class="row">
                  <div class="col-lg-3"></div>
                  <div class="col-lg-9  text-start" >
                    <div class="section-header text-start">
                      <h4 tabindex="0" class="arfs-2">A CLOSER LOOK</h4>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3" data-aos="fade-right" data-aos-delay="400">
                    <div class="post-box dn-s">
                      <div class="text-start d-flex" tabindex="0">
                        <h3 class="mb-2 pe-1 h1">{{homepage?.data?.field_sections?.[3]?.field_no_of_regions}}</h3>
                        <p class="fs-5 mb-0 text-secondary">{{homepage?.data?.field_sections?.[3]?.field_regions_title}}</p>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-4 ">
                    <div class="post-box d-flex flex-column align-items-stretch justify-between">
                      <div class="post-img pb-5 mb-md-5 closerLookImg1 gsapPaperAnimationwrap ">
                        <NuxtImg role="img" tabindex="0" width="100%" height="100%" loading="lazy"
                          :src="withDrupalIndexPrefix(homepage?.data?.field_sections?.[3]?.field_small_image?.field_media_image?.image_style_uri?.a_closer_look_1)"
                          class="img-fluid "
                          :alt="homepage?.data?.field_sections?.[3]?.field_small_image?.field_media_image?.meta?.alt" />
                      </div>
                      <div class="post-box dn-s dn-d dn-m">
                        <div class="text-start d-flex" tabindex="0">
                          <h1 class="mb-2 pe-2">{{homepage?.data?.field_sections?.[3]?.field_no_of_regions}}</h1>
                          <p class="fs-5 mb-0 text-secondary">{{homepage?.data?.field_sections?.[3]?.field_regions_title}}
                          </p>
                        </div>
                      </div>
                      <div class="closerlook-list  mb-4 mb-sm-0 strategic_approach_content">
                        <div v-for="(closeData,index) in homepage?.data?.field_sections?.[3]?.field_a_closer_look_lists"
                          :key="index">
                          <p tabindex="0" class="m-0">
                            {{closeData}}
                          </p>
                          <hr class="closer_link_content__line">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-5">
                    <div class="post-box">
                      <div class="post-img   closerLookImg2 gsapPaperAnimationwrap">
                        <NuxtImg role="img" tabindex="0" width="100%" height="100%" loading="lazy"
                          :src="withDrupalIndexPrefix(homepage?.data?.field_sections?.[3]?.field_big_image?.field_media_image?.image_style_uri?.a_closer_look_2)"
                          :alt="homepage?.data?.field_sections?.[3]?.field_big_image?.field_media_image?.meta?.alt"
                          class="img-fluid tile-img" />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </section>
          </div>
        </div>
        <!-- End Page -->
        <!-- Footer -->
        <Footer />
      </div>
    </div>
    <!-- Popup -->
    <div id="ourlegacy2" class="ourlegacy">
      <PopupComponent :isVisible="isPopupVisible" @close="closePopup">
        <div class="pb-0">
          <div class="row">
            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-sm-12 img-popup">
              <NuxtImg role="img" tabindex="0" class="cursor-pointer h-100"
                :src="withDrupalIndexPrefix(legacyPopupData?.field_our_legacy_member_image?.field_media_image?.image_style_uri?.home_our_legacy)"
                width="469" height="638" rel="preload" 
                :alt="legacyPopupData?.field_our_legacy_member_image?.field_media_image?.meta?.alt" />
            </div>
            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-6 data-content" tabindex="0" role="dialog"
              aria-labelledby="dialog1_label">
              <h1 tabindex="0">{{ legacyPopupData?.field_board_member_name }}</h1>
              <h5 tabindex="0">{{ legacyPopupData?.field_designation }}</h5>
              <div class="message-detail">
                <div v-html="legacyPopupData?.body?.value" tabindex="0" @keydown="handleKeydownFocusToClose"></div>
              </div>
            </div>
          </div>
        </div>
      </PopupComponent>
    </div>
  </div>

  <!-- Globe Popup -->
   <div id="globalPresense">
    <Popup :isVisible="isOpen" class="globeModal" @close="closePopup1" tabindex="0">
      <div class="row globpopup">
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 popupglob" v-if="legacyy?.data?.length > 1">
          <h1 class="fs-4 text-primary mb-4" tabindex="0">{{ selectedMapData.name }}</h1>
          <!-- <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" /> -->
          <p tabindex="0">{{ selectedMapData.city }}, {{ selectedMapData.country }}</p>
          <p tabindex="0" class="pb-3 pb-sm-2 mb-1 numbersmap">{{ selectedMapData.lat }} , {{ selectedMapData.long }}</p>
          <a :href="selectedMapData.website?.uri" target="_blank" class="fs-6 color-primary font-weight-medium">Visit
            Website</a>
          <div class="nextpreviousbutton">
            <button @click="movePrev"><img v-if="legacyy?.data?.length > 1" src="/assets/icons/arrow-bl-media.svg" rel="preload"></button>
            <button @click="moveNext"><img v-if="legacyy?.data?.length > 1" src="/assets/icons/arrow-bl-media.svg" rel="preload"></button>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 img-popup" tabindex="0" v-if="legacyy?.data?.length > 1">
          <div class="globe_img_container" :style="{ backgroundImage: `url(${selectedMapData.image_url})` }">
          </div>
          <!-- <img :src="selectedMapData.image_url" :alt="selectedMapData.image_alt" class="h-100" /> -->
        </div>
      </div>
    </Popup>
  </div>
</template>
<script setup lang="ts">
  import { computed, onMounted, onUnmounted, nextTick, ref } from 'vue';
  import { useFetch, useRuntimeConfig } from '#imports';
  import gsap from 'gsap';
  import PopupComponent from '../components/Popup.vue';
  import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
  import { TitleAnimation, TitleAnimationForClass } from '~/helpers/gsap/title-animation';
  import { initTextFadeInOnScroll, initSectionMarginAnimation } from '~/helpers/gsap/ParallaxBGTextFade';
  import { initPaperSlideAnimation, initPortfolioImageAnimation, initSlidingAnimation, initPortfolioImageAnimationWithTrigger } from '~/helpers/gsap/InitSlidingImage';
  import { initBatchWidthAnimation, initHeightAnimation, initWidthAnimation } from '~/helpers/gsap/LineAnimations';


  let isPlaying = true;
  let videoBtnTxt = ref('');
  videoBtnTxt.value = '<span class="px-1"></span>||<span class="px-1"></span>';
  const myVideo = ref();
  const selectedMapData = ref<any>(null);
  const isOpen = ref(false)
  const closePopup1 = () => {isOpen.value = false;selectedMapData.value=''};
  const selectedCurrentKey=ref(1);



  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
  const isPopupVisible = ref(false);
  const legacyPopupData = ref<any>(null);
  const shareClickedItem = ref<HTMLElement | null>(null)

  const navigateToPage = (path: string) => {
    window.location.href = path.startsWith('/') ? path : `/${path}`;
  };

  const showPopup = (legacyData: any, event: MouseEvent) => {
    isPopupVisible.value = true;
    legacyPopupData.value = legacyData;
    shareClickedItem.value = (event.currentTarget as HTMLElement | null) ?? null;
  };
  const closePopup = () => {
    isPopupVisible.value = false;
    legacyPopupData.value = '';
    nextTick(() => {
      if (shareClickedItem.value) {
        shareClickedItem.value.focus();
      }
    });
  };
  const handleKeydownFocusToClose = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
      const focusEvent = new CustomEvent('focus-close-button');
      window.dispatchEvent(focusEvent);
    }
  }
  const homepage = ref<any>({ data: {} });
  const portfolios = ref<any>({ data: [] });
  const businesses = ref<any>({ data: [] });
  const news = ref<any>({ data: [] });
  const partners = ref<any>({ data: [] });
  const legacyy = ref<any>({ data: [] });
  const fileCache = ref<Record<string, any>>({});
  const title = ref<HTMLElement | null>(null);
  const subtitle = ref<HTMLElement | null>(null);
  const main = ref<HTMLElement | null>(null);
  let ctx: gsap.Context | null = null;
  const partnerImages = [
    new URL('../assets/img/partners/partner1.png', import.meta.url).href,
    new URL('../assets/img/partners/partner2.png', import.meta.url).href,
    new URL('../assets/img/partners/partner3.png', import.meta.url).href,
    new URL('../assets/img/partners/partner4.png', import.meta.url).href,
    new URL('../assets/img/partners/partner5.png', import.meta.url).href,
    new URL('../assets/img/partners/partner6.png', import.meta.url).href,
    new URL('../assets/img/partners/partner7.png', import.meta.url).href,
    new URL('../assets/img/partners/partner8.png', import.meta.url).href,
    new URL('../assets/img/partners/partner9.png', import.meta.url).href
  ];
  const partnerCards = computed(() => {
    return partnerImages.map((image, index) => {
      const partner = partners.value?.data?.[index];
      return {
        image,
        alt: partner?.field_partners_logo?.field_media_image?.meta?.alt || partner?.name || `Partner ${index + 1}`
      };
    });
  });

  function videoPlay() {

    if (isPlaying) {
      myVideo.value.pause()
      isPlaying = false;
      videoBtnTxt.value = '<span class="px-1">.</span>PLAY<span class="px-1">.</span>';
    } else {
      myVideo.value.play()
      isPlaying = true;
      videoBtnTxt.value = '<span class="px-1"></span>||<span class="px-1"></span>';
    }
  }
  const [homepageResult, portfoliosResult, businessesResult, newsResult, partnersResult, legacyResult] = await Promise.allSettled([
    useFetch<any>(
      `${apiBaseURL}/jsonapi/node/landing_page/c5bc3535-c8b8-446c-8a33-fefdb728061a?include=field_sections,field_sections.field_data_details,field_sections.field_map_markers_data,field_sections.field_map_markers_data.field_image.field_media_image,field_sections.field_big_image,field_sections.field_big_image.field_media_image,field_sections.field_small_image,field_sections.field_small_image.field_media_image,field_video_image_banner,field_video_image_banner.field_media_video_file,field_video_image_banner.field_media_image,field_sections.field_icon_text_main,field_sections.field_icon_text_main.field_icon.field_media_image,field_sections.field_startegic_approach_about`,
      { method: 'GET', headers: { Authorization: `Basic ${apiAuthKey}` } }
    ),
    useFetch<any>(
      `${apiBaseURL}/jsonapi/node/portfolio?page[limit]=6&sort[sort-field-created][path]=created&sort[sort-field-created][direction]=DESC&include=field_property_image.field_media_image,field_tags`,
      { method: 'GET', headers: { Authorization: `Basic ${apiAuthKey}` } }
    ),
    useFetch<any>(
      `${apiBaseURL}/jsonapi/taxonomy_term/our_core_businesses`,
      { method: 'GET', headers: { Authorization: `Basic ${apiAuthKey}` } }
    ),
    useFetch<any>(
      `${apiBaseURL}/jsonapi/node/news?page[limit]=3&sort[sort-field_published_date][path]=field_published_date&sort[sort-field_published_date][direction]=DESC&include=field_news_thumbnail.field_media_image`,
      { method: 'GET', headers: { Authorization: `Basic ${apiAuthKey}` } }
    ),
    useFetch<any>(
      `${apiBaseURL}/jsonapi/taxonomy_term/our_partners`,
      { method: 'GET', headers: { Authorization: `Basic ${apiAuthKey}` }, default: () => ({ data: [] }) }
    ),
    useFetch<any>(
      `${apiBaseURL}/jsonapi/node/board_members?include=field_our_legacy_member_image.field_media_image`,
      { method: 'GET', headers: { Authorization: `Basic ${apiAuthKey}` } }
    )
  ]);

  if (homepageResult.status === 'fulfilled' && homepageResult.value.data.value) homepage.value = homepageResult.value.data.value;
  else if (homepageResult.status === 'rejected') console.error('Homepage fetch failed:', homepageResult.reason);

  if (portfoliosResult.status === 'fulfilled' && portfoliosResult.value.data.value) portfolios.value = portfoliosResult.value.data.value;
  else if (portfoliosResult.status === 'rejected') console.error('Portfolio fetch failed:', portfoliosResult.reason);

  if (businessesResult.status === 'fulfilled' && businessesResult.value.data.value) businesses.value = businessesResult.value.data.value;
  else if (businessesResult.status === 'rejected') console.error('Businesses fetch failed:', businessesResult.reason);

  if (newsResult.status === 'fulfilled' && newsResult.value.data.value) news.value = newsResult.value.data.value;
  else if (newsResult.status === 'rejected') console.error('News fetch failed:', newsResult.reason);

  if (partnersResult.status === 'fulfilled' && partnersResult.value.data.value) partners.value = partnersResult.value.data.value;
  else if (partnersResult.status === 'rejected') console.error('Partners fetch failed:', partnersResult.reason);

  if (legacyResult.status === 'fulfilled' && legacyResult.value.data.value) legacyy.value = legacyResult.value.data.value;
  else if (legacyResult.status === 'rejected') console.error('Board members fetch failed:', legacyResult.reason);

// Refs
// const title = ref<HTMLElement | null>(null);
// const subtitle = ref<HTMLElement | null>(null);

// const main = ref<HTMLElement | null>(null);
// let ctx: any = null;



//   const moveNext = () => {
//   let markerData=homepage.value.data.field_sections[2].field_map_markers_data;
//   let testArray=markerData.sort((a: { field_country: string; }, b: { field_country: any; }) => a.field_country.localeCompare(b.field_country))
  
//   selectedCurrentKey.value=selectedMapData.value.id;
  
//   if(selectedCurrentKey.value==(testArray.length-1)){
//     selectedCurrentKey.value=0;
//   }else{
//     selectedCurrentKey.value=selectedCurrentKey.value+1;
//   }
//   selectedMapData.value={
//     id:selectedCurrentKey.value,
//     city:testArray[selectedCurrentKey.value].field_city_name,
//     country:testArray[selectedCurrentKey.value].field_country,
//     name:testArray[selectedCurrentKey.value].field_property_name,
//     lat:testArray[selectedCurrentKey.value].field_latitude,
//     long:testArray[selectedCurrentKey.value].field_longitude,
//     image_alt:testArray[selectedCurrentKey.value].field_image.field_media_image.meta.alt,
//     image_url:testArray[selectedCurrentKey.value].field_image.field_media_image.image_style_uri.map_image,
//     website:testArray[selectedCurrentKey.value].field_website_link
//   };
  
// };
// const movePrev = () => {
//   let markerData=homepage.value.data.field_sections[2].field_map_markers_data;
//   let testArray=markerData.sort((a: { field_country: string; }, b: { field_country: any; }) => a.field_country.localeCompare(b.field_country))

//   selectedCurrentKey.value=selectedMapData.value.id;
  
//   if(selectedCurrentKey.value==0){
//     selectedCurrentKey.value=testArray.length-1;
//   }else{
//     selectedCurrentKey.value=selectedCurrentKey.value-1;
//   }
  
//   selectedMapData.value={
//     id:selectedCurrentKey.value,
//     city:testArray[selectedCurrentKey.value].field_city_name,
//     country:testArray[selectedCurrentKey.value].field_country,
//     name:testArray[selectedCurrentKey.value].field_property_name,
//     lat:testArray[selectedCurrentKey.value].field_latitude,
//     long:testArray[selectedCurrentKey.value].field_longitude,
//     image_alt:testArray[selectedCurrentKey.value].field_image.field_media_image.meta.alt,
//     image_url:testArray[selectedCurrentKey.value].field_image.field_media_image.image_style_uri.map_image,
//     website:testArray[selectedCurrentKey.value].field_website_link
//   };
  
// };

function withDrupalIndexPrefix(url) {
  if (!url) return url;

  try {
    const parsed = new URL(url);
    if (parsed.pathname.startsWith('/sites/default/files/styles/')) {
      parsed.pathname = `/index.php${parsed.pathname}`;
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

function getPfolioImgUrl(item) {
  const imageUrl = item?.field_property_image?.field_media_image?.image_style_uri?.portfolio_listing
    || fileCache.value[item?.field_property_image?.field_media_image?.id]?.portfolio_listing;
  return withDrupalIndexPrefix(imageUrl);
}

const moveNext = () => {
  const markerData = homepage.value?.data?.field_sections?.[2]?.field_map_markers_data;

  if (!markerData || !Array.isArray(markerData)) {
    console.error("Marker data is not available or invalid.");
    return;
  }

  const testArray = markerData.sort((a, b) => {
    if (!a.field_country || !b.field_country) {
      console.warn("Missing field_country in marker data.");
      return 0;
    }
    return a.field_country.localeCompare(b.field_country);
  });

  selectedCurrentKey.value = selectedMapData.value?.id ?? 0;

  if (selectedCurrentKey.value === testArray.length - 1) {
    selectedCurrentKey.value = 0;
  } else {
    selectedCurrentKey.value += 1;
  }

  const currentMarker = testArray[selectedCurrentKey.value];
  if (currentMarker) {
    selectedMapData.value = {
      id: selectedCurrentKey.value,
      city: currentMarker.field_city_name,
      country: currentMarker.field_country,
      name: currentMarker.field_property_name,
      lat: currentMarker.field_latitude,
      long: currentMarker.field_longitude,
      image_alt: currentMarker.field_image?.field_media_image?.meta?.alt || "",
      image_url: withDrupalIndexPrefix(currentMarker.field_image?.field_media_image?.image_style_uri?.map_image) || "",
      website: currentMarker.field_website_link || "",
    };
  }
};

const movePrev = () => {
  const markerData = homepage.value?.data?.field_sections?.[2]?.field_map_markers_data;

  if (!markerData || !Array.isArray(markerData)) {
    console.error("Marker data is not available or invalid.");
    return;
  }

  const testArray = markerData.sort((a, b) => {
    if (!a.field_country || !b.field_country) {
      console.warn("Missing field_country in marker data.");
      return 0;
    }
    return a.field_country.localeCompare(b.field_country);
  });

  selectedCurrentKey.value = selectedMapData.value?.id ?? 0;

  if (selectedCurrentKey.value === 0) {
    selectedCurrentKey.value = testArray.length - 1;
  } else {
    selectedCurrentKey.value -= 1;
  }

  const currentMarker = testArray[selectedCurrentKey.value];
  if (currentMarker) {
    selectedMapData.value = {
      id: selectedCurrentKey.value,
      city: currentMarker.field_city_name,
      country: currentMarker.field_country,
      name: currentMarker.field_property_name,
      lat: currentMarker.field_latitude,
      long: currentMarker.field_longitude,
      image_alt: currentMarker.field_image?.field_media_image?.meta?.alt || "",
      image_url: withDrupalIndexPrefix(currentMarker.field_image?.field_media_image?.image_style_uri?.map_image) || "",
      website: currentMarker.field_website_link || "",
    };
  }
};



// console.log('error:', error.value)
const secondLeader = computed(() => {
 return legacyy?.value?.data?.[1] || null
});

  // Animation on mount
onMounted(async () => {
  await nextTick();

   // Check if the user is on macOS and using Chrome
   if (navigator?.userAgent?.includes('Mac OS X') && navigator?.userAgent?.includes('Chrome')) {
      document.body.classList.add('mac-chrome');
    }
    
  ctx = gsap.context(async () => {
    await InitSmoothness().then(s => {
      // title animation
      TitleAnimation(title.value);
      TitleAnimation(subtitle.value, 150, 1, 0.3);

      // Background Image Paralax, Text Fade Animation
      initTextFadeInOnScroll('.gsapTextFade');
      initSectionMarginAnimation('.allSectionParalax');

      // section 02 
      TitleAnimationForClass('.introduction_text', -50, 2, 1, "power2.out", 0);
      initHeightAnimation('.gsmHeightZF', '.introduction_text', 4, 2, "power2.out", "100%", 1);
      TitleAnimationForClass('.latestNews_text', -50, 1, 1, "power2.out", 0);
      initHeightAnimation('.gsamLatestNewsLine', '.latestNews_text', 2, 1, "power2.out", "100%", 1.5);

      // News
      initPaperSlideAnimation(".gsapLatestNewsThumb", "img", "top 80%", "bottom 20%", 1, 'Power1.out');
      initSlidingAnimation(".gsapLatestNewsContent", ".gsapLatestNewsContent", 120, 2, 0.1, "power2.out");
      initSlidingAnimation(".gsapTopBottom", ".gsapTopBottom", 80, 1, 0, "power2.out");

      // Portfolio Image Slide Down
      initSlidingAnimation(".gsapYPortfolio100", ".gsapYPortfolio100", 40, 1, 1, "power2.out");
      initPortfolioImageAnimation(".gsapPaperSlideEffectPortfolio", "img", "top 40%", "bottom 20%", 1.5, 'Power1.out');
      initSlidingAnimation(".gsapYPortfolio120", ".gsapYPortfolio120", 130, 2, 0, "Power2.out");

      // Counter Section
      initSlidingAnimation(".gsapYCounterTitle", ".gsapYCounterTitle", 100, 2.5, 2, "power1.out");
      initSlidingAnimation(".gsapYCounter100", ".counters", 50, 1.5, 0, "power1.out");
      initSlidingAnimation(".gsapYCounter200", ".counters", 70, 1.5, 0, "Power1.out");
      initSlidingAnimation(".gsapYCounter300", ".counters", 80, 1.5, 0, "power1.out");
      initSlidingAnimation(".gsapYCounter400", ".counters", 100, 1.5, 0, "power1.out");
      // Our Partner
      initSlidingAnimation(".gsapYPartners200", ".gsapYPartners200", 110, 1, 0.1, "Power1.out");

      // <!-- 08 Our Legacy -->
      initSlidingAnimation(".gsapLegacyTitle", ".gsapLegacyTitle", 100, 2, 1, "power1.out");
      initSlidingAnimation(".gsapLegacyContent", ".gsapLegacyTitle", 100, 2, 1, "power1.out");
      initPortfolioImageAnimation(".gsapChairManImg", "img", "top 10%", "bottom 20%", 4, 'Power1.out');
      initPaperSlideAnimation(".gsapPaperSlideEffect", "img", "top 80%", "bottom  20%", 2, 'Power1.out');

      // Sliding Images (Grid)
      initSlidingAnimation(".gsapY100", ".gsapY100", 100, 0.2, 0.1, "power1.out");
      initSlidingAnimation(".gsapY200", ".gsapY200", 130, 1, 0.1, "Power1.out");
      initSlidingAnimation(".gsapY300", ".gsapY300", 160, 1, 0.1, "power1.out");
      initSlidingAnimation(".gsapY400", ".gsapY400", 190, 1, 0.1, "power1.out");

      // Initialize height animations
      initHeightAnimation('.gsmHeightZF-3', '.gsmHeightZF-3', 7, 2, "power2.out");
      initHeightAnimation('.gsmHeightZF-4', '.gsmHeightZF-4', 7, 2, "power2.out");
      initHeightAnimation('.gsmHeightZF-5', '.gsmHeightZF-5', 7, 2, "power2.out");

      // Line width animations
      initWidthAnimation('.gsapX-line', '.gsapX-line', 3, 2, "power2.out");
      initBatchWidthAnimation('.strategic_approach_content__line', 2, 1, "power2.out");
      initBatchWidthAnimation('.closer_link_content__line', 2, 1, "power2.out");

      // Initialize paper slide animations
      initPortfolioImageAnimation(".closerLookImg1", "img", "top 20%", "bottom 20%", 2, 'Power1.out');
      initPortfolioImageAnimation(".closerLookImg2", "img", "top 10%", "bottom 20%", 4, 'Power2.out');
    })
      .catch(e => {
        console.log(e);
      });
  }, main.value || undefined);
});

onUnmounted(() => {
  // Clean up the gsap context when the component is unmounted
  if (ctx) ctx.revert();
  pauseSmoother();
});
</script>
<style scoped>
  .popup-content h1 { padding-bottom: 5px !important;}
  .popup-content .close-btn {top: 10px !important; right: 10px !important; background: transparent !important; color: gray;}
  .globpopup .nextpreviousbutton { margin-top: 26px; width: 91px; justify-content: space-between; display: flex;}
  .globpopup .nextpreviousbutton button { width: 40px; height: 40px; border: solid 1px #292929; border-radius: 100px; text-align: center; justify-content: center;    display: inline-flex;    align-items: center;}
  .globpopup .nextpreviousbutton button img {    width: 18px;}
  .globeModal { z-index: 1001;padding: 20px;}
  .globeModal a{ text-decoration: underline;  border: 0px;}
  .globe_img_container {
    background-color:#ccc;
      height: 100%;
      width: 100%;
      min-height:315px;
      background-size: cover;
      background-position: top center;
  }
  @media (min-width: 991.99px) {
  .globe_img_container {min-height:315px;}
  div#globalPresense .popup-content .popupglob h1 { height: 85px;}
  div#globalPresense .popup-content .popupglob p.pb-3.pb-sm-2.mb-1 {  min-height: 68px;}
  }
  .gsapTopBottom {
    transform: translateY(-100%);
    opacity: 0;
  }
  .gsapSlideDownIMG {
    transform: translateY(-100%);
  }

  .gsapPaperSlideEffectPortfolio,
  .gsapLatestNewsThumb,
  .gsapPaperAnimationwrap,
  .gsapPaperSlideEffect {
    visibility: hidden;
    position: relative;
    overflow: hidden;
    transition: none !important;
  }

  .gsapLatestNewsThumb img,
  .gsapPaperAnimationwrap img,
  .gsapPaperSlideEffectPortfolio img,
  .gsapPaperSlideEffect img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transform-origin: top;
    transition: none !important;

  }

  .knowMoreAboutLine {
    position: absolute;
    bottom: -16px;
    left: 0px;
    width: 100%;
    height: 1.2px;
    color: #fff;
  }

  @media (max-width: 1031.99px) {
    #globalPresense .globpopup { display: flex;flex-wrap: wrap-reverse;}
    #globalPresense .globpopup .img-popup {margin-bottom: 20px;}
  }
  @media (max-width: 991.99px) {
    .globe_img_container {min-height:250px;}
  }
  @media (max-width: 768.99px) {
    .globe_img_container {min-height:335px;background-size:100% 100%;}
    div#globalPresense .popup-content .numbersmap {font-size: 14px;}
    div#globalPresense .globpopup .popupglob h1 { min-height: 44px;}
  }
  @media (max-width: 500.99px) {
    .globe_img_container {min-height:232px;background-size:100% 100%;}
    .globpopup .nextpreviousbutton button img{
      width: 12px;
    }
    .globpopup .nextpreviousbutton {
      margin-top: 10px;
    }
 }

 /* Height */
 @media (max-height: 795.99px) {.globe_img_container {min-height:240px;}}
 @media (max-height: 667.99px) {.globe_img_container {min-height:180px;}}
 @media (max-height: 550.99px) {.globe_img_container {min-height:120px;}div#globalPresense .globpopup .popupglob h1{font-size:14px !important;}}
</style>
