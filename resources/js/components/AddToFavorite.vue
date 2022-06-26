<template>
    <button
        class="btn btn-sm"
        :class="{
            'btn-outline-success': isFavoriteOptimistic,
            'btn-outline-secondary': !isFavoriteOptimistic
        }"
        @click="handleLike"
    >
        <i class="ion-heart"></i>
        <span class="ng-binding ng-scope">&nbsp; {{ likesOptimistic }}</span>
    </button>
</template>

<script>
import {actionTypes} from "../store/modules/toggleFavorite";

export default {
    name: "McvAddToFavorite",
    props: {
        isFavorited: {
            required: true,
            type: Boolean
        },
        articleId: {
            required: true,
            type: Number
        },
        likes: {
            required: true,
            type: Number
        }
    },

    data(){
        return {
            isFavoriteOptimistic: this.isFavorited,
            likesOptimistic: this.likes
        }
    },

    methods: {
        handleLike(){
            this.isFavoriteOptimistic ? this.likesOptimistic-- : this.likesOptimistic++;
            this.isFavoriteOptimistic = !this.isFavoriteOptimistic
            this.$store.dispatch(actionTypes.toggleToFavorite, {postId: this.articleId})
        }
    }

}
</script>

<style scoped>

</style>
