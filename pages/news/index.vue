<template>
        <Head>
            <Title>News</Title>
            <Meta name="description" content="Latest news from Artic." />
        </Head>
        <div class="news-page-template" tabindex="0" ref="main">
        <!-- <Loader :loading="isLoading"></Loader> -->
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div class="start-page pt-75">
                    <!-- site-breadcrumbs -->
                    <div class="site-breadcrumbs pt-md-5 pt-3 mt-3 pb-md-4 pb-3">
                        <div class="container">
                            <ol class="d-flex align-items-center p-0 m-0">
                                <li><a href="/">Home</a></li>
                                <li><a href="/media">Media</a></li>
                                <li><a href="/news">News</a></li>
                            </ol>
                        </div>
                    </div>
                    <div class="page-body">
                        <!-- News Listing Section -->
                        <div class="news-listing-section">
                            <div class="container">
                                <!-- Header -->
                                <div class="section-head d-sm-block d-none">
                                    <h2 tabindex="0" class="page-main-heading">News</h2>
                                    <p tabindex="0" class="gsap_page_paragrap">Keep up to date with all the latest news, press release and media
                                        content from
                                        the Artic.</p>
                                </div>
                                <!-- Body -->
                                <div class="section-body news-listing-grid">
                                    <div class="row">
                                        <!-- Loop Start -->
                                        <div v-for="(item, index) in newsList" :key="index"
                                            class="col-lg-6 col-md-6 mb-lg-5 mb-md-3 pb-3 mb-4 ">
                                            <div :id="'SliderNewsSM_' + index + currentPage"
                                                class="carousel mediaListing-slider sm-mediaListing-slider slide"
                                                data-bs-ride="carousel">
                                                <div class="carousel-inner bg-[#ccc]">
                                                    <!-- Slide Items -->
                                                    <div v-for="(image, j) in item?.field_news_gallery" :key="j"
                                                        :class="{ 'carousel-item gsap_video_paperAnimation gsapPaperSlideEffect': true, 'active': j === 0 }">
                                                        <img tabindex="0"
                                                            :src="getImageUrl(image?.field_media_image?.image_style_uri?.news_listing)"
                                                            class="d-block w-100"
                                                            :alt="image?.field_media_image?.meta?.alt || 'Slide Image'">
                                                    </div>
                                                    <!-- Arrows -->
                                                    <div v-if="item?.field_news_gallery?.length > 1">
                                                        <button tabindex="0" class="carousel-control-prev" type="button"
                                                            :data-bs-target="'#SliderNewsSM_' + index + currentPage"
                                                            data-bs-slide="prev">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor" class="bi bi-arrow-left"
                                                                viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd"
                                                                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                                            </svg>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button tabindex="0" class="carousel-control-next" type="button"
                                                            :data-bs-target="'#SliderNewsSM_' + index + currentPage"
                                                            data-bs-slide="next">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                height="16" fill="currentColor"
                                                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd"
                                                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                            </svg>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <!-- Content -->
                                                <div class="carousel-item-content right-1 gsapYPartners200">
                                                    <div class="ci-content-meta">
                                                        <span tabindex="0" class="date">{{
                                                            formatDate(item.field_published_date)}}</span>
                                                        <button tabindex="0" class="share-icon"
                                                            @click="openSharePopup(item, $event)"
                                                            aria-label="social media share">
                                                            <span class="sr-only">Button</span>
                                                            <img src="../../assets/img/share.svg" alt="" />
                                                        </button>
                                                    </div>
                                                    <h3 tabindex="0">
                                                        {{item.title}}
                                                    </h3>
                                                    <p tabindex="0" class="m-0" v-if="item?.body?.summary">
                                                        {{item?.body?.summary}}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Loop End -->
                                    </div>
                                    <!-- Pagination -->
                                    <div class="text-center mb-md-5 mb-4 pb-lg-4">
                                        <div class="site-pagination">
                                            <button tabindex="0" :class="{ 'disabled': offSet === 0 }" class="backbtn"
                                                @click="fetchPrevPage" aria-labelledby="backBtn" title="Previous Page">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                                                </svg>
                                                <span id="backBtn" class="hidden">Previous Page</span>
                                            </button>
                                            <ul class="justify-content-center">
                                                <li v-for="page in pageCount" :key="page"
                                                    :class="{ 'active': currentPage === page }">
                                                    <a href="javascript:void(0);" :aria-label="'Page ' + page"
                                                        @click="goToPage(page)">{{ page }}</a>
                                                </li>
                                            </ul>
                                            <button class="nextbtn" href="javascript:void(0);"
                                                :class="{ 'disabled': isLastPage }" @click="fetchNextPage"
                                                aria-labelledby="nextBtn" title="Next Page">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd"
                                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                                                </svg>
                                                <span id="nextBtn" class="hidden">Next Page</span>
                                            </button>
                                        </div>
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
                    <path d="M20 20L15 15M20 20L25 25M20 20L25 15M20 20L15 25" stroke="#1D1D1B" />
                </svg>
            </button>
            <div class="share-popup-body d-flex align-items-center gap-3 ">
                <h2 tabindex="0">Share News article</h2>
                <div class="sharepopup-contant">
                    <SocialShare tabindex="0" network="facebook" label="true" :url="shareItem.links.self.href">
                        <template #icon><img title="facebook" src="../../assets/img/share/facebook.svg"
                                alt="facebook"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                    <SocialShare tabindex="0" network="twitter" label="true" :url="shareItem.links.self.href">
                        <template #icon><img title="twitter" src="../../assets/img/share/X.svg" alt="X"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                    <SocialShare tabindex="0" network="linkedin" label="true" :url="shareItem.links.self.href">
                        <template #icon><img title="linkedin" src="../../assets/img/share/linkedin.svg"
                                alt="linkedin"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                    <SocialShare tabindex="0" network="email" label="true" :url="shareItem.links.self.href"
                        ref="shareEmail" @keydown="handleKeydown">
                        <template #icon><img title="email" src="../../assets/img/share/email.svg"
                                alt="email"></template>
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
            closeSharePopup() {
                this.sharePopup = false;
                this.shareItem = null;
                if (this.shareClickedItem) {
                    this.$nextTick(() => {
                        this.shareClickedItem.focus();
                    });
                }
            },
            initializeCarousel() {
                // Destroy existing carousels to avoid reinitialization issues
                let carousels = document.querySelectorAll('.carousel');
                carousels.forEach(carousel => {
                    let bsCarousel = bootstrap.Carousel.getInstance(carousel);
                    if (bsCarousel) {
                        bsCarousel.dispose();
                    }
                });
                // Re-initialize carousels
                this.$nextTick(() => {
                    carousels.forEach(carousel => {
                        let bsCarousel = new bootstrap.Carousel(carousel);
                        bsCarousel.pause();
                        carousel.querySelector('.carousel-item').classList.add('active');
                    });
                });
            }
        },
        updated() {
            setTimeout(() => {
                this.initializeCarousel();
            }, 100); // Add delay to ensure DOM update completion
        },
        mounted() {
            setTimeout(() => {
                this.initializeCarousel();
            }, 100); // Add delay to ensure DOM update completion
        }
    };
</script>
<script setup>
    import placeholderImage from '/image_not_available.png';
    import { ref, onMounted, computed, onUnmounted, nextTick } from 'vue';
    import gsap from 'gsap';
    import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
    import { animateTitleLines, animateTitleLetters } from '~/helpers/gsap/title-animation';
    import { initPortfolioImageAnimation,initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';

    
    const config = useRuntimeConfig();
    const imgBaseURL = config.public.IMG_BASE_URL;
    const apiBaseURL = config.public.API_BASE_URL;
    const apiAuthKey = config.public.API_AUTH_KEY;

    const newsList = useState('newsList');
    const isLoading = ref(false);
    // Pagination
    const totalItems = ref(0);
    const itemParPage = ref(10);
    const offSet = ref(0);
    const currentPage = computed(() => Math.ceil(offSet.value / itemParPage.value) + 1);
    const pageCount = computed(() => Math.ceil(totalItems.value / itemParPage.value));
    const isLastPage = computed(() => currentPage.value === pageCount.value);
    const closeSharePopupRef = ref(null);

    const main = ref(null);
    let ctx = null;
    // Animation on mount
    const runAnimationSmother = (event = true) => {
            ctx = gsap.context(async () => {
                await InitSmoothness(event).then((s) => {

            animateTitleLetters('.page-main-heading', 88, 1, 'power1.out', 0.1);
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
    const fetchNews = async () => {
        isLoading.value = true;
        const { data: news } = await useFetch(apiBaseURL + `/jsonapi/node/news?fields[node--news]=field_published_date,title,body,field_news_gallery&page[offset]=${offSet.value}&page[limit]=${itemParPage.value}`, {
            method: "GET",
            headers: {
                "Authorization": `Basic ${apiAuthKey}`
            }
        });
        newsList.value = news?.value?.data || [];
        totalItems.value = news?.value?.meta?.count || 0;
        isLoading.value = false;
        // window.scrollTo(0, 0);
    };
    // Helping Functions
    const fetchNextPage = async () => {
        if (isLastPage.value) return;
        offSet.value += itemParPage.value;
        await fetchNews();
        
        runAnimationSmother();
        // Restore the scroll position
        window.scrollTo(0, 0);
    };
    const fetchPrevPage = async () => {
        if (offSet.value === 0) return;
        offSet.value -= itemParPage.value;
        await fetchNews();

        runAnimationSmother();
        // Restore the scroll position
        window.scrollTo(0, 0);

    };
    const goToPage = async (page) => {
        offSet.value = (page - 1) * itemParPage.value;
        await fetchNews();

        runAnimationSmother();
        // Restore the scroll position
        window.scrollTo(0, 0);

    };
    // Fetch initial news data
    fetchNews();
    const isEven = (index) => {
        return index % 2 === 0;
    }
    const getImageUrl = (uri) => {
      if (!uri) return '';
      const url = uri.startsWith('http') ? uri : imgBaseURL + uri;
      return withDrupalIndexPrefix(url);
    }
    const getVideoUrl = (videoData) => {
        return imgBaseURL + videoData.field_media_video_file.uri.url || '';
    }
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };
    const getPressDownloadLink = (downloadItem) => {
        return imgBaseURL + downloadItem[0]?.field_media_document?.uri?.url || '';
    }

</script>