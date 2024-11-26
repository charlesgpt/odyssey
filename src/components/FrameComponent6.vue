<template>
  <div class="frame-wrapper4">
    <div class="image-130-parent">
      <div class="image-130" />
      <div class="frame-parent13">
        <div class="chat-input-wrapper">
          <div class="chat-input">1000</div>
        </div>
        <div class="chat-message-parent">
          <div class="chat-message">500</div>
          <div class="frame-parent14">
            <div class="chat-option-wrapper">
              <div class="chat-option">100</div>
            </div>
            <div class="div">0</div>
          </div>
        </div>
      </div>
      <div class="frame-wrapper5">
        <div class="frame-parent15">
          <div class="frame-wrapper6">
            <img
              class="frame-child10"
              loading="lazy"
              alt=""
              src="/group-8.svg"
            />
          </div>
          <div class="frame-parent16">
            <div class="vector-parent">
              <img class="frame-child11" alt="" src="/vector-8.svg" />
              <img class="frame-child12" alt="" src="/vector-9.svg" />
            </div>
            <img
              class="coin-icon5"
              loading="lazy"
              alt=""
              src="/coin-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent6",
  });
</script>
<style scoped>
  .image-130 {
    height: 301px;
    width: 477px;
    position: relative;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray-200);
    display: none;
    max-width: 100%;
  }
  .chat-input {
    flex: 1;
    position: relative;
    display: inline-block;
    min-width: 22px;
    z-index: 1;
  }
  .chat-input-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-10xs) 0px 0px;
  }
  .chat-message {
    width: 17px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .chat-option {
    flex: 1;
    position: relative;
    display: inline-block;
    min-width: 17px;
    flex-shrink: 0;
    z-index: 1;
  }
  .chat-option-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-11xs) 0px 0px;
  }
  .div {
    width: 7px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    z-index: 1;
  }
  .frame-parent14 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-44xl);
  }
  .chat-message-parent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-50xl);
  }
  .frame-parent13 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-64xl-9);
  }
  .frame-child10 {
    width: 0px;
    height: 245.9px;
    position: relative;
    z-index: 1;
  }
  .frame-wrapper6 {
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-2xl-5) 0px 0px;
    box-sizing: border-box;
  }
  .frame-child11 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-11xs);
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .frame-child12 {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-11xs);
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  .vector-parent {
    position: absolute;
    top: 10.9px;
    left: 0px;
    width: 187.8px;
    height: 228.1px;
  }
  .coin-icon5 {
    position: absolute;
    top: 0px;
    left: 176.1px;
    width: 18px;
    height: 20.7px;
    object-fit: cover;
    z-index: 3;
  }
  .frame-parent16 {
    height: 239px;
    flex: 1;
    position: relative;
  }
  .frame-parent15 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .frame-wrapper5 {
    width: 194.1px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px 0px var(--padding-4xs-3);
    box-sizing: border-box;
  }
  .image-130-parent {
    flex: 1;
    border-radius: var(--br-5xs);
    background-color: var(--color-gray-200);
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-10xs-3) var(--padding-sm) var(--padding-4xl);
    box-sizing: border-box;
    gap: var(--gap-7xs-4);
    max-width: 100%;
    z-index: 3;
  }
  .frame-wrapper4 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-3xs) 0px var(--padding-smi);
    box-sizing: border-box;
    max-width: 100%;
    margin-top: -209px;
    text-align: center;
    font-size: var(--font-size-3xs);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
</style>
