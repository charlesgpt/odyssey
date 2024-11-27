<template>
  <div class="quest-inner1">
    <div class="tabs-parent">
      <div class="tabs">
        <div class="daily-tab">
          <img class="stone-slab2-1" alt="" src="/stone-slab2-1@2x.png" />
          <div class="daily">DAILY</div>
        </div>
        <div class="weekly-tab">
          <img class="stone-slab2-1" alt="" src="/stone-slab2-1@2x.png" />
          <div class="daily">WEEKLY</div>
        </div>
      </div>
      <div class="coin-balance-container">
        <div class="coin-balance3">
          <img class="coin-icon18" loading="lazy" alt="" src="/coin@2x.png" />
          <div class="wrapper6">
            <div class="div12">1,470</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
  });
</script>
<style scoped>
  .stone-slab2-1 {
    height: 92.5px;
    width: 160px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .daily {
    flex: 1;
    position: relative;
    z-index: 1;
  }
  .daily-tab {
    flex: 0.6832;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xl) var(--padding-26xl) var(--padding-11xl-5)
      var(--padding-27xl);
    box-sizing: border-box;
    background-image: url("/public/stone-slab2-1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    min-width: 104px;
    z-index: 4;
  }
  .weekly-tab {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xl) var(--padding-10xl) var(--padding-11xl-5)
      var(--padding-11xl);
    box-sizing: border-box;
    background-image: url("/public/stone-slab2-1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    min-width: 104px;
    z-index: 5;
    margin-left: -16px;
  }
  .tabs {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 20px;
  }
  .coin-icon18 {
    height: 32px;
    width: 32px;
    position: relative;
    object-fit: cover;
  }
  .div12 {
    align-self: stretch;
    position: relative;
  }
  .wrapper6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .coin-balance3 {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-7xs);
    gap: var(--gap-3xs);
    z-index: 4;
  }
  .coin-balance-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-57xl) 0px var(--padding-58xl);
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .tabs-parent {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-2xl-5);
  }
  .quest-inner1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-4xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-13xl);
    color: var(--color-saddlebrown-300);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .daily-tab {
      flex: 1;
    }

    .weekly-tab {
      flex: 1;
      margin-left: 0;
    }

    .tabs {
      flex-wrap: wrap;
    }

    .div12 {
      font-size: var(--font-size-lgi);
    }

    .coin-balance-container {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
