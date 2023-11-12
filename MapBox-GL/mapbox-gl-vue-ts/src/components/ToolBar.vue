<template>
  <div className="tool-bar-container">
    <div className="tool-bar-item tool-bar-item-map" @click="handleClick('map')"></div>
    <div className="tool-bar-item tool-bar-item-markers" @click="handleClick('markers')"></div>
    <div className="tool-bar-item tool-bar-item-search" @click="handleClick('search')"></div>
    <div className="tool-bar-item tool-bar-item-user" @click="handleClick('user')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ToolBarEvents } from '@/types/Types'

export default defineComponent({
  name: 'ToolBar',
  components: {},
  setup() {
    const handleClick = (event: ToolBarEvents) => {
      console.log(`click event! ${event}`)
    }
    return { handleClick }
  }
})
</script>

<style scoped>
.tool-bar-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  margin: 10px;

  /* TESTING STYLES */
  border: 1px solid black;
}

.tool-bar-item {
  width: 36px;
  height: 36px;
  margin: 2px;

  /* TESTING STYLES */
  border: 1px solid black;
  background-color: white;
}
</style>
