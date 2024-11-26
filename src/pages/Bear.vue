<template>
  <div class="bear">
    <div class="title-container">
      <img class="title-scroll-icon" alt="" src="/title-scroll@2x.png" />
      <div class="oracle-title">Oracle</div>
    </div>
    <main class="image-114-parent">
      <img class="image-114-icon" alt="" src="/image-114@2x.png" />
      <img
        class="back-button-icon2"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
        @click="goBack"
      />
      <img
        class="settings-button-icon2"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
        @click="toggleSettings"
      />
      <img class="panel-small-16" alt="" src="/panel-small-11@2x.png" />
      <div class="ellipse-parent">
        <div class="ellipse-div" />
        <img class="frame-1-icon" alt="" src="/frame-1@2x.png" />
        <img class="bear-icon" loading="lazy" alt="" src="/bear@2x.png" />
      </div>
      <div class="frame-container">
        <div class="bear-market-wrapper">
          <div class="bear-market">BEAR MARKET</div>
        </div>
        <div class="prices-are-volatile-the-marke-parent">
          <h3 class="prices-are-volatile-container">
            <p class="prices-are-volatile">Prices are volatile!</p>
            <p class="prices-are-volatile">The Market is Bearish and</p>
            <p class="prices-are-volatile">moving Down</p>
          </h3>
          <FrameComponent1 />
        </div>
      </div>
    </main>
    <SettingsPanel :isVisible="showSettings" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import FrameComponent1 from "../components/FrameComponent1.vue";
import SettingsPanel from "../components/SettingsPanel.vue";

export default defineComponent({
  name: "Bear",
  components: { FrameComponent1, SettingsPanel },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);

    const goBack = () => {
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    return {
      goBack,
      toggleSettings,
      showSettings
    };
  }
});
</script>
<style scoped>
  .title-scroll-icon {
    position: absolute;
    width: 320px;
    height: 80px;
    top: 0;
    left: 0;
    object-fit: cover;
  }
  .oracle-title {
    position: absolute;
    top: 26px;
    left: 72px;
    width: 178px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: var(--color-saddlebrown-200);
    text-shadow: 0.5px 0 0 #492b00, 0 0.5px 0 #492b00, -0.5px 0 0 #492b00,
      0 -0.5px 0 #492b00;
    font-family: var(--font-greek);
    font-size: var(--font-size-21xl);
    z-index: 2;
  }
  .title-container {
    position: absolute;
    top: 16px;
    left: 90px;
    width: 320px;
    height: 80px;
    z-index: 2;
  }
  .image-114-icon {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -25px;
    max-height: 100%;
    width: 561px;
    object-fit: cover;
  }
  .back-button-icon2 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 1;
    cursor: pointer;
  }
  .settings-button-icon2 {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 1;
    cursor: pointer;
  }
  .panel-small-16 {
    position: absolute;
    top: 260px;
    left: 0px;
    width: 500px;
    height: 479.6px;
    object-fit: cover;
    z-index: 1;
  }
  .ellipse-div {
    position: absolute;
    width: calc(100% - 19.8px);
    top: 11.3px;
    right: 8.5px;
    left: 11.3px;
    border-radius: 50%;
    background-color: var(--color-gray-100);
    height: 141.8px;
  }
  .frame-1-icon {
    position: absolute;
    top: calc(50% - 82.25px);
    left: calc(50% - 82.25px);
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .bear-icon {
    position: absolute;
    width: calc(100% - 28.3px);
    top: calc(50% - 65.25px);
    right: 14.1px;
    left: 14.2px;
    max-width: 100%;
    overflow: hidden;
    height: 136.2px;
    object-fit: cover;
    z-index: 2;
  }
  .ellipse-parent {
    position: absolute;
    top: 225px;
    left: 168px;
    width: 164.5px;
    height: 164.5px;
    z-index: 2;
  }
  .bear-market {
    position: relative;
    text-transform: uppercase;
    text-shadow: 0.5px 0 0 #492b00, 0 0.5px 0 #492b00, -0.5px 0 0 #492b00,
      0 -0.5px 0 #492b00;
    z-index: 2;
  }
  .bear-market-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 110px 0px 111px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .prices-are-volatile {
    margin: 0;
  }
  .prices-are-volatile-container {
    margin: 0;
    align-self: stretch;
    position: relative;
    font-size: inherit;
    text-transform: uppercase;
    font-weight: 400;
    font-family: inherit;
    text-shadow: 0.5px 0 0 #000, 0 0.5px 0 #000, -0.5px 0 0 #000,
      0 -0.5px 0 #000;
    z-index: 2;
  }
  .prices-are-volatile-the-marke-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    text-align: center;
    font-size: var(--font-size-16xl);
    color: var(--color-saddlebrown-100);
    font-family: var(--font-xtra);
  }
  .frame-container {
    position: absolute;
    top: 400px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-sm);
    z-index: 3;
  }
  .image-114-parent {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .bear {
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url("/bear1@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-31xl) var(--padding-290xl-7)
      var(--padding-32xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .bear-market-wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .bear {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
