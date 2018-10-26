<template>
  <div>
    <LandingHeaderComponent/>
    <LandingBodyComponent msg="OLA QUE TAL"/>
    <img alt="Vue logo" src="../assets/songbook.png">
  </div>
</template>

<script>
// @ is an alias to /src
import LandingHeaderComponent from '@/components/LandingHeaderComponent.vue';
import LandingBodyComponent from '@/components/LandingBodyComponent.vue';

export default {
  name: 'LandingPage',
  components: {
    LandingHeaderComponent,
    LandingBodyComponent
  }
}
</script>
