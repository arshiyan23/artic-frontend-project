<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <div class="start-page  pt-75">
        <div class="search-page-template">
          <Loader :loading="isLoading1"></Loader>
          <!-- site-breadcrumbs -->
          <div class="site-breadcrumbs pt-md-5 pt-3 mt-3 pb-md-4 pb-3">
            <div class="container">
              <ol class="d-flex align-items-center p-0 m-0">
                <li><a tabindex="-1" href="/">Home</a></li>
                <li><a tabindex="-1" href="javascript:void(0);">Search Results</a></li>
              </ol>
            </div>
          </div>
          <!-- ===================== -->
          <!-- Search Page           -->
          <!-- ===================== -->
          <div class="page-body">
            <!-- section 01 -->
            <div class="search-bar-section">
              <div class="container">
                <div class="inner-container">
                  <div class="flex align-items-end flex-wrap gap-2">
                    <h2 tabindex="-1" class="page-header-h2 text-primary font-primary  text-uppercase m-0 p-0">
                      Search Results
                    </h2>
                    <p class="m-0 page-header-p fst-italic totalSearchResultRef" tabindex="0"
                      ref="totalSearchResultRef">
                      total {{ searchItems?.meta?.count }} results for “{{query}}”
                    </p>
                  </div>
                  <!-- Search Form -->
                  <form action="javascript:void(0)" class="search-page-form">
                    <div class="flex align-items-center pl-5">
                      <label for="searchP" class="sr-only">search</label>
                      <input type="text" v-model="searchQuery" id="searchP" @keyup.enter="searchOnPage"
                        class="search-page-input" placeholder="Search here...">
                      <div class="flex align-items-center gap-1">


                        <button class="searchPage-submit-btn" aria-label="search">
                          <!--<span class="sr-only">Button</span>-->
                          <img v-if="!isLoading" @click="searchOnPage()" class="img-fluid" src="/assets/img/search.svg"
                            width="18" height="18" alt="&nbsp;" loading="lazy" />
                          <!-- loader -->
                          <svg v-if="isLoading" xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em"
                            viewBox="0 0 24 24">
                            <g>
                              <circle cx="3" cy="12" r="2" fill="#fff"></circle>
                              <circle cx="21" cy="12" r="2" fill="#fff"></circle>
                              <circle cx="12" cy="21" r="2" fill="#fff"></circle>
                              <circle cx="12" cy="3" r="2" fill="#fff"></circle>
                              <circle cx="5.64" cy="5.64" r="2" fill="#fff"></circle>
                              <circle cx="18.36" cy="18.36" r="2" fill="#fff"></circle>
                              <circle cx="5.64" cy="18.36" r="2" fill="#fff"></circle>
                              <circle cx="18.36" cy="5.64" r="2" fill="#fff"></circle>
                              <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite"
                                type="rotate" values="0 12 12;360 12 12"></animateTransform>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- Filter -->
            <div class="search-filters-section" v-if="searchQuery?.length > 0">
              <div class="container">
                <div class="inner-container overflow-hidden">
                  <div class="searchpage-filters">
                    <a href="javascript:void(0)" :class="defaultCategory=='all'?'active':''">
                      <span class="link" @click="searchOnPageCat('all')">All</span>
                      <span class="count">{{ searchItems?.meta?.count }}</span>
                    </a>

                    <div v-for="(subPage,index) in searchItems?.meta?.facets[0]?.terms">
                      <a href="javascript:void(0)" :class="defaultCategory==subPage.values.label? 'active':''">
                        <span class="link" @click="searchOnPageCat(subPage.values.label)">{{ subPage.values.label
                          }}</span>
                        <span class="count">{{ subPage?.values?.count }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Search Result -->
            <div class="container searchPage-results-wrap">
              <!-- Loader -->
              <div class="text-center flex-column justify-center align-items-center flex gap-2 py-5" v-if="isLoading">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 24 24">
                  <g>
                    <circle cx="3" cy="12" r="2" fill="#000">
                    </circle>
                    <circle cx="21" cy="12" r="2" fill="#000"></circle>
                    <circle cx="12" cy="21" r="2" fill="#000"></circle>
                    <circle cx="12" cy="3" r="2" fill="#000"></circle>
                    <circle cx="5.64" cy="5.64" r="2" fill="#000"></circle>
                    <circle cx="18.36" cy="18.36" r="2" fill="#000">
                    </circle>
                    <circle cx="5.64" cy="18.36" r="2" fill="#000"></circle>
                    <circle cx="18.36" cy="5.64" r="2" fill="#000"></circle>
                    <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                      values="0 12 12;360 12 12"></animateTransform>
                  </g>
                </svg>
                <p class="text-black">Loading...</p>
              </div>
              <!-- Data -->
              <div class="inner-container my-4">
                <div class="search-resuls-wrap" v-if="!isLoading">

                  <div v-for="(queryitem,index) in searchItems?.data" class="search-result-item">

                    <h4 tabindex="0" @click="handleH4Click(queryitem)">
                      {{ getItemTitle(queryitem) }}
                    </h4>

                    <a :href="getItemLink(queryitem)" target="_blank" aria-label="click here to open">
                      {{ getItemLink(queryitem) }}
                    </a>

                    <div class="search-result-item-description mt-2">
                      <div v-html="queryitem?.body?.value.slice(0,300)"></div>
                    </div>

                  </div>
                </div>





                <!-- No Data Found -->
                <div class="py-5 text-center" v-if="searchItems?.data?.length === 0 && !isLoading">
                  <p tabindex="0">No Data Found</p>
                </div>
              </div>

              <!-- Load More Button -->
              <!-- <div class="text-center mb-4 my-md-5" v-if="!isLoading && searchItems?.meta?.count > page && searchItems?.data?.length > 0"> -->
              <div class="text-center mb-4 my-md-5" v-if="loadMore2">
                <a href="javascript:void(0)" @click="loadMore1" class="btn-white align-self-start me-lg-5"
                  aria-label="click here to loadmore">
                  <span>Load More </span><i class="bi bi-arrow-down"></i>
                </a>
              </div>


            </div>


          </div>
        </div>
        <!-- Footer -->
        <Footer />
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, nextTick } from 'vue';
  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
  const baseURL = config.public.FRONTEND_BASE_URL;

  const route = useRoute()
  const page = ref(1);
  page.value = 10;
  const isLoading = ref(false);
  const isLoading1 = ref(false);
  const defaultCategory = ref('all');
  const searchItems = useState('searchItems');
  const searchQuery = defineModel()
  const totalSearchResultRef = ref(null);
  const loadMore2 = ref(false)

  if (route.params.pagecategory != '') {
    defaultCategory.value = route.params.pagecategory;
  }
  else {
    defaultCategory.value = 'all'
  }

  let query = '';
  if (route.params.autosuggestion != '') {
    query = route.params.autosuggestion;
    searchQuery.value = query;
    // searchOnPageCat(defaultCategory.value);
    if (searchQuery.value !== "" && searchQuery.value !== undefined) {
      // isLoading.value = true;
      try {
        page.value = 10;

        let params = {
          'filter[fulltext]': searchQuery.value,
          'page[limit]': page.value,
          'filter[search_filter]': defaultCategory.value,
          //'include': 'field_download_to_learn_more,field_download_to_learn_more.field_media_document,field_download,field_download.field_media_document,field_download_english,field_download_english.field_media_document'
        };

        // if (defaultCategory.value !== 'all') {
        //   params['filter[search_filter]'] = defaultCategory.value;
        // }

        const { data: searchResults } = await useFetch(apiBaseURL + '/jsonapi/index/artic_index_database/', {
    server: false,
          method: "GET",
          params: params,
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });

        searchItems.value = searchResults;
        defaultCategory.value = defaultCategory.value;
        if (searchItems.value?.links?.next) {
          loadMore2.value = true;
        } else {
          loadMore2.value = false;
          page.value = 10;
        }
        // isLoading.value = false;
      } catch (error) {
        console.error("Error fetching search results:", error);
        searchItems.value = '';
        defaultCategory.value = 'all';
        // isLoading.value = false;
      } finally {
        // isLoading.value = false;
      }
    } else {
      searchItems.value = '';
      defaultCategory.value = 'all';
      // isLoading.value = false;
    }
    // Default Search api call
    // const { data: searchResults } = await useFetch(() => `${apiBaseURL}/jsonapi/index/artic_index_database/?filter[fulltext]=${query}`, {
    server: false,
    //   method: "GET",
    //   params: {
    //     'page[limit]': page
    //   },
    //   headers: {
    //     "Authorization": `Basic ${apiAuthKey}`
    //   }
    // })
    // searchItems.value = searchResults;
  }
  onMounted(() => {
    nextTick(() => {
      if (totalSearchResultRef.value) {
        totalSearchResultRef.value.focus();
      }
    });
  });
  const focusOnHeading = () => {
    totalSearchResultRef.value?.focus();
  };

  const clearSearch = () => {
    searchQuery.value = '';
    searchItems.value = useState('');
  }
  const searchOnPage = async () => {
    const cleanedQuery = searchQuery.value.replace(/\s+/g, ' ').trim();
    if (cleanedQuery?.length > 2 && !/\s{2,}/.test(searchQuery.value)) {
      // navigateTo('/search/'+searchQuery.value)
      window.location.href = '/search/' + encodeURIComponent(searchQuery.value);
    }
  }
  const loadMore1 = async () => {

    if (searchQuery.value != "" && searchQuery.value != undefined && searchItems.value.meta.count > page.value) {

      page.value = page.value + 10;

      let params = {};

      if (defaultCategory.value !== 'all') {

        params = {
          'filter[fulltext]': searchQuery.value,
          'page[limit]': page.value,
          'filter[search_filter]': defaultCategory.value,
          // 'include': 'field_download_to_learn_more,field_download_to_learn_more.field_media_document,field_download,field_download.field_media_document,field_download_english,field_download_english.field_media_document'
        };
      } else {
        params = {
          'filter[fulltext]': searchQuery.value,
          'page[limit]': page.value,
          // 'include': 'field_download_to_learn_more,field_download_to_learn_more.field_media_document,field_download,field_download.field_media_document,field_download_english,field_download_english.field_media_document'
        };

      }
      isLoading1.value = true;
      const searchResults = await $fetch(
        `${apiBaseURL}/jsonapi/index/artic_index_database/`,
        {
          method: "GET",
          params: params,
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        })
      searchItems.value = searchResults;
      if (searchResults?.links?.next) {
        loadMore2.value = true;
      } else {
        loadMore2.value = false;
        page.value = 10;
      }
      isLoading1.value = false;
    }
    isLoading1.value = false;
  }
  // const loadMore1 = async () => {
  //   isLoading.value = true;
  //   page.value = page.value + 10;

  //   if (searchQuery.value != "" && searchQuery.value != undefined && searchItems.value.meta.count > page) {
  //     isLoading.value = true;
  //     const searchResults = await $fetch(
  //       `${apiBaseURL}/jsonapi/index/artic_index_database/?filter[fulltext]=${encodeURIComponent(searchQuery.value)}`,
  //       {
  //         method: "GET",
  //         params: {
  //           'page[limit]': page
  //         },
  //         headers: {
  //           "Authorization": `Basic ${apiAuthKey}`
  //         }
  //       })
  //     searchItems.value = searchResults;
  //     isLoading.value = false;
  //   }
  //   isLoading.value = false;
  // };
  const searchOnPageCat = async (label) => {
    if (searchQuery.value !== "" && searchQuery.value !== undefined) {
      defaultCategory.value = label;
      isLoading1.value = true;
      // isLoading.value = true;
      try {
        page.value = 10;
        let searchResults;
        let params = {};
        if (label !== 'all') {

          params = {
            'filter[fulltext]': searchQuery.value,
            'page[limit]': page.value,
            'filter[search_filter]': label,
            //'include': 'field_download_to_learn_more,field_download_to_learn_more.field_media_document,field_download,field_download.field_media_document,field_download_english,field_download_english.field_media_document'
          };
        } else {
          params = {
            'filter[fulltext]': searchQuery.value,
            'page[limit]': page.value,
            //'include': 'field_download_to_learn_more,field_download_to_learn_more.field_media_document,field_download,field_download.field_media_document,field_download_english,field_download_english.field_media_document'
          };

        }

        // if (label !== 'all') {
        //   params['filter[search_filter]'] = label;
        // }

        searchResults = await $fetch(apiBaseURL + '/jsonapi/index/artic_index_database/', {
          method: "GET",
          params,
          headers: {
            "Authorization": `Basic ${apiAuthKey}`
          }
        });

        searchItems.value = searchResults;
        if (searchResults?.links?.next) {
          loadMore2.value = true;
        } else {
          loadMore2.value = false;
          page.value = 10;
        }
        defaultCategory.value = label;
        // isLoading.value = false;
        isLoading1.value = false;
      } catch (error) {
        console.error("Error fetching search results:", error);
        searchItems.value = '';
        defaultCategory.value = 'all';
        // isLoading.value = false;
        isLoading1.value = false;
      } finally {
        // isLoading.value = false;
        isLoading1.value = false;
      }
    } else {
      searchItems.value = '';
      defaultCategory.value = 'all';
      // isLoading.value = false;
      isLoading1.value = false;
    }
  };
  const getResultUrl = (dat) => {
    let url = baseURL;
    if (dat.type == 'node--press_release') {
      url = url + '/press-release/' + dat.id;
    } else if (dat.type == 'node--news') {
      url = url + '/news';
    }
    return url;
  }
  const redirectToResult = (dat) => {
    const url = getResultUrl(dat);
    window.location.href = url;
  };
  const getItemTitle = (item) => {
    let title = '';
    if (item?.field_download?.length > 0 && item?.field_download[0]?.field_media_document?.filename) {
      title = item?.field_download[0]?.field_media_document?.filename || '';
    } else if (item?.field_download_english?.field_media_document) {
      title = item?.field_download_english?.field_media_document?.filename || '';
    } else {
      title = item?.title
    }

    return title;
  }
  const getItemLink = (item) => {
    let link = '';
    if (item?.field_download?.length > 0 && item?.field_download[0]?.field_media_document?.uri?.url) {
      link = getPressDownloadLink(item?.field_download);
    } else if (item?.field_download_english?.field_media_document) {
      link = getPressEnglishDownloadLink(item?.field_download_english);
    } else {
      link = getResultUrl(item);
    }
    return link;
  }
  const handleH4Click = (item) => {
    const link = getItemLink(item);
    if (item?.field_download?.length > 0 && item?.field_download[0]?.field_media_document?.uri?.url) {
      window.open(link, '_blank');
    } else if (item?.field_download_english?.field_media_document) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  }
  const getPressDownloadLink = (downloadItem) => {
    return imgBaseURL + downloadItem[0]?.field_media_document?.uri?.url || '';
  }
  const getPressEnglishDownloadLink = (downloadItem) => {
    return imgBaseURL + downloadItem?.field_media_document?.uri?.url || '';
  }
</script>

<style>
  /* 
  <!-- ===================== -->
  <!-- Search Page           -->
  <!-- ===================== -->
*/
  .searchPage-results-wrap .inner-container,
  .search-bar-section .inner-container {
    width: 100%;
    max-width: 1190px;
  }

  .search-page-form {
    width: 100%;
    height: 53px;
    border: 4px solid #2929291A;
    border-radius: 40px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding-right: 4px;
  }

  .search-page-input {
    width: 100%;
    height: 100%;
    border: none;
    box-shadow: none;
    outline: none;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #292929;
  }

  .searchPage-clear-btn {
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .searchPage-clear-btn i {
    font-size: 30px;
    color: #292929;
  }

  .searchPage-submit-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #E09235;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5px;
  }

  /* search-filters-section */
  .search-filters-section {
    margin-bottom: 20px;
  }

  .search-filters-section .inner-container {
    width: 100%;
    max-width: 1190px;
  }

  .searchpage-filters {
    display: flex;
    justify-content: space-between;
    padding-right: 1.25rem;
    width: 100%;
  }

  /* Search Result */
  .search-result-item {
    margin-top: 20px;
  }

  .search-result-item>h4,
  .search-result-item>h4 strong {
    font-weight: 400 !important;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 19.6px;
    color: #243C6C !important;
  }

  .search-result-item h4:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .search-result-item a {
    font-weight: normal;
    display: block;
    padding-top: 10px;
    font-size: 12px;
    line-height: 16.6px;
    color: #29292999;
    word-break: break-all;
  }

  .search-result-item a:hover {
    color: #E09235;
  }

  .search-result-item-description,
  .search-result-item-description h4,
  .search-result-item-description a,
  .search-result-item-description h4 strong,
  .search-result-item-description p strong,
  .search-result-item-description p {
    display: inline-block;
    text-align: left;
    font-weight: 400;
    font-size: 12px;
    line-height: 16.6px;
    color: #292929;
    margin: 0px;
  }

  /* Media Query */
  @media (min-width: 1024px) {

    .search-result-item-description,
    .search-result-item-description h4 strong,
    .search-result-item-description h4,
    .search-result-item-description a,
    .search-result-item-description p strong,
    .search-result-item-description p {
      font-weight: 300;
      font-size: 18px;
      line-height: 25.2px;
    }

    .page-header-h2 {
      font-size: 48px;
      line-height: 67px;
    }

    .page-header-p {
      font-size: 24px;
      line-height: 33px;
    }

    .search-page-form {
      margin-top: 40px;
      margin-bottom: 20px;
    }

    .search-result-item>h4 {
      font-size: 20px;
      line-height: 28px;
    }

    .search-result-item a {
      font-size: 16px;
      line-height: 22px;
    }

  }

  @media (min-width: 768px) {
    .search-result-item {
      margin-top: 40px;
    }
  }



  @media (min-width: 768px) and (max-width: 1023px) {
    .page-header-h2 {
      font-size: 32px;
      line-height: 52px;
    }

    .page-header-p {
      font-size: 18px;
      line-height: 25px;
      padding-left: 20px;
      padding-right: 20px;
    }

    .search-page-form {
      margin-top: 20px;
      margin-bottom: 15px;
    }
  }

  @media (min-width: 640px) {
    .search-result-item>h4 {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media (max-width: 767px) {
    .page-header-h2 {
      font-size: 22px;
      line-height: 30px;
    }

    .page-header-p {
      font-size: 12px;
      line-height: 16px;
    }
  }
</style>