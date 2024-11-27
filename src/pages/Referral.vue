<template>
  <div class="referral">
    <img class="bg-icon" alt="" src="/bg@2x.png" />
    <img class="image-103-icon" alt="" src="/image-103@2x.png" />
    <img
      class="soti1111-scene-of-an-ancient-g-icon"
      alt=""
      src="/soti1111-scene-of-an-ancient-greek-coin-flipping-in-midair-glo-ad535c06450d4988be9bab2507b82aa8-1@2x.png"
    />
    <img
      class="soti1111-scene-of-an-ancient-g-icon1"
      alt=""
      src="/soti1111-scene-of-an-ancient-greek-ornate-altar-with-greek-symb-443696c315ce43ca98fe120e80f26663-1@2x.png"
    />
    <div class="rectangle-parent">
      <div class="group-child" />
      <div class="group-item" />
    </div>
    <img class="referral-child" alt="" src="/frame-13@2x.png" />
    <div class="referral-item" />
    <div class="title-buttons">
      <img class="back-button-icon" alt="" src="/back-button@2x.png" />
      <img class="settings-button-icon" alt="" src="/settings-button@2x.png" />
      <img class="title-scroll-icon" alt="" src="/title-scroll@2x.png" />
      <div class="referral1">Referral</div>
    </div>
    <div class="invite-your-friends">Invite your friends and earn X points</div>
    <div class="panel3-1-parent">
      <img class="panel3-1-icon" alt="" src="/panel3-1@2x.png" />
      <div class="coin-amount">
        <div class="httpstmeodysseyoffate-123">
          https://t.me/odysseyoffate_12345
        </div>
      </div>
      <div class="your-referrals">Your Referrals</div>
      <div class="your-referral-link">Your referral link to share:</div>
      <div class="referrals">12 Referrals</div>
      <div class="invite-friends">Invite Friends</div>
      <div class="button">
        <img class="button-icon" alt="" src="/button@2x.png" />
        <div class="copy-link">Copy Link</div>
      </div>
      <div class="button1">
        <img class="button-icon1" alt="" src="/button1@2x.png" />
        <div class="share">Share</div>
      </div>
    </div>
    <GroupComponent />
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import GroupComponent from "../components/GroupComponent.vue";

  export default defineComponent({
    name: "Referral",
    components: { GroupComponent },
  });
</script>
<style scoped>
  .bg-icon {
    position: absolute;
    top: calc(50% - 500px);
    left: calc(50% - 250px);
    width: 500px;
    height: 1000px;
    object-fit: cover;
    display: none;
  }
  .image-103-icon {
    position: absolute;
    top: 0px;
    left: -1px;
    width: 500px;
    height: 1000px;
    object-fit: cover;
    display: none;
  }
  .soti1111-scene-of-an-ancient-g-icon {
    position: absolute;
    top: -87px;
    left: -244px;
    width: 986px;
    height: 1176px;
    object-fit: cover;
    display: none;
  }
  .soti1111-scene-of-an-ancient-g-icon1 {
    position: absolute;
    top: -36px;
    left: -193px;
    width: 887px;
    height: 1055px;
    object-fit: cover;
  }
  .group-child {
    position: absolute;
    top: 677px;
    left: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 500px;
    height: 323px;
    opacity: 0.5;
  }
  .group-item {
    position: absolute;
    top: 323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    width: 500px;
    height: 323px;
    transform: rotate(-180deg);
    transform-origin: 0 0;
    opacity: 0.5;
  }
  .rectangle-parent {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 500px;
    height: 1000px;
  }
  .referral-child {
    position: absolute;
    top: calc(50% - 250px);
    left: calc(50% - 250px);
    width: 500px;
    height: 500px;
    overflow: hidden;
    object-fit: cover;
    display: none;
  }
  .referral-item {
    position: absolute;
    bottom: 0px;
    left: calc(50% - 250px);
    width: 500px;
    height: 70px;
    overflow: hidden;
  }
  .back-button-icon {
    position: absolute;
    top: calc(50% - 36px);
    left: calc(50% - 240px);
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
  }
  .settings-button-icon {
    position: absolute;
    top: calc(50% - 36px);
    left: calc(50% + 168px);
    width: 72px;
    height: 72px;
    overflow: hidden;
    object-fit: cover;
  }
  .title-scroll-icon {
    position: absolute;
    top: -4px;
    left: calc(50% - 160px);
    width: 320px;
    height: 80px;
    object-fit: cover;
  }
  .referral1 {
    position: absolute;
    top: 23px;
    left: calc(50% - 56px);
    text-shadow: 0.2px 0 0 #492b00, 0 0.2px 0 #492b00, -0.2px 0 0 #492b00,
      0 -0.2px 0 #492b00;
  }
  .title-buttons {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 480px;
    height: 72px;
  }
  .invite-your-friends {
    position: absolute;
    top: 793px;
    left: 124px;
    font-size: var(--font-size-base);
    text-transform: uppercase;
    font-family: var(--font-gemfont-one);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 247px;
    height: 70px;
  }
  .panel3-1-icon {
    position: absolute;
    top: 0px;
    left: calc(50% - 250px);
    width: 500px;
    height: 788.6px;
    object-fit: cover;
  }
  .httpstmeodysseyoffate-123 {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 142px);
  }
  .coin-amount {
    position: absolute;
    top: 397px;
    left: 70px;
    border-radius: var(--br-5xs);
    background-color: rgba(116, 73, 15, 0.7);
    width: 354px;
    height: 50px;
    overflow: hidden;
    text-align: left;
    font-size: var(--font-size-xl);
    font-family: var(--font-gemfont-one);
  }
  .your-referrals {
    position: absolute;
    top: 145px;
    left: calc(50% - 187px);
    color: var(--color-saddlebrown-300);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 374px;
    height: 61px;
  }
  .your-referral-link {
    position: absolute;
    top: 318px;
    left: calc(50% - 187px);
    color: var(--color-saddlebrown-300);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 374px;
    height: 61px;
  }
  .referrals {
    position: absolute;
    top: 206px;
    left: calc(50% - 187px);
    font-size: 40px;
    color: var(--color-saddlebrown-100);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 374px;
    height: 61px;
  }
  .invite-friends {
    position: absolute;
    top: 83px;
    left: calc(50% - 90px);
    font-size: var(--font-size-13xl);
    font-family: var(--font-greek-freak);
    color: var(--color-saddlebrown-300);
  }
  .button-icon {
    position: absolute;
    top: 0px;
    left: calc(50% - 100px);
    width: 200px;
    height: 55px;
    object-fit: cover;
  }
  .copy-link {
    position: absolute;
    top: 16px;
    left: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 106px;
  }
  .button {
    position: absolute;
    top: 465px;
    left: 155px;
    width: 200px;
    height: 55px;
    font-size: var(--font-size-5xl);
    font-family: var(--font-greek-freak);
  }
  .button-icon1 {
    position: absolute;
    top: -17px;
    left: calc(50% - 100px);
    width: 200px;
    height: 86.3px;
    object-fit: cover;
  }
  .share {
    position: absolute;
    top: 16px;
    left: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
  }
  .button1 {
    position: absolute;
    top: 526px;
    left: 155px;
    width: 200px;
    height: 55px;
    font-size: var(--font-size-5xl);
    font-family: var(--font-greek-freak);
  }
  .panel3-1-parent {
    position: absolute;
    top: 117px;
    left: calc(50% - 250px);
    width: 500px;
    height: 788.6px;
    font-size: var(--font-size-9xl);
    color: var(--color-white);
    font-family: var(--font-xtra);
  }
  .referral {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    height: 1000px;
    overflow: hidden;
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-saddlebrown-300);
    font-family: var(--font-greek-freak);
  }
</style>
