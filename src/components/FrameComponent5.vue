<template>
  <div class="frame-parent12">
    <div class="market-state-wrapper">
      <div class="market-state">
        <h1 class="timer-60-sec">Timer: {{ timer }} Sec</h1>
      </div>
    </div>
    <div class="ellipse-parent1">
      <div class="frame-child9" />
      <img class="frame-1-icon3" alt="" src="/frame-11@2x.png" />
      <img class="bull-icon1" loading="lazy" alt="" :src="marketImage" />
    </div>
    <div class="coin-balance-wrapper">
      <div class="coin-balance">
        <img class="coin-icon4" loading="lazy" alt="" src="/coin@2x.png" />
        <div class="empty-wrapper">
          <a class="empty1">{{ goldBalance }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch } from "vue";
import { goldBalance } from "../store/gameState";
import { selectedMarket, type MarketType } from "../store/marketState";

export default defineComponent({
  name: "FrameComponent5",
  props: {
    timer: {
      type: Number,
      required: true,
      default: 60
    }
  },
  setup() {
    // Watch market state changes for debugging
    watch(selectedMarket, (newMarket) => {
      console.log('Market state changed:', newMarket);
    }, { immediate: true });

    const marketImage = computed(() => {
      const market = selectedMarket.value;
      console.log('Computing market image for:', market);
      
      let image: string;
      switch (market) {
        case 'BULL_MARKET':
          image = '/bull2@2x.png';
          break;
        case 'BEAR_MARKET':
          image = '/bear2@2x.png';
          break;
        case 'CHOPPY_MARKET':
          image = '/choppy@3x.png';
          break;
        default:
          console.log('Unknown market state:', market);
          image = '/bull2@2x.png';
      }
      console.log('Selected image:', image);
      return image;
    });

    return {
      goldBalance,
      marketImage
    };
  }
});
</script>
<style scoped>
  .timer-60-sec {
    margin: 0;
    flex: 1;
    position: relative;
    font-size: inherit;
    font-weight: 400;
    font-family: inherit;
  }
  .market-state {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-saddlebrown-400);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs);
  }
  .market-state-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-3xs);
  }
  .frame-child9 {
    position: absolute;
    width: calc(100% - 7px);
    top: 4px;
    right: 3px;
    left: 4px;
    border-radius: 50%;
    background-color: var(--color-saddlebrown-300);
    height: 50px;
  }
  .frame-1-icon3 {
    position: absolute;
    top: calc(50% - 29px);
    left: calc(50% - 29px);
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .bull-icon1 {
    position: absolute;
    top: calc(50% - 23px);
    left: calc(50% - 24px);
    width: 48px;
    height: 48px;
    object-fit: cover;
    z-index: 2;
  }
  .ellipse-parent1 {
    height: 58px;
    width: 58px;
    position: relative;
  }
  .coin-icon4 {
    height: 32px;
    width: 32px;
    position: relative;
    object-fit: cover;
  }
  .empty1 {
    text-decoration: none;
    width: 50px;
    position: relative;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .empty-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .coin-balance {
    align-self: stretch;
    border-radius: var(--br-5xs);
    background-color: var(--color-saddlebrown-400);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-7xs);
    gap: var(--gap-smi);
  }
  .coin-balance-wrapper {
    width: 151px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-3xs);
    box-sizing: border-box;
  }
  .frame-parent12 {
    align-self: stretch;
    border-radius: var(--br-5xs);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-4xs) var(--padding-base) var(--padding-9xs);
    gap: var(--gap-19xl-5);
    z-index: 4;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }

  @media screen and (max-width: 450px) {
    .empty1 {
      font-size: var(--font-size-lgi);
    }

    .frame-parent12 {
      gap: var(--gap-lgi);
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
