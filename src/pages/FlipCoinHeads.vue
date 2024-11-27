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
import { defineComponent, ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";
import FrameComponent4 from "../components/FrameComponent4.vue";
import FrameComponent5 from "../components/FrameComponent5.vue";
import FrameComponent6 from "../components/FrameComponent6.vue";
import FrameComponent7 from "../components/FrameComponent7.vue";
import SettingsPanel from "../components/SettingsPanel.vue";
import { addBet, clearBettingHistory } from '../store/gameState';
import './FlipCoinHeads.css';

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

    onMounted(() => {
      // Clear betting history at start of new game
      clearBettingHistory();
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
      // Only clear betting history when leaving the game
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
