<template>
  <section class="navigation1">
    <div class="navigation-child" />
    <img
      class="back-button-icon8"
      loading="lazy"
      alt=""
      src="/back-button@2x.png"
    />
    <img
      class="settings-button-icon8"
      loading="lazy"
      alt=""
      src="/settings-button@2x.png"
    />
    <div class="prologue1" :style="prologueStyle">
      <img class="title-scroll-icon3" alt="" src="/title-scroll@2x.png" />
      <a class="prologue2">prologue</a>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "Navigation1",
    props: {
      prologueBackgroundImage: { type: String },
    },
    computed: {
      prologueStyle(): CSS.Properties {
        return {
          backgroundImage: this.prologueBackgroundImage,
        };
      },
    },
  });
</script>
<style scoped>
  .navigation-child {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 100%;
    height: 100%;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .back-button-icon8 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 3;
  }
  .settings-button-icon8 {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 3;
  }
  .title-scroll-icon3 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .prologue2 {
    text-decoration: none;
    position: absolute;
    top: 26px;
    left: 72px;
    text-transform: uppercase;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 178px;
    height: 30px;
    text-shadow: 0.5px 0 0 #492b00, 0 0.5px 0 #492b00, -0.5px 0 0 #492b00,
      0 -0.5px 0 #492b00;
    z-index: 4;
  }
  .prologue1 {
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
  .navigation1 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 323px;
    text-align: center;
    font-size: var(--font-size-21xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-greek);
  }
</style>
