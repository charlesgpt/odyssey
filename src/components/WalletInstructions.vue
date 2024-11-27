<template>
  <div class="wallet-instructions">
    <div class="connect-your-evm-wallet-wrapper">
      <div class="connect-your-evm">Connect Your EVM Wallet</div>
    </div>
    <div class="connect-options">
      <div class="you-can-either-use-ithaca-opt-parent">
        <div class="you-can-either-container">
          <p class="you-can-either">You can EITHER use:</p>
          <p class="you-can-either">
            <span>Ithaca Option Bot (Telegram): </span>
            <span class="httpstmeithacaoptionbot"
              >https://t.me/IthacaOptionBot</span
            >
          </p>
        </div>
        <div class="or">OR</div>
      </div>
      <div class="ithaca-app-httpsappithaca-container">
        <span>
          <p class="you-can-either">Ithaca App:</p>
          <p class="httpsappithacaprotocolio">https://app.ithacaprotocol.io</p>
        </span>
      </div>
    </div>
    <div class="app-option-wrapper">
      <div class="app-option">
        <div class="address-input">
          <div class="past-your-evm">Past your EVM Wallet Address Below:</div>
        </div>
        <div class="coin-amount1">
          <div class="x3fdb027aa3446d6a57af6954207bb">
            0x3fDb027Aa3446D6a57af6954207BB53b985DF081
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "WalletInstructions",
  });
</script>
<style scoped>
  .connect-your-evm {
    flex: 1;
    position: relative;
    z-index: 4;
  }
  .connect-your-evm-wallet-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xl) 0px var(--padding-lgi);
    font-size: var(--font-size-13xl);
  }
  .you-can-either {
    margin: 0;
  }
  .httpstmeithacaoptionbot {
    text-decoration: underline;
    font-family: var(--font-gemfont-one);
  }
  .you-can-either-container {
    align-self: stretch;
    position: relative;
    z-index: 4;
  }
  .or {
    align-self: stretch;
    position: relative;
    z-index: 5;
  }
  .you-can-either-use-ithaca-opt-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .httpsappithacaprotocolio {
    margin: 0;
    text-decoration: underline;
    font-family: var(--font-gemfont-one);
  }
  .ithaca-app-httpsappithaca-container {
    align-self: stretch;
    height: 93px;
    position: relative;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    z-index: 4;
  }
  .connect-options {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-10xs);
    font-family: var(--font-xtra);
  }
  .past-your-evm {
    flex: 1;
    position: relative;
    display: inline-block;
    max-width: 100%;
    z-index: 4;
  }
  .address-input {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .x3fdb027aa3446d6a57af6954207bb {
    position: relative;
    flex-shrink: 0;
  }
  .coin-amount1 {
    width: 354px;
    border-radius: var(--br-5xs);
    background-color: var(--color-saddlebrown-400);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-mini) 0px var(--padding-mini) var(--padding-sm);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 4;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-white);
    font-family: var(--font-gemfont-one);
  }
  .app-option {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lg);
    max-width: 100%;
  }
  .app-option-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lgi) 0px var(--padding-sm);
    box-sizing: border-box;
    max-width: 100%;
  }
  .wallet-instructions {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-22xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-9xl);
    color: var(--color-saddlebrown-300);
    font-family: var(--font-greek-freak);
  }

  @media screen and (max-width: 450px) {
    .you-can-either-container {
      font-size: var(--font-size-3xl);
    }

    .or {
      font-size: var(--font-size-3xl);
    }

    .ithaca-app-httpsappithaca-container {
      font-size: var(--font-size-3xl);
    }

    .past-your-evm {
      font-size: var(--font-size-3xl);
    }

    .x3fdb027aa3446d6a57af6954207bb {
      font-size: var(--font-size-base);
    }

    .wallet-instructions {
      gap: var(--gap-xl);
    }
  }
</style>
