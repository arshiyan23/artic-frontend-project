<template>
    <Header />
  <div class="mt-7 max-w-sm mx-auto text-center card content-page " style="min-height: 400px;">
    <h2 class="mt-7 text-7x1 font-bold" style="margin-top: 150px;">{{ error.statusCode }}</h2>
    <p class="mt-7 text-6x1">Oops something wrong...</p>
    <p class="mt-7">{{ error.message }}</p>
    <p class="mt-7">
    
    <a href="/" class="view-all " ><span>Go home &nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></a>
    
</p>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
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
  }
  .content-page  ul li,
  .content-page p {
    font-size: 14px;
    color: var(--color-black);
    margin: 15px 0 0;
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