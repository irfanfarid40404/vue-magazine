<template>
    <div class="logo w-100 p-4 fixed-top d-flex align-items-center" id="logo">
        <img src="../assets/img/logo_mexafit.png" alt="" class="logo-image me-3">
        <h3 class="logo-heading">MEXAFIT</h3>
    </div>
    <input type="checkbox" name="" id="nav-toggler" class="fas fa-bars" />

    <nav class="navbar">
        <router-link to="/" data-text="Home">Home</router-link>
        <router-link to="/bookmark" data-text="All Magazine"
        >All Magazine</router-link
        >
        <router-link to="/team" data-text="Team">Team</router-link>
        <!-- <a href="#" data-text="blogs">blogs</a> -->
        <div class="background-image">
        <img
            src="../assets/img/navbar.svg"
            alt=""
            class="w-50 d-none d-md-block"
        />
        </div>
    </nav>
</template>

<script>
export default {
  mounted() {
    let header = document.getElementById("logo");

    window.onscroll = function () {
      if (document.documentElement.scrollTop > 10) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  },
};

</script>

<style>
</style>