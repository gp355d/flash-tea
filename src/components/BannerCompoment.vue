<template>
    <div class="position-relative" style="margin-top: -64px;" data-aos="fade-up"
     data-aos-duration="600" data-aos-easing="ease-in-sine">
      <div class="position-absolute" style="
      top:0;
      bottom:0;
      left:0;
      right:0;
      background-image: url(https://images.unsplash.com/photo-1522747776116-64ee03be1dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80);
      background-position: center center;
      opacity: 0.8;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -1;
      "></div>
      <div class="container" style="min-height: 100vh; z-index: 3;">
        <div class="row g-0 d-flex justify-content-center my-auto">
          <div class="col-md-4 text-center pt-10">
            <img src="../assets/images/slogo2.svg" alt="logo" width="124" class="mb-8">
            <h2 class="fs-4 mb-3 lh-29 fw-bold noto-serif-font">從田間到您家，新鮮無損</h2>
            <p class="fs-6 mb-0 fw-normal mb-6">細品茶香，品味生活的美好</p>
            <div class="d-grid">
              <router-link class="btn btn-primary" to="/products">購物去</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
