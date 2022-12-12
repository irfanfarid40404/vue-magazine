<script>
// import TheWelcome from '../components/TheWelcome.vue'
import Navbar from "@/components/Navbar.vue";
import LoadingScreen from "@/components/LoadingScreen.vue";

export default {
  components: { Navbar, LoadingScreen },
  name: "Inventory",
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    document.addEventListener("DOMContentLoaded", function (e) {
      let field = document.querySelector(".field");
      let input = document.querySelector("input");
      let copyBtn = document.querySelector(".field button");

      copyBtn.onclick = () => {
        input.select();
        if (document.execCommand("copy")) {
          field.classList.add("active");
          copyBtn.innerText = "Copied";
          setTimeout(() => {
            field.classList.remove("active");
            copyBtn.innerText = "Copy";
          }, 3500);
        }
      };
    });
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <!-- <LoadingScreen/> -->
    <navbar />
    <section class="magazine pt-5">
      <div class="container justify-content-center pt-3">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5 p-5">
            <img src="../assets/img/depan.jpg" alt="" class="w-100" />
          </div>
          <div class="col-12 content col-md-6 col-lg-7 p-2 p-md-3 p-lg-5 mb-5">
            <div
              class="
                content-heading
                align-items-center
                pt-5
                mt-0 mt-lg-5 mt-lg-0
                pt-lg-5 pt-md-0
              "
            >
              <h1 class="heading">Kembali Menata Untuk Bangkit</h1>
              <p class="paragraf">24 November 2022</p>
              <div class="icon-click d-flex">
                <div class="icon me-4">
                  <a
                    type="button"
                    class="bg-transparent"
                    data-bs-toggle="modal"
                    data-bs-target="#myModel1"
                    id="shareBtn"
                    data-bs-placement="top"
                    title="Click Me!"
                  >
                    <i class="fa-solid fa-share-from-square"></i>
                  </a>
                </div>
                <div class="icon me-4">
                  <a
                  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                  >
                    <i class="fa-solid fa-download"></i>
                  </a>
                </div>
                <div class="icon me-4">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </div>
              <p class="paragraf mt-3">
                Ayo Bangkit Bersama, Seruan Bangkit Bersama Dari Pandemi Covid 19
              </p>
            </div>
            <div class="content-button d-flex mt-5">
              <a href="" class="rounded-3">
                <router-link to="/book">Baca Sekarang</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- modal copy -->
      <div
        class="modal fade"
        id="myModel1"
        tabindex="-1"
        aria-labelledby="myModelLabel1"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="myModelLabel">Share Modal</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="text">Share this link via</p>
              <div class="d-flex align-items-center icons">
                <a
                  href="#"
                  class="fs-5 d-flex align-items-center justify-content-center"
                >
                  <span class="fab fa-facebook-f"></span>
                </a>
                <a
                  href="#"
                  class="fs-5 d-flex align-items-center justify-content-center"
                >
                  <span class="fab fa-twitter"></span>
                </a>
                <a
                  href="#"
                  class="fs-5 d-flex align-items-center justify-content-center"
                >
                  <span class="fab fa-instagram"></span>
                </a>
                <a
                  href="#"
                  class="fs-5 d-flex align-items-center justify-content-center"
                >
                  <span class="fab fa-whatsapp"></span>
                </a>
                <a
                  href="#"
                  class="fs-5 d-flex align-items-center justify-content-center"
                >
                  <span class="fab fa-telegram-plane"></span>
                </a>
              </div>
              <p class="text">Or copy link</p>
              <div
                class="
                  field
                  d-flex
                  align-items-center
                  justify-content-between
                  bg-white
                "
              >
                <span class="fas fa-link text-center"></span>
                <input type="text" value="some.com/share" />
                <button>Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- modal download -->
      <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <i class="fa-solid fa-download"></i>
              </div>
              <h4 class="modal-title w-100">Download!</h4>
            </div>
            <div class="modal-body">
              <p class="text-center">
                Terimakasih telah mendownload file click download untuk memulai
              </p>
            </div>
            <div class="modal-footer">
              <a href="https://drive.google.com/file/d/1_kONVD0oAtSnelYbz4IBNeSpuexDxaxC/view?usp=sharing">
                <button class="btn btn-success btn-block" data-dismiss="modal">
                Download
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> -->


    </section>
    <!-- <section class="bg-blur"></section> -->
  </main>
</template>
