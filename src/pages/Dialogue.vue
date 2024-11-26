<template>
  <div class="convo1">
    <img class="throneroom-1-icon2" alt="" src="/throneroom-1@2x.png" />
    <main class="soti1111-greek-trireme-sailing-container">
      <img
        class="soti1111-greek-trireme-sailing-icon2"
        alt=""
        src="/soti1111-greek-trireme-sailing-away-from-burning-troy-ar-5191-52affaba18774b91820c6b542e6e16ca@2x.png"
      />
      <header />
      <img class="panel-small-13" alt="" src="/panel-small-11@2x.png" />
    </main>
    <div class="header-buttons">
      <div class="ten-years-of">
        Ten years of war. One night of cunning. Troy burns, but the journey has
        just begun. The gods are watching, and fate awaits. Will you seize the
        opportunities ahead and return to Ithaca—safe and rich?
      </div>
    </div>
    <div class="header-buttons-parent">
      <div class="header-buttons1">
        <div class="button-container" @click="navigateToConvo1">
          <img class="button-icon4" alt="" src="/button@2x.png" />
          <img class="button-icon5" alt="" src="/button@2x.png" />
          <div class="continue">Continue</div>
        </div>
      </div>
      <div class="rectangle-container">
        <div class="frame-inner" />
        <footer class="group-footer">
          <img class="button-icon4" alt="" src="/button@2x.png" />
          <img
            class="button-icon5"
            loading="lazy"
            alt=""
            src="/button@2x.png"
          />
          <div class="continue">Skip</div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import Header from "../components/Header.vue";

export default defineComponent({
  name: "Dialogue",
  components: { Header },
  setup() {
    const router = useRouter();

    const navigateToConvo1 = () => {
      router.push("/convo1");
    };

    return {
      navigateToConvo1
    };
  }
});
</script>
<style scoped>
  .throneroom-1-icon2 {
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
  .soti1111-greek-trireme-sailing-icon2 {
    position: absolute;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 100%;
    width: 560px;
    object-fit: cover;
    z-index: 1;
  }
  .panel-small-13 {
    position: absolute;
    top: 260px;
    left: 0px;
    width: 500px;
    height: 479.6px;
    object-fit: cover;
    z-index: 3;
  }
  .soti1111-greek-trireme-sailing-container {
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
  .ten-years-of {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    display: inline-block;
    text-shadow: 1px 0 0 #492b00, 0 1px 0 #492b00, -1px 0 0 #492b00,
      0 -1px 0 #492b00;
    max-width: 100%;
    z-index: 4;
  }
  .header-buttons {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-38xl) 0px var(--padding-34xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .button-icon4 {
    height: 86.3px;
    width: 200px;
    position: relative;
    object-fit: cover;
    display: none;
    z-index: 0;
  }
  .button-icon5 {
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
  .continue {
    flex: 1;
    position: relative;
    text-transform: uppercase;
    z-index: 2;
  }
  .button-container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) 31px var(--padding-12xl-3);
    position: relative;
    background-image: url("/public/button@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 4;
    cursor: pointer;
  }
  .header-buttons1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-131xl);
  }
  .frame-inner {
    height: 323px;
    width: 500px;
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: none;
    max-width: 100%;
  }
  .group-footer {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-13xl) var(--padding-35xl) var(--padding-12xl-3);
    position: relative;
    background-image: url("/public/button@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    z-index: 3;
    text-align: center;
    font-size: var(--font-size-5xl);
    color: var(--color-white);
    font-family: var(--font-greek-freak);
  }
  .rectangle-container {
    align-self: stretch;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), #000);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-212xl) var(--padding-131xl) var(--padding-7xs-7);
    box-sizing: border-box;
    max-width: 100%;
    z-index: 2;
    margin-top: -13.3px;
  }
  .header-buttons-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
    font-size: var(--font-size-5xl);
    font-family: var(--font-greek-freak);
  }
  .convo1 {
    width: 100%;
    position: relative;
    background-color: var(--color-white);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 344px 0px 0px;
    box-sizing: border-box;
    gap: 110px;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    font-size: var(--font-size-3xl);
    color: var(--color-white);
    font-family: var(--font-xtra);
  }

  @media screen and (max-width: 450px) {
    .ten-years-of {
      font-size: var(--font-size-lg);
    }

    .continue {
      font-size: var(--font-size-lgi);
    }
  }
  @media screen and (max-width: 250px) {
    .header-buttons {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .header-buttons1 {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .rectangle-container {
      padding-left: var(--padding-xl);
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .convo1 {
      gap: 55px;
    }
  }
</style>
