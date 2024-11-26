<template>
  <div class="convo5">
    <img class="throneroom-1-icon5" alt="" src="/throneroom-1@2x.png" />
    <div class="zeus">Zeus:</div>
    <div class="enough-this-will">
      Enough! This will not be settled by storms or favor. Let the mortals cast
      the knuckle bones. Fate will decide their journey—and your quarrel.
    </div>
    <div class="convo5-inner">
      <div class="button-parent1" @click="navigateToDiceRoll">
        <img class="button-icon10" loading="lazy" alt="" src="/button@2x.png" />
        <img class="button-icon11" alt="" src="/button-1@2x.png" />
        <div class="cast-bone-dice1">Cast Bone Dice</div>
      </div>
    </div>
    <main class="background">
      <img
        class="soti1111-greek-trireme-sailing-icon5"
        alt=""
        src="/soti1111-greek-trireme-sailing-away-from-burning-troy-ar-5191-52affaba18774b91820c6b542e6e16ca@2x.png"
      />
      <footer class="background-child" />
      <img class="panel-small-18" alt="" src="/panel-small-11@2x.png" />
      <img
        class="user-icon5"
        loading="lazy"
        alt=""
        src="/user-icon1@2x.png"
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
      <Navigation1 />
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
  name: "Convo",
  components: { Navigation1, SettingsPanel },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);

    const goBack = () => {
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    const navigateToDiceRoll = () => {
      router.push("/diceroll");
    };

    return {
      goBack,
      toggleSettings,
      showSettings,
      navigateToDiceRoll
    };
  }
});
</script>
<style scoped>
  .throneroom-1-icon5 {
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
  .zeus {
    align-self: stretch;
    position: relative;
    color: var(--color-goldenrod);
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .enough-this-will {
    position: relative;
    font-size: var(--font-size-3xl);
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 4;
  }
  .button-icon10 {
    width: 200px;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: calc(50% - 100px);
    max-height: 100%;
    object-fit: cover;
  }
  .button-icon11 {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 1;
  }
  .cast-bone-dice1 {
    align-self: stretch;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
  }
  .button-parent1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) var(--padding-20xl) var(--padding-12xl-3) 52px;
    position: relative;
    z-index: 4;
    cursor: pointer;
  }
  .convo5-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-44xl) 0px var(--padding-48xl);
    font-size: var(--font-size-5xl);
    font-family: var(--font-greek-freak);
  }
  .soti1111-greek-trireme-sailing-icon5 {
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
  .background-child {
    position: absolute;
    top: 677px;
    left: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 500px;
    height: 323px;
    z-index: 2;
  }
  .panel-small-18 {
    position: absolute;
    top: 260px;
    left: 0px;
    width: 500px;
    height: 479.6px;
    object-fit: cover;
    z-index: 3;
  }
  .user-icon5 {
    position: absolute;
    top: 207px;
    left: 150px;
    width: 200px;
    height: 200px;
    overflow: hidden;
    object-fit: contain;
    z-index: 4;
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
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .convo5 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 423px 56px 326.7px var(--padding-34xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-xl);
    color: var(--color-white);
    font-family: var(--font-xtra);
  }

  @media screen and (max-width: 450px) {
    .zeus {
      font-size: var(--font-size-base);
    }

    .enough-this-will {
      font-size: var(--font-size-lg);
    }

    .cast-bone-dice1 {
      font-size: var(--font-size-lgi);
    }

    .button-parent1 {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }

    .convo5-inner {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .convo5 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
