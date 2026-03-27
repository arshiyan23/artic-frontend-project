<!-- components/PopupComponent.vue -->
<template class="">
  <div v-if="isVisible" class="popup-overlay popup" tabindex="0" @click.self="closePopup" role="dialog">
    <div class="popup-content" ref="popupContent">
      <button class="close-btn" @click="closePopup" tabindex="0" ref="closeButton" aria-label="Close popup">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="20" fill="#EFEFEF"/>
          <path d="M20 20L15 15M20 20L25 25M20 20L25 15M20 20L15 25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </button>
      <slot></slot> <!-- This slot will allow you to pass custom content into the popup -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
const props = defineProps<Props>();
interface Props {
  isVisible: Boolean
}

const emit = defineEmits(['close', 'focus-close-button']);

const popupContent = ref(null);
const closeButton = ref(null);

const closePopup = () => {
  emit('close');
  nextTick(() => {
    closeButton.value?.focus();
  });
};

watch(() => props.isVisible, (newVal) => {
  if (newVal) {
    nextTick(() => {
      closeButton.value?.focus();
    });
  }
});
onMounted(() => {
  window.addEventListener('focus-close-button', () => {
    nextTick(() => {
      closeButton.value?.focus();
    });
  });
});
</script>

<style scoped>

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
}
.popup-content h1 {
    padding-bottom: 40px;
}
.popup-content {
  background: white;
  padding: 20px 20px;
  border-radius: 5px;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}
#enquiryform .popup-content {
    max-width: 600px;
}
.close-btn {
  background: #fff;
    border: none;
    border-radius: 60px;
    color: #000;
    cursor: pointer;
    font-size: 32px;
    height: 40px;
    line-height: 0;
    padding: 0;
    position: absolute;
    right: 16px;
    top: 19px;
    width: 40px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid transparent;
}
.about .membermessage .popup-content, .homemain .ourlegacy .popup-content { padding: 0px  !important; max-width: 1122px;}
.footermainsec  .popup-content { max-width: 600px; border-radius: 20px;}
.footermainsec  .popup-overlay { justify-content: right;   align-items: end; padding-right: 24px; padding-bottom: 40px;}
div#globalPresense .popup-content {width: 100%; max-width: 737px; padding: 25px;     min-height: 370px;}
div#globalPresense .close-btn {    top: 0px !important;    right: -56px !important;    border: 2px solid #fff;}
div#globalPresense .popup-content { max-height: fit-content !important; overflow: visible !important;}


@media (max-height: 740px) {
  .popup-content { max-height: 92vh; overflow-y: auto; overflow-x: hidden;}
}


@media (max-width: 1024px) { 
  div#globalPresense .close-btn { top: inherit !important;   bottom: -40px !important;    right: 0px !important;    border: 2px solid #fff;    position: absolute;    margin: 0 auto;    display: flex;    align-self: flex-end;    left: 0;}
  .footermainsec  .popup-overlay{    justify-content: center;    align-items: end;    padding: 20px;}
  .popup-content h1 { width: 90%;}
  .popup-overlay { padding: 8px !important;}
  .close-btn {    border-radius: 100px;    height: 28px;    right: 10px;    top: 10px;    width: 28px;  }
}
@media (max-width: 1600px) {.footermainsec  .popup-content { max-width: 480px; border-radius: 20px;}}


@media (max-width: 768px) {.footermainsec   .cookiessetting .popup-content  { padding: 20px 20px;}}
@media (max-width: 374.99px) {
  div#globalPresense .popup-content { max-height: fit-content !important; overflow: visible !important;}
  div#globalPresense .popup-content .row.globpopup { overflow-y: auto;  max-height: 72vh;}
}
</style>