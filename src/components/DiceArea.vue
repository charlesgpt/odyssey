<template>
  <div class="dice-area" :style="diceAreaStyle">
    <div class="empty">
      <div class="title-scroll-container" :style="frameDivStyle">
        <img class="title-scroll-icon2" alt="" src="/title-scroll@2x.png" />
        <a class="oracle1">Oracle</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import type * as CSS from "csstype";

  export default defineComponent({
    name: "DiceArea",
    props: {
      diceAreaJustifyContent: { type: String },
      frameDivBackgroundImage: { type: String },
    },
    computed: {
      diceAreaStyle(): CSS.Properties {
        return {
          justifyContent: this.diceAreaJustifyContent,
        };
      },
      frameDivStyle(): CSS.Properties {
        return {
          backgroundImage: this.frameDivBackgroundImage,
        };
      },
    },
  });
</script>
<style scoped>
  .title-scroll-icon2 {
    height: 80px;
    width: 320px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .oracle1 {
    text-decoration: none;
    flex: 1;
    position: relative;
    color: inherit;
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
    z-index: 2;
  }
  .title-scroll-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) var(--padding-96xl) var(--padding-5xl)
      var(--padding-97xl);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
  }
  .empty {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-3xl);
  }
  .dice-area {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xs) 0px var(--padding-xs);
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .title-scroll-container {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
