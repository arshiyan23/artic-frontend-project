<template>
    <div class="pressrelease-page-template page-template" ref="main">
        <Head>
            <Title>{{ videoGallery?.data?.metatag?.[0]?.attributes?.content }}</Title>
            <Meta name="description" :content="videoGallery?.data?.metatag?.[1]?.attributes?.content" />
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
                                <li><a href="/press-release">Media Gallery</a></li>
                            </ol>
                        </div>
                    </div>
                    <div class="page-body">
                        <!-- ===================== -->
                        <!-- Video Gallery Section -->
                        <!-- ===================== -->
                        <div class="video-gallery-section">
                            <div class="container">
                                <!-- Header -->
                                <div class="section-head ">
                                    <h2 tabindex="0" class="page-main-heading" aria-label="Page ">MEDIA GALLery</h2>
                                    <p tabindex="0" class="d-sm-block d-none gsap_page_paragrap" >
                                        {{videoGallery?.data?.field_sections?.[0]?.field_short_description}}</p>
                                </div>
                                <!-- Body -->
                                <div class="section-body">
                                    <div class="row">
                                        <!-- Start - loop -->
                                        <div class="col-lg-4 col-md-6 col-6" v-for="(item, index) in videoGalleryList"
                                            :key="index">
                                            <div class="mediaVideo-listing mediaVideo-listing-sm mb-md-5 mb-3 w-100">
                                                <div class="mediaVideo-container-full gsap_video_paperAnimation gsapPaperSlideEffect">
                                                    <img :src="getImageUrl(item?.field_video_thumbnail?.field_media_image?.image_style_uri?.media_news_2)"
                                                        alt="Video Poster" class="mediaVideo-poster" tabindex="0">
                                                    <button tabindex="0"
                                                        class="mediaVideo-playbutton mediaVideo-playbutton-sm"
                                                        @click="openVideo(item?.field_video, index)"
                                                        aria-label="Play Video" :aria-labelledby="'playVideo' + index"
                                                        title="Play Video">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                            fill="currentColor" class="bi bi-play-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                                        </svg>
                                                        <span :id="'playVideo' + index">Play</span>
                                                    </button>
                                                </div>
                                                <div class="mediaVideo-content gsapYPartners200" tabindex="0"
                                                    @click="openVideo(item?.field_video, index)" role="link"
                                                    aria-label="Play Vidio">
                                                    {{item?.field_video_title}}
                                                </div>

                                            </div>
                                        </div>
                                        <!-- End Loop -->
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

     <!-- Popup -->
     <div v-if="showPopup" class="video-popup">
        <div class="video-popup-content">
            <button tabindex="0"  @click.stop="closePopup" class="close-button video-popup-close" aria-label="close">
                <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000" class="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
            </button>
            <video  ref="videoPlayer" muted controls  class="mediaVideo-player" width="100%" height="100%">
                <source :src="getVideoUrl(currentVideo)"  type="video/mp4">
                <source :src="getVideoUrl(currentVideo)"  type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="video-controls" v-if="!isPlaying">
                <button  @click.stop="togglePlayPause" aria-label="Play Video" aria-labelledby="playVideo2" title="Play Video" >
                    <i v-if="!isPlaying" class="bi bi-play-circle-fill"></i>
                    <i v-else class="bi bi-pause-circle-fill"></i>
                </button>
            </div>
            <p tabindex="0" @keydown="handleKeydownVideo" class="sr-only">Video Container</p>
        </div>
    </div>
    <!-- End of popup -->
</template>
<script>
    export default {
        data() {
            return {
                showPopup: false,
                isPlaying: false,
                currentVideoIndex: null,
                currentVideo: null,
            };
        },
        methods: {
            openVideo(videoItem, index) {
                this.currentVideoIndex = index;
                this.currentVideo = videoItem;
                this.showPopup = true;
                this.$nextTick(() => {
                    this.playVideo();
                    const closeButton = document.querySelector('.video-popup-close');
                    if (closeButton) {
                        closeButton.focus();
                    } 
                });
            },
            closePopup() {
                this.showPopup = false;
                this.currentVideo = null;
                this.pauseVideo();
                this.$nextTick(() => {
                    if (this.currentVideoIndex !== null) {
                        const buttons = document.querySelectorAll('.mediaVideo-playbutton');
                        if (buttons.length > this.currentVideoIndex) {
                            buttons[this.currentVideoIndex].focus();
                        }
                    }
                });
            },
            handleKeydownVideo(event) {
                if (event.key === 'Tab' && !event.shiftKey) {
                    event.preventDefault();
                    const button = document.querySelector('.video-popup-close');
                    button.focus();
                }
            },
            
            togglePlayPause() {
                if (this.isPlaying) {
                    this.pauseVideo();
                } else {
                    this.playVideo();
                }
            },
            playVideo() {
                this.isPlaying = true;
                this.$refs.videoPlayer.play();
            },
            pauseVideo() {
                this.isPlaying = false;
                this.$refs.videoPlayer.pause();
            },
        }
    };
</script>
<script setup >
    import placeholderImage from '/image_not_available.png';
    import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
    import gsap from 'gsap';
    import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
    import { animateTitleLines, animateTitleWords } from '~/helpers/gsap/title-animation';
    import { initPortfolioImageAnimation,initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';

    

    const config = useRuntimeConfig();
    const imgBaseURL = config.public.IMG_BASE_URL;
    const apiBaseURL = config.public.API_BASE_URL;
    const apiAuthKey = config.public.API_AUTH_KEY;
    const isLoading         = ref(false);
    const videoGalleryList  = useState('videoGalleryList');






    const main = ref(null);
    let ctx = null;
    // Animation on mount
    const runAnimationSmother = (event = true) => {
        ctx = gsap.context(async () => {
            await InitSmoothness(event).then((s) => {
                animateTitleWords('.page-main-heading','.page-main-heading', 50, 1, 'power2.out', 0.2);
                animateTitleLines('.gsap_page_paragrap',  108, 1, 'power1.out', 3);
        
                // Media Image Slide Down
                initSlidingAnimation(".gsapYPartners200", ".gsapYPartners200", 70, 2, 0.6, "Power2.out");
                initPortfolioImageAnimation(".gsap_video_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');

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



    // Video Gallery api call
    try {
      const { data: videoGallery } = await useFetch(apiBaseURL + '/jsonapi/node/landing_page/d7c412c3-cce4-4b3f-aafd-a00dd815f39a?include=field_sections,field_sections.field_video_section,field_sections.field_video_section.field_video_thumbnail.field_media_image,field_sections.field_video_section.field_video.field_media_video_file', {
          method: "GET",
          headers: {
          "Authorization": `Basic ${apiAuthKey}`
          }
      });
      if (videoGallery.value) {
        videoGalleryList.value = videoGallery.value?.data?.field_sections?.[0]?.field_video_section;
      }
    } catch (e) { console.error('Video gallery fetch failed:', e) }


    // Helping Functions
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
    const getImageUrl = (uri) => {
      if (!uri) return '';
      const url = uri.startsWith('http') ? uri : imgBaseURL + uri;
      return withDrupalIndexPrefix(url);
    }
    const getVideoUrl = (videoData) =>{
      const url = videoData?.field_media_video_file?.uri?.url;
      if (!url) return '';
      return url.startsWith('http') ? url : imgBaseURL + url;
    }
</script>
<style scoped>
    .video-gallery-section .section-body{
        padding-top:40px;
    }
    .video-gallery-section .row {
        margin:0px -30px;
    }
    .video-gallery-section .row > div{
        padding:0px 30px;
    }
    @media (max-width: 767.99px) {
         .video-gallery-section .section-body{
        padding-top:10px;
    }
        .video-gallery-section .row {
            margin:0px -10px;
        }
        .video-gallery-section .row > div{
            padding:0px 10px;
        }
    }
    @media (max-width: 575.99px) {
      
        .video-gallery-section .row {
            margin:0px -4px;
        }
        .video-gallery-section .row > div{
            padding:0px 4px;
        }
    }
</style>