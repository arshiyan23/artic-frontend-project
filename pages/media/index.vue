<template>
    <div class="media-page-template" ref="main" tabindex="0">

        <Head>
            <Title>{{ videoGallery?.data?.metatag?.[0]?.attributes?.content }}</Title>
            <Meta name="description" :content="videoGallery?.data?.metatag?.[1]?.attributes?.content" />
        </Head>
        <!-- Nav Bar -->
        <div class="mediaPage-menu d-none d-sm-block pt-3">
            <div class="container">
                <div class="mediaPage-navbar">
                    <a href="javascript:void(0)" @click="scrollToSection('newsSection',$event)" class="active">News
                    </a>
                    <a href="javascript:void(0)" @click="scrollToSection('pressReleaseSection',$event)">Press
                        Release</a>
                    <a href="javascript:void(0)" @click="scrollToSection('videoGallery',$event)">Video
                        Gallery</a>
                </div>
            </div>
        </div>

        <div id="smooth-wrapper">
            <div id="smooth-content">
                <div class="start-page">
                    <div class="page-body">
                        <!-- ==================== -->
                        <!-- News Listing Section -->
                        <!-- ==================== -->
                        <div class="news-listing-section" id="newsSection">
                            <div class="container">
                                <!-- Header -->
                                <div class="section-head animateTitleLetters">
                                    <h1 tabindex="0" class="page-main-heading">News</h1>
                                    <p tabindex="0" class="gsap_page_paragrap">Keep up to date with all the latest news,
                                        press release and media
                                        content
                                        from the Artic.</p>
                                </div>
                                <!-- Body -->
                                <div class="section-body">
                                    <!-- LG Listing Grid -->
                                    <div class="row">
                                        <div class="col-lg-8 pe-lg-5 mb-md-5 mb-4">
                                            <div class="mediaListing-slider lg-mediaListing-slider">
                                                <div id="SliderNewsLG_1" class="carousel slide" data-bs-ride="carousel"
                                                    data-ride="carousel">
                                                    <div class="carousel-inner gsapPaperSlideEffectMedia">
                                                        <div @click="navigateTo('/news')" tabindex="0"
                                                            v-for="(image, index) in news?.data?.[0]?.field_news_gallery"
                                                            :key="index"
                                                            :class="{ 'carousel-item': true, 'active': index === 0 }">

                                                            <!-- <img :src="getImageUrl(image.field_media_image?.uri?.url)" class="d-block w-100" 
                                                            :alt="image.field_media_image?.meta?.alt || 'Slide Image'"> -->

                                                            <NuxtImg
                                                                :src="imgSrc(image.field_media_image?.image_style_uri?.media_news_1)"
                                                                class="d-block w-100"
                                                                :alt="image.field_media_image?.meta?.alt || 'Slide Image'"
                                                                :width="1000" :height="500" :placeholder="[50, 25]" />

                                                        </div>
                                                        <div class="carousel-item-content right-1">
                                                            <div class="media-lg-slider-arrow d-none d-sm-block"
                                                                v-if="news?.data?.[0]?.field_news_gallery?.length > 1">
                                                                <!-- Arrows -->
                                                                <button aria-label="Previous slide" tabindex="0"
                                                                    class="carousel-control-prev" type="button"
                                                                    data-bs-target="#SliderNewsLG_1"
                                                                    data-bs-slide="prev">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" fill="currentColor"
                                                                        class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd"
                                                                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                                                    </svg>
                                                                    <span class="visually-hidden">Previous</span>
                                                                </button>
                                                                <button aria-label="Next slide" tabindex="0"
                                                                    class="carousel-control-next" type="button"
                                                                    data-bs-target="#SliderNewsLG_1"
                                                                    data-bs-slide="next" style="right:0px;">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" fill="currentColor"
                                                                        class="bi bi-arrow-right" viewBox="0 0 16 16">
                                                                        <path fill-rule="evenodd"
                                                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                                    </svg>
                                                                    <span class="visually-hidden">Next</span>
                                                                </button>
                                                            </div>
                                                            <div class="ci-content-meta">
                                                                <span tabindex="0" class="date" aria-label="Date"
                                                                    @click="navigateTo('/news')">{{
                                                                    formatDate(news?.data?.[0]?.field_published_date) }}
                                                                </span>
                                                                <button tabindex="0" class="share-icon"
                                                                    @click="openSharePopup(news?.data?.[0], $event, 'news')"
                                                                    role="button" aria-label="social media share">
                                                                    <svg width="13" height="14" viewBox="0 0 13 14"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path
                                                                            d="M7.74745 10.3487L4.94812 8.82199C4.58265 9.2127 4.10811 9.48445 3.58617 9.60192C3.06423 9.71939 2.51902 9.67715 2.0214 9.48069C1.52378 9.28423 1.09676 8.94263 0.795833 8.50029C0.494905 8.05795 0.333984 7.53533 0.333984 7.00033C0.333984 6.46533 0.494905 5.9427 0.795833 5.50037C1.09676 5.05803 1.52378 4.71643 2.0214 4.51997C2.51902 4.32351 3.06423 4.28127 3.58617 4.39874C4.10811 4.51621 4.58265 4.78795 4.94812 5.17866L7.74812 3.652C7.58939 3.02264 7.66565 2.35699 7.9626 1.77984C8.25955 1.20269 8.75681 0.753652 9.36116 0.516907C9.96551 0.280162 10.6355 0.271962 11.2454 0.493845C11.8554 0.715728 12.3635 1.15246 12.6745 1.72217C12.9855 2.29188 13.078 2.95546 12.9347 3.58852C12.7914 4.22157 12.4222 4.78063 11.8962 5.16091C11.3702 5.54119 10.7235 5.71657 10.0775 5.65417C9.43142 5.59178 8.8303 5.2959 8.38679 4.82199L5.58679 6.34866C5.69426 6.77623 5.69426 7.22376 5.58679 7.65133L8.38679 9.178C8.83052 8.70432 9.43178 8.40874 10.0779 8.34667C10.7239 8.28459 11.3705 8.46027 11.8963 8.84079C12.4221 9.2213 12.7911 9.78053 12.9341 10.4136C13.077 11.0467 12.9842 11.7103 12.673 12.2798C12.3618 12.8494 11.8535 13.2859 11.2434 13.5075C10.6334 13.7291 9.96347 13.7206 9.35923 13.4837C8.75499 13.2467 8.25793 12.7975 7.96121 12.2202C7.66449 11.6429 7.58849 10.9773 7.74745 10.348M3.00079 8.33333C3.35441 8.33333 3.69355 8.19285 3.9436 7.9428C4.19365 7.69276 4.33412 7.35362 4.33412 7C4.33412 6.64637 4.19365 6.30723 3.9436 6.05719C3.69355 5.80714 3.35441 5.66666 3.00079 5.66666C2.64717 5.66666 2.30803 5.80714 2.05798 6.05719C1.80793 6.30723 1.66745 6.64637 1.66745 7C1.66745 7.35362 1.80793 7.69276 2.05798 7.9428C2.30803 8.19285 2.64717 8.33333 3.00079 8.33333ZM10.3341 4.33333C10.6877 4.33333 11.0269 4.19285 11.2769 3.9428C11.527 3.69276 11.6675 3.35362 11.6675 2.99999C11.6675 2.64637 11.527 2.30723 11.2769 2.05719C11.0269 1.80714 10.6877 1.66666 10.3341 1.66666C9.9805 1.66666 9.64136 1.80714 9.39131 2.05719C9.14126 2.30723 9.00079 2.64637 9.00079 2.99999C9.00079 3.35362 9.14126 3.69276 9.39131 3.9428C9.64136 4.19285 9.9805 4.33333 10.3341 4.33333ZM10.3341 12.3333C10.6877 12.3333 11.0269 12.1929 11.2769 11.9428C11.527 11.6928 11.6675 11.3536 11.6675 11C11.6675 10.6464 11.527 10.3072 11.2769 10.0572C11.0269 9.80714 10.6877 9.66666 10.3341 9.66666C9.9805 9.66666 9.64136 9.80714 9.39131 10.0572C9.14126 10.3072 9.00079 10.6464 9.00079 11C9.00079 11.3536 9.14126 11.6928 9.39131 11.9428C9.64136 12.1929 9.9805 12.3333 10.3341 12.3333Z"
                                                                            fill="#292929" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <h3 tabindex="0" @click="navigateTo('/news')">
                                                                {{news?.data?.[0]?.title}}
                                                            </h3>
                                                            <!-- [v-html]="news?.data?.[0]?.body?.value" -->
                                                            <p tabindex="0" class="mt-4 mb-0"
                                                                @click="navigateTo('/news')">
                                                                {{news?.data?.[0]?.body?.summary}}
                                                            </p>
                                                        </div>

                                                        <!-- Arrows -->
                                                        <div class="d-block d-sm-none"
                                                            v-if="news?.data?.[0]?.field_news_gallery?.length > 1">
                                                            <button aria-label="Previous slide" tabindex="0"
                                                                class="carousel-control-prev " type="button"
                                                                data-bs-target="#SliderNewsLG_1" data-bs-slide="prev">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                    height="16" fill="currentColor"
                                                                    class="bi bi-arrow-left" viewBox="0 0 16 16">
                                                                    <path fill-rule="evenodd"
                                                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                                                </svg>
                                                                <span class="visually-hidden">Previous</span>
                                                            </button>
                                                            <button aria-label="Next slide" tabindex="0"
                                                                class="carousel-control-next" type="button"
                                                                data-bs-target="#SliderNewsLG_1" data-bs-slide="next">
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

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 mb-md-4 pb-3 mb-4">
                                            <!-- Slider 02 -->
                                            <div id="SliderNewsMD_2"
                                                class="carousel mediaListing-slider sm-mediaListing-slider slide "
                                                data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div tabindex="0"
                                                        v-for="(image, index) in news?.data?.[1]?.field_news_gallery"
                                                        :key="index"
                                                        :class="{ 'carousel-item gsap_video_paperAnimation gsapPaperSlideEffect': true, 'active': index === 0 }">
                                                        <img @click="navigateTo('/news')"
                                                            :src="imgSrc(image.field_media_image?.image_style_uri?.media_news_2)"
                                                            class="d-block w-100"
                                                            :alt="image.field_media_image?.meta?.alt || 'Slide Image'">
                                                        <!-- <NuxtImg 
                                                        :src="imgSrc(image.field_media_image?.image_style_uri?.media_news_2)" 
                                                        class="d-block w-100" 
                                                        :alt="image.field_media_image?.meta?.alt || 'Slide Image'"
                                                        :width="1000"  
                                                        :height="500"  
                                                        :placeholder="[50, 25]" 
                                                    /> -->
                                                    </div>
                                                </div>
                                                <!-- Content -->
                                                <div class="carousel-item-content right-1 gsapSection2paragraph">
                                                    <div class="ci-content-meta">
                                                        <span tabindex="0" class="date" @click="navigateTo('/news')">{{
                                                            formatDate(news?.data?.[1]?.field_published_date) }} </span>
                                                        <button tabindex="0" class="share-icon"
                                                            @click="openSharePopup(news?.data?.[0], $event, 'news')"
                                                            role="button" aria-label="social media share">
                                                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7.74745 10.3487L4.94812 8.82199C4.58265 9.2127 4.10811 9.48445 3.58617 9.60192C3.06423 9.71939 2.51902 9.67715 2.0214 9.48069C1.52378 9.28423 1.09676 8.94263 0.795833 8.50029C0.494905 8.05795 0.333984 7.53533 0.333984 7.00033C0.333984 6.46533 0.494905 5.9427 0.795833 5.50037C1.09676 5.05803 1.52378 4.71643 2.0214 4.51997C2.51902 4.32351 3.06423 4.28127 3.58617 4.39874C4.10811 4.51621 4.58265 4.78795 4.94812 5.17866L7.74812 3.652C7.58939 3.02264 7.66565 2.35699 7.9626 1.77984C8.25955 1.20269 8.75681 0.753652 9.36116 0.516907C9.96551 0.280162 10.6355 0.271962 11.2454 0.493845C11.8554 0.715728 12.3635 1.15246 12.6745 1.72217C12.9855 2.29188 13.078 2.95546 12.9347 3.58852C12.7914 4.22157 12.4222 4.78063 11.8962 5.16091C11.3702 5.54119 10.7235 5.71657 10.0775 5.65417C9.43142 5.59178 8.8303 5.2959 8.38679 4.82199L5.58679 6.34866C5.69426 6.77623 5.69426 7.22376 5.58679 7.65133L8.38679 9.178C8.83052 8.70432 9.43178 8.40874 10.0779 8.34667C10.7239 8.28459 11.3705 8.46027 11.8963 8.84079C12.4221 9.2213 12.7911 9.78053 12.9341 10.4136C13.077 11.0467 12.9842 11.7103 12.673 12.2798C12.3618 12.8494 11.8535 13.2859 11.2434 13.5075C10.6334 13.7291 9.96347 13.7206 9.35923 13.4837C8.75499 13.2467 8.25793 12.7975 7.96121 12.2202C7.66449 11.6429 7.58849 10.9773 7.74745 10.348M3.00079 8.33333C3.35441 8.33333 3.69355 8.19285 3.9436 7.9428C4.19365 7.69276 4.33412 7.35362 4.33412 7C4.33412 6.64637 4.19365 6.30723 3.9436 6.05719C3.69355 5.80714 3.35441 5.66666 3.00079 5.66666C2.64717 5.66666 2.30803 5.80714 2.05798 6.05719C1.80793 6.30723 1.66745 6.64637 1.66745 7C1.66745 7.35362 1.80793 7.69276 2.05798 7.9428C2.30803 8.19285 2.64717 8.33333 3.00079 8.33333ZM10.3341 4.33333C10.6877 4.33333 11.0269 4.19285 11.2769 3.9428C11.527 3.69276 11.6675 3.35362 11.6675 2.99999C11.6675 2.64637 11.527 2.30723 11.2769 2.05719C11.0269 1.80714 10.6877 1.66666 10.3341 1.66666C9.9805 1.66666 9.64136 1.80714 9.39131 2.05719C9.14126 2.30723 9.00079 2.64637 9.00079 2.99999C9.00079 3.35362 9.14126 3.69276 9.39131 3.9428C9.64136 4.19285 9.9805 4.33333 10.3341 4.33333ZM10.3341 12.3333C10.6877 12.3333 11.0269 12.1929 11.2769 11.9428C11.527 11.6928 11.6675 11.3536 11.6675 11C11.6675 10.6464 11.527 10.3072 11.2769 10.0572C11.0269 9.80714 10.6877 9.66666 10.3341 9.66666C9.9805 9.66666 9.64136 9.80714 9.39131 10.0572C9.14126 10.3072 9.00079 10.6464 9.00079 11C9.00079 11.3536 9.14126 11.6928 9.39131 11.9428C9.64136 12.1929 9.9805 12.3333 10.3341 12.3333Z"
                                                                    fill="#292929" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <h3 tabindex="0" @click="navigateTo('/news')">
                                                        {{news?.data?.[1]?.title}}
                                                    </h3>
                                                    <p tabindex="0" class="m-0" @click="navigateTo('/news')">
                                                        {{news?.data?.[1]?.body?.summary}}
                                                    </p>
                                                </div>
                                                <!-- Arrows -->
                                                <div v-if="news?.data?.[1]?.field_news_gallery?.length > 1">
                                                    <button aria-label="previous slide" tabindex="0"
                                                        class="carousel-control-prev" type="button"
                                                        data-bs-target="#SliderNewsMD_2" data-bs-slide="prev">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-arrow-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                                        </svg>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button aria-label="next slide" tabindex="0"
                                                        class="carousel-control-next" type="button"
                                                        data-bs-target="#SliderNewsMD_2" data-bs-slide="next">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-arrow-right"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                        </svg>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- SM Listin Grid (3) -->
                                    <div class="row">
                                        <div class="col-lg-4  mb-md-4 pb-3 mb-4"
                                            v-for="(item, index) in (news?.data || []).slice(2)" :key="index"
                                            :class="{ 'pe-lg-5': index < ((news?.data || []).slice(2).length - 1) }">
                                            <div :id="'SliderNewsSM_' + index"
                                                class="carousel mediaListing-slider sm-mediaListing-slider slide"
                                                data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div @click="navigateTo('/news')" tabindex="0"
                                                        v-for="(image, index) in item?.field_news_gallery" :key="index"
                                                        :class="{ 'carousel-item gsap_video_paperAnimation gsapPaperSlideEffect': true, 'active': index === 0 }">
                                                        <!-- <img :src="getImageUrl(image.field_media_image?.uri?.url)" class="d-block w-100" 
                                                        :alt="image.field_media_image?.meta?.alt || 'Slide Item'"> -->

                                                        <NuxtImg
                                                            :src="imgSrc(image.field_media_image?.image_style_uri?.media_news_2)"
                                                            class="d-block w-100" loading="lazy"
                                                            :alt="image.field_media_image?.meta?.alt || 'Slide Item'" />

                                                    </div>
                                                </div>
                                                <!-- Content -->
                                                <div class="carousel-item-content right-1 gsapSection2paragraph2">
                                                    <div class="ci-content-meta">
                                                        <span tabindex="0" class="date" @click="navigateTo('/news')">{{
                                                            formatDate(item.field_published_date) }} </span>
                                                        <button tabindex="0" class="share-icon"
                                                            @click="openSharePopup(news?.data?.[0], $event, 'news')"
                                                            role="button" aria-label="social media share">
                                                            <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7.74745 10.3487L4.94812 8.82199C4.58265 9.2127 4.10811 9.48445 3.58617 9.60192C3.06423 9.71939 2.51902 9.67715 2.0214 9.48069C1.52378 9.28423 1.09676 8.94263 0.795833 8.50029C0.494905 8.05795 0.333984 7.53533 0.333984 7.00033C0.333984 6.46533 0.494905 5.9427 0.795833 5.50037C1.09676 5.05803 1.52378 4.71643 2.0214 4.51997C2.51902 4.32351 3.06423 4.28127 3.58617 4.39874C4.10811 4.51621 4.58265 4.78795 4.94812 5.17866L7.74812 3.652C7.58939 3.02264 7.66565 2.35699 7.9626 1.77984C8.25955 1.20269 8.75681 0.753652 9.36116 0.516907C9.96551 0.280162 10.6355 0.271962 11.2454 0.493845C11.8554 0.715728 12.3635 1.15246 12.6745 1.72217C12.9855 2.29188 13.078 2.95546 12.9347 3.58852C12.7914 4.22157 12.4222 4.78063 11.8962 5.16091C11.3702 5.54119 10.7235 5.71657 10.0775 5.65417C9.43142 5.59178 8.8303 5.2959 8.38679 4.82199L5.58679 6.34866C5.69426 6.77623 5.69426 7.22376 5.58679 7.65133L8.38679 9.178C8.83052 8.70432 9.43178 8.40874 10.0779 8.34667C10.7239 8.28459 11.3705 8.46027 11.8963 8.84079C12.4221 9.2213 12.7911 9.78053 12.9341 10.4136C13.077 11.0467 12.9842 11.7103 12.673 12.2798C12.3618 12.8494 11.8535 13.2859 11.2434 13.5075C10.6334 13.7291 9.96347 13.7206 9.35923 13.4837C8.75499 13.2467 8.25793 12.7975 7.96121 12.2202C7.66449 11.6429 7.58849 10.9773 7.74745 10.348M3.00079 8.33333C3.35441 8.33333 3.69355 8.19285 3.9436 7.9428C4.19365 7.69276 4.33412 7.35362 4.33412 7C4.33412 6.64637 4.19365 6.30723 3.9436 6.05719C3.69355 5.80714 3.35441 5.66666 3.00079 5.66666C2.64717 5.66666 2.30803 5.80714 2.05798 6.05719C1.80793 6.30723 1.66745 6.64637 1.66745 7C1.66745 7.35362 1.80793 7.69276 2.05798 7.9428C2.30803 8.19285 2.64717 8.33333 3.00079 8.33333ZM10.3341 4.33333C10.6877 4.33333 11.0269 4.19285 11.2769 3.9428C11.527 3.69276 11.6675 3.35362 11.6675 2.99999C11.6675 2.64637 11.527 2.30723 11.2769 2.05719C11.0269 1.80714 10.6877 1.66666 10.3341 1.66666C9.9805 1.66666 9.64136 1.80714 9.39131 2.05719C9.14126 2.30723 9.00079 2.64637 9.00079 2.99999C9.00079 3.35362 9.14126 3.69276 9.39131 3.9428C9.64136 4.19285 9.9805 4.33333 10.3341 4.33333ZM10.3341 12.3333C10.6877 12.3333 11.0269 12.1929 11.2769 11.9428C11.527 11.6928 11.6675 11.3536 11.6675 11C11.6675 10.6464 11.527 10.3072 11.2769 10.0572C11.0269 9.80714 10.6877 9.66666 10.3341 9.66666C9.9805 9.66666 9.64136 9.80714 9.39131 10.0572C9.14126 10.3072 9.00079 10.6464 9.00079 11C9.00079 11.3536 9.14126 11.6928 9.39131 11.9428C9.64136 12.1929 9.9805 12.3333 10.3341 12.3333Z"
                                                                    fill="#292929" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <h3 tabindex="0" @click="navigateTo('/news')">
                                                        {{item.title}}
                                                    </h3>
                                                    <!-- <div v-html="item.body.value"></div> -->
                                                    <p tabindex="0" class="m-0" @click="navigateTo('/news')">
                                                        {{item.body.summary}}
                                                    </p>
                                                </div>
                                                <!-- Arrows -->
                                                <div v-if="item?.field_news_gallery?.length > 1">
                                                    <button aria-label="previous slide" tabindex="0"
                                                        class="carousel-control-prev" type="button"
                                                        :data-bs-target="'#SliderNewsSM_' + index" data-bs-slide="prev">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-arrow-left"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                                        </svg>
                                                        <span class="visually-hidden">Previous</span>
                                                    </button>
                                                    <button aria-label="next slide" tabindex="0"
                                                        class="carousel-control-next" type="button"
                                                        :data-bs-target="'#SliderNewsSM_' + index" data-bs-slide="next">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="bi bi-arrow-right"
                                                            viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                        </svg>
                                                        <span class="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- See All News Button -->
                                    <div class="text-center mb-md-5 mb-4 pb-lg-4 gsapSection3Heading">
                                        <NuxtLink tabindex="0" to="/news" class="btn-white align-self-start">
                                            <span>See All News</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- ===================== -->
                        <!-- Press Release Section -->
                        <!-- ===================== -->
                        <div class="press-release-section" id="pressReleaseSection">
                            <div class="container">
                                <div class="section-head">
                                    <h2 tabindex="0" class="gsapSection3Heading">Press Release</h2>
                                    <p tabindex="0" class="gsapSection3paragraph">Keep up to date with all the latest
                                        news, press release and media content from the Artic.</p>
                                </div>
                                <div class="section-body">
                                    <div class="press-release-container">
                                        <!-- 01 -->
                                        <div class="press-release-row justify-between gsapSection3Heading"
                                            v-for="(item, index) in pressRelease.data" :key="index">
                                            <div class="press-release-content d-flex flex-1">
                                                <!-- Date / Category -->
                                                <p tabindex="0" class="pr-date-categories pe-lg-3 lg:!min-w-[233px]">
                                                    <span class="me-2">{{ formatDate(item.field_published_date)
                                                        }}</span>
                                                </p>
                                                <!-- Description -->
                                                <a tabindex="0" :href="'press-release/' + item?.id">
                                                    <p class="pr-description  cursor-pointer">
                                                        {{ item?.title }}
                                                    </p>
                                                </a>
                                            </div>
                                            <div class="press-release-meta d-flex gap-3 ml-auto ">

                                                <a aria-label="Download Arabic PDF" tabindex="0" target="_blank"
                                                    :href="getPressDownloadLink(item.field_download)"
                                                    class="btn-white align-self-start"
                                                    v-if="item.field_download.length > 0">
                                                    <span>Arabic</span>
                                                    <i class="bi bi-arrow-down"></i>
                                                </a>

                                                <a aria-label="Download English PDF" tabindex="0" target="_blank"
                                                    :href="getPressEnglishDownloadLink(item.field_download_english)"
                                                    class="btn-white align-self-start"
                                                    v-if="item?.field_download_english?.field_media_document">
                                                    <span>English</span>
                                                    <i class="bi bi-arrow-down"></i>
                                                </a>

                                                <button class="btn-share" aria-label="Share on socialmedia"
                                                    @click="openSharePopup(item, $event,'press release')">
                                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M7.74745 10.3487L4.94812 8.82199C4.58265 9.2127 4.10811 9.48445 3.58617 9.60192C3.06423 9.71939 2.51902 9.67715 2.0214 9.48069C1.52378 9.28423 1.09676 8.94263 0.795833 8.50029C0.494905 8.05795 0.333984 7.53533 0.333984 7.00033C0.333984 6.46533 0.494905 5.9427 0.795833 5.50037C1.09676 5.05803 1.52378 4.71643 2.0214 4.51997C2.51902 4.32351 3.06423 4.28127 3.58617 4.39874C4.10811 4.51621 4.58265 4.78795 4.94812 5.17866L7.74812 3.652C7.58939 3.02264 7.66565 2.35699 7.9626 1.77984C8.25955 1.20269 8.75681 0.753652 9.36116 0.516907C9.96551 0.280162 10.6355 0.271962 11.2454 0.493845C11.8554 0.715728 12.3635 1.15246 12.6745 1.72217C12.9855 2.29188 13.078 2.95546 12.9347 3.58852C12.7914 4.22157 12.4222 4.78063 11.8962 5.16091C11.3702 5.54119 10.7235 5.71657 10.0775 5.65417C9.43142 5.59178 8.8303 5.2959 8.38679 4.82199L5.58679 6.34866C5.69426 6.77623 5.69426 7.22376 5.58679 7.65133L8.38679 9.178C8.83052 8.70432 9.43178 8.40874 10.0779 8.34667C10.7239 8.28459 11.3705 8.46027 11.8963 8.84079C12.4221 9.2213 12.7911 9.78053 12.9341 10.4136C13.077 11.0467 12.9842 11.7103 12.673 12.2798C12.3618 12.8494 11.8535 13.2859 11.2434 13.5075C10.6334 13.7291 9.96347 13.7206 9.35923 13.4837C8.75499 13.2467 8.25793 12.7975 7.96121 12.2202C7.66449 11.6429 7.58849 10.9773 7.74745 10.348M3.00079 8.33333C3.35441 8.33333 3.69355 8.19285 3.9436 7.9428C4.19365 7.69276 4.33412 7.35362 4.33412 7C4.33412 6.64637 4.19365 6.30723 3.9436 6.05719C3.69355 5.80714 3.35441 5.66666 3.00079 5.66666C2.64717 5.66666 2.30803 5.80714 2.05798 6.05719C1.80793 6.30723 1.66745 6.64637 1.66745 7C1.66745 7.35362 1.80793 7.69276 2.05798 7.9428C2.30803 8.19285 2.64717 8.33333 3.00079 8.33333ZM10.3341 4.33333C10.6877 4.33333 11.0269 4.19285 11.2769 3.9428C11.527 3.69276 11.6675 3.35362 11.6675 2.99999C11.6675 2.64637 11.527 2.30723 11.2769 2.05719C11.0269 1.80714 10.6877 1.66666 10.3341 1.66666C9.9805 1.66666 9.64136 1.80714 9.39131 2.05719C9.14126 2.30723 9.00079 2.64637 9.00079 2.99999C9.00079 3.35362 9.14126 3.69276 9.39131 3.9428C9.64136 4.19285 9.9805 4.33333 10.3341 4.33333ZM10.3341 12.3333C10.6877 12.3333 11.0269 12.1929 11.2769 11.9428C11.527 11.6928 11.6675 11.3536 11.6675 11C11.6675 10.6464 11.527 10.3072 11.2769 10.0572C11.0269 9.80714 10.6877 9.66666 10.3341 9.66666C9.9805 9.66666 9.64136 9.80714 9.39131 10.0572C9.14126 10.3072 9.00079 10.6464 9.00079 11C9.00079 11.3536 9.14126 11.6928 9.39131 11.9428C9.64136 12.1929 9.9805 12.3333 10.3341 12.3333Z"
                                                            fill="#292929" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- See All Press Release Button -->
                                    <div class="text-center mt-4 pt-lg-3 field_hwd_download">
                                        <NuxtLink to="/press-release" class="btn-white align-self-start">
                                            <span>See All Press Release</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </NuxtLink>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <!-- ===================== -->
                        <!-- Video Gallery Section -->
                        <!-- ===================== -->
                        <div class="video-gallery-section pt-5 mt-2 pb-sm-5" id="videoGallery">
                            <div class="container">
                                <div class="section-head pb-lg-3">
                                    <h2 tabindex="0" class="gsapSplitLetters1">Video Gallery</h2>
                                    <p tabindex="0" class="gsapSection3paragraph">Keep up to date with all the latest
                                        news, press release and media
                                        content
                                        from the Artic.</p>
                                </div>
                                <div class="section-body">
                                    <div class="row">
                                        <div class="col-lg-8 pe-lg-5 mb-md-0">
                                            <div class="mediaVideo-listing mediaVideo-listing-lg ">
                                                <div
                                                    class="mediaVideo-container gsap_video_paperAnimation gsapPaperSlideEffect">
                                                    <img :src="imgSrc(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[0]?.field_video_thumbnail?.field_media_image?.image_style_uri?.media_video_1)"
                                                        alt="Video Poster" class="mediaVideo-poster">
                                                    <button tabindex="0" class="mediaVideo-playbutton"
                                                        @click="openVideo(getVideoUrl(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[0]?.field_video), 0)"
                                                        v-if="!isPlaying" aria-label="Play video"
                                                        aria-labelledby="playButtonLabel" title="Play video">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55"
                                                            fill="currentColor" class="bi bi-play-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                                        </svg>
                                                        <span id="playButtonLabel">Play</span>
                                                    </button>
                                                </div>
                                                <div class="mediaVideo-content gsapYPortfolio120" tabindex="0"
                                                    @click="openVideo(getVideoUrl(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[2]?.field_video), 2)"
                                                    role="link" aria-label="play Video">
                                                    {{videoGallery?.data?.field_sections?.[0]?.field_video_section?.[0]?.field_video_title}}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 d-lg-block d-flex gap-2 gap-md-4 justify-between">
                                            <!-- 01 - loop -->
                                            <div class="mediaVideo-listing mediaVideo-listing-sm mb-md-5 mb-3 w-100 ">
                                                <div
                                                    class="mediaVideo-container-full gsap_video_paperAnimation gsapPaperSlideEffect">
                                                    <img :src="imgSrc(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[1]?.field_video_thumbnail?.field_media_image?.image_style_uri?.media_news_2)"
                                                        alt="Video Poster 2" class="mediaVideo-poster">
                                                    <button tabindex="0"
                                                        class="mediaVideo-playbutton mediaVideo-playbutton-sm"
                                                        @click="openVideo(getVideoUrl(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[1]?.field_video), 1)"
                                                        v-if="!isPlaying" aria-label="Play video"
                                                        aria-labelledby="playButtonLabel2" title="Play video">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                            fill="currentColor" class="bi bi-play-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                                        </svg>
                                                        <span id="playButtonLabel2">Play</span>
                                                    </button>
                                                </div>
                                                <div class="mediaVideo-content gsapYPortfolio120" tabindex="0"
                                                    @click="openVideo(getVideoUrl(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[2]?.field_video), 2)"
                                                    role="link" aria-label="play Video">
                                                    {{videoGallery?.data?.field_sections?.[0]?.field_video_section?.[1]?.field_video_title}}
                                                </div>
                                            </div>
                                            <!-- 02 - loop -->
                                            <div class="mediaVideo-listing mediaVideo-listing-sm mb-md-5 mb-3 w-100">
                                                <div
                                                    class="mediaVideo-container-full gsap_video_paperAnimation gsapPaperSlideEffect">
                                                    <img :src="imgSrc(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[2]?.field_video_thumbnail?.field_media_image?.image_style_uri?.media_news_1)"
                                                        alt="Video Poster 3" class="mediaVideo-poster">
                                                    <button aria-label="Play video" tabindex="0"
                                                        class="mediaVideo-playbutton mediaVideo-playbutton-sm"
                                                        @click="openVideo(getVideoUrl(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[2]?.field_video), 2)"
                                                        v-if="!isPlaying" aria-labelledby="playButtonLabel3"
                                                        title="Play video">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                                                            fill="currentColor" class="bi bi-play-fill"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                                        </svg>
                                                        <span id="playButtonLabel3" tabindex="-1">Play</span>
                                                    </button>
                                                </div>
                                                <div class="mediaVideo-content gsapYPortfolio120" tabindex="0"
                                                    @click="openVideo(getVideoUrl(videoGallery?.data?.field_sections?.[0]?.field_video_section?.[2]?.field_video), 2)"
                                                    role="link" aria-label="play Video">
                                                    {{videoGallery?.data?.field_sections?.[0]?.field_video_section?.[2]?.field_video_title}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- See All News Button -->
                                    <div class="text-center mb-5 d-flex justify-content-center gsapSection3Heading">
                                        <NuxtLink to="/video-gallery" class="btn-white align-self-start">
                                            <span>See All Videos</span>
                                            <i class="bi bi-arrow-right"></i>
                                        </NuxtLink>
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
                <h2 tabindex="0">Share {{ socialTxt }} article</h2>

                <div class="sharepopup-contant">
                    <SocialShare tabindex="0" network="facebook" label="true" :url="shareItem.links.self.href">
                        <template #icon><img title="facebook" src="../../assets/img/share/facebook.svg" alt="facebook"
                                width="32" height="32"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                    <SocialShare tabindex="0" network="twitter" label="true" :url="shareItem.links.self.href">
                        <template #icon><img title="twitter" src="../../assets/img/share/X.svg" alt="Twiter" width="32"
                                height="32"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                    <SocialShare tabindex="0" network="linkedin" label="true" :url="shareItem.links.self.href">
                        <template #icon><img title="linkedin" src="../../assets/img/share/linkedin.svg" alt="linkedin"
                                width="32" height="32"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                    <SocialShare tabindex="0" network="email" label="true" :url="shareItem.links.self.href"
                        ref="shareEmail" @keydown="handleKeydown">
                        <template #icon><img title="email" src="../../assets/img/share/email.svg" alt="email" width="32"
                                height="32"></template>
                        <template #label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</template>
                    </SocialShare>
                </div>
            </div>
        </div>
    </div>
    <!-- End of popup -->
    <!-- Popup -->
    <div v-if="showPopup" class="video-popup">
        <div class="video-popup-content">
            <button tabindex="0" @click.stop="closePopup" class="close-button video-popup-close" aria-label="close">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000"
                    class="bi bi-x-circle-fill mx-auto" viewBox="0 0 16 16">
                    <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
            </button>
            <video ref="videoPlayer" muted controls class="mediaVideo-player" width="100%" height="100%">
                <source :src="currentVideo" type="video/mp4">
                <source :src="currentVideo" type="video/webm">
                Your browser does not support the video tag.
            </video>
            <div class="video-controls" v-if="!isPlaying">
                <button tabindex="0" @click.stop="togglePlayPause" @keyup.enter="togglePlayPause"
                    aria-label="Play video">
                    <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                    </svg>
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
                videos: [{ url: '/_nuxt/assets/img/video.mp4', thumbnail: new URL('../../assets/img/media/demo.jpg', import.meta.url).href }],
                showPopup: false,
                isPlaying: false,
                currentVideo: null,
                currentVideoIndex: null,
                sharePopup: false,

                shareItem: null,
                shareClickedItem: null,
                socialTxt: 'news'
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
            openVideo(video, index) {
                this.currentVideo = video;
                this.currentVideoIndex = index;
                this.isPlaying = !this.isPlaying;
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

            // Shate Popup
            openSharePopup(item, event, txt) {
                this.socialTxt = txt;
                this.sharePopup = true;
                this.shareItem = item;
                this.shareClickedItem = event.target.closest('button');
                console.log('Button stored:', this.shareClickedItem);
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
            scrollToSection(sectionId, event) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offset = 145; // Offset from the top
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    let ell = document.getElementsByClassName("mediaPage-navbar")[0];
                    for (var i = 0; i < ell.childNodes.length; i++) {
                        let childNode = ell.childNodes[i];
                        childNode.classList.remove("active");
                    }
                    event.target.classList.add("active")
                }
            }
        }
    };
</script>
<script setup>


    import placeholderImage from '/image_not_available.png';
    import { ref, onMounted, onUnmounted, nextTick } from 'vue';
    import gsap from 'gsap';
    import { InitSmoothness, pauseSmoother } from '~/helpers/gsap/InitGSAP';
    import { animateTitleLines, animateTitleLetters, animateTitleWords } from '~/helpers/gsap/title-animation';
    import { initPortfolioImageAnimation, initSlidingAnimation } from '~/helpers/gsap/InitSlidingImage';
    import { initHeightAnimation, initWidthAnimation } from '~/helpers/gsap/LineAnimations';

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
    function imgSrc(url) {
      return withDrupalIndexPrefix(url);
    }
    let isLoading = false;
    const config = useRuntimeConfig();
    const imgBaseURL = config.public.IMG_BASE_URL;
    const apiBaseURL = config.public.API_BASE_URL;
    const apiAuthKey = config.public.API_AUTH_KEY;
    const closeSharePopupRef = ref(null);




    const main = ref(null);
    let ctx = null;
    // Animation on mount
    const runAnimationSmother = (event = true) => {
        ctx = gsap.context(async () => {
            await InitSmoothness(event).then((s) => {

                // animateTitleLetters('.page-main-heading', 88, 1, 'power1.out', 0.1);
                // animateTitleLines('.gsap_page_paragrap', 450, 1, 'power1.out', 3);

                animateTitleWords('.page-main-heading','.page-main-heading', 50, 1, 'power2.out', 0.2);
                animateTitleLines('.gsap_page_paragrap', -150, 1, 'power2.out', 0.2);

                // Media Image Slide Down
                initSlidingAnimation(".gsapYPortfolio100", ".gsapYPortfolio100", 100, 2, 1, "power2.out");
                initPortfolioImageAnimation(".gsapPaperSlideEffectMedia", "img", "top 40%", "bottom 20%", 2.5, 'Power1.out');
                initSlidingAnimation(".gsapYPortfolio120", ".gsapYPortfolio120", 130, 2, 0, "Power2.out");

                initPortfolioImageAnimation(".gsap_leadershipmessage_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');
                // <!-- Section 02 #howwedoit -->
                animateTitleWords('.gsapSplitLetters1', '.gsapSplitLetters1', 50, 1, 'power1.out', 0.1, true);
                initHeightAnimation('.gsmHeightZF', '.gsapSplitLetters1', 5, 0, "power2.out", "100%", 1.5);

                animateTitleWords('.gsapSection2Heading', '.gsapSplitLetters1', 50, 1, 'power1.out', 0.1, true);
                initSlidingAnimation(".gsapSection2paragraph", ".gsapSection2paragraph", 130, 2, 0.3, "Power1.out");
                initSlidingAnimation(".gsapSection2paragraph2", ".gsapSection2paragraph2", 130, 2, 0.3, "Power1.out");
                initSlidingAnimation(".gsapYPartners200", ".gsapYPartners200", 130, 1.2, 0.5, "Power1.out");
                initPortfolioImageAnimation(".gsap_video_paperAnimation", "img", "top 25%", "bottom 20%", 1.5, 'Power2.out');

                // animateTitleWords('.gsapSection3Heading','.gsapSection3Heading', 50, 1, 'power1.out', 0.1, true);
                initSlidingAnimation(".gsapSection3Heading", ".gsapSection3Heading", 130, 2, 0.3, "Power1.out");
                initSlidingAnimation(".gsapSection3paragraph", ".gsapSection3paragraph", 130, 2, 0.3, "Power1.out");
                initSlidingAnimation(".gsapSection3Boxes", ".gsapSection3Boxes", 150, 1.2, 0.5, "Power2.out");
                initSlidingAnimation(".field_hwd_download", ".field_hwd_download", 80, 2, 1, "Power2.out");


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


    // News api call
    const news = ref({
        data: [
            { field_news_gallery: [], body: {} },
            { field_news_gallery: [], body: {} }
        ]
    });
    const { data: newsResponse } = await useFetch(apiBaseURL + '/jsonapi/node/news?fields[node--news]=field_published_date,title,body,field_news_gallery&page[limit]=5&include=field_news_gallery.field_media_image', {
        method: "GET",
        headers: {
            "Authorization": `Basic ${apiAuthKey}`
        }
    });
    if (newsResponse.value) news.value = newsResponse.value;


    // Press Release api call
    const pressRelease = ref({ data: [] });
    const { data: pressReleaseResponse } = await useFetch(apiBaseURL + '/jsonapi/node/press_release?fields[node--press_release]=field_published_date,title,field_download,field_download_english&page[limit]=5&include=field_download.field_media_document,field_download_english.field_media_document', {
        method: "GET",
        headers: {
            "Authorization": `Basic ${apiAuthKey}`
        }
    });
    if (pressReleaseResponse.value) pressRelease.value = pressReleaseResponse.value;


    // Video Gallery api call
    const videoGallery = ref({
        data: {
            metatag: [],
            field_sections: [
                {
                    field_video_section: [{}, {}, {}]
                }
            ]
        }
    });
    const { data: videoGalleryResponse } = await useFetch(apiBaseURL + '/jsonapi/node/landing_page/d7c412c3-cce4-4b3f-aafd-a00dd815f39a?include=field_sections,field_sections.field_video_section,field_sections.field_video_section.field_video.field_media_video_file,field_sections.field_video_section.field_video_thumbnail.field_media_image', {
        method: "GET",
        headers: {
            "Authorization": `Basic ${apiAuthKey}`
        }
    });
    if (videoGalleryResponse.value) videoGallery.value = videoGalleryResponse.value;


    // Helping Functions
    // Function to format the date
    const getImageUrl = (uri) => {
        return uri ? (imgBaseURL + uri) : placeholderImage;
    }
    const getVideoUrl = (videoData) => {
        return imgBaseURL + videoData.field_media_video_file?.uri?.url || '';
    }
    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const getPressDownloadLink = (downloadItem) => {
        return imgBaseURL + downloadItem[0]?.field_media_document?.uri?.url || '';
    }
    const getPressEnglishDownloadLink = (downloadItem) => {
        return imgBaseURL + downloadItem?.field_media_document?.uri?.url || '';
    }

</script>
<style scoped>
    .start-page {
        padding-top: 160px;
    }

    .mediaListing-slider .carousel-item {
        min-height: auto;
        cursor: pointer;
    }

    .mediaListing-slider .carousel-item-content {
        cursor: pointer;
    }
</style>