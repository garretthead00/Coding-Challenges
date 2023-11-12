<template>
  <main>
    <MapCanvas />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import '../node_modules/mapbox-gl/dist/mapbox-gl.css'
import MapCanvas from '@/components/MapCanvas.vue'

export default defineComponent({
  name: 'App',
  components: { MapCanvas },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
