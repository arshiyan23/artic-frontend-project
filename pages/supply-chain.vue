<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="start-page pt-75">
        <div class="supplychain">

          <Head>
            <Title>Supply Chain | Al Rayyan | Tourism Investment Co. (ARTIC)</Title>
            <Meta name="description" content="Supply Chain - ARTIC (Al Rayyan Tourism Investment Company) " />
          </Head>

          <div class="supplychain">
            <header id="header-supplychain" class="header fixed-top py-0" data-scrollto-offset="0">
              <div class="container d-flex align-items-center justify-content-between">
                <span class="d-flex align-items-center justify-content-between">
                  <NuxtLink to="/" class="logo d-flex align-items-center scrollto me-auto me-lg-0" tabindex="0">
                    <img class="img-fluid" src="/assets/img/logo.svg" alt="Logo" rel="preload"  >
                  </NuxtLink>
                  <span class="text-uppercase font-primary font-bold" tabindex="0">ARTIC Supply chain</span>
                </span>
                <!--<div class="d-flex align-items-center">
            <button class="btn-white align-self-start me-2"><span>Register</span></button>
            <button class="view-all align-self-start">
              <span>Login</span>
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>-->
              </div>
            </header>
          </div>
          <!-- Body -->
          <div class="scmainwrap">
            <div id="leadershipmessage" class="site-section leadershipmessage-section pt-4 pt-sm-0">
              <div class="leadershipmessage-wrap aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                <div class="container">
                  <div class="leadershipmessage-wrap d-flex align-items-stretch">
                    <div class="leadershipmessage-content aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                      <h2 tabindex="0"
                        class="arfs-2 text-primary font-primary font-weight-medium text-uppercase py-sm-5 py-4 my-xl-5 page-main-heading">
                        {{supplyChainBlock?.data?.[0]?.field_supply_title}}
                      </h2>
                      <div tabindex="0" class="m-0" v-html="supplyChainBlock?.data?.[0]?.body?.value"></div>
                    </div>

                    <!-- Mobile -->
                    <div tabindex="0" aria-label="supplyChain Banner"
                      class="leadershipmessage-thumb bg-light-blue-400 p-5 mt-0"
                      :style="supplyChainBlock?.data?.[0] ? { backgroundImage: `url(${getImageUrl(supplyChainBlock.data[0].field_supply_image.field_media_image.image_style_uri.artic_supply_chain_banner)})` } : {}">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Active Tender List -->
          <section id="contact" class="contact">
            <div class="container">
              <div class="row gy-5 gx-lg-5 ">
                <div class="col-lg-8 col-md-8 col-sm-12 getintouch border-end mt-m">
                  <h3 class="arfs-6 color-primary font-weight-bold mb-4 pb-2 pb-m text-uppercase mt-m-20">
                    <span tabindex="0" ref="pageHeadingRef">Active Tender List</span>
                    <span class="orang-number" tabindex="0"> {{supplyChainTenderList?.data?.length}} </span>
                  </h3>

                  <div class="tender-List-section" id="tenderListSection">
                    <div class="container">
                      <div class="section-body">

                        <div class="tender-List-container" v-for="(item, index) in supplyChainTenderList?.data"
                          :key="index">
                          <div class="head-sec-suplist w-100 d-flex align-items-center justify-content-between">
                            <a href="#" class="">{{item?.field_title_tender_list}}</a>
                            <span class="color-primary font-weight-bolder" tabindex="0">{{item?.field_amount}}</span>
                          </div>
                          <div class="tender-List-row justify-between">

                            <div class="tender-List-content d-flex tender-end-list">
                              <p class="pr-date-categories pe-lg-3">
                                <span class="d-block headname" tabindex="0">Tender no</span>
                                <span class="me-2 dessec" tabindex="0">{{item?.field_tender_no}}</span>
                              </p>
                              <p class="pr-date-categories pe-lg-3">
                                <span class="w-100 headname" tabindex="0">End Date</span>
                                <span tabindex="0" class="me-2 dessec">{{formatDate(item?.field_end_date)}}</span>
                              </p>
                            </div>
                            <div class="tender-List-content d-flex flex-1">
                              <p class="pr-description">
                                <span class="headname" tabindex="0">Description</span>
                                <span class="dessec" tabindex="0">
                                  {{item?.field_description_supply}}
                                </span>
                              </p>
                            </div>

                            <div class="tender-List-meta d-flex gap-3 ml-auto">

                              <a target="_blank" :href="getPDFDownloadLink(item?.field_pdf_supply)"
                                class="btn-white align-self-start" aria-label="Download PDF">
                                <span>PDF</span>
                                <i class="bi bi-arrow-down"></i>
                              </a>

                              <button @click="showPopup(item, $event, index)"
                                class="btn-white showPopupBtnVD align-self-start" aria-label="View Details">
                                <span>View Details</span>
                                <i class="bi bi-arrow-right"></i>
                              </button>

                            </div>
                          </div><!--]-->
                        </div>

                      </div>
                    </div>
                  </div>
                </div><!-- End Contact Form -->
                <div class="col-lg-4 col-md-4 col-sm-12 mt-m contact-form-sup">
                  <div class="info">
                    <h3 class="arfs-6 font-primary color-default font-weight-medium mb-4 pb-2" tabindex="0">Contact Us
                    </h3>
                    <p tabindex="0">Office Address</p>
                    <div class="info-item d-flex">
                      <div class="post-box">
                        <div class="post-img map-sec" tabindex="-1" aria-label="Office address map">
                          <div class="mapouter">
                            <div class="gmap_canvas">
                              <iframe class="gmap_iframe" width="521" height="231"  
                                          :src="`https://maps.google.com/maps?width=521&height=231&hl=en&q=${supplyChainContact?.data?.field_sections?.[0]?.field_address?.value}&t=&z=13&ie=UTF8&iwloc=B&output=embed`"></iframe>
                                          
                            </div>
                          </div>
                          <!-- <img tabindex="0" src="/assets/img/contact-map.jpg" class="img-fluid" alt="contact-map"> -->
                        </div>
                        <div >
                          <div class="post-box mapdown" >
                            <div tabindex="-1" class="mt-4 pt-1 mt-m-20 pt-m papdescontact" v-html="supplyChainContact?.data?.field_sections?.[0]?.field_address?.value"></div>
                            
                            <hr>
                            <p tabindex="0">
                              <span>Email: </span>
                              <a :href="'mailto:' + (supplyChainContact?.data?.field_sections?.[0]?.field_email || '')"
                                class="email">
                                {{ supplyChainContact?.data?.field_sections?.[0]?.field_email }}
                              </a>
                            </p>
                            <hr>
                            <p role="contentinfo" tabindex="0" aria-label="Telephone number">Tel: <NuxtLink
                                :to="`tel:${supplyChainContact?.data?.field_sections?.[0]?.field_tel}`">{{
                                supplyChainContact?.data?.field_sections?.[0]?.field_tel }}</NuxtLink>
                            </p>
                            <hr>
                            <p tabindex="0">Fax: {{ supplyChainContact?.data?.field_sections?.[0]?.field_fax }}</p>
                            <hr>
                          </div>
                        </div>
                        <div class="member-info px-0 text-sm-center text-lg-start pt-2 pb-4 dn-d db-m downloadbtn">
                          <a href="#" class="btn-white align-self-start"><span>Download to Learn More</span><i
                              class="bi bi-arrow-down"></i></a>
                        </div>
                      </div>
                    </div><!-- End Info Item -->
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!--<div class="regloginbtn">
      <div class="d-flex align-items-center justify-content-center">
        <button class="btn-white align-self-start me-2" aria-label="Register"><span>Register</span></button>
        <button class="view-all align-self-start" aria-label="Login"><span>Login</span><i class="bi bi-arrow-right"></i></button>
      </div>
    </div>-->
          <div class="supplychain">
            <footer class="footer-supplychain bg-purple">
              <div class="container">
                <div class="d-flex justify-content pb-0 mb-0 py-4 my-4 border-top flex-wrap text-center">
                  <p tabindex="0" class="copy-w">@2024 AI-Rayyan Tourism Investment Co. (ARTIC) All rights reserved</p>
                </div>
              </div>
            </footer>
          </div>

          <div id="membermessage" class="membermessage">
            <PopupComponent class="p-3" :isVisible="isPopupVisible" @close="closePopup">
              <div class="membermessage-content">
                <h1 class="inline-block" tabindex="0" @keydown="handleKeydown">Tender Release Form</h1>
                <div class="px-1 pt-3">
                  <iframe tabindex="-1" :src="getPDFDownloadLink(selecteditem?.field_pdf_supply)"
                    style="width:100%"></iframe>
                </div>
              </div>
            </PopupComponent>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, nextTick, watch } from 'vue';
  import { useFetch, useRuntimeConfig, useState } from '#imports';
  import PopupComponent from '../components/Popup.vue';
  const placeholderImage = '/image_not_available.png';
  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;

  const supplyChainTenderList = useState<any>('supplyChainTenderList', () => ({ data: [] }));
  const supplyChainBlock = useState<any>('supplyChainBlock', () => ({ data: [] }));
  const supplyChainContact = useState<any>('supplyChainContact', () => ({ data: { field_sections: [] } }));

  const isLoading = ref(false);
  const isPopupVisible = ref(false);
  const selecteditem = ref<any | null>(null);

  const pageHeadingRef = ref<HTMLElement | null>(null);
  const currentButtonPopup = ref<HTMLElement | null>(null);
  const currentButtonIndex = ref<number | null>(null);




  // Define a ref to track the visibility of the popup
  const showPopup = (item: any, _event: MouseEvent, index: string | number) => {
    selecteditem.value = item;
    isPopupVisible.value = true;
    currentButtonIndex.value = Number(index);
  };
  const closePopup = () => {
    isPopupVisible.value = false;
    selecteditem.value = null;

    nextTick(() => {
      if (currentButtonIndex.value !== null) {
        const buttons = document.querySelectorAll('.showPopupBtnVD');
        const button = buttons[currentButtonIndex.value] as HTMLElement | undefined;
        if (button) {
          button.focus();
        }
      }
    });

    // nextTick(() => {
    //   if ( currentButtonPopup.value) {
    //     currentButtonPopup.value.focus();
    //   }
    // });
  };
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault();
      const button = document.querySelector('.close-btn') as HTMLElement | null;
      button?.focus();
    }
  };



  // Default Data api call
  const fetchRecord = async () => {
    isLoading.value = true;


    //isLoading.value         = false;
  };

  // Fetch initial news data
  fetchRecord();

  // 01
  const { data: getData } = await useFetch(apiBaseURL + `/jsonapi/node/supply_chain`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    }
  });
  supplyChainTenderList.value = getData.value || { data: [] };


  // 02
  const { data: getBlock } = await useFetch(apiBaseURL + `/jsonapi/block_content/supply_chain`, {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    }
  });
  supplyChainBlock.value = getBlock.value || { data: [] };


  // 03
  const { data: contact } = await useFetch(apiBaseURL + '/jsonapi/node/landing_page/d2341547-1e41-4dac-be26-2c731dacc502', {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    },
  });
  supplyChainContact.value = contact.value || { data: { field_sections: [] } };


  const getImageUrl = (uri?: string) => {
    return uri ? (uri) : placeholderImage;
  };
  const formatDate = (dateString?: string) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    return dateString ? new Date(dateString).toLocaleDateString('en-US', options) : '';
  };
  const getPDFDownloadLink = (downloadItem: any) => {
    return downloadItem?.field_media_document?.uri?.url ? imgBaseURL + downloadItem.field_media_document.uri.url : '';
  };

  // Watch for popup visibility changes
  watch(isPopupVisible, (newValue: boolean) => {
    if (newValue) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
</script>
<style scoped>
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    height: 231px;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
    height: 231px;
  }

  .gmap_iframe {
    width: 521px !important;
    height: 231px !important;
  }
  .supply-chain-page header,
  .supply-chain-page .footermain {
    display: none;
  }

  .leadershipmessage-wrap {
    min-height: 560px;
  }


  .membermessage-content {
    width: 100%;
  }

  .membermessage-content h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    padding-bottom: 0;
    font-size: 16px;
    line-height: 20px;
    color: var(--color-purple);
    font-family: var(--font-primary);
  }

  .membermessage-content iframe {
    height: 220px;
  }

  /* ========== */
  /* Media Query */
  /* ========== */

  /* Extra-large screens (xl) */
  @media (min-width: 1280px) {
    .leadershipmessage-wrap {
      min-height: 680px;
    }
  }

  /* Medium screens (md) */
  @media (min-width: 768px) {
    .tender-List-container {
      margin-bottom: 40px;
    }

    .membermessage-content {
      width: 620px;
    }

    .membermessage-content h1 {
      font-size: 20px;
      line-height: 28px;
    }

    .membermessage-content iframe {
      height: 480px;
    }
  }
</style>