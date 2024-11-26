<template>
  <div class="diceroll">
    <DiceArea />
    <main class="navigation">
      <img class="image-114-icon1" alt="" src="/image-114@2x.png" />
      <img
        class="back-button-icon3"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
        @click="goBack"
      />
      <img
        class="settings-button-icon3"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
        @click="toggleSettings"
      />
      <div class="title-container">
        <img class="title-scroll-icon" alt="" src="/title-scroll@2x.png" />
        <div class="oracle-title">Oracle</div>
      </div>
      <div class="coin-wrapper">
        <div class="coin">
          <img class="coin-icon" alt="" src="/coin@2x.png" />
          <div class="coin-description-wrapper">
            <a class="coin-description">{{ goldBalance }}</a>
          </div>
        </div>
      </div>
    </main>
    <div class="frame-parent1" @click="determineMarket">
      <img class="frame-child1" loading="lazy" alt="" src="/group-31@2x.png" />
      <div class="cast-bone-dice">Cast Bone Dice</div>
    </div>
    <SettingsPanel :isVisible="showSettings" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import DiceArea from "../components/DiceArea.vue";
import SettingsPanel from "../components/SettingsPanel.vue";
import { goldBalance } from "../store/gameState";

export default defineComponent({
  name: "DiceRoll",
  components: { DiceArea, SettingsPanel },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);

    const goBack = () => {
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    const determineMarket = () => {
      const markets = ['/bull', '/bear', '/choppy'];
      const randomIndex = Math.floor(Math.random() * markets.length);
      router.push(markets[randomIndex]);
    };

    return {
      goBack,
      toggleSettings,
      showSettings,
      determineMarket,
      goldBalance
    };
  }
});
</script>
<style scoped>
  .image-114-icon1 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: -25px;
    max-height: 100%;
    width: 561px;
    object-fit: cover;
  }
  .back-button-icon3 {
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
  .settings-button-icon3 {
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
  .coin-icon {
    height: 32px;
    width: 32px;
    position: relative;
    object-fit: cover;
  }
  .coin-description {
    text-decoration: none;
    align-self: stretch;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 56px;
  }
  .coin-description-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .coin {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray-300);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-7xs);
    gap: var(--gap-3xs);
    z-index: 1;
  }
  .coin-wrapper {
    position: absolute;
    top: 100px;
    right: 60px;
    width: 309px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-60xl);
    box-sizing: border-box;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
    z-index: 2;
  }
  .navigation {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .frame-child1 {
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
  }
  .cast-bone-dice {
    width: 216.8px;
    position: relative;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    z-index: 1;
  }
  .frame-parent1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 38px var(--padding-39xl) 34.5px;
    position: relative;
    z-index: 1;
    cursor: pointer;
  }
  .diceroll {
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-60xl) 376.5px 78px;
    box-sizing: border-box;
    gap: 366px;
    background-image: url("/public/diceroll@3x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .coin-description {
      font-size: var(--font-size-lgi);
    }
    
    .coin-wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .frame-parent1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .diceroll {
      gap: 183px;
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
