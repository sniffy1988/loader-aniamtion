<template>
  <div
    id="app"
    v-loader="{circles: 6, text: 'Loading'}"
  >
  </div>
</template>

<script>
import loader from './direcitves/loader'

export default {
  name: 'app',
  components: {
  },
  directives: {
    loader
  }
}
</script>

<style lang="scss">
$loader--width: 250px;
$loader-dot--size: 20px;

html,
body {
  padding: 0;
  margin: 0;
}
.container {
  height: 100vh;
  width: 100vw;
}

.loader {
  height: $loader-dot--size;
  width: $loader--width;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loader--dot {
  height: $loader-dot--size;
  width: $loader-dot--size;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  border: 2px solid white;
}
.loader--text {
  position: absolute;
  top: 200%;
  left: 0;
  right: 0;
  width: 4rem;
  margin: auto;
}
</style>
