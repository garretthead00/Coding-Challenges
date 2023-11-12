<template>
  <div className="map-canvas">
    <!-- Map -->
    <!-- etc. -->
    <Suspense>
      <template #default>
        <MapView />
      </template>
      <template #fallback>
        <LoadingMap />
      </template>
    </Suspense>

    <SideMenu v-if="showSideMenu" />
    <ToolBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MapView from '@/components/MapView.vue'
import ToolBar from './ToolBar.vue'
import SideMenu from './SideMenu.vue'
import LoadingMap from './LoadingMap.vue'

export default defineComponent({
  name: 'MapCanvas',
  components: { LoadingMap, MapView, SideMenu, ToolBar },
  setup() {
    const showSideMenu: boolean = false
    return { showSideMenu }
  }
})
</script>

<style scoped>
.map-canvas {
  height: 100vh;

  /* TEST STYLES */
  border: 1px solid black;
  background-color: grey;
}
</style>
