<template>
  <div class="optimalstrategist-inner" :style="frameDiv1Style">
    <div class="title-scroll-parent2" :style="frameDiv2Style">
      <img class="title-scroll-icon5" alt="" src="/title-scroll@2x.png" />
      <a class="risk-profile">{{riskProfile}}</a>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "FrameComponent",
    props: {
      riskProfile: { type: String },
      frameDivJustifyContent: { type: String },
      frameDivBackgroundImage: { type: String },
    },
    computed: {
      frameDiv1Style(): CSS.Properties {
        return {
          justifyContent: this.frameDivJustifyContent,
        };
      },
      frameDiv2Style(): CSS.Properties {
        return {
          backgroundImage: this.frameDivBackgroundImage,
        };
      },
    },
  });
</script>
<style scoped>
  .title-scroll-icon5 {
    height: 80px;
    width: 320px;
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .risk-profile {
    text-decoration: none;
    flex: 1;
    position: relative;
    color: inherit;
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
    z-index: 3;
  }
  .title-scroll-parent2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) var(--padding-65xl) var(--padding-5xl)
      var(--padding-67xl);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 2;
    position: relative;
  }
  .optimalstrategist-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-71xl);
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .title-scroll-parent2 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .optimalstrategist-inner {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
