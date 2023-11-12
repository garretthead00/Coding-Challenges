<template>
  <div className="home-container">
    <MapView></MapView>
    <ToolBar />
  </div>
</template>

<script>
import MapView from './MapView.vue'
import ToolBar from './ToolBar.vue'

export default {
  name: 'HomePage',
  components: { MapView, ToolBar }
}
</script>

<style scoped></style>
