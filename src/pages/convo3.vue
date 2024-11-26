<template>
  <div class="convo4">
    <img class="throneroom-1-icon3" alt="" src="/throneroom-1@2x.png" />
    <div class="poseidon-group">
      <div class="poseidon1">Poseidon</div>
      <div class="triumph-they-looted1">
        Triumph? They looted my temples! They mocked a god! You call this
        wisdom? I call it arrogance.
      </div>
    </div>
    <footer class="frame-footer">
      <div class="rectangle-div" />
      <div class="group-div" @click="navigateToConvo">
        <img class="button-icon8" alt="" src="/button@2x.png" />
        <img class="button-icon9" alt="" src="/button@2x.png" />
        <div class="skip3">Skip</div>
      </div>
    </footer>
    <div class="convo4-inner">
      <div class="athena-container">
        <div class="athena2">Athena:</div>
        <div class="let-them-sail-container">
          <p class="let-them-sail">Let them sail, then.</p>
          <p class="let-them-sail">The sea will remind them who rules it.</p>
        </div>
      </div>
    </div>
    <main class="frame-main">
      <img
        class="soti1111-greek-trireme-sailing-icon3"
        alt=""
        src="/soti1111-greek-trireme-sailing-away-from-burning-troy-ar-5191-52affaba18774b91820c6b542e6e16ca@2x.png"
      />
      <img class="panel-small-14" alt="" src="/panel-small-1@2x.png" />
      <img class="user-icon3" loading="lazy" alt="" src="/user-icon-1@2x.png" />
      <img class="panel-small-15" alt="" src="/panel-small-1@2x.png" />
      <img
        class="user-icon4"
        loading="lazy"
        alt=""
        src="/user-icon-11@2x.png"
      />
      <section class="navigation-section">
        <div class="navigation-background" />
        <img
          class="back-button-icon"
          loading="lazy"
          alt=""
          src="/back-button@2x.png"
          @click="goBack"
        />
        <img
          class="settings-button-icon"
          loading="lazy"
          alt=""
          src="/settings-button@2x.png"
          @click="toggleSettings"
        />
      </section>
      <Navigation1 prologueBackgroundImage="unset" />
    </main>
    <SettingsPanel :isVisible="showSettings" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Navigation1 from "../components/Navigation1.vue";
import SettingsPanel from "../components/SettingsPanel.vue";

export default defineComponent({
  name: "Dialogue1",
  components: { Navigation1, SettingsPanel },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);

    const navigateToConvo = () => {
      router.push("/convo5");
    };

    const goBack = () => {
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    return {
      navigateToConvo,
      goBack,
      toggleSettings,
      showSettings
    };
  }
});
</script>
<style scoped>
  .throneroom-1-icon3 {
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
  .poseidon1 {
    align-self: stretch;
    position: relative;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 6;
  }
  .triumph-they-looted1 {
    position: relative;
    font-size: var(--font-size-3xl);
    color: var(--color-white);
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 6;
  }
  .poseidon-group {
    width: 390px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    max-width: 100%;
  }
  .rectangle-div {
    height: 323px;
    width: 500px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: none;
    max-width: 100%;
  }
  .button-icon8 {
    height: 86.3px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
    z-index: 0;
  }
  .button-icon9 {
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
  .skip3 {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
  }
  .group-div {
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
    z-index: 4;
    cursor: pointer;
  }
  .frame-footer {
    width: 100%;
    margin: 0 !important;
    position: absolute;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-212xl) var(--padding-131xl) var(--padding-7xs-7);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 2;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
  }
  .athena2 {
    align-self: stretch;
    position: relative;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .let-them-sail {
    margin: 0;
  }
  .let-them-sail-container {
    align-self: stretch;
    position: relative;
    font-size: var(--font-size-3xl);
    color: var(--color-white);
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .athena-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
    max-width: 100%;
  }
  .convo4-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-7xs) 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .soti1111-greek-trireme-sailing-icon3 {
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
  .panel-small-14 {
    position: absolute;
    top: 458px;
    left: 0px;
    width: 500px;
    height: 458.6px;
    object-fit: cover;
    z-index: 3;
  }
  .user-icon3 {
    position: absolute;
    top: 514px;
    left: 150px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
    z-index: 4;
  }
  .panel-small-15 {
    position: absolute;
    top: 63px;
    left: -2px;
    width: 500px;
    height: 458.6px;
    object-fit: cover;
    z-index: 5;
  }
  .user-icon4 {
    position: absolute;
    top: 119px;
    left: 148px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
    z-index: 6;
  }
  .navigation-background {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 100%;
    height: 100%;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .back-button-icon {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 5;
    cursor: pointer;
  }
  .settings-button-icon {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 5;
    cursor: pointer;
  }
  .navigation-section {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 500px;
    height: 323px;
  }
  .frame-main {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .convo4 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 326px var(--padding-32xl) 181px;
    box-sizing: border-box;
    gap: 267px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-goldenrod);
    font-family: var(--font-xtra);
  }

  @media screen and (max-width: 450px) {
    .poseidon1 {
      font-size: var(--font-size-base);
    }

    .triumph-they-looted1 {
      font-size: var(--font-size-lg);
    }

    .skip3 {
      font-size: var(--font-size-lgi);
    }

    .athena2 {
      font-size: var(--font-size-base);
    }

    .let-them-sail-container {
      font-size: var(--font-size-lg);
    }
  }
  @media screen and (max-width: 250px) {
    .frame-footer {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .convo4 {
      gap: 133px;
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
