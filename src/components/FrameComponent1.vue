<template>
  <div class="frame-wrapper3">
    <div class="button-parent2" @click="navigateToFlipCoin">
      <img class="button-icon14" alt="" src="/button@2x.png" />
      <div class="continue2" :style="continueStyle">Continue</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from "vue";
import type * as CSS from "csstype";
import { useRouter } from "vue-router";
import { setMarketState } from "../store/marketState";

export default defineComponent({
  name: "FrameComponent1",
  props: {
    continueTextDecoration: { type: String },
  },
  setup() {
    const router = useRouter();

    const navigateToFlipCoin = () => {
      // Get the current route name to determine which market we're coming from
      const currentRoute = router.currentRoute.value.name;
      
      // Set market state based on the current route
      switch (currentRoute) {
        case 'Bull':
          setMarketState('BULL_MARKET');
          break;
        case 'Bear':
          setMarketState('BEAR_MARKET');
          break;
        case 'Choppy':
          setMarketState('CHOPPY_MARKET');
          break;
      }

      // Navigate to flip coin page
      router.push("/flipcoinheads");
    };

    return {
      navigateToFlipCoin
    };
  },
  computed: {
    continueStyle(): CSS.Properties {
      return {
        textDecoration: this.continueTextDecoration,
      };
    },
  },
});
</script>
<style scoped>
  .button-icon14 {
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
  .continue2 {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 3;
  }
  .button-parent2 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) var(--padding-34xl) var(--padding-12xl-3)
      var(--padding-35xl);
    position: relative;
    z-index: 2;
    cursor: pointer;
  }
  .frame-wrapper3 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-81xl) 0px var(--padding-80xl);
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .continue2 {
      font-size: var(--font-size-lgi);
    }

    .frame-wrapper3 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
