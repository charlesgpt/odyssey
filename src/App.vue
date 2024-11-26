<template>
  <audio ref="audioPlayer" autoplay loop>
    <source src="/music.mp3" type="audio/mpeg">
  </audio>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const audioPlayer = ref<HTMLAudioElement | null>(null);

    const setVolume = (volume: number) => {
      if (audioPlayer.value) {
        audioPlayer.value.volume = volume;
      }
    };

    provide('audioControl', {
      setVolume
    });

    return {
      audioPlayer
    };
  }
});
</script>
