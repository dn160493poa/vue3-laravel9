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
            title: 'Vue 3 & Laravel 9'
        }
    },
}
</script>

<style scoped>

</style>
