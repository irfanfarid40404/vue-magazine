<template>
    <main>
    <div class="magazine">
     <div class="swiper-wrapper">
      <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="true"
      :modules="modules"
      class="swiper"
    >
      <swiper-slide class="swiper-slide"
        ><img
          src="../assets/img/depan.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/1.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/2.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/3.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/4.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/5.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/6.webp" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/7.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/8.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/9.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/10.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/11.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/12.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/13.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/14.jpg" /></swiper-slide
      >
      <swiper-slide class="swiper-slide"
        ><img
          src="@/assets/img/belakang.jpg" /></swiper-slide
      >
    </swiper>
    </div>
    </div>
    </main>
  </template>
  
  <script>
    // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from "swiper/vue";
  
  // Import Swiper styles
  import "swiper/css";
  
  import "swiper/css/effect-coverflow";
  import "swiper/css/pagination";
  
  // import required modules
  import { EffectCoverflow, Pagination } from "swiper";
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination],
      };
    },
  };
  </script>
  
  <style>
  
  </style>