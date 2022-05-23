<template>
    <McvTopBar></McvTopBar>

    <router-view></router-view>
</template>
<script>
import McvTopBar from "./components/TopBar";
import {actionTypes} from "./store/modules/auth";

export default {
    name: "App",
    components: {
        McvTopBar
    },

    mounted() {
        this.$store.dispatch(actionTypes.getCurrentUser)
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