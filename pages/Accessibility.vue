<template>
  <section id="contact" class="contact pt-75">
    <Head>
        <Title>Accessibility | Al Rayyan | Tourism Investment Co. (ARTIC)</Title>
        <Meta name="description" content="Accessibility - ARTIC (Al Rayyan Tourism Investment Company) " />
    </Head>
    <div class="container mt-5">
      <div class="section-header">
        <h1 tabindex="0" class="arfs-2 font-primary text-uppercase text-primary font-weight-medium page-main-heading">
          {{accessPage?.title }}
        </h1>
      </div>
    </div><!-- End Google Maps -->
    <div class="container content-page">
      <div class="row gy-5 gx-lg-5"  >
        <div tabindex="0" class="col-12" v-html="accessPage?.body?.value">

        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <Footer />
  
</template>

<script lang="ts" setup>
  const config = useRuntimeConfig();
  const apiBaseURL = config.public.API_BASE_URL;
  const apiAuthKey = config.public.API_AUTH_KEY;
  const accessPage = ref(null);

  // Title description api call
  const { data: page_data } = await useFetch(apiBaseURL + '/jsonapi/node/policy_pages', {
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    }
  });
    const rawData = toRaw(page_data.value.data);
    const privacyPageData = rawData.find(page => page.title === 'Accessibility');
    accessPage.value = privacyPageData;
</script>
<style >
  .content-page h2{
    font-size:22px;
    color: #243c6c !important;
    margin-top: 20px;
  }
    .content-page h3,
    .content-page h4{
      font-size: 16px;
      margin-top: 20px;
      color: var(--color-black);
      padding-left:20px
  }
  .content-page  ul,
  .content-page  ol{
    list-style: auto;
  }
  .content-page  ol li,
  .content-page  ul li,
  .content-page p {
    font-size: 14px;
    color: var(--color-black);
    margin: 15px 0 0;
    padding-left:20px
  }
  .content-page table{
    margin:20px 0px;
    border:1px solid #ccc;
    text-align: left;
    font-size: 14px;
    color: #000000c9;
    margin-left:20px;
  }
  .content-page table tr td{
    border:1px solid #ccc;
    padding:10px;
    text-align:left;
    font-size: 14px;
    color: var(--color-black);
  }
  @media (max-width: 667.99px) {
   .content-page h2{font-size:18px;padding-left:0px;}
   .content-page h3,
   .content-page h4{font-size:14px;padding-left:0px;}
   .content-page  ul li,
  .content-page p {padding-left:0px;}
  .content-page table{margin-left:0px;}
  }
  </style>