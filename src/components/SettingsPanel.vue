<template>
  <div v-if="isVisible" class="settings-panel">
    <div class="panel-content">
      <h2>Settings</h2>
      <div class="volume-control">
        <label>Music Volume</label>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          v-model="volume" 
          @input="updateVolume"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from 'vue';

export default defineComponent({
  name: 'SettingsPanel',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const volume = ref(1);
    const audioControl = inject('audioControl') as { setVolume: (volume: number) => void };

    const updateVolume = () => {
      audioControl.setVolume(volume.value);
    };

    return {
      volume,
      updateVolume
    };
  }
});
</script>

<style scoped>
.settings-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url("/panel-small-1@2x.png");
  background-size: cover;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-content {
  text-align: center;
  color: var(--color-white);
  font-family: var(--font-greek-freak);
}

h2 {
  margin-bottom: 20px;
  text-transform: uppercase;
  color: var(--color-saddlebrown-200);
  text-shadow: 0.5px 0 0 #492b00, 0 0.5px 0 #492b00, -0.5px 0 0 #492b00,
    0 -0.5px 0 #492b00;
}

.volume-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

label {
  text-transform: uppercase;
}

input[type="range"] {
  width: 200px;
  margin-top: 10px;
}
</style>
