<script setup>
import Navbar from "../components/Navbar.vue";
import $ from "jquery";
import { defineComponent } from "vue";
// export default  {
//     mounted() {
//         new Splide('.splide', {
//                 arrowPath: 'none',
//             }).mount();

//         // splide.mount();
//     },
// };
</script>

<template>
  <main>
    <section class="bg-blur"></section>
    <Navbar />
    <section class="magazine py-5 position-relative">
      <div class="container justify-content-center mt-3">
        <div class="splide" aria-label="Splide Basic HTML Example">
          <div class="splide__track">
            <div class="splide__list ps-0">
              <div class="splide__slide">
                <div class="row pt-5">
                  <h2 class="text-white mb-4">Bookmark</h2>
                  <div class="col-12 col-md-3 mb-5 mb-md-0">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="card p-3">
                        <img
                          src="../assets/img/depan.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Bangkit Dari Covid 19</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-md-3 mb-5 mb-md-0">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="card p-3">
                        <img
                          src="../assets/img/Cover.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Bangkit Dari Covid 19</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-md-3 mb-5 mb-md-0">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="card p-3">
                        <img
                          src="../assets/img/Cover.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Bangkit Dari Covid 19</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="row py-5">
                  <h2 class="text-white mb-4">All Magazine</h2>
                  <div class="col-12 col-md-3 mb-5 mb-md-0">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="card p-3">
                        <img
                          src="../assets/img/Cover.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Bangkit Dari Covid 19</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-md-3 mb-5 mb-md-0">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="card p-3">
                        <img
                          src="../assets/img/Cover.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Bangkit Dari Covid 19</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="col-12 col-md-3 mb-5 mb-md-0">
                    <a
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <div class="card p-3">
                        <img
                          src="../assets/img/Cover.jpg"
                          alt=""
                          class="w-100"
                        />
                        <div class="card-body">
                          <h5 class="card-title">Bangkit Dari Covid 19</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <li class="splide__slide">Slide 02</li>
                                        <li class="splide__slide">Slide 03</li> -->
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="team-name">
          <h3>Design By Newfit Team</h3>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <!-- <h1 class="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1> -->
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="modal-body">
                  <img src="../assets/img/Cover.jpg" alt="" class="w-100" />
                </div>
              </div>
              <div class="col-12 col-md-6 px-0">
                <div class="modal-body">
                  <h3 class="heading">Bangkit Dari Covid 19</h3>
                  <p class="paragraf">23, November 2022</p>
                  <div class="icon-click d-flex">
                    <div class="icon me-4">
                      <i
                        class="fa-solid fa-share-from-square"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#myModel1"
                        id="shareBtn"
                        data-bs-placement="top"
                        title="Click Me!"
                      ></i>
                    </div>
                    <div class="icon me-4">
                      <i
                        class="fa-solid fa-download"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      ></i>
                    </div>
                    <div class="icon me-4">
                      <i class="fa-solid fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Keluar
              </button>
              <button type="button" class="btn btn-primary">
                <a class="text-white" href="/book">Baca Sekarang</a>
              </button>
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
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
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
              <a
                href="https://drive.google.com/file/d/1_kONVD0oAtSnelYbz4IBNeSpuexDxaxC/view?usp=sharing"
              >
                <button class="btn btn-success btn-block" data-dismiss="modal">
                  Download
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<style>
</style>