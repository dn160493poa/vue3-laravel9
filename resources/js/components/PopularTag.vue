<template>

    <mcv-loading v-if="isLoading"></mcv-loading>

    <mcv-error-message v-if="error" :message="error" ></mcv-error-message>

    <div v-if="feed" class="sidebar">
        <p>Popular Tags</p>
        <div class="tag-list">
            <router-link :to="{ name: 'tag', params: { slug: tag} }" v-for="(tag, index) in feed.popularTags" :key="index" class="tag-default tag-pill">
                {{ tag }}
            </router-link>
        </div>
    </div>
    <div v-else class="post-preview">
        No tags are here... yet.
    </div>

</template>

<script>
import {mapState} from "vuex";
import McvLoading from "./Loading";
import McvErrorMessage from "./ErrorMessage";

export default {
    name: "McvPopularTag",

    components: {
        McvLoading,
        McvErrorMessage
    },

    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
    },

}
</script>

<style scoped>
    .sidebar {
        padding: 5px 10px 10px 10px;
        background: #f3f3f3;
        border-radius: 4px; }
    .sidebar p {
        margin-bottom: 0.2rem; }

    .tag-default {
        background-color: #818a91; }
    .tag-default[href]:focus, .tag-default[href]:hover {
        background-color: #687077; }

    .tag-default {
        color: #fff !important;
        font-size: 0.8rem;
        padding-top: 0.1rem;
        padding-bottom: 0.1rem;
        white-space: nowrap;
        margin-right: 3px;
        margin-bottom: 0.2rem;
        display: inline-block; }
    .tag-default:hover {
        text-decoration: none; }
    .tag-default.tag-outline {
        border: 1px solid #ddd;
        color: #aaa !important;
        background: none !important; }

    .tag-pill {
        padding-right: 0.6em;
        padding-left: 0.6em;
        border-radius: 10rem; }
</style>