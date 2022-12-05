<template>
    <div class="img-magazine-scrol">
            <div v-for="item in pages" class="magazine-scroll-page">
                <img v-bind:src="item" alt="" />
            </div>
        </div>
</template>

<script>
import majalah1 from "/src/assets/img/depan.jpg";
import majalah2 from "/src/assets/img/2.jpg";
import majalah3 from "/src/assets/img/3.jpg";
import majalah4 from "/src/assets/img/4.jpg";
import majalah5 from "/src/assets/img/5.jpg";
import majalah6 from "/src/assets/img/6.jpg";
import majalah7 from "/src/assets/img/7.jpg";
import majalah8 from "/src/assets/img/8.jpg";
import majalah9 from "/src/assets/img/9.jpg";
import majalah10 from "/src/assets/img/10.jpg";
import majalah11 from "/src/assets/img/11.jpg";
import majalah12 from "/src/assets/img/12.jpg";
import majalah13 from "/src/assets/img/13.jpg";
import majalah14 from "/src/assets/img/14.jpg";
import majalah15 from "/src/assets/img/15.jpg";
import majalah16 from "/src/assets/img/video.webp";
import majalah17 from "/src/assets/img/video.webp";
import majalah18 from "/src/assets/img/belakang.jpg";

const pages = ref([
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
    majalah16,
    majalah17,
    majalah18,
]);
export default {};
</script>

<style>
</style>