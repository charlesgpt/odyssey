<template>
  <div class="welcomescreen">
    <img class="throneroom-1-icon4" alt="" src="/throneroom-1@2x.png" />
    <img
      class="soti1111-greek-trireme-sailing-icon4"
      alt=""
      src="/soti1111-greek-trireme-sailing-away-from-burning-troy-ar-5191-52affaba18774b91820c6b542e6e16ca@2x.png"
    />
    <section class="scene">
      <div class="action" />
      <div class="scene-inner">
        <div class="frame-parent">
          <img
            class="group-icon"
            loading="lazy"
            alt=""
            src="/group-1707478901@2x.png"
          />
          <div class="logo-container">
            <img
              class="ithaca-logotype-ed-04-icon"
              loading="lazy"
              alt=""
              src="/ithacalogotype-ed04.svg"
            />
          </div>
        </div>
      </div>
      <div class="presents">Presents</div>
    </section>
    <section class="scene1">
      <div class="scene-child" />
      <div class="button" @click="navigateToDialogue">
        <img class="button-child" loading="lazy" alt="" src="/group-3@2x.png" />
        <div class="begin-trial">Begin Trial</div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "WelcomeScreen",
  setup() {
    const router = useRouter();

    const navigateToDialogue = () => {
      router.push("/dialogue");
    };

    return {
      navigateToDialogue
    };
  }
});
</script>
<style scoped>
  .throneroom-1-icon4 {
    width: 100%;
    height: 100%;
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
  }
  .soti1111-greek-trireme-sailing-icon4 {
    width: 560px;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: -60px;
    bottom: 0px;
    max-height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .action {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 323px;
    right: -500px;
    bottom: -323px;
    left: 500px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    transform: rotate(-180deg);
    transform-origin: 0 0;
    z-index: 2;
  }
  .group-icon {
    height: 51.6px;
    width: 49.8px;
    position: relative;
    object-fit: cover;
    z-index: 3;
  }
  .ithaca-logotype-ed-04-icon {
    align-self: stretch;
    height: 40.5px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 3;
  }
  .logo-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 5.5px 0px 0px;
  }
  .frame-parent {
    width: 177px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16.8px;
  }
  .scene-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-8xs) 0px 0px;
  }
  .presents {
    align-self: stretch;
    position: relative;
    text-transform: uppercase;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    z-index: 3;
  }
  .scene {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 89px var(--padding-32xl) 143px var(--padding-39xl);
    position: relative;
    gap: 10.4px;
    text-align: center;
    font-size: var(--font-size-11xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
  }
  .scene-child {
    height: 323px;
    width: 500px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: none;
    max-width: 100%;
  }
  .button-child {
    height: 100%;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 6px;
    bottom: 0px;
    left: 0px;
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .begin-trial {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
  }
  .button {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 53.8px 70px var(--padding-34xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
    z-index: 3;
    cursor: pointer;
  }
  .scene1 {
    align-self: stretch;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 122px 71px 49.2px;
    box-sizing: border-box;
    max-width: 100%;
    z-index: 2;
    text-align: center;
    font-size: 46.9px;
    color: var(--color-white);
    font-family: var(--font-greek-freak);
  }
  .welcomescreen {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 354px;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 358px) {
    .button {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 250px) {
    .scene {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .scene1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .welcomescreen {
      gap: 177px;
    }
  }
</style>
