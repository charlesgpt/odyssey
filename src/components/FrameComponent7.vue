<template>
  <div class="rectangle-parent3">
    <div class="frame-child13" />
    <footer class="coin-options">
      <div class="coin-amount">
        <div class="bet-input-container">
          <input 
            type="number" 
            v-model.number="betAmount" 
            class="bet-input-field"
            :max="goldBalance"
            :min="0"
            placeholder="Enter bet"
          />
        </div>
      </div>
      <div class="coin-options-inner">
        <div class="bet-input-parent">
          <div class="bet-input" @click="setBetPercentage(0.1)">
            <img class="stone-slab2-1" alt="" src="/stone-slab2-1@2x.png" />
            <div class="div1">10%</div>
          </div>
          <div class="frame-parent17">
            <div class="bet-button-labels-wrapper">
              <div class="bet-button-labels">
                <div class="div2" @click="setBetPercentage(0.25)">
                  <img
                    class="stone-slab2-1"
                    alt=""
                    src="/stone-slab2-1@2x.png"
                  />
                  <div class="div3">25%</div>
                </div>
                <div class="div2" @click="setBetPercentage(0.5)">
                  <img
                    class="stone-slab2-1"
                    alt=""
                    src="/stone-slab2-1@2x.png"
                  />
                  <div class="div3">50%</div>
                </div>
                <div class="max" @click="setBetPercentage(1)">
                  <img
                    class="stone-slab-icon"
                    alt=""
                    src="/stone-slab@2x.png"
                  />
                  <img
                    class="stone-slab2-1"
                    loading="lazy"
                    alt=""
                    src="/stone-slab2-1@2x.png"
                  />
                  <h1 class="max1">Max</h1>
                </div>
              </div>
            </div>
            <div 
              class="cast-buton" 
              @click="flipCoin"
              :class="{ disabled: !canFlip || isFlipping }"
            >
              <img class="button-icon14" alt="" src="/button1@2x.png" />
              <h1 class="flip-coin">Flip Coin</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="frame-child14" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted, watch } from "vue";
import { goldBalance, updateGoldBalance } from "../store/gameState";
import { selectedMarket } from "../store/marketState";

export default defineComponent({
  name: "FrameComponent7",
  emits: ['coinFlipped', 'timerUpdate', 'betPlaced'],
  setup(_, { emit }) {
    const timer = ref(60);
    const betAmount = ref<number>(0);
    const isFlipping = ref(false);
    let intervalId: NodeJS.Timer;

    const marketProbabilities = {
      bull: { win: 0.70, blackSwan: 0.01 },
      bear: { win: 0.53, blackSwan: 0.05 },
      choppy: { win: 0.60, blackSwan: 0.10 }
    };

    const canFlip = computed(() => {
      return timer.value > 0 && 
             betAmount.value > 0 && 
             betAmount.value <= goldBalance.value;
    });

    const setBetPercentage = (percentage: number) => {
      betAmount.value = Math.floor(goldBalance.value * percentage);
    };

    // Watch betAmount to ensure it stays within valid range
    watch(betAmount, (newValue) => {
      if (newValue < 0) betAmount.value = 0;
      if (newValue > goldBalance.value) betAmount.value = goldBalance.value;
    });

    const flipCoin = async () => {
      if (!canFlip.value || isFlipping.value) return;
      if (betAmount.value <= 0 || betAmount.value > goldBalance.value) return;

      isFlipping.value = true;

      // Emit bet amount as percentage of current wealth
      const betPercentage = betAmount.value / goldBalance.value;
      emit('betPlaced', betPercentage);

      // Get probabilities for current market
      const probs = marketProbabilities[selectedMarket.value];
      
      // Check for black swan event first
      const isBlackSwan = Math.random() < probs.blackSwan;
      if (isBlackSwan) {
        // Black swan event
        const lossAmount = Math.floor(goldBalance.value * 0.5);
        updateGoldBalance(goldBalance.value - lossAmount);
        emit('coinFlipped', { type: 'blackswan', amount: -lossAmount });
      } else {
        // Normal flip
        const isWin = Math.random() < probs.win;
        if (isWin) {
          // Win - double the bet
          updateGoldBalance(goldBalance.value + betAmount.value);
          emit('coinFlipped', { type: 'heads', amount: betAmount.value });
        } else {
          // Loss
          updateGoldBalance(goldBalance.value - betAmount.value);
          emit('coinFlipped', { type: 'tails', amount: -betAmount.value });
        }
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      isFlipping.value = false;
    };

    const startTimer = () => {
      timer.value = 60;
      intervalId = setInterval(() => {
        if (timer.value > 0) {
          timer.value--;
          emit('timerUpdate', timer.value);
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    };

    // Watch timer changes
    watch(timer, (newValue) => {
      emit('timerUpdate', newValue);
    });

    onMounted(() => {
      startTimer();
    });

    onUnmounted(() => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    });

    return {
      timer,
      betAmount,
      isFlipping,
      canFlip,
      goldBalance,
      setBetPercentage,
      flipCoin
    };
  }
});
</script>

<style scoped>
  .frame-child13 {
    height: 391px;
    width: 500px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: none;
    max-width: 100%;
  }
  .bet-input-container {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .bet-input-field {
    background: transparent;
    border: none;
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
    font-size: var(--font-size-13xl);
    text-align: center;
    width: 120px;
    z-index: 10;
    outline: none;
    padding: 5px;
  }
  .bet-input-field::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  .coin-amount {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-saddlebrown-500);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: var(--padding-4xs) var(--padding-5xl);
  }
  .stone-slab2-1 {
    height: 69.4px;
    width: 100px;
    position: absolute;
    margin: 0 !important;
    top: -12px;
    right: -18px;
    z-index: 1;
    object-fit: cover;
  }
  .div1 {
    position: relative;
    display: inline-block;
    text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.95),
      1px 1px 2px rgba(255, 255, 255, 0.5);
    min-width: 50px;
    z-index: 10;
  }
  .bet-input {
    width: 85px;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) var(--padding-xs) var(--padding-11xs)
      var(--padding-sm);
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
  }
  .div3 {
    position: relative;
    text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.95),
      1px 1px 2px rgba(255, 255, 255, 0.5);
    z-index: 10;
  }
  .div2 {
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xs) var(--padding-4xs) var(--padding-11xs)
      var(--padding-3xs);
    position: relative;
    cursor: pointer;
  }
  .stone-slab-icon {
    height: 63px;
    width: 100px;
    position: relative;
    object-fit: cover;
    display: none;
    z-index: 1;
  }
  .max1 {
    margin: 0;
    height: 19px;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: -1px -1px 2px rgba(0, 0, 0, 0.95),
      1px 1px 2px rgba(255, 255, 255, 0.5);
    z-index: 10;
  }
  .max {
    flex: 1;
    border-radius: var(--br-5xs);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) 0px var(--padding-sm) var(--padding-12xs);
    box-sizing: border-box;
    position: relative;
    min-width: 55px;
    text-align: center;
    cursor: pointer;
  }
  .bet-button-labels {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-4xs);
  }
  .bet-button-labels-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-3xs);
  }
  .button-icon14 {
    height: 103.5px;
    width: 240px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .flip-coin {
    margin: 0;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
    z-index: 10;
  }
  .cast-buton {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-16xl) var(--padding-39xl) var(--padding-15xl)
      var(--padding-46xl);
    background-image: url("/button1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    font-size: var(--font-size-13xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
    cursor: pointer;
  }
  .cast-buton.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .frame-parent17 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    min-width: 211px;
    max-width: 100%;
  }
  .bet-input-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
    gap: var(--gap-4xs);
    max-width: 100%;
    row-gap: 20px;
  }
  .coin-options-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding-3xs);
    box-sizing: border-box;
    max-width: 100%;
    font-size: var(--font-size-17xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-augusta);
  }
  .coin-options {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray-300);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-lg) var(--padding-5xl) 0px;
    box-sizing: border-box;
    gap: var(--gap-6xl);
    max-width: 100%;
    z-index: 6;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .frame-child14 {
    height: 70px;
    width: 500px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    max-width: 100%;
  }
  .rectangle-parent3 {
    align-self: stretch;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: var(--padding-122xl) var(--padding-3xs) 0px;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 6;
    margin-top: -1000px;
    position: relative;
  }

  @media screen and (max-width: 450px) {
    .coin-amount {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .bet-button-labels {
      gap: var(--gap-3xs);
      justify-content: space-between;
    }
  }

  /* Remove spinner buttons from number input */
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
