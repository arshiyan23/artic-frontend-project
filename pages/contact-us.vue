<template>
  <div>

    <Head>
      <Title>{{ contact?.data?.metatag[0]?.attributes?.content }}</Title>
      <Meta name="description" :content="contact?.data?.metatag[1]?.attributes?.content" />
    </Head>

    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div class="start-page pt-75">



          <section class="contact">
            <sending :loading="isLoading"></sending> 
            <div class="container">
              <!-- <Head>
        <Title>Contact Us | Al Rayyan | Tourism Investment Co. (ARTIC)</Title>
        <Meta name="description" content="Contact - ARTIC (Al Rayyan Tourism Investment Company) " />
      </Head> -->

              <div class="section-header">
                <h1 class="arfs-2 font-primary text-uppercase text-primary font-weight-medium" tabindex="0">Get in touch
                </h1>

              </div>

            </div>

            <!-- End Google Maps -->

            <div class="container">

              <div class="row gy-5 gx-lg-5">



                <!-- <UModal v-model="isOpen" class="globeModal" prevent-close>
          <div class="p-4">
            <div class="popupglob">
              <div class="flex items-center justify-between">
            <h1 class="fs-4 text-primary" tabindex="0">Success</h1>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
            <p tabindex="0">Thank you for your enquiry.</p>
            </div>
          </div>
        </UModal> -->


                <div class="col-lg-8 getintouch">
                  <h3 tabindex="0"
                    class="arfs-6 font-primary color-default font-weight-medium mb-4 pb-2  pb-m page-main-heading">Send
                    Enquiry</h3>
                  <p tabindex="0" class="arfs-8">
                    Please use this form to send in your questions. Our team will get in touch
                    with you as soon as possible.
                  </p>

                  <!-- <form action="" method="post" role="form" class="email-form">
            <div class="row">
              <div class="form-group mt-3">
                <input type="text" v-model="name" class="form-control" name="subject" id="name" placeholder="Name" required="">
              </div>
              <div class="col-md-6 form-group">
                <input type="text" v-model="email" name="name" class="form-control" id="email" placeholder="Email" required="">
              </div>
              <div class="col-md-6 form-group mt-3 mt-md-0 mt-m">
                <input type="email" v-model="phone" class="form-control" name="email" id="email" placeholder="Phone Number" required="">
              </div>
            </div>

            <div class="form-group mt-0">
              <textarea class="form-control" v-model="msg" name="message" placeholder="Message" required=""></textarea>
            </div>
            <div class="my-0">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-start">
              <a href="#" class="view-all align-self-start" @click="formSubmit()"><span>Send Message</span><i
                  class="bi bi-arrow-right"></i></a>
            </div>
          </form> -->
                  <UForm :validate="validate" :schema="schema" :state="state" class="space-y-4 email-form"
                    @submit="onSubmit">
                    <div class="row">

                      <UFormGroup name="name" class="errormessage form-group mt-3">
                        <label id="nameLabel" class="sr-only">Name</label>
                        <UInput type="text" placeholder="Name *" name="name" aria-label="Enter your Name"
                          class="form-control" v-model="state.name" />
                      </UFormGroup>


                      <UFormGroup name="email" class="col-md-6 form-group">
                        <label id="emailLabel" class="sr-only">Email</label>
                        <UInput placeholder="Email *" name="email" aria-label="Enter your" class="form-control"
                          v-model="state.email" />
                      </UFormGroup>


                      <UFormGroup name="phone" class="col-md-6 form-group phonenumber">
                        <label id="phoneLabel" class="sr-only">Phone</label>
                        <UInput placeholder="Phone *" name="phone" aria-label="Enter your Phone" class="form-control"
                          v-model="state.phone" type="number" @keypress="isNumber($event)" />
                      </UFormGroup>

                    </div>
                    <UFormGroup name="message" class="form-group mt-0">
                      <label id="messageLabel" class="sr-only">Message</label>
                      <UTextarea  placeholder="Message *" name="message"
                        aria-label="Please enter your Message" class="form-control" v-model="state.message" />
                    </UFormGroup>

                    <UButton type="submit" class="view-all align-self-start" aria-label="Click to send message">
                      <span>Send Message</span>
                      <i class="bi bi-arrow-right"></i>
                    </UButton>
                  </UForm>
                </div><!-- End Contact Form -->


                <div class="col-lg-4">

                  <div class="info">
                    <h3 class="arfs-6 font-primary color-default font-weight-medium mb-4 pb-2" tabindex="0">Office
                      Address
                    </h3>

                    <div class="info-item d-flex">
                      <div class="post-box">

                        <div class="post-img map-sec" tabindex="0" aria-label="Office address map">
                          <div class="mapouter">
                            <div class="gmap_canvas">
                              <iframe 
                                class="gmap_iframe" 
                                width="519" 
                                height="231" 
                                :src="`https://maps.google.com/maps?width=521&height=231&hl=en&q=${encodeURIComponent(contact?.data?.field_sections[0]?.field_address?.value)}&t=&z=13&ie=UTF8&iwloc=B&output=embed`" 
                                title="Map showing {{ contact?.data?.field_sections[0]?.field_address?.value }}" 
                                role="presentation">
                            </iframe>
                            </div>
                          </div>
                          <!-- <img src="/assets/img/contact-map.jpg" class="img-fluid" alt="Office address map"> -->
                        </div>

                        <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                          <div class="post-box mapdown" >
                            <div class="mt-4 pt-1 mt-m-20 pt-m papdescontact" >
                              <div tabindex="0" v-html="contact?.data?.field_sections[0]?.field_address?.value"></div>
                            </div>
                            <hr>
                            <p tabindex="0">
                                <span aria-label="Our Email address">Email: </span>
                                <span class="email">
                                  <a :href="`mailto:${contact?.data?.field_sections[0].field_email}`" target="_blank" title="Email Id">{{ contact?.data?.field_sections[0].field_email }}</a>
                                </span>
                            </p>
                            <hr>
                            <p role="contentinfo" tabindex="0" aria-label="Telephone number">
                              Tel: 
                              <NuxtLink :to="`tel:${contact?.data?.field_sections[0]?.field_tel.split(' ').join('')}`">
                                {{contact?.data?.field_sections[0]?.field_tel }}
                              </NuxtLink>
                            </p>
                            <hr>
                            <p role="contentinfo" tabindex="0" aria-label="Fax number">
                              Fax: {{contact?.data?.field_sections[0]?.field_fax }}
                            </p>
                            <hr>
                          </div>
                        </div>
                        <div class="member-info px-0 text-sm-center text-lg-start pt-2 pb-4 dn-d db-m downloadbtn" >
                          <a href="#" class="btn-white align-self-start">
                            <span>Download to Learn More</span><i class="bi bi-arrow-down"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>


              </div>

            </div>
          </section>


          <section id="contact" class="contact contact-sup">
            <div class="container">

              <div class="row gy-5 gx-lg-5">


                <!--<div class="col-lg-6">
                  <div class="info">
                    <h3 class="arfs-6 font-primary color-default font-weight-medium  mb-4 pb-2" tabindex="0">
                      Procurement/Supply Chain</h3>

                    <div class="info-item d-flex">
                      <div class="post-box">
                        <div class="post-img map-sec" tabindex="0"
                          :aria-label="contact.data.field_sections[1].field_image.field_media_image.meta.alt"><img
                            :src="contact?.data?.field_sections[1]?.field_image?.field_media_image?.image_style_uri?.procurement_supply_chain"
                            class="img-fluid w-100"
                            :alt="contact.data.field_sections[1].field_image.field_media_image.meta.alt"></div>
                        <div class="aos-init aos-animate " data-aos="fade-up" data-aos-delay="400">
                          <div class="post-box mapdown" data-v-inspector="">
                            <h4 tabindex="0">{{ contact.data.field_sections[1].field_title_sustanability }}</h4>
                            <p tabindex="0">{{ contact.data.field_sections[1].field_description_sustanability }}</p>
                          </div>
                        </div>

                        <div class="member-info px-0 text-sm-center text-lg-start mt-5 mt-m-20 reg-infobtn">

                          <NuxtLink to="/supply-chain" class="view-all align-self-start" aria-label="Learn more">
                            <span>Learn more &nbsp;</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                              </svg>
                          </NuxtLink>

                        </div>
                      </div>
                    </div>



                  </div>
                </div>-->
                <!-- End Contact Form -->


                <div class="col-lg-6">

                  <div class="info">
                    <h3 class="arfs-6 font-primary color-default font-weight-medium  mb-4 pb-2" tabindex="0">Career</h3>

                    <div class="info-item d-flex">
                      <div class="post-box">
                        <div class="post-img map-sec" tabindex="0"
                          :aria-label="contact?.data?.field_sections[1]?.field_image?.field_media_image?.meta?.alt"
                          role="img">
                          <img
                            :src="contact?.data?.field_sections[1]?.field_image?.field_media_image?.image_style_uri?.procurement_supply_chain"
                            class="img-fluid w-100"
                            :alt="contact?.data?.field_sections[1]?.field_image?.field_media_image?.meta?.alt">
                        </div>
                        <div class="aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                          <div class="post-box mapdown" >
                            <h4 tabindex="0">{{ contact?.data?.field_sections[1]?.field_title_sustanability }}</h4>
                            <p tabindex="0" class="mb-4 pb-2 mb-m">{{
                              contact?.data?.field_sections[1]?.field_description_sustanability }}</p>
                            <p tabindex="0" class="py-3">To join our team, please send your updated resume</p>

                            <p tabindex="0"><span class="email" aria-label="Our recruitment Email address"><a
                                  href="mailto:recruitment@artic.com.qa" target="_blank"
                                  title="recruitment@artic.com.qa">
                                  recruitment@artic.com.qa</a></span>
                            </p>

                          </div>
                        </div>

                      </div>
                    </div><!-- End Info Item -->



                  </div>

                </div>


              </div>

            </div>
          </section>


          <!-- Footer -->
          <Footer />
        </div>
      </div>
    </div>
    <Popup :isVisible="isOpen" @close="isOpen=false" class="contact-popup-wrap">

      <div class="p-3">
        <div class="popupglob">
          <div class="flex items-center justify-between">
            <h1 class="fs-5 text-secondry pb-2 font-primary">Success</h1>

          </div>
          <p class="fs-6 text-secondry mb-0">Thank you for your Enquiry.</p>
          <!-- <p>dfdg g fdgdf</p> -->
        </div>
      </div>
    </Popup>
  </div>
</template>

<script setup lang="ts">
  import { z } from 'zod'
  import { reactive, ref } from 'vue'
  import { useFetch, useRuntimeConfig } from '#imports'
  import type { FormError, FormSubmitEvent } from '#ui/types'
  const config = useRuntimeConfig();
  const imgBaseURL = String(config.public.IMG_BASE_URL || '');
  const apiBaseURL = String(config.public.API_BASE_URL || '');
  const apiAuthKey = String(config.public.API_AUTH_KEY || '');

  const isOpen = ref(false)
  const isLoading = ref(false);

  const schema = z.object({
    name: z.string().min(4, 'Name is very short').max(25, 'Name must be no longer than 25 characters'),
    email: z.string().email('Enter a valid email id'),
    // phone: z.string().min(10, 'Please enter valid phone number').max(12,'Max limit reached').regex(phoneRegex, 'Invalid Number!'),
    phone: z.number({ invalid_type_error: 'Only Phone number is allowed' }).gte(10, 'Enter complete phone no').lte(999999999999999, 'Phone no can not be more than 15 characters'),
    message: z.string().max(250, 'You have exceeded the maximum number of 250 characters in this field')
  })

  type Schema = z.output<typeof schema>

  const state = reactive<{
    name: string;
    email: string;
    phone: string | number;
    message: string;
  }>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const validate = (state: any): FormError[] => {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Enter your name' })
    if (!state.email) errors.push({ path: 'email', message: 'Enter your email' })
    if (!state.phone) errors.push({ path: 'phone', message: 'Enter your phone number' })
    if (!state.message) errors.push({ path: 'message', message: 'Enter your query/message' })

    // if (!state.password) errors.push({ path: 'password', message: 'Required1' })
    return errors
  }

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with data
    const name = event.data.name;
    const email = event.data.email;
    const phone = event.data.phone;
    const message = event.data.message;

    isLoading.value = true;

    const frmSubmit: any = await $fetch('/webform_rest/submit', {
      // immediate: false,
      baseURL: apiBaseURL,
      method: "POST",
      body: {
        webform_id: "get_in_touch_contact",
        name: name,
        email: email,
        phone: phone,
        message: message
      },
      headers: {
        "Authorization": `Basic ${apiAuthKey}`
      },
    })

    if (frmSubmit.sid) {
      isLoading.value = false;
      isOpen.value = true;
      state.name = '';
      state.email = '';
      state.phone = '';
      state.message = '';
    }
  }

  const contact = ref<any>(null)
  const { data: contactResponse } = await useFetch<any>('/jsonapi/node/landing_page/d2341547-1e41-4dac-be26-2c731dacc502', {
    // immediate: false,
    baseURL: apiBaseURL,
    method: "GET",
    headers: {
      "Authorization": `Basic ${apiAuthKey}`
    },
  })
  contact.value = contactResponse.value
  function isNumber(evt: any) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      evt.preventDefault();;
    } else {
      return true;
    }
  }
</script>

<style>
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
    overflow: hidden;
    margin: 0px 0px;
    border: none;
  }

  .contact .getintouch .text-sm {
    color: red !important;
  }

  .view-all:hover {
    background: var(--color-white);
    color: var(--color-primary) !important;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>