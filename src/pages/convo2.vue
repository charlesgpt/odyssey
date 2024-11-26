<template>
  <div class="convo3">
    <img
      class="throneroom-1-icon"
      alt=""
      src="/throneroom-1@2x.png"
    /><FrameComponent
      frameDivJustifyContent="flex-end"
      frameDivBackgroundImage="unset"
      riskProfile="prologue"
    />
    <footer class="rectangle-parent">
      <div class="frame-child" />
      <div class="button-parent" @click="navigateToConvo3">
        <img class="button-icon" alt="" src="/button@2x.png" />
        <img class="button-icon1" alt="" src="/button@2x.png" />
        <div class="skip">Skip</div>
      </div>
    </footer>
    <div class="athena-parent">
      <div class="athena">Athena:</div>
      <div class="their-victory-was-mine-poseid-wrapper">
        <div class="their-victory-was">
          Their victory was mine, Poseidon. My wisdom built the horse. My
          guidance led them to triumph.
        </div>
      </div>
    </div>
    <main class="soti1111-greek-trireme-sailing-parent">
      <img
        class="soti1111-greek-trireme-sailing-icon"
        alt=""
        src="/soti1111-greek-trireme-sailing-away-from-burning-troy-ar-5191-52affaba18774b91820c6b542e6e16ca@2x.png"
      />
      <img class="panel-small-1" alt="" src="/panel-small-1@2x.png" />
      <img class="user-icon" loading="lazy" alt="" src="/user-icon@2x.png" />
      <img class="panel-small-11" alt="" src="/panel-small-1@2x.png" />
      <img class="user-icon1" loading="lazy" alt="" src="/user-icon-1@2x.png" />
      <section class="settings-background-parent">
        <div class="settings-background" />
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
    </main>
    <div class="poseidon-parent">
      <div class="poseidon">Poseidon</div>
      <div class="triumph-they-looted">
        Triumph? They looted my temples! They mocked a god! You call this
        wisdom? I call it arrogance.
      </div>
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
  name: "Dialouge1",
  components: { FrameComponent, SettingsPanel },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);

    const navigateToConvo3 = () => {
      router.push("/convo3");
    };

    const goBack = () => {
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    return {
      navigateToConvo3,
      goBack,
      toggleSettings,
      showSettings
    };
  }
});
</script>
<style scoped>
  .throneroom-1-icon {
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
  .frame-child {
    height: 323px;
    width: 500px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: none;
    max-width: 100%;
  }
  .button-icon {
    height: 86.3px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
    z-index: 0;
  }
  .button-icon1 {
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
  .skip {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
  }
  .button-parent {
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
  .rectangle-parent {
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
  .athena {
    align-self: stretch;
    position: relative;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 5;
  }
  .their-victory-was {
    flex: 1;
    position: relative;
    display: inline-block;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    max-width: 100%;
    z-index: 5;
  }
  .their-victory-was-mine-poseid-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 15px;
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-3xl);
    color: var(--color-white);
  }
  .athena-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-38xl);
    box-sizing: border-box;
    gap: var(--gap-3xs);
    max-width: 100%;
  }
  .soti1111-greek-trireme-sailing-icon {
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
  .panel-small-1 {
    position: absolute;
    top: 462px;
    left: 0px;
    width: 500px;
    height: 458.6px;
    object-fit: cover;
    z-index: 3;
  }
  .user-icon {
    position: absolute;
    top: 518px;
    left: 150px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
    z-index: 4;
  }
  .panel-small-11 {
    position: absolute;
    top: 55px;
    left: 0px;
    width: 500px;
    height: 458.6px;
    object-fit: cover;
    z-index: 4;
  }
  .user-icon1 {
    position: absolute;
    top: 111px;
    left: 150px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
    z-index: 5;
  }
  .settings-background {
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
  .settings-background-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 500px;
    height: 323px;
  }
  .soti1111-greek-trireme-sailing-parent {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .poseidon {
    align-self: stretch;
    position: relative;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .triumph-they-looted {
    position: relative;
    font-size: var(--font-size-3xl);
    color: var(--color-white);
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .poseidon-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xs);
  }
  .convo3 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-38xl) 147px var(--padding-34xl);
    box-sizing: border-box;
    gap: 222px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-goldenrod);
    font-family: var(--font-xtra);
  }

  @media screen and (max-width: 450px) {
    .athena {
      font-size: var(--font-size-base);
    }

    .their-victory-was {
      font-size: var(--font-size-lg);
    }

    .poseidon {
      font-size: var(--font-size-base);
    }

    .triumph-they-looted {
      font-size: var(--font-size-lg);
    }

    .convo3 {
      gap: 111px;
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
