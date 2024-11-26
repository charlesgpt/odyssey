<template>
  <div class="optimalstrategist">
    <img class="bg-icon1" alt="" src="/bg@2x.png" />
    <img class="image-103-icon1" alt="" src="/image-103@2x.png" />
    <img
      class="soti1111-scene-of-an-ancient-g-icon2"
      alt=""
      src="/soti1111-scene-of-an-ancient-greek-coin-flipping-in-midair-glo-ad535c06450d4988be9bab2507b82aa8-1@2x.png"
    />
    <img class="optimalstrategist-child" alt="" src="/frame-13@2x.png" />
    <div class="optimalstrategist-item" />
    <main class="soti1111-scene-of-an-ancient-g-group">
      <img
        class="soti1111-scene-of-an-ancient-g-icon3"
        alt=""
        src="/soti1111-scene-of-an-ancient-greek-ornate-altar-with-greek-symb-443696c315ce43ca98fe120e80f26663-11@2x.png"
      />
      <section class="rectangle-parent2">
        <footer class="rectangle-footer" />
        <div class="frame-child7" />
      </section>
      <img
        class="back-button-icon6"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
        @click="goBack"
      />
      <img
        class="settings-button-icon6"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
      />
    </main>
    <FrameComponent riskProfile="Risk Profile" />
    <div class="panel3-1-parent">
      <img class="panel3-1-icon" alt="" src="/panel3-1@2x.png" />
      <div class="optimal-strategist-wrapper">
        <div class="optimal-strategist">{{ playerCategory }}</div>
      </div>
      <div class="your-decisions-align">
        {{ categoryDescription }}
      </div>
      <div class="frame-wrapper">
        <div class="frame-parent4">
          <div class="frame-parent5">
            <div class="frame-parent6">
              <div class="frame-parent7">
                <div class="average-bet-wrapper">
                  <div class="optimal-strategist">Average Bet</div>
                </div>
                <div class="frame-parent8">
                  <div class="average-bet-divider-wrapper">
                    <div class="average-bet-divider">{{ stats.averageBet.toFixed(2) }}</div>
                  </div>
                  <div class="optimal-bet-icon-wrapper">
                    <img
                      class="optimal-bet-icon"
                      loading="lazy"
                      alt=""
                      src="/vector-3.svg"
                    />
                  </div>
                  <div class="optimal-bet-parent">
                    <div class="optimal-bet">Optimal Bet</div>
                    <div class="optimal-bet-divider-wrapper">
                      <div class="optimal-bet-divider">{{ stats.optimalBet.toFixed(2) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="frame-parent9">
                <div class="vector-wrapper">
                  <img
                    class="vector-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <img
                  class="frame-child8"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <div class="average-bet-parent">
              <div class="optimal-bet">Average Bet %</div>
              <div class="frame-wrapper1">
                <div class="frame-parent10">
                  <div class="wealth-value-wrapper">
                    <div class="optimal-bet-divider">{{ stats.averageBetPercentage.toFixed(1) }}%</div>
                  </div>
                  <div class="frame-parent11">
                    <div class="wealth-coin-wrapper">
                      <img
                        class="optimal-bet-icon"
                        loading="lazy"
                        alt=""
                        src="/vector-4.svg"
                      />
                    </div>
                    <div class="final-wealth-parent">
                      <div class="optimal-bet">Final Wealth</div>
                      <div class="frame-wrapper2">
                        <div class="final-wealth-coin-value-parent">
                          <div class="optimal-bet-divider">{{ goldBalance }}</div>
                          <div class="coin-container">
                            <img
                              class="coin-icon2"
                              loading="lazy"
                              alt=""
                              src="/coin1@2x.png"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="button-wrapper">
            <div class="button1" @click="handleContinue">
              <img class="button-icon12" alt="" src="/button@2x.png" />
              <div class="next-button-text">Continue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import FrameComponent from "../components/FrameComponent.vue";
import { categorizePlayer, getCategoryDescription, KELLY_FRACTIONS } from './stats';
import { goldBalance, bettingHistory } from '../store/gameState';
import { selectedMarket } from '../store/marketState';

export default defineComponent({
  name: "Stats",
  components: { FrameComponent },
  setup() {
    const router = useRouter();
    
    const playerCategory = ref('');
    const categoryDescription = ref('');
    const stats = ref({
      averageBet: 0,
      averageBetPercentage: 0,
      optimalBet: 0,
      optimalBetPercentage: 0,
      totalBets: 0,
      optimalBets: 0,
      riskTakerBets: 0,
      conservativeBets: 0
    });

    onMounted(() => {
      // Calculate player category and stats using actual betting history and current market
      const result = categorizePlayer(bettingHistory.value, selectedMarket.value.toUpperCase());
      
      // Update component data
      playerCategory.value = result.category;
      categoryDescription.value = getCategoryDescription(result.category);
      stats.value = result.stats;
    });

    const goBack = () => {
      router.back();
    };

    const handleContinue = () => {
      // Navigate to next screen based on game flow
      router.push('/next-screen');
    };

    return {
      playerCategory,
      categoryDescription,
      stats,
      goldBalance,
      goBack,
      handleContinue
    };
  }
});
</script>

<style scoped>
  .bg-icon1 {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 0;
  }
  .image-103-icon1 {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 1;
  }
  .soti1111-scene-of-an-ancient-g-icon2 {
    width: 986px;
    height: 1176px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 2;
  }
  .optimalstrategist-child {
    align-self: stretch;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
    display: none;
    z-index: 3;
  }
  .optimalstrategist-item {
    align-self: stretch;
    height: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    z-index: 4;
  }
  .soti1111-scene-of-an-ancient-g-icon3 {
    position: absolute;
    top: -36px;
    left: -193px;
    width: 887px;
    height: 1055px;
    object-fit: cover;
  }
  .rectangle-footer {
    position: absolute;
    top: 677px;
    left: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
  }
  .frame-child7 {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .rectangle-parent2 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
  }
  .back-button-icon6 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
    cursor: pointer;
  }
  .settings-button-icon6 {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
  }
  .soti1111-scene-of-an-ancient-g-group {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .panel3-1-icon {
    width: 500px;
    height: 788.6px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
  }
  .optimal-strategist {
    flex: 1;
    position: relative;
    z-index: 1;
  }
  .optimal-strategist-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 62px 0px 64px;
    color: var(--color-saddlebrown-200);
  }
  .your-decisions-align {
    height: 350px;
    position: relative;
    font-size: var(--font-size-lg);
    font-family: var(--font-xtra);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    z-index: 1;
    padding: 0 20px;
    text-align: center;
  }
  .average-bet-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-7xs);
  }
  .average-bet-divider {
    flex: 1;
    position: relative;
    z-index: 2;
  }
  .average-bet-divider-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 21px;
  }
  .optimal-bet-icon {
    height: 1px;
    width: 65.5px;
    position: relative;
    z-index: 1;
  }
  .optimal-bet-icon-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mid) 0px var(--padding-2xs);
  }
  .optimal-bet {
    align-self: stretch;
    position: relative;
    z-index: 1;
  }
  .optimal-bet-divider {
    flex: 1;
    position: relative;
    z-index: 1;
  }
  .optimal-bet-divider-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-mid) 0px var(--padding-xl);
    font-size: var(--font-size-5xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-augusta);
  }
  .optimal-bet-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-10xs);
    font-size: var(--font-size-base);
    color: var(--color-saddlebrown-100);
    font-family: var(--font-greek-freak);
  }
  .frame-parent8 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10.5px;
    margin-top: -2px;
    font-size: var(--font-size-5xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-augusta);
  }
  .frame-parent7 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
  }
  .vector-icon {
    width: 1px;
    height: 39px;
    position: relative;
    z-index: 1;
  }
  .vector-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-48xl) 0px 0px;
  }
  .frame-child8 {
    height: 39px;
    width: 1px;
    position: relative;
    z-index: 1;
    margin-left: -1px;
  }
  .frame-parent9 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-parent6 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl);
  }
  .wealth-value-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-13xl) 0px var(--padding-14xl);
  }
  .wealth-coin-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-xs) 0px var(--padding-2xs);
  }
  .coin-icon2 {
    width: 18px;
    height: 18px;
    position: relative;
    object-fit: cover;
    z-index: 1;
  }
  .coin-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-8xs);
  }
  .final-wealth-coin-value-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 4px;
  }
  .frame-wrapper2 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-9xs);
    font-size: var(--font-size-5xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-augusta);
  }
  .final-wealth-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-10xs);
  }
  .frame-parent11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-2xs);
    font-size: var(--font-size-base);
    color: var(--color-saddlebrown-100);
    font-family: var(--font-greek-freak);
  }
  .frame-parent10 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 7px;
  }
  .frame-wrapper1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    font-size: var(--font-size-5xl);
    color: var(--color-saddlebrown-200);
    font-family: var(--font-augusta);
  }
  .average-bet-parent {
    width: 97px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1px;
  }
  .frame-parent5 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;
  }
  .button-icon12 {
    height: 86.3px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .next-button-text {
    position: relative;
    display: inline-block;
    min-width: 93px;
    z-index: 1;
  }
  .button1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-14xl) var(--padding-34xl) 30.3px var(--padding-35xl);
    background-image: url("/button@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    cursor: pointer;
  }
  .button-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xs) 0px 19px;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
  }
  .frame-parent4 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 6px;
  }
  .frame-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 76px 0px 68px;
    font-size: var(--font-size-base);
  }
  .panel3-1-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 83px var(--padding-44xl) 75.3px;
    box-sizing: border-box;
    gap: var(--gap-4xl);
    background-image: url("/panel3-1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    max-width: 100%;
    z-index: 2;
  }
  .optimalstrategist {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 94.4px;
    box-sizing: border-box;
    gap: 21px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-13xl);
    color: var(--color-saddlebrown-100);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .optimal-strategist-wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .average-bet-divider {
      font-size: var(--font-size-lgi);
    }

    .optimal-bet-divider {
      font-size: var(--font-size-lgi);
    }

    .next-button-text {
      font-size: var(--font-size-lgi);
    }

    .frame-wrapper {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .panel3-1-parent {
      padding: var(--padding-16xl) var(--padding-xl) var(--padding-13xl);
      box-sizing: border-box;
    }
  }
</style>
