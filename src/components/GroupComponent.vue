<template>
  <div class="group-parent">
    <div class="group-div">
      <div class="div12">300</div>
      <img class="coin-icon18" alt="" src="/coin@2x.png" />
    </div>
    <div class="invite-your-friends1">Invite your friends and Earn</div>
    <div class="for-each-referral">for each referral</div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "GroupComponent",
  });
</script>
<style scoped>
  .div12 {
    position: absolute;
    bottom: 3.5px;
    left: calc(50% - 5.2px);
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 43.8px;
    height: 21px;
  }
  .coin-icon18 {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 28px;
    height: 28px;
    object-fit: cover;
  }
  .group-div {
    position: absolute;
    bottom: 40px;
    left: calc(50% + 108px);
    width: 77px;
    height: 28px;
    font-size: var(--font-size-9xl);
    font-family: var(--font-gemfont-one);
  }
  .invite-your-friends1 {
    position: absolute;
    top: 4px;
    left: calc(50% - 185px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 299px;
    height: 20px;
  }
  .for-each-referral {
    position: absolute;
    top: 34px;
    left: calc(50% - 108px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 243px;
  }
  .group-parent {
    position: absolute;
    bottom: 186px;
    left: calc(50% - 188px);
    width: 370px;
    height: 68px;
    text-align: center;
    font-size: var(--font-size-6xl);
    color: var(--color-saddlebrown-300);
    font-family: var(--font-xtra);
  }
</style>
