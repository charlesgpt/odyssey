<template>
  <section class="header">
    <div class="header-child" />
    <img
      class="back-button-icon7"
      loading="lazy"
      alt=""
      src="/back-button@2x.png"
    />
    <img
      class="settings-button-icon7"
      loading="lazy"
      alt=""
      src="/settings-button@2x.png"
    />
    <div class="title-scroll-group">
      <img class="title-scroll-icon1" alt="" src="/title-scroll@2x.png" />
      <a class="prologue">prologue</a>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Header",
  });
</script>
<style scoped>
  .header-child {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 100%;
    height: 100%;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .back-button-icon7 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 3;
  }
  .settings-button-icon7 {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 3;
  }
  .title-scroll-icon1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
  }
  .prologue {
    text-decoration: none;
    position: absolute;
    top: 27px;
    left: 100px;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 122px;
    height: 29px;
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
    min-width: 122px;
    z-index: 4;
  }
  .title-scroll-group {
    position: absolute;
    top: 16px;
    left: 90px;
    width: 320px;
    height: 80px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 3;
  }
  .header {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 323px;
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-greek-freak);
  }
</style>
