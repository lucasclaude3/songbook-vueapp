<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'AppBodyComponent',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
