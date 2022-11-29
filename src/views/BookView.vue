<template>
  <main>
    <!-- <Navbar/> -->
    <section class="magazine">
      <flipbook class="flipbook" :pages="pages" v-slot="flipbook">
          <div
            class="appMagazine-tools-display"
            :class="{ 'trans-tools-btn': toggleView }"
          >
            Page {{ flipbook.page }} of {{ flipbook.numPages }}
            <div
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
            </div>
          </div>
        </flipbook>
      
    </section>
  </main>
</template>

<script>
import Flipbook from 'flipbook-vue'
import 'vue-material-design-icons/styles.css'
import LeftIcon from 'vue-material-design-icons/ChevronLeftCircle.vue'
import RightIcon from 'vue-material-design-icons/ChevronRightCircle.vue'
import PlusIcon from 'vue-material-design-icons/PlusCircle.vue'
import MinusIcon from 'vue-material-design-icons/MinusCircle.vue'
import Navbar from "@/components/Navbar.vue";
import majalahOne from "../assets/img/book-cover.jpg";
import majalahTwo from "../assets/img/book-cover.jpg";
import majalahThree from "../assets/img/book-cover.jpg";
// import LeftIcon from 'vue-material-design-icons/ChevronLeftCircle'
// import RightIcon from 'vue-material-design-icons/ChevronRightCircle'
// import PlusIcon from 'vue-material-design-icons/PlusCircle'
// import MinusIcon from 'vue-material-design-icons/MinusCircle'
import { ref } from 'vue'
// const pages = ref([majalahOne, majalahTwo, majalahThree])
export default {
    components: { Flipbook, Navbar, LeftIcon, RightIcon, PlusIcon, MinusIcon},
  
}
</script>

<style>

</style>