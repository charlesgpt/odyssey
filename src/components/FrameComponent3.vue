<template>
  <div class="quests-container-wrapper">
    <div class="quests-container">
      <img class="title-scroll-icon2" alt="" src="/title-scroll@2x.png" />
      <a class="quests">Quests</a>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent3",
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
  .quests {
    text-decoration: none;
    flex: 1;
    position: relative;
    color: inherit;
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
    z-index: 3;
  }
  .quests-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-8xl) var(--padding-98xl) var(--padding-5xl)
      var(--padding-99xl);
    background-image: url("/public/title-scroll@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 2;
  }
  .quests-container-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-22xl) 0px var(--padding-15xl);
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-300);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .quests-container {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
