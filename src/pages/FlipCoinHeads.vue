<template>
  <div class="flipcoinheads">
    <div class="title-container">
      <img class="title-scroll-icon" alt="" src="/title-scroll@2x.png" />
      <div class="title-text">Coin Flip</div>
    </div>
    <img class="bg-icon" alt="" src="/bg@2x.png" />
    <img class="image-103-icon" alt="" src="/image-103@2x.png" />
    <img
      class="soti1111-scene-of-an-ancient-g-icon"
      alt=""
      src="/soti1111-scene-of-an-ancient-greek-coin-flipping-in-midair-glo-ad535c06450d4988be9bab2507b82aa8-1@2x.png"
    />
    <img class="flipcoinheads-child" alt="" src="/frame-13@2x.png" />
    <main class="soti1111-scene-of-an-ancient-g-parent">
      <img
        class="soti1111-scene-of-an-ancient-g-icon1"
        alt=""
        src="/soti1111-scene-of-an-ancient-greek-ornate-altar-with-greek-symb-443696c315ce43ca98fe120e80f26663-1@2x.png"
      />
      <section class="group-section">
        <div class="frame-child4" />
        <div class="frame-child5" />
      </section>
      <div class="coin-container">
        <img 
          class="coin-icon1" 
          loading="lazy" 
          :src="currentCoinImage" 
          :class="{ flipping: isFlipping }"
        />
        <div v-if="showOutcome" :class="['outcome', outcomeClass]">
          {{ outcomeText }}
        </div>
      </div>
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
    </main>
    <div class="frame-parent3">
      <div class="rectangle-parent1">
        <div class="frame-child6" />
        <FrameComponent4 />
        <FrameComponent5 :timer="timer" />
      </div>
      <FrameComponent6 />
    </div>
    <FrameComponent7 
      @coinFlipped="handleCoinFlip"
      @timerUpdate="updateTimer"
      @betPlaced="handleBetPlaced"
    />
    <SettingsPanel :isVisible="showSettings" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import FrameComponent4 from "../components/FrameComponent4.vue";
import FrameComponent5 from "../components/FrameComponent5.vue";
import FrameComponent6 from "../components/FrameComponent6.vue";
import FrameComponent7 from "../components/FrameComponent7.vue";
import SettingsPanel from "../components/SettingsPanel.vue";
import { addBet, clearBettingHistory } from '../store/gameState';

export default defineComponent({
  name: "FlipCoinHeads",
  components: {
    FrameComponent4,
    FrameComponent5,
    FrameComponent6,
    FrameComponent7,
    SettingsPanel
  },
  setup() {
    const router = useRouter();
    const showSettings = ref(false);
    const isFlipping = ref(false);
    const currentCoinImage = ref('/coin@2x.png');
    const showOutcome = ref(false);
    const outcomeAmount = ref(0);
    const timer = ref(60);

    const outcomeClass = computed(() => {
      return outcomeAmount.value > 0 ? 'win' : 'loss';
    });

    const outcomeText = computed(() => {
      return outcomeAmount.value > 0 
        ? `+${outcomeAmount.value}` 
        : outcomeAmount.value;
    });

    // Watch timer and navigate to stats when it reaches 0
    watch(timer, (newValue) => {
      if (newValue <= 0) {
        router.push('/optimalstrategist');
      }
    });

    const updateTimer = (value: number) => {
      timer.value = value;
    };

    const handleBetPlaced = (betPercentage: number) => {
      // Track bet in game state
      addBet(betPercentage);
    };

    const handleCoinFlip = async (result: { type: 'heads' | 'tails' | 'blackswan', amount: number }) => {
      isFlipping.value = true;
      currentCoinImage.value = '/coin@2x.png';
      showOutcome.value = false;

      // Wait for flip animation
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Show result
      switch (result.type) {
        case 'heads':
          currentCoinImage.value = '/coin@2x.png';
          break;
        case 'tails':
          currentCoinImage.value = '/tails.png';
          break;
        case 'blackswan':
          currentCoinImage.value = '/blackswan.png';
          break;
      }

      outcomeAmount.value = result.amount;
      showOutcome.value = true;
      isFlipping.value = false;

      // Hide outcome after delay
      setTimeout(() => {
        showOutcome.value = false;
      }, 2000);
    };

    const goBack = () => {
      // Clear betting history when leaving the game
      clearBettingHistory();
      router.back();
    };

    const toggleSettings = () => {
      showSettings.value = !showSettings.value;
    };

    return {
      timer,
      goBack,
      toggleSettings,
      showSettings,
      isFlipping,
      currentCoinImage,
      showOutcome,
      outcomeAmount,
      outcomeClass,
      outcomeText,
      handleCoinFlip,
      handleBetPlaced,
      updateTimer
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
  .title-text {
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
    z-index: 10;
  }
  .bg-icon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 1;
  }
  .image-103-icon {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 2;
  }
  .soti1111-scene-of-an-ancient-g-icon {
    width: 986px;
    height: 1176px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 3;
  }
  .flipcoinheads-child {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 5;
  }
  .soti1111-scene-of-an-ancient-g-icon1 {
    position: absolute;
    top: 127px;
    left: -93px;
    width: 687px;
    height: 818px;
    object-fit: cover;
  }
  .frame-child4 {
    position: absolute;
    top: 677px;
    left: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
  }
  .frame-child5 {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .group-section {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .coin-container {
    position: absolute;
    top: 540px;
    left: 160px;
    width: 179px;
    height: 179px;
    z-index: 3;
  }
  .coin-icon1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s;
  }
  .coin-icon1.flipping {
    transform: rotateY(1800deg);
  }
  .outcome {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-gemfont-one);
    font-size: var(--font-size-5xl);
    animation: fadeOut 2s forwards;
  }
  .outcome.win {
    color: #4CAF50;
  }
  .outcome.loss {
    color: #f44336;
  }
  @keyframes fadeOut {
    0% { opacity: 1; transform: translateX(-50%) translateY(0); }
    100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
  }
  .back-button-icon {
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
  .settings-button-icon {
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
  .soti1111-scene-of-an-ancient-g-parent {
    align-self: stretch;
    height: 1000px;
    position: relative;
  }
  .frame-child6 {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 391px;
    right: -500px;
    bottom: -391px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    transform: rotate(-180deg);
    transform-origin: 0 0;
    z-index: 1;
  }
  .rectangle-parent1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-3xs) 224px;
    position: relative;
  }
  .frame-parent3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0px 0px 1126px;
    box-sizing: border-box;
    max-width: 100%;
    margin-top: -1000px;
  }
  .flipcoinheads {
    width: 100%;
    position: relative;
    background-color: #000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 450px) {
    .rectangle-parent1 {
      padding-top: 1020px;
      padding-bottom: 146px;
      box-sizing: border-box;
    }
  }
</style>
