<template>
  <div class="quest">
    <img class="bg-icon1" alt="" src="/bg@2x.png" />
    <img class="image-103-icon1" alt="" src="/image-103@2x.png" />
    <img
      class="soti1111-scene-of-an-ancient-g-icon3"
      alt=""
      src="/soti1111-scene-of-an-ancient-greek-coin-flipping-in-midair-glo-ad535c06450d4988be9bab2507b82aa8-1@2x.png"
    />
    <img class="quest-child" alt="" src="/frame-13@2x.png" />
    <div class="quest-item" />
    <div class="quest-inner">
      <div class="title-scroll-parent">
        <img class="title-scroll-icon1" alt="" src="/title-scroll@2x.png" />
        <a class="quests">Quests</a>
      </div>
    </div>
    <main class="soti1111-scene-of-an-ancient-g-group">
      <img
        class="soti1111-scene-of-an-ancient-g-icon4"
        alt=""
        src="/soti1111-scene-of-an-ancient-greek-ornate-altar-with-greek-symb-443696c315ce43ca98fe120e80f26663-1@2x.png"
      />
      <section class="rectangle-container">
        <footer class="rectangle-footer" />
        <div class="rectangle-div" />
      </section>
      <img class="panel3-1-icon1" alt="" src="/panel3-1@2x.png" />
      <img
        class="back-button-icon2"
        loading="lazy"
        alt=""
        src="/back-button@2x.png"
      />
      <img
        class="settings-button-icon2"
        loading="lazy"
        alt=""
        src="/settings-button@2x.png"
      />
    </main>
    <FrameComponent />
    <div class="quest-grid">
      <div class="quest-1">
        <div class="social-media-headers">
          <div class="follow-us-on">Follow us on X (Twitter)</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="coin-icon-row">
            <img class="button-img-icon" alt="" src="/button-img@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-11@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quest-2">
        <div class="follow-us-on-telegram-wrapper">
          <div class="follow-us-on">Follow us on Telegram</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="button-img-parent">
            <img class="button-img-icon" alt="" src="/button-img1@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-2@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quest-2">
        <div class="follow-us-on-telegram-wrapper">
          <div class="follow-us-on">Join Our on Discord</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="button-img-group">
            <img class="button-img-icon" alt="" src="/button-img2@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-3@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quest-2">
        <div class="follow-us-on-telegram-wrapper">
          <div class="follow-us-on">Follow us on Farcaster</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="button-img-container">
            <img class="button-img-icon" alt="" src="/button-img3@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-4@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quest-5">
        <div class="connect-wallet-on-ithaca-app-wrapper">
          <div class="follow-us-on">Connect Wallet on Ithaca App</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="button-img-parent1">
            <img class="button-img-icon" alt="" src="/button-img4@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-5@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quest-6">
        <div class="connect-wallet-on-io-bot-wrapper">
          <div class="follow-us-on">Connect Wallet on IO Bot</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="coin-icon-row">
            <img class="button-img-icon" alt="" src="/button-img@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-11@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
      <div class="quest-2">
        <div class="follow-us-on-telegram-wrapper">
          <div class="follow-us-on">Like comment Rt</div>
        </div>
        <div class="claim-buttons">
          <div class="claim">Claim</div>
          <div class="button-img-parent">
            <img class="button-img-icon" alt="" src="/button-img1@2x.png" />
            <img
              class="coin-icon11"
              loading="lazy"
              alt=""
              src="/coin-2@2x.png"
            />
            <div class="follow-us-row">
              <div class="empty-labels">300</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Quest",
    components: { FrameComponent },
  });
</script>
<style scoped>
  .bg-icon1 {
    width: 500px;
    height: 1000px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 0;
  }
  .image-103-icon1 {
    width: 500px;
    height: 1000px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 1;
  }
  .soti1111-scene-of-an-ancient-g-icon3 {
    width: 986px;
    height: 1176px;
    position: relative;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 2;
  }
  .quest-child {
    width: 500px;
    position: relative;
    max-height: 100%;
    overflow: hidden;
    object-fit: cover;
    display: none;
    max-width: 100%;
    z-index: 3;
  }
  .quest-item {
    width: 500px;
    height: 70px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    display: none;
    max-width: 100%;
    z-index: 4;
  }
  .title-scroll-icon1 {
    height: 80px;
    width: 320px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .quests {
    text-decoration: none;
    flex: 1;
    position: relative;
    color: inherit;
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
    z-index: 3;
  }
  .title-scroll-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 27px 117px var(--padding-5xl) 118px;
    background-image: url("/public/title-scroll@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 2;
  }
  .quest-inner {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-mini) var(--padding-mini);
    box-sizing: border-box;
    max-width: 100%;
  }
  .soti1111-scene-of-an-ancient-g-icon4 {
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
  .rectangle-div {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
    width: 500px;
    height: 323px;
    transform: rotate(-180deg);
    transform-origin: 0 0;
  }
  .rectangle-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 1;
  }
  .panel3-1-icon1 {
    position: absolute;
    top: 199px;
    left: 0px;
    width: 500px;
    height: 788.6px;
    object-fit: cover;
    z-index: 3;
  }
  .back-button-icon2 {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
    z-index: 2;
  }
  .settings-button-icon2 {
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
  .follow-us-on {
    position: relative;
  }
  .social-media-headers {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
    min-width: 131px;
  }
  .claim {
    width: 99px;
    position: absolute;
    margin: 0 !important;
    top: -6px;
    right: 0px;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-img-icon {
    height: 41.2px;
    width: 103px;
    position: relative;
    object-fit: cover;
    display: none;
  }
  .coin-icon11 {
    height: 16px;
    width: 16px;
    position: relative;
    object-fit: cover;
    z-index: 2;
  }
  .empty-labels {
    width: 26px;
    position: relative;
    line-height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .follow-us-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .coin-icon-row {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xl) var(--padding-smi-2);
    gap: var(--gap-10xs);
    background-image: url("/public/button-img@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    font-size: var(--font-size-base);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .claim-buttons {
    width: 103px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-saddlebrown-100);
    font-family: var(--font-greek-freak);
  }
  .quest-1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    gap: 58px;
  }
  .follow-us-on-telegram-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
  }
  .button-img-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xl) var(--padding-smi-2);
    gap: var(--gap-10xs);
    background-image: url("/public/button-img1@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    font-size: var(--font-size-base);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .quest-2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: var(--padding-7xs) 0px 0px;
    gap: var(--gap-xl);
  }
  .button-img-group {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xl) var(--padding-smi-2);
    gap: var(--gap-10xs);
    background-image: url("/public/button-img2@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    font-size: var(--font-size-base);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .button-img-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xl) var(--padding-smi-2);
    gap: var(--gap-10xs);
    background-image: url("/public/button-img3@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    font-size: var(--font-size-base);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .connect-wallet-on-ithaca-app-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
    min-width: 161px;
  }
  .button-img-parent1 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi) var(--padding-5xl) var(--padding-smi-2);
    gap: var(--gap-10xs);
    background-image: url("/public/button-img4@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 1;
    font-size: var(--font-size-base);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .quest-5 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    gap: var(--gap-2xs);
  }
  .connect-wallet-on-io-bot-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
    min-width: 135px;
  }
  .quest-6 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    padding: var(--padding-7xs) 0px 0px;
    gap: 52px;
  }
  .quest-grid {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 23px;
    z-index: 4;
    text-align: left;
    font-size: var(--font-size-3xl);
    font-family: var(--font-xtra);
  }
  .quest {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px 63px 170.6px 75px;
    box-sizing: border-box;
    gap: 50px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-300);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .title-scroll-parent {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .follow-us-on {
      font-size: var(--font-size-lg);
    }

    .claim {
      font-size: var(--font-size-lgi);
      line-height: 10px;
    }

    .quest-1 {
      gap: var(--gap-10xl);
    }

    .quest-2 {
      flex-wrap: wrap;
    }

    .quest-6 {
      gap: 26px;
    }

    .quest {
      gap: var(--gap-6xl);
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
