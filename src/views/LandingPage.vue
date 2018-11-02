<template>
  <div>
    <LandingHeaderComponent/>
    <LandingBodyComponent msg="HOLA QUE TAL"/>
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
