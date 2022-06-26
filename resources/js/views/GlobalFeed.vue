<template>
    <div class="home-page">
        <mcv-banner></mcv-banner>
        <div class="container page">
            <div class="row">
                <div class="col-md-9">
                    <mvc-feed-toggle></mvc-feed-toggle>
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
import MvcFeedToggle from "../components/FeedToggle";

export default {
    name: "McvGlobalFeed",
    components: {
        McvFeed,
        McvPopularTag,
        McvBanner,
        MvcFeedToggle
    },

    data(){
        return {
            apiUrl: '/api/post'
        }
    }
}
</script>

<style scoped>

</style>
