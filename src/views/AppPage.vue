<template>
    <div>
        <AppHeaderComponent />
        <AppBodyComponent msg="HOLA QUE TAL" />
    </div>
</template>

<script>
import AppHeaderComponent from '@/components/AppHeaderComponent.vue';
import AppBodyComponent from '@/components/AppBodyComponent.vue';

export default {
    name: 'AppPage',
    components: {
        AppHeaderComponent,
        AppBodyComponent
    }
}
</script>
