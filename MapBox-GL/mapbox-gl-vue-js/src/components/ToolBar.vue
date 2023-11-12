<template>
  <div className="toolbar-container">
    <div className="toolbar-button">
      <font-awesome-icon icon="fa-solid fa-map-location-dot"/>
      <font-awesome-icon icon="fa-solid fa-map-pin" />
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <font-awesome-icon icon="fa-solid fa-user" />
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.toolbar-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  margin: 2px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 10px;
}

.toolbar-button {
  display: flex;
  flex-direction: column;
  position: relative;
}

.toolbar-button * {
  width: 32px;
  height: 32px;
  margin: 2px;
  padding: 2px;
}
</style>
