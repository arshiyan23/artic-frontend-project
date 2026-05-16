<template>
  <Head>
    <Title>{{ sustainability?.data?.metatag?.[0]?.attributes?.content }}</Title>
    <Meta name="description" :content="sustainability?.data?.metatag?.[1]?.attributes?.content" />
  </Head>

  <div id="smooth-wrapper">
    <div id="smooth-content">

      <div class="sustainability-page overflow-hidden pt-75">
        <!-- Section 01 #leadershipmessage -->
        <div id="leadershipmessage" class="site-section leadershipmessage-section pt-4 pt-sm-0">
          <div class="leadershipmessage-wrap">
            <div class="container">
              <div class="leadershipmessage-wrap d-flex align-items-stretch">
  
                <div class="leadershipmessage-content">
                  <h1 tabindex="0" class="text-primary page-main-heading">
                    {{ sustainability?.data?.field_sections?.[0]?.field_title_sustanability }}
                  </h1>
                  <p tabindex="0" class="m-0 gsap_page_paragrap">
                    {{ sustainability?.data?.field_sections?.[0]?.field_description_sustanability }}
                  </p>
                </div>
  
                <!-- Cover -->
                 <div class="gsap_leadershipmessage_paperAnimation w-100">
                   <div class="leadershipmessage-thumb bg-gray p-5" tabindex="0" role="banner" aria-label="Sustainability Banner"
                   :style="{ backgroundImage: 'url(' + sustainability?.data?.field_sections?.[0]?.field_image?.field_media_image?.image_style_uri?.sustainability_banner + ')' }">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="sustainability">
          <!-- Section 02 #howwedoit -->
          <section id="howwedoit" class="sustainability howwedoit-section ">
            <div class="container " data-aos="fade-down">
              <div class="row mb-3 intro">
                <div class="col-lg-3 d-lg-block d-none " data-aos="fade-down" data-aos-delay="200">
                  <div class="post-box">
                    <div class="text-start before-top-border">
                      <h4 class="fs-5 mb-0 text-secondary pb-2 gsapSplitLetters1" tabindex="0">How we do it</h4>
                    </div>
                    <div class="lineleft">
                      <div class="line-create gsmHeightZF">
                        <div class="verticalLine">&nbsp;</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-9 " >
                  <div class="">
                    <h2 class="gsapSection2Heading" tabindex="0">
                      {{sustainability?.data?.field_sections?.[1]?.field_hwd_main_title }}
                    </h2>
                    <p class="gsapSection2paragraph" tabindex="0">{{
                      sustainability?.data?.field_sections?.[1]?.field_hwd_description_1 }}
                    </p>

                    <div class="col-lg-12">
                      <div class="row  row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                        <div v-for="(envInit,index) in sustainability?.data?.field_sections?.[1]?.field_icon_text_main || []"
                          :key="index" class="col-xl-4 col-md-6 px-md-3 px-2 my-md-3 my-2 gsapYPartners200">
                          <div class="services-box">
                            <div class="sb-inner-box">
                              <img :src="imgBaseURL + envInit?.field_icon?.field_media_svg?.uri?.url"
                                :alt="envInit?.field_icon?.field_media_svg?.meta?.alt || envInit?.field_hwd_title" />
                              <h3 tabindex="0">{{ envInit?.field_hwd_title }}</h3>
                              <p tabindex="0">{{ envInit?.field_hwd_description }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex justify-content-left pt-3 pb-sm-1 pb-3 mb-sm-5 mb-1 gsapSection2paragraph2">
                        <p tabindex="0" class="field_hwd_description_2">{{
                          sustainability?.data?.field_sections?.[1]?.field_hwd_description_2 }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!-- Section 03 #WeCare -->
          <div id="WeCare" class=" sustainability weCare-section pt-0 pb-0">
            <div class="container " data-aos="fade-down">
              <div class="row mb-0 intro">
                <div class="col-lg-3 d-none d-lg-block">
                  <div class="post-box">
                    <div class="text-start">
                      <h4 class="fs-5 mb-0 text-secondary pb-2 pt-0" tabindex="0">We Care</h4>
                    </div>
                  </div>
                </div>
                <div class="col-lg-9 " >
                  <div class="weCare-section-content">
                    <h2 tabindex="0" class="gsapSection3Heading">
                      {{sustainability?.data?.field_sections?.[2]?.field_hwd_main_title }}
                    </h2>
                    <p class="field_hwd_description_1 gsapSection3paragraph" tabindex="0">
                      {{ sustainability?.data?.field_sections?.[2]?.field_hwd_description_1 }}
                    </p>

                    <div class="col-lg-12 pt-2" >
                      <div class="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3">
                        <div v-for="(socialResp,index) in sustainability?.data?.field_sections?.[2]?.field_icon_text_main"
                          :key="index" class="col-xl-4 col-md-6 px-md-3 px-2 my-md-3 my-2 gsapSection3Boxes">
                          <div class="services-box">
                            <div class="sb-inner-box">
                              <img :src="imgBaseURL + socialResp?.field_icon?.field_media_svg?.uri?.url"
                                :alt="socialResp?.field_icon?.field_media_svg?.meta?.alt || socialResp.field_hwd_title" />
                              <h3 tabindex="0" class="m-0">{{ socialResp.field_hwd_title }}</h3>
                              <p tabindex="0" class="m-0">{{ socialResp.field_hwd_description }}</p>
                            </div>
                          </div>
  
                        </div>
                      </div>
                      <div class="d-flex justify-content-md-start justify-content-center py-md-5 py-4 mb-2 px-1 field_hwd_download">
                        <a :href="imgBaseURL + sustainability?.data?.field_sections?.[1]?.field_hwd_download?.field_media_document?.uri?.url"
                          target="_blank" aria-label="Download Learn More"
                          class="btn-white align-self-start"><span>Download to Learn More</span><i
                            class="bi bi-arrow-down"></i>
                        </a>
                        <!-- <button aria-label="Download Learn More" class="btn-white align-self-start" @click="downloadPDF"><span >Download to Learn More</span><i
                          class="bi bi-arrow-down"></i></button> -->
                          <!-- <button aria-label="Download Learn More"  :click="downloadPDF(apiBaseURL + sustainability?.data?.field_sections?.[1]?.field_hwd_download?.field_media_document?.uri?.url)"><span >..</span></button> -->
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>

</template>
<script lang="ts" setup>
  import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue';
  import { useFetch, useRuntimeConfig } from '#imports';
  import gsap from 'gsap';
  import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
  import { animateTitleLines, animateTitleLetters,animateTitleWords } from '~/helpers/gsap/title-animation';
  import { initPortfolioImageAnimation,initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';
  import { initHeightAnimation, initWidthAnimation } from '~/helpers/gsap/LineAnimations';

  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;

  const main = ref<HTMLElement | null>(null);
  let ctx: any = null;
  // Animation on mount
  const runAnimationSmother = (event = true) => {
    ctx = gsap.context(async () => {
        await InitSmoothness(event).then((s) => {
          // animateTitleLetters('.page-main-heading', 88, 1, 'power1.out', 0.1);
          // animateTitleLines('.gsap_page_paragrap', 450, 1, 'power1.out', 3);

          animateTitleWords('.page-main-heading','.page-main-heading', 50, 1, 'power2.out', 0.2);
          animateTitleLines('.gsap_page_paragrap', -150, 1, 'power2.out', 0.2);

          initPortfolioImageAnimation(".gsap_leadershipmessage_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');
          // <!-- Section 02 #howwedoit -->
          animateTitleWords('.gsapSplitLetters1', '.gsapSplitLetters1', 20, 1, 'power1.out', 0.1, true);
          initHeightAnimation('.gsmHeightZF', '.gsapSplitLetters1', 5, 0, "power2.out", "100%", 2.3);

          animateTitleWords('.gsapSection2Heading','.gsapSplitLetters1', 50, 1, 'power1.out', 0.1, true);
          initSlidingAnimation(".gsapSection2paragraph", ".gsapSection2paragraph", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".gsapSection2paragraph2", ".gsapSection2paragraph2", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".gsapYPartners200", ".gsapYPartners200", 130, 1.2, 0.5, "Power1.out");

          // animateTitleWords('.gsapSection3Heading','.gsapSection3Heading', 50, 1, 'power1.out', 0.1, true);
          initSlidingAnimation(".gsapSection3Heading", ".gsapSection3Heading", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".gsapSection3paragraph", ".gsapSection3paragraph", 130, 2, 0.3, "Power1.out");
          initSlidingAnimation(".gsapSection3Boxes", ".gsapSection3Boxes", 150, 1.2, 0.5, "Power2.out");
          initSlidingAnimation(".field_hwd_download", ".field_hwd_download", 80, 2, 1, "Power2.out");

      })
      .catch(e => {
        console.log(e);
      });
    }, main.value ?? undefined);
  };
  onMounted(async () => {
    await nextTick();
    runAnimationSmother();
  });

  onUnmounted(() => {
    if (ctx) ctx.revert();
    pauseSmoother();
  });
  const downloadPDF = async (lnk: string) => {
  // const pdfUrl = 'https://artic-devsetup.azurewebsites.net/sites/default/files/2024-06/ARTIC-sustainability.pdf';
  const pdfUrl = lnk;
  
  // Fetch the file
  const response = await fetch(pdfUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch the file');
  }

  // Convert the response to a blob
  const blob = await response.blob();

  // Create a temporary URL for the blob
  const url = window.URL.createObjectURL(blob);

  // Create an anchor element and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'file.pdf'; // Set a filename for download
  document.body.appendChild(link);
  link.click();

  // Clean up the temporary URL and remove the link element
  window.URL.revokeObjectURL(url);
  document.body.removeChild(link);
};
//   const downloadPDF = () => {
//   const pdfUrl = 'https://artic-devsetup.azurewebsites.net/sites/default/files/2024-06/ARTIC-sustainability.pdf';
//   const link = document.createElement('a');
//   link.href = pdfUrl;
//   link.target = '_self'; // Ensures it doesn't open in a new tab
//   link.download = 'file.pdf'; // Set a file name for download
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

  // Title description api call
  const sustainability = ref<any>({
    data: {
      metatag: [],
      field_sections: [
        { field_title_sustanability: '', field_description_sustanability: '', field_image: {} },
        { field_hwd_main_title: '', field_hwd_description_1: '', field_hwd_description_2: '', field_hwd_download: {}, field_icon_text_main: [] },
        { field_hwd_main_title: '', field_hwd_description_1: '', field_icon_text_main: [] }
      ]
    }
  })
  try {
    const { data } = await useFetch<any>(apiBaseURL + '/jsonapi/node/landing_page/fd90d888-712e-411a-947d-d4a6cfb42d43?include=field_sections,field_sections.field_image.field_media_image,field_sections.field_icon_text_main,field_sections.field_icon_text_main.field_icon.field_media_svg,field_sections.field_hwd_download.field_media_document', {
      method: "GET",
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      }
    })
    if (data.value) sustainability.value = data.value
  } catch (e) { console.error('Sustainability fetch failed:', e) }
</script>
<style>
 



 .leadershipmessage-content h1,
.leadershipmessage-content h2 {
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;
  text-transform: uppercase;
  font-family: var(--font-primary);
  padding-top: 18px;
  padding-bottom: 18px;
}
.howwedoit-section {
  padding-top: 84px; 
  padding-bottom: 0;
}
 .weCare-section-content h2,
.howwedoit-section h2 {
  font-size: 22px;
  line-height: 30.8px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-purple);
  font-family: var(--font-primary);
  margin-bottom: 10px;
}
.howwedoit-section p.howwedoit-section-p {
  font-size: 14px;
  line-height: 22.6px;
  margin-bottom: 24px;
}
.field_hwd_description_2 {
  font-size: 14px;
  line-height: 22.6px;
  margin: 0;
}
/* Service Box */
.services-box {
  height: 220px;
  padding:20px 10px;
}
.services-box .sb-inner-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: relative;
}
.sb-inner-box img {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  width: 62px; 
  height: 72px; 
}
.sb-inner-box h3 {
  font-size: 12px;
  line-height: 20.84px;
  margin: 0;
  min-height:72.8px;
}
.sb-inner-box p {
  font-size: 12px;
  line-height: 20.4px;
  margin: 0;
}
/* weCare-section */
 .weCare-section-content p {
  margin: 0;
  font-size: 12px;
  line-height: 20.6px; 
}
/* =========== */
/* Media Query */
/* =========== */
@media (min-width: 1280px) {
  .leadershipmessage-wrap {
    min-height: 800px; 
  }
}

@media (min-width: 1024px) {
  .leadershipmessage-content h1,
  .leadershipmessage-content h2 {
    font-size: 48px;
    line-height: 67px;
    padding-top: 120px;    
    padding-bottom: 120px;
  }
  .howwedoit-section h2 {
    font-size: 48px;
    margin-bottom: 40px;
  }
  .field_hwd_description_2,
  .howwedoit-section p.howwedoit-section-p {
    font-size: 20px;
    line-height: 32px;
  }

  .sb-inner-box h3 {
    font-size: 24px;
    line-height: 38.4px;
  }
  .sb-inner-box p {
    font-size: 16px;
    line-height: 25.4px;
  }

   .weCare-section-content h2 {
    font-size: 48px; 
    line-height: 67px; 
    margin-bottom: 40px; 
  }
   .weCare-section-content p {
    font-size: 20px; 
    line-height: 32px; 
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .leadershipmessage-content h1,
  .leadershipmessage-content h2 {
    line-height: 48px;
    padding-top: 80px;    
    padding-bottom: 80px;
  }
  .howwedoit-section h2 {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 40px;
  }

  .howwedoit-section {
    padding-top: 80px; 
  }
  .field_hwd_description_2,
  .howwedoit-section p.howwedoit-section-p {
    font-size: 18px;
    line-height: 30px;
  }
}
@media (min-width: 768px) {
  .services-box {
    padding:20px;
    height: 440px; 
  }
  .sb-inner-box img {
    width: 122px;
    height: 122px; 
  }
  .weCare-section-content{
    margin-top: -26px;
  }
  .weCare-section-content h2 {
    font-size: 32px; 
    line-height: 48px; 
    margin-bottom: 40px; 
  }
   .weCare-section-content p {
    font-size: 18px; 
    line-height: 30px; 
  }
}
@media (max-width: 767px) {
  .leadershipmessage-content h1,
  .leadershipmessage-content h2 {
    font-size: 22px;
    line-height: 30.8px;
  }
  .howwedoit-section {
    padding-top: 40px;
    padding-bottom: 0;
}
}
@media (max-width: 374.99px) {
.weCare-section-content p {
    
    font-size: 11px;
    line-height: 19.6px;
}
}
</style>