<script setup>
// import Icons from "../../components/Icons.vue";
import Navbar from "@/components/Navbar.vue";

import SwiperPage from "@/components/Swiper.vue";

// import MagazineScroll from "@/components/ScrollMagazine.vue";
import { ref } from "vue";
import { defineComponent } from "vue";

// import { value } from "dom7";
import Flipbook from "flipbook-vue";
import majalah1 from "/src/assets/img/depan.jpg";
import majalah2 from "/src/assets/img/1.jpg";
import majalah3 from "/src/assets/img/2.jpg";
import majalah4 from "/src/assets/img/3.jpg";
import majalah5 from "/src/assets/img/4.jpg";
import majalah6 from "/src/assets/img/5.jpg";
import majalah7 from "/src/assets/img/6.webp";
import majalah8 from "/src/assets/img/7.jpg";
import majalah9 from "/src/assets/img/8.jpg";
import majalah10 from "/src/assets/img/9.jpg";
import majalah11 from "/src/assets/img/10.jpg";
import majalah12 from "/src/assets/img/11.jpg";
import majalah13 from "/src/assets/img/12.jpg";
import majalah14 from "/src/assets/img/13.jpg";
import majalah15 from "/src/assets/img/14.jpg";
// import majalah16 from "/src/assets/img/video.webp";
// import majalah17 from "/src/assets/img/video.webp";
import majalah18 from "/src/assets/img/belakang.jpg";
// import $ from "jquery";
// import jQuery from "jquery";
// import "../../assets/js/turn.min.js";
let toggleView = ref(false);
let toggleMode = ref(false);
let toggleSlider = ref(false);
let toggleScroll = ref(false);
let toggleSwiper = ref(false);
let toggleMusic = ref(false);
let toggleSwitch = ref(false);
let toggleAudio = ref(false);
let toggleSetting = ref(false)

let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

// $("#flipbook").turn({
//   width: 400,
//   height: 300,
//   autoCenter: true,
// });
let volume = document.querySelector("#volume");
let play = document.querySelector("#play");
const pagesFlipbook = ref([
  null,
  majalah1,
  majalah2,
  majalah3,
  majalah4,
  majalah5,
  majalah6,
  majalah7,
  majalah8,
  majalah9,
  majalah10,
  majalah11,
  majalah12,
  majalah13,
  majalah14,
  majalah15,
  // majalah16,
  // majalah17,
  majalah18,
]);

const pagesScroll = ref([
  majalah1,
  majalah2,
  majalah3,
  majalah4,
  majalah5,
  majalah6,
  majalah7,
  majalah8,
  majalah9,
  majalah10,
  majalah11,
  majalah12,
  majalah13,
  majalah14,
  majalah15,
  // majalah16,
  // majalah17,
  majalah18,
]);

function volumeSlider(e) {
  audio.volume = e.currentTarget.value / 100;
}
function playAudio(e) {
  return audio.paused ? audio.play() : audio.pause();
}

// volume.addEventListener("input", (e) => {
//   audio.volume = e.currentTarget.value / 100;
// });
// let valueVolume = volume.ariaValueNow;


// export default {
//   components: {
//     Swiper,
//     SwiperSlide,
//     Navbar,
//   },
//   setup() {
//     return {
//       modules: [EffectCoverflow, Pagination],
//     };
//   },
// };

</script>
<template>
  <main>
    <Navbar />
    <div class="magazine" :class="[toggleMode ? 'bg-img-true' : 'bg-img-false']">
      <flipbook
        v-if="toggleMode == false"
        class="flipbook"
        :pages="pagesFlipbook"
        v-slot="flipbook"
      >
        <div class="container-magazine">
          <div
            class="appMagazine-tools-display"
            :class="{ 'trans-tools-btn': toggleView }"
          >
            <!-- <div
              class="appMagazine-tools-display-item"
              :class="{ disabled: !flipbook.canZoomIn }"
              @click="flipbook.zoomIn"
            >
              <Icons name="zoomIn" />
            </div>
            <div class="appMagazine-tools-display-item">
              <Icons name="backward" />
            </div>
            <div
              class="appMagazine-tools-display-item"
              :class="{ disabled: !flipbook.canFlipLeft }"
              @click="flipbook.flipLeft"
            >
              <Icons name="chevron-left" />
            </div>
            <div class="appMagazine-tools-display-item">
              <Icons name="play" />
            </div>
            <div
              class="appMagazine-tools-display-item"
              :class="{ disabled: !flipbook.canFlipRight }"
              @click="flipbook.flipRight"
            >
              <Icons name="chevron-right" />
            </div>
            <div class="appMagazine-tools-display-item">
              <Icons name="forward" />
            </div>
            <div
              class="appMagazine-tools-display-item"
              :class="{ disabled: !flipbook.canZoomOut }"
              @click="flipbook.zoomOut"
            >
              <Icons name="zoomOut" />
            </div> -->

            <div class="play-tools">
              <div class="icons d-flex">
                <div class="icons-flex">
                  <i
                    class="fa-solid fa-magnifying-glass-plus"
                    :class="{ disabled: !flipbook.canZoomIn }"
                    @click="flipbook.zoomIn"
                  ></i>
                </div>
                <div class="icons-flex">
                  <i
                    class="fa-solid fa-backward"
                    :class="{ disabled: !flipbook.canFlipLeft }"
                    @click="flipbook.flipLeft"
                  ></i>
                </div>
                <div class="icons-flex">
                  <i class="fa-solid fa-play"></i>
                </div>
                <div class="icons-flex">
                  <i
                    class="fa-solid fa-forward"
                    :class="{ disabled: !flipbook.canFlipRight }"
                    @click="flipbook.flipRight"
                  ></i>
                </div>
                <div class="icons-flex">
                  <i
                    class="fa-solid fa-magnifying-glass-minus"
                    :class="{ disabled: !flipbook.canZoomOut }"
                    @click="flipbook.zoomOut"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </flipbook>

      <!-- tools setting -->
      <div class="tools">
              <div class="icons d-flex">
                <div class="icons-flex" @click="(toggleSetting = !toggleSetting)">
                  <i class="fa-solid fa-gear">
                    <a v-if="toggleSetting == false"></a>
                  </i>
                </div>
              </div>
            </div>

      <div v-if="toggleMode" class="magazine-scroll" :class="[toggleSwiper ? 'scroll-true' : 'scroll-false']">
        <div class="img-magazine-scrol">
            <div v-for="item in pagesScroll" class="magazine-scroll-page">
                <img v-bind:src="item" alt="" />
            </div>
        </div>
      </div>

      <div v-if="toggleSwiper == true" class="magazine-swiper pt-4">
        <SwiperPage/>
      </div>

      <div class="setting-show" v-if="toggleSetting">
        <div class="content">
          <div class="heading">
            <h3>General</h3>
          </div>
          <div class="audio">
            <h5>Sound</h5>
            <div class="audio-setting d-flex">
              <p>Backsound</p>
              <div class="toggle ms-auto">
                <input
                  type="checkbox"
                  @click="(toggleSwitch = !toggleSwitch), playAudio()"
                  class="toggle-switch"
                />
                <label for=""></label>
              </div>
            </div>
          </div>
          <div class="slider d-flex my-2">
            <h6>Mode</h6>
            <button @click="toggleMode = !toggleMode" class="bg-transparent">
              <p class="m-0" v-if="toggleMode == false">Flipbook</p>
              <p class="m-0" v-else>Slide</p>
            </button>
          </div>
          <div class="swiper-show d-flex">
            <p>Swiper</p>
              <div class="toggle ms-auto">
                <input
                  type="checkbox"
                  @click="toggleSwiper = !toggleSwiper"
                  class="toggle-switch"
                />
                <label for=""></label>
              </div>
          </div>
        </div>
      </div>
    </div>

    <!-- tools btn -->
    <!-- <div class="appMagazine-tools-btn">
      <div class="appMagazine-tools-btn-search"><Icons name="search" /></div>
      <div
        class="appMagazine-tools-btn-setting"
        @click="(toggleMusic = !toggleMusic), (toggleView = false)"
      >
        <Icons name="construct" />
      </div>
      <div
        class="appMagazine-tools-btn-view"
        @click="(toggleView = !toggleView), (toggleMusic = false)"
      >
        <Icons name="list" />
      </div>
    </div> -->

    <!-- tolss view -->
    <!-- <div
      :class="[toggleView ? 'trans-0' : 'trans-x-100']"
      class="appMagazine-tools-view"
    >
      <div class="appMagazine-tools-view-box">
        <div class="appMagazine-tools-view-box-head">
          <Icons name="search" />
          <input type="text" placeholder="Search" />
        </div>
        <div class="appMagazine-tools-view-box-content">
          <div class="appMagazine-tools-view-box-content-item">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <p>magazine 1</p>
          </div>
          <div class="appMagazine-tools-view-box-content-item">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <p>magazine 1</p>
          </div>
          <div class="appMagazine-tools-view-box-content-item">
            <img src="../../assets/magazine/magazine1.jpg" alt="" />
            <p>magazine 1</p>
          </div>
        </div>
        <div
          @click="toggleView = !toggleView"
          class="appMagazine-tools-view-box-close"
        >
          <Icons name="chevron-right" />
        </div>
      </div>
    </div> -->

    <!-- tools general -->

    <!-- Slider main container -->
  </main>
</template>

<style scoped>
.flipbook {
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
img {
  width: 100%;
  height: 100%;
}

.modal-backdrop {
  top: 0;
  left: 0;
}
.modal-backdrop .show {
  opacity: 0;
}
</style>
