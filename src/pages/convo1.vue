<template>
  <div class="convo2">
    <img
      class="throneroom-1-icon1"
      alt=""
      src="/throneroom-1@2x.png"
    /><FrameComponent
      frameDivJustifyContent="flex-start"
      frameDivBackgroundImage="unset"
      riskProfile="prologue"
    />
    <div class="convo2-inner">
      <div class="athena-group">
        <div class="athena1">Athena:</div>
        <div class="their-victory-was-mine-poseid-container">
          <div class="their-victory-was1">
            Their victory was mine, Poseidon. My wisdom built the horse. My
            guidance led them to triumph.
          </div>
        </div>
      </div>
    </div>
    <main class="soti1111-greek-trireme-sailing-group">
      <img
        class="soti1111-greek-trireme-sailing-icon1"
        alt=""
        src="/soti1111-greek-trireme-sailing-away-from-burning-troy-ar-5191-52affaba18774b91820c6b542e6e16ca@2x.png"
      />
      <img class="panel-small-12" alt="" src="/panel-small-1@2x.png" />
      <img class="user-icon2" loading="lazy" alt="" src="/user-icon-1@2x.png" />
      <section class="button-background-parent">
        <div class="button-background" />
        <img
          class="back-button-icon1"
          loading="lazy"
          alt=""
          src="/back-button@2x.png"
          @click="goBack"
        />
        <img
          class="settings-button-icon1"
          loading="lazy"
          alt=""
          src="/settings-button@2x.png"
          @click="toggleSettings"
        />
      </section>
    </main>
    <div class="rectangle-group">
      <div class="frame-item" />
      <footer class="button-group" @click="navigateToConvo2">
        <img class="button-icon2" alt="" src="/button@2x.png" />
        <img class="button-icon3" loading="lazy" alt="" src="/button@2x.png" />
        <div class="skip1">Skip</div>
      </footer>
    </div>
    <SettingsPanel :isVisible="showSettings" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import FrameComponent from "../components/FrameComponent.vue";
import SettingsPanel from "../components/SettingsPanel.vue";

export default defineComponent({
  name: "Dialouge",
  components: { FrameComponent, SettingsPanel },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);

    const navigateToConvo2 = () => {
      router.push("/convo2");
    };

    const goBack = () => {
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    return {
      navigateToConvo2,
      goBack,
      toggleSettings,
      showSettings
    };
  }
});
</script>
<style scoped>
  .throneroom-1-icon1 {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .athena1 {
    align-self: stretch;
    position: relative;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .their-victory-was1 {
    flex: 1;
    position: relative;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .their-victory-was-mine-poseid-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-18xl);
    font-size: var(--font-size-3xl);
    color: var(--color-white);
  }
  .athena-group {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-sm);
    max-width: 100%;
  }
  .convo2-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-38xl) 0px var(--padding-34xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .soti1111-greek-trireme-sailing-icon1 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 100%;
    width: 560px;
    object-fit: cover;
    z-index: 1;
  }
  .panel-small-12 {
    position: absolute;
    top: 55px;
    left: 0px;
    width: 500px;
    height: 458.6px;
    object-fit: cover;
    z-index: 3;
  }
  .user-icon2 {
    position: absolute;
    top: 111px;
    left: 150px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
    z-index: 4;
  }
  .button-background {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 100%;
    height: 100%;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .back-button-icon1 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 4;
    cursor: pointer;
  }
  .settings-button-icon1 {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 4;
    cursor: pointer;
  }
  .button-background-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 500px;
    height: 323px;
  }
  .soti1111-greek-trireme-sailing-group {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .frame-item {
    height: 323px;
    width: 500px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: none;
    max-width: 100%;
  }
  .button-icon2 {
    height: 86.3px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
    z-index: 0;
  }
  .button-icon3 {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .skip1 {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
  }
  .button-group {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) var(--padding-35xl) var(--padding-12xl-3);
    position: relative;
    background-image: url("/public/button@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 3;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
    cursor: pointer;
  }
  .rectangle-group {
    align-self: stretch;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-212xl) var(--padding-131xl) var(--padding-7xs-7);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 2;
  }
  .convo2 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 0px;
    box-sizing: border-box;
    gap: 224.5px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-goldenrod);
    font-family: var(--font-xtra);
  }

  @media screen and (max-width: 450px) {
    .athena1 {
      font-size: var(--font-size-base);
    }

    .their-victory-was1 {
      font-size: var(--font-size-lg);
    }

    .convo2-inner {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .skip1 {
      font-size: var(--font-size-lgi);
    }

    .rectangle-group {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .convo2 {
      gap: 112px;
    }
  }
</style>
