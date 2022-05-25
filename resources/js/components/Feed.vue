<template>
    <div>
        <div v-if="isLoading">Loading...</div>

        <div v-if="error">Something errors</div>

        <div v-if="feed">
            <div class="article-preview" v-for="(article, index) in feed.data" :key="index">
                <div class="article-meta">
                    <router-link :to="{ name: 'home', params: {slug: article.author.username} }"></router-link>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from "../store/modules/feed";

export default {
    name: "McvFeed",
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },

    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        })
    },

    mounted() {
        this.$store.dispatch(actionTypes.getFeed, {apiUrl: this.apiUrl})
    }
}
</script>

<style scoped>

</style>