<template>
  <div className="loading-map-container">Loading Map...</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoadingMap',
  components: {},
  setup() {
    console.log('Loading...')
    return {}
  }
})
</script>

<style scoped>
.loading-map-container {
  color: purple;
  font-size: 24px;
}
</style>
