<template>
  <header class="frame-header">
    <div class="back-button-wrapper">
      <img
        class="back-button-icon9"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
      />
    </div>
    <div class="title-scroll-parent1">
      <img class="title-scroll-icon4" alt="" src="/title-scroll@2x.png" />
      <a class="coin-flip">Coin Flip</a>
    </div>
    <div class="back-button-wrapper">
      <img
        class="back-button-icon9"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
      />
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent4",
  });
</script>
<style scoped>
  .back-button-icon9 {
    width: 72px;
    height: 72px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 3;
  }
  .back-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .title-scroll-icon4 {
    height: 80px;
    width: 320px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .coin-flip {
    text-decoration: none;
    flex: 1;
    position: relative;
    color: inherit;
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
    z-index: 4;
  }
  .title-scroll-parent1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) var(--padding-85xl) var(--padding-5xl)
      var(--padding-87xl);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 3;
  }
  .frame-header {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .title-scroll-parent1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
