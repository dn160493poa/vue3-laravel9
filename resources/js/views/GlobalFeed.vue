<template>
    <div class="home-page">
        <mcv-banner></mcv-banner>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <mcv-feed :api-url="apiUrl" ></mcv-feed>
                </div>
                <div class="col-md-3">
                    <mcv-popular-tag></mcv-popular-tag>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import McvFeed from '../components/Feed'
import McvPopularTag from "../components/PopularTag";
import McvBanner from "../components/Banner";

export default {
    name: "McvGlobalFeed",
    components: {
        McvFeed,
        McvPopularTag,
        McvBanner
    },

    data(){
        return {
            apiUrl: '/api/posts'
        }
    }
}
</script>

<style scoped>

</style>