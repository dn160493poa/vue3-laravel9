<template>
    <h1>{{ title }}</h1>
    <router-view></router-view>
</template>
<script>
export default {
    name: "App",
    components: {

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