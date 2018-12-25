<template>
  <div id="app-body">
    <router-view></router-view>
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

<style>
  div#app-body {
    padding-left: 20px;
    margin-top: 15px;
  }
</style>
