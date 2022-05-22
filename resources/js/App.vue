<template>
    <McvTopBar></McvTopBar>

    <router-view></router-view>
</template>
<script>
import McvTopBar from "./components/TopBar";

export default {
    name: "App",
    components: {
        McvTopBar
    },

    data() {
        return {
            title: 'How To Install Vue 3 in Laravel 9 From Scratch'
        }
    },
}
</script>

<style scoped>

</style>