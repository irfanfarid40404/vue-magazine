<template>
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
</template>

<script>
export default {

}
</script>

<style>

</style>