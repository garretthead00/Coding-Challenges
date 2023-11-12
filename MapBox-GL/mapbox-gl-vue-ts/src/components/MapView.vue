<template>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue'
import mapboxgl from 'mapbox-gl'
import { getMap } from '@/api/mapbox-api'
// import { Map } from '@/types/Types'

export default defineComponent({
  props: {},
  data: () => ({ map: undefined }),
  mounted() {
    try {
      const map = getMap(this.$refs.mapContainer)
      this.map = map
    } catch (e) {
      console.log("Error loading map from API => ", e);
    }

   
  },
  unmounted() {
    this.map = undefined
  }
})
</script>

<style scoped>
.map-container {
  width: 100vw;
  height: 100vh;

  /* TEST STYLES */
  border: 1px solid black;
  background-color: blue;
}
</style>
