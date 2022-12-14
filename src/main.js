import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import Swiper, { Navigation, Pagination } from 'swiper';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// import '../src/assets/js/turnjs'
import 'slick-carousel/slick/slick.js'
import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'
import 'aos/dist/aos.css'
import $ from 'jquery'
import VueSplide from '@splidejs/vue-splide';
import Carousel3d from 'vue-carousel-3d';
// import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';



// Default theme
// import '@splidejs/vue-splide/css';

// or other themes
// import '@splidejs/vue-splide/css/skyblue';
// import '@splidejs/vue-splide/css/sea-green';

// // or only core styles
// import '@splidejs/vue-splide/css/core';

// import './assets/main.css'
import './assets/css/main.css'

const app = createApp(App)

app.use(router)

app.use(router, $, VueSplide, Carousel3d)

app.mount('#app')