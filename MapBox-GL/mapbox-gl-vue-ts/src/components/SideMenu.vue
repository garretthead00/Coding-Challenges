<template>
  <div className="side-menu-container">
    <div className="side-menu-item" @click="handleClick('sm1')"></div>
    <div className="side-menu-item" @click="handleClick('sm2')"></div>
    <div className="side-menu-item" @click="handleClick('sm3')"></div>
    <div className="side-menu-item" @click="handleClick('sm4')"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideMenu',
  components: {},
  setup() {
    const handleClick = (event: string) => {
      console.log(`side menu event ${event}`)
    }
    return { handleClick }
  }
})
</script>

<style scoped>
.side-menu-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 312px;
  height: 100%;
  align-items: center;

  /* TEST STYLES */
  border: 1px solid black;
}

.side-menu-item {
  width: 256px;
  height: 48px;
  margin: 10px;

  /* TEST STYLES */
  border: 1px solid black;
  background-color: white;
}
</style>
