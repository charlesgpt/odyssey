<template>
  <div class="choppy">
    <div class="title-container">
      <img class="title-scroll-icon" alt="" src="/title-scroll@2x.png" />
      <div class="oracle-title">Oracle</div>
    </div>
    <main class="image-114-group">
      <img class="image-114-icon2" alt="" src="/image-114@2x.png" />
      <img
        class="back-button-icon4"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
        @click="goBack"
      />
      <img
        class="settings-button-icon4"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
        @click="toggleSettings"
      />
      <img class="panel-small-17" alt="" src="/panel-small-11@2x.png" />
      <div class="ellipse-group">
        <div class="frame-child2" />
        <img class="frame-1-icon1" alt="" src="/frame-1@2x.png" />
        <img class="bear-icon1" loading="lazy" alt="" src="/bear2@2x.png" />
      </div>
      <div class="frame-div">
        <div class="choppy-market-wrapper">
          <div class="choppy-market">Choppy Market</div>
        </div>
        <div class="prices-are-volatile-the-marke-group">
          <h3 class="prices-are-volatile-container1">
            <p class="moving-sideways">Prices are volatile!</p>
            <p class="moving-sideways">The Market is uncertain and</p>
            <p class="moving-sideways">moving sideways</p>
          </h3>
          <FrameComponent1 continueTextDecoration="unset" />
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
  name: "Choppy",
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
  .choppy-market {
    position: relative;
    text-transform: uppercase;
    text-shadow: 0.5px 0 0 #492b00, 0 0.5px 0 #492b00, -0.5px 0 0 #492b00,
      0 -0.5px 0 #492b00;
    z-index: 2;
  }
  .choppy-market-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-71xl) 0px var(--padding-84xl);
  }
  .moving-sideways {
    margin: 0;
  }
  .prices-are-volatile-container1 {
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
  .prices-are-volatile-the-marke-group {
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
  .frame-div {
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
  .image-114-icon2 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -25px;
    max-height: 100%;
    width: 561px;
    object-fit: cover;
  }
  .back-button-icon4 {
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
  .settings-button-icon4 {
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
  .panel-small-17 {
    position: absolute;
    top: 260px;
    left: 0px;
    width: 500px;
    height: 479.6px;
    object-fit: cover;
    z-index: 1;
  }
  .frame-child2 {
    position: absolute;
    width: calc(100% - 19.8px);
    top: 21.3px;
    right: 8.5px;
    left: 11.3px;
    border-radius: 50%;
    background-color: var(--color-gray-100);
    height: 141.8px;
  }
  .frame-1-icon1 {
    position: absolute;
    top: calc(50% - 77.25px);
    left: calc(50% - 82.25px);
    width: 164.5px;
    height: 164.5px;
    object-fit: cover;
    z-index: 1;
  }
  .bear-icon1 {
    position: absolute;
    width: calc(100% - 6.5px);
    top: 0px;
    right: 3.5px;
    left: 3px;
    max-width: 100%;
    overflow: hidden;
    height: 161px;
    object-fit: cover;
    z-index: 2;
  }
  .ellipse-group {
    position: absolute;
    top: 215px;
    left: 168px;
    width: 164.5px;
    height: 174.5px;
    z-index: 2;
  }
  .image-114-group {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .choppy {
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url("/choppy@3x.png");
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
    .choppy-market-wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .choppy {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
