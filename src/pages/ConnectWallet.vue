<template>
  <div class="connectwallet">
    <img class="bg-icon3" alt="" src="/bg@2x.png" />
    <img class="image-103-icon3" alt="" src="/image-103@2x.png" />
    <img
      class="soti1111-scene-of-an-ancient-g-icon7"
      alt=""
      src="/soti1111-scene-of-an-ancient-greek-coin-flipping-in-midair-glo-ad535c06450d4988be9bab2507b82aa8-1@2x.png"
    />
    <img class="connectwallet-child" alt="" src="/frame-13@2x.png" />
    <div class="connectwallet-item" />
    <main class="frame-main">
      <img
        class="soti1111-scene-of-an-ancient-g-icon8"
        alt=""
        src="/soti1111-scene-of-an-ancient-greek-ornate-altar-with-greek-symb-443696c315ce43ca98fe120e80f26663-1@2x.png"
      />
      <section class="rectangle-parent1">
        <footer class="frame-child9" />
        <div class="frame-child10" />
      </section>
      <img class="panel3-1-icon3" alt="" src="/panel3-1@2x.png" />
      <img
        class="back-button-icon4"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
      />
      <img
        class="settings-button-icon4"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
      />
    </main>
    <FrameComponent3 /><FrameComponent4 />
    <div class="wallet-instructions-parent">
      <WalletInstructions /><FrameComponent1
        frameDivAlignSelf="stretch"
        frameDivBackgroundImage="url('/button1@2x.png')"
        titleScroll="/button1@2x.png"
        riskProfile="Link"
        frameDivJustifyContent="flex-end"
        frameDivPadding="33px 53px 30.3px 54px"
        titleScrollIconHeight="86.3px"
        titleScrollIconWidth="200px"
        riskProfileTextDecoration="unset"
        riskProfileFontSize="24px"
        riskProfileColor="#fff"
        riskProfileTextShadow="unset"
      />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import FrameComponent3 from "../components/FrameComponent3.vue";
  import FrameComponent4 from "../components/FrameComponent4.vue";
  import WalletInstructions from "../components/WalletInstructions.vue";
  import FrameComponent1 from "../components/FrameComponent1.vue";

  export default defineComponent({
    name: "ConnectWallet",
    components: {
      FrameComponent3,
      FrameComponent4,
      WalletInstructions,
      FrameComponent1,
    },
  });
</script>
<style scoped>
  .bg-icon3 {
    width: 500px;
    height: 1000px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 0;
  }
  .image-103-icon3 {
    width: 500px;
    height: 1000px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 1;
  }
  .soti1111-scene-of-an-ancient-g-icon7 {
    width: 986px;
    height: 1176px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 2;
  }
  .connectwallet-child {
    width: 500px;
    position: relative;
    max-height: 100%;
    overflow: hidden;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 3;
  }
  .connectwallet-item {
    width: 500px;
    height: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    max-width: 100%;
    z-index: 4;
  }
  .soti1111-scene-of-an-ancient-g-icon8 {
    position: absolute;
    top: -36px;
    left: -193px;
    width: 887px;
    height: 1055px;
    object-fit: cover;
  }
  .frame-child9 {
    position: absolute;
    top: 677px;
    left: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
  }
  .frame-child10 {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .rectangle-parent1 {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
  }
  .panel3-1-icon3 {
    position: absolute;
    top: 199px;
    left: 0px;
    width: 500px;
    height: 788.6px;
    object-fit: cover;
    z-index: 3;
  }
  .back-button-icon4 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
  }
  .settings-button-icon4 {
    position: absolute;
    top: 20px;
    left: 418px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
  }
  .frame-main {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .wallet-instructions-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 19px;
    max-width: 100%;
  }
  .connectwallet {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-30xl) 101.7px 56px;
    box-sizing: border-box;
    gap: 65px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 450px) {
    .connectwallet {
      gap: var(--gap-13xl);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
