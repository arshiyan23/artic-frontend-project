<template>
  <header id="header" class="header fixed-top">
    <div class="container d-flex align-items-center justify-content-between">

      <NuxtLink  tabindex="0" v-if="route.path!='/'" to="/" class="logo d-flex align-items-center scrollto me-auto me-lg-0" aria-label="artic logo">
        <img width="378" height="41" src="/assets/img/logo.svg" alt="Artic Logo" rel="preload"   />
      </NuxtLink>

      <div  tabindex="0" v-if="route.path=='/'" class="logo d-flex align-items-center scrollto me-auto me-lg-0" aria-label="artic logo">
        <img width="378" height="41" src="/assets/img/logo.svg" alt="Artic Logo" rel="preload"   />
      </div>

      <div class="d-flex align-items-center flex-row-reverse">
        <div class="d-flex gap-1 align-items-center">
          <!-- toggleSearchBar -->
          <div class="search-bar">
            <button class="search-icon cursor-pointer" @click="toggleSearchBar" tabindex="0">
              <span class="sr-only">Button</span>
              <img class="img-fluid search-icon-mg" src="/assets/img/search-icon.svg" alt="search-icon" width="24"
                height="24" v-if="!isSearchBarActive" rel="preload"   />
            </button>
          </div>
          <button tabindex="0" class="navbar-toggler mobile-nav-toggle d-none ms-2 cursor-pointer" type="button"
            @click="toggleMobileMenu" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i>
              <img class="img-fluid" src="/assets/img/menu.svg" width="24" height="24" alt="menu icon" />
          </i>
          </button>
        </div>


        <!-- This is Mobile Menu -->
        <div :class="{ show: isMobileMenuVisible }" class="navmenu d-flex align-items-center justify-content-between">
          <nav id="navbarSupportedContent" class="navbar navbar fixed-top navbar-expand-lg">
            <div class="header-mobile border-bottom db-m dn-d" >
              <NuxtLink to="/" aria-label="artic logo" @click="hideMobileMenu">
                <img 
                    class="img-fluid mb-logo-focus" 
                    :tabindex="tabIndex" 
                    aria-label="Mobile Logo" 
                    src="/assets/img/logom.svg" 
                    width="320" 
                    height="36" 
                    alt="Logo" 
                    loading="lazy" 
                />
            </NuxtLink>
            </div>

            <ul class="mobile-menu" role="none">
              <li   v-for="(menus, index) in menu?.linkset[0]?.item.filter( (p) => p.hierarchy.length == 1 )" :key="index"
                :class="{ active: isActiveLink(menus.href) }" class="dropdown">
                <NuxtLink :tabindex="tabIndex" :to="menus.href" class="nav-link scrollto" @click="hideMobileMenu">
                  {{ menus.title }}
                </NuxtLink>
              </li>
            </ul>
            <div class="mobile-date">
              <button tabindex="0" class="navbar-toggler mobile-nav-toggle d-none m-block" type="button"
                @keydown="handleKeydown" @click="toggleMobileMenu" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Menu Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="mobile-footer footer d-none m-block non-focusable-btn" :tabindex="-1">
              <div class="d-flex flex-wrap justify-content-center">
                <ul class="nav justify-content-center">
                  <li class="nav-item d-flex">
                    <a tabindex="-1" href="https://www.linkedin.com/company/al-rayyan-tourism-investment-company/" class="nav-link px-1 text-muted color-white pt-0">LinkedIn </a><span
                      class="px-2">|</span>
                  </li>
                  <li class="nav-item d-flex">
                    <a tabindex="-1" href="https://x.com/ARTIC_QA" class="nav-link px-1 text-muted color-white pt-0">X </a><span
                      class="px-2">|</span>
                  </li>
                  <li class="nav-item d-flex">
                    <a tabindex="-1" href="https://m.facebook.com/artic_qa/" class="nav-link px-1 text-muted color-white pt-0">Facebook </a><span
                      class="px-2">|</span>
                  </li>
                  <li class="nav-item d-flex">
                    <a tabindex="-1" href="https://www.instagram.com/artic_qa/" class="nav-link px-1 text-muted color-white pt-0">Instagram</a><span
                      class="px-2">|</span>
                  </li>
                  <li class="nav-item d-flex">
                    <a tabindex="-1" href="https://www.youtube.com/@artic108" class="nav-link px-1 text-muted color-white pt-0 pe-0">Youtube</a>
                  </li>
                </ul>
              </div>
              <div class="d-flex justify-content-center pb-0 mb-0 py-3 my-0 border-top">
                <p>
                  ©2024 Al-Rayyan Tourism Investment Co. (ARTIC)<br />All
                  rights reserved
                </p>
              </div>
            </div>
          </nav>
          <!-- .navbar -->

          <!-- Search bar -->
          <div :class="{ active: isSearchBarActive }" class="searchform-placeholder" role="search" >
            <div class="searchform-wrap" :class="{ focused: isSearchFocues }">
              <div class="d-flex align-items-stretch w-full">
                <label for="search-artic" class="sr-only">Search</label>
                <input :tabindex="tabIndex" @focus="handleFocus()" @blur="handleFocusOut" @input="onInputSearch"
                  @keyup.enter="searchItems" type="text" placeholder="Search ARTIC" aria-label="Write keyword"
                  name="search" v-model="searchQuery" id="search-artic" autocomplete="off">

                <button :tabindex="tabIndex" aria-label="Search close" v-if="searchQuery?.length > 0" @click="clearSearch()" name="Clear"
                  class="w-[40px] h-[40px] p-0 m-0 flex align-items-center justify-center close-search" type="button">
                  <span class="sr-only">Button</span>
                  <img class="img-fluid" src="/assets/img/close.svg" width="12" height="12" alt="button"
                    loading="lazy" rel="preload"  />
                </button>

                <button :tabindex="tabIndex" aria-label="click here to Search"
                  class="btn btn-outline-secondary border-0 rounded-circle bg-orange"
                  :class="{disabled: searchQuery?.length < 2}" type="button" @click="searchItems()" name="Search">
                  <span class="sr-only">Search</span>
                  <img class="img-fluid" src="/assets/img/search.svg" width="18" height="18" alt="button"
                    loading="lazy" rel="preload"  />
                </button>
              </div>

              <!-- suggestion -->
              <div class="position-relative w-full">
                <div class="searchform-suggestion min-h-[40px] bg-red-300 rounded-[12px]"
                  :class="{ typing: isSearchTyping }">
                  <div class="text-center flex-column justify-center align-items-center flex gap-2" v-if="isLoading">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 24 24">
                      <g>
                        <circle cx="3" cy="12" r="2" fill="#000"></circle>
                        <circle cx="21" cy="12" r="2" fill="#000"></circle>
                        <circle cx="12" cy="21" r="2" fill="#000"></circle>
                        <circle cx="12" cy="3" r="2" fill="#000"></circle>
                        <circle cx="5.64" cy="5.64" r="2" fill="#000"></circle>
                        <circle cx="18.36" cy="18.36" r="2" fill="#000"></circle>
                        <circle cx="5.64" cy="18.36" r="2" fill="#000"></circle>
                        <circle cx="18.36" cy="5.64" r="2" fill="#000"></circle>
                        <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                          values="0 12 12;360 12 12"></animateTransform>
                      </g>
                    </svg>
                    <p class="text-black">Loading...</p>
                  </div>

                  <div v-if="!isLoading">
                    <!-- <div class="flex align-items-center gap-2 flex-wrap searchform-suggestion-filter" v-if="searchResults?.data?.length > 0">
              <button @click="searchOnPageCat('all')"   class="searchform-btn"  :class="defaultCategory=='all'?'active':''">
                <span>All</span>|<span>{{ searchResults?.meta?.count }}</span>
              </button>
              <div  v-for="(subPage,index) in searchResults?.meta?.facets[0]?.terms">
                <button @click="searchOnPageCat(subPage?.values?.label)"  :class="defaultCategory==subPage.values.label? 'active':''" class="searchform-btn">
                  <span>{{ subPage?.values?.label }}</span>|<span>{{ subPage?.values?.count }}</span>
                </button>
              </div>
            </div> -->

                    <div class="d-flex flex justify-between searchform-suggestion-result gap-2">
                      <div class="searchform-suggestion-result-col mt-2 w-100 usefullresults">
                        <p class="ms-2 mb-1">
                          Search Results
                        </p>
                          <a class="" v-for="(item, index) in recentResults?.data?.splice(5)" :href="usefulLinkUrl(item)" target="_blank">
                            <!-- <span class="font-[500]">Hotels</span> -->
                            {{ item.title }}
                          </a>
                      </div>
                      
                      <div class="searchform-suggestion-result-col mt-0 w-100 ms-2">
                        <!--<p class="">
                          Recent Search
                        </p>-->
                       
                          <a class="" v-for="(item, index) in recentResults?.meta?.facets[0]?.terms" v-show="item?.values?.count>0" :href="`/search/${item?.values?.label}/${searchQuery}`">
                          
                            <div class="Searchitem d-flex align-items-center gx-1">
                              <span class="mr-1">{{ searchQuery }} </span> in <a class="ml-2"> {{ item?.values?.label }} <span>({{ item?.values?.count }})</span></a>
                            </div>
                          </a>
                        
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
    <div class="bgheader" style="none"></div>
  </header>

</template>

<script setup lang="ts">
  import { useRouter, useRoute } from "vue-router";
  import { ref, onMounted, onUnmounted, nextTick } from 'vue';
  import { createRouter, createWebHistory } from 'vue-router';




  const config = useRuntimeConfig();
  const imgBaseURL = config.public.IMG_BASE_URL;
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
  const route = useRoute();
  const router = useRouter();



  const searchQuery = defineModel();
  const searchResults = ref([]);
  const topResults = ref([]);
  const recentResults = ref([]);
  const isLoading = ref(false);

  const defaultCategory = ref("all");
  const isSearchBarActive = ref(false);
  const isSearchFocues = ref(false);
  const isSearchTyping = ref(false);
  const isMobileMenuVisible = ref(false);

  const logoRef = ref(null);
  const navbarSupportedContentRef = ref < HTMLDivElement | null > (null);


    // Computed property to determine the tabindex based on the current URL
    const tabIndex = computed(() => {
      return route.path?.includes('supply-chain') ? -1 : 0;
    });



  const toggleMobileMenu = () => {
    isMobileMenuVisible.value = !isMobileMenuVisible.value;
    
    if(isMobileMenuVisible.value){
      const mbLogoElement = document.querySelector('.mb-logo-focus');
      if (mbLogoElement) {
        mbLogoElement.focus();
      }
    }
 
  };
  const handleKeydown = (event) => {
    if (event.key === 'Tab') {
      const mbLogoElement = document.querySelector('.mb-logo-focus');
      if (mbLogoElement) {
        mbLogoElement.focus();
      }

      // nextTick(() => {
      //   if (logoRef.value) {
      //     logoRef.value.focus();
      //     navbarSupportedContentRef.value.scrollTo({ top: 0, behavior: 'smooth' });
      //   }
      // });
    }
  };
  const hideMobileMenu = () => {
    isMobileMenuVisible.value = false;
  };



// Set focus on the button when the component is mounted (on reload page)
onMounted(async () => {
  await nextTick(); // Wait for the DOM to be updated
  const logoRef = document.getElementById('header');
  if (logoRef) {
    logoRef.focus();
  }
});

watch(() => router.currentRoute.value.path, (newPath) => {
  if (newPath === '/') {
    const logoRef = document.getElementById('header');
    if (logoRef) {
      logoRef.focus();
    }
  }
});

  // Search
  const toggleSearchBar = () => {
   
    isSearchBarActive.value = !isSearchBarActive.value;
    handleFocus();
    searchQuery.value = "";
  };
  const handleFocus = () => {
    isSearchFocues.value = true;
    addBackdrop();
  };
  const handleFocusOut = () => {
    // isSearchFocues.value = false;
    removeBackdrop();
  }
  const clearSearch = () => {
    isSearchFocues.value = false;
    isSearchTyping.value = false;
    isSearchBarActive.value = false;
    searchQuery.value = "";
    removeBackdrop();
  };
  const searchItems = () => {
    const cleanedQuery = searchQuery.value.replace(/\s+/g, ' ').trim();
    if (cleanedQuery.length > 1 && !/\s{2,}/.test(searchQuery.value)) {
      window.location.href = "/search/" + encodeURIComponent(searchQuery.value);
      isSearchFocues.value = false;
      isSearchTyping.value = false;
    }
  };
  const navigateSearchResult = (label) => {
    const cleanedQuery = label.replace(/\s+/g, ' ').trim();
    window.location.href = "/search/" + encodeURIComponent(cleanedQuery);
    isSearchFocues.value = false;
    isSearchTyping.value = false;
    searchQuery.value = "";
  };
  const usefulLinkUrl = (item) => {
    if(item.type=='node--press_release'){
      return '/press-release/'+item.id;
    }
    else if(item.type=='node--news'){
      return '/news';
    }
    else if(item.type=='node--about'){
      return '/about-us';
    }
    else if(item.type=='node--media'){
      return '/media';
    }
    else if(item.type=='node--sustainability'){
      return '/sustainability';
    }
    else if(item.type=='node--portfolio'){
      return '/portfolio/';
    }
    else if(item.type=='node--home' || item.type=='node--index'){
      return '/';
    }
    else{
      return '/';
    }
    // const cleanedQuery = label.replace(/\s+/g, ' ').trim();
    // window.location.href = "/search/" + encodeURIComponent(cleanedQuery);
    // isSearchFocues.value = false;
    // isSearchTyping.value = false;
    // searchQuery.value = "";
  };
  const onInputSearch = async () => {
    const cleanedQuery = searchQuery.value.replace(/\s+/g, ' ').trim();
    if (cleanedQuery.length > 1 && !/\s{2,}/.test(searchQuery.value)) {
      isSearchTyping.value = true;
      isLoading.value = true;
      try {
        const [topRes, recentRes] = await Promise.all([
          fetch(
            `${apiBaseURL}/jsonapi/top-searches/${encodeURIComponent(cleanedQuery)}`,
            {
              method: "GET",
              headers: {
                Authorization: `Basic ${apiAuthKey}`,
              },
            }
          ),
          fetch(
            `${apiBaseURL}/jsonapi/index/artic_index_database?fields[node--portfolio]=title&fields[node--news]=title&fields[node--press_release]=title&fields[node--board_members]=title&fields[node--executive_management]=title&fields[node--policy_pages]=title&fields[node--landing_page]=title&fields[node--supply_chain]=title&page[limit]=10&filter[fulltext]=${encodeURIComponent(cleanedQuery)}`,
            {
              method: "GET",
              headers: {
                Authorization: `Basic ${apiAuthKey}`,
              },
            }
          )
        ]);

        if (!topRes.ok || !recentRes.ok) {
          throw new Error('Network response was not ok');
        }


        const dataTop = await topRes.json();
        topResults.value = dataTop;

        const dataRecent = await recentRes.json();
        recentResults.value = dataRecent;

      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        isLoading.value = false;
      }
    } else {
      searchResults.value = [];
      topResults.value = [];
      recentResults.value = [];
      isLoading.value = false;
    }
  };
  const __onInputSearch = async () => {
    const cleanedQuery = searchQuery.value.replace(/\s+/g, ' ').trim();
    if (cleanedQuery.length > 2 && !/\s{2,}/.test(searchQuery.value)) {
      isSearchTyping.value = true;
      isLoading.value = true;
      try {
        // const res = await fetch(
        //   `${apiBaseURL}/jsonapi/top-searches/${encodeURIComponent(searchQuery.value)}`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Authorization: `Basic ${apiAuthKey}`,
        //     },
        //   }
        // );
        // const dataTop = await res.json();
        // topResults.value = dataTop;

        // Recent Result Search
        const { data: dataRecent } = await useFetch(
          `${apiBaseURL}/jsonapi/index/artic_index_database?fields[node--portfolio]=title&fields[node--news]=title&fields[node--press_release]=title&fields[node--board_members]=title&fields[node--executive_management]=title&fields[node--policy_pages]=title&fields[node--landing_page]=title&fields[node--supply_chain]=title&page[limit]=10&filter[fulltext]=${encodeURIComponent(searchQuery.value)}`,
          {
            method: "GET",
            headers: {
              Authorization: `Basic ${apiAuthKey}`,
            },
          }
        );
        recentResults.value = dataRecent;
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        isLoading.value = false;
      }
    } else {
      searchResults.value = [];
      topResults.value = [];
      recentResults.value = [];
      isLoading.value = false;
    }
  };
  // Fetch search results as the user types
  watch(searchQuery, (newQuery) => {
    if (newQuery.trim() !== "") {
      //onInputSearch();
    } else {
      searchResults.value = [];
      topResults.value = [];
      recentResults.value = [];
    }
  });


  const searchOnPageCat = async (label) => {
    if (label == "all") {
      const searchResults = await $fetch(
        apiBaseURL + "/jsonapi/index/artic_index_database/",
        {
          method: "GET",
          params: {
            "filter[fulltext]": searchQuery.value,
          },
          headers: {
            Authorization: `Basic ${apiAuthKey}`,
          },
        }
      );
      searchResults.value = searchResults;
      defaultCategory.value = label;
    } else {
      const searchResults = await $fetch(
        apiBaseURL + "/jsonapi/index/artic_index_database/",
        {
          method: "GET",
          params: {
            "filter[fulltext]": searchQuery.value,
            "filter[search_filter]": label,
          },
          headers: {
            Authorization: `Basic ${apiAuthKey}`,
          },
        }
      );
      searchResults.value = searchResults;
      defaultCategory.value = label;
    }
  };

  // Body Click (Outside)
  const isMobile = () => {
    return window.innerWidth <= 768; // Adjust this value based on your mobile breakpoint
  };
  const handleClickOutside = (event) => {
    if (isMobile()) {
      // Mobile
      if (
        !event.target.closest(".searchform-wrap") &&
        !event.target.closest(".search-icon") &&
        !event.target.closest(".search-icon-mg")
      ) {
        isSearchFocues.value = false;
        isSearchTyping.value = false;
        isSearchBarActive.value = false;
        removeBackdrop();
      }
    } else {
      // Desktop
      if (
        !event.target.closest(".searchform-wrap") &&
        !event.target.closest(".search-icon")
      ) {
        isSearchFocues.value = false;
        isSearchTyping.value = false;
        isSearchBarActive.value = false;
        removeBackdrop();
      }
    }
  };
  onMounted(() => {
    document.addEventListener("click", handleClickOutside);
  });
  onBeforeUnmount(() => {
    document.removeEventListener("click", handleClickOutside);
  });
  const isActiveLink = (href) => {
    return route.path === href;
  };
  const addBackdrop = () => {
    // Check if the backdrop already exists
    if (!document.getElementById("backdrop")) {
      const backdrop = document.createElement("div");
      backdrop.className = "backdrop";
      backdrop.id = "backdrop";
      document.body.appendChild(backdrop);
      document.body.classList.add("no-scroll");
      let header=document.getElementById("header");
      header.classList.add("header-bg");
    }
  };
  const removeBackdrop = () => {
    const backdrop = document.getElementById("backdrop");
    if (backdrop) {
      backdrop.remove();
    }
    document.body.classList.remove("no-scroll");
    const header = document.getElementById("header");
    if (header) header.classList.remove("header-bg");
  };


  // Menu api call
  const { data: menu } = await useFetch(
    apiBaseURL + "/system/menu/main/linkset",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${apiAuthKey}`,
      },
    }
  );
</script>
<style scoped>
  
.usefullresults {
  border-top: solid 1px #ccc;
  padding-top: 15px;
}
.usefullresults a {
    font-size: 14px;
    color: #243C6C;
    font-weight: 400;
    line-height: 20.58px;
    margin-top: 12px;
    text-transform: capitalize !important;
    background: #FFFFFF;
    padding: 10px;
    border-radius: 10px;
   

}
.usefullresults a {  margin-top: 1px !important;}
.usefullresults a:hover {  background: #243C6C12;}
.searchform-suggestion-result-col .Searchitem a {
  margin: 0 0 0 5px !important;
    font-weight: 500;
    color: var(--color-primary);
}
  .non-focusable-btn {
    position: relative;
    /* or 'fixed', 'absolute' depending on your layout */
    z-index: 10;
    /* Adjust the z-index as needed */
  }

  .dropdown.active>.nav-link {
    color: #243c6c;
    font-weight: 500;
    border-color: #243c6c; cursor: default;
  }

  .navmenu.show nav#navbarSupportedContent {
    display: block;
    height: 100%;
  }

  .navmenu.show {
    display: flex;
  }

  .navmenu {
    display: none;
  }

  @media (max-width: 1279px) {
    .mobile-menu .dropdown.active>.nav-link {
      color: var(--color-white) !important;
      font-weight: 400;
    }

    .navmenu.show nav#navbarSupportedContent {
      display: block;
      height: 100%;
      overflow-y: auto;
    }
    .searchform-suggestion-result-col a{margin-top: 5px !important;}
    .searchform-suggestion-result-col a, .searchform-suggestion-result-col p { font-size: 14px !important;}
  }


  .searchform-suggestion-result-col p {
    font-size: 16px;
    color: #29292980;
    font-weight: 500;
    line-height: 19.5px;
  }

  .searchform-suggestion-result-col a {
    font-size: 16px;
    color: #001E1D;
    font-weight: 400;
    line-height: 19.5px;
    margin-top: 12px;
    text-transform: capitalize !important;
  }
</style>