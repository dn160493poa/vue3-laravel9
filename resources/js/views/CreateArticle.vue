<template>
    <mcv-article-form
        :initial-values="initialValues"
        :errors="validationErrors"
        :is-submitting="isSubmitting"
        @articleSubmit="onSubmit"
    >

    </mcv-article-form>
</template>

<script>
import {mapState} from 'vuex'
import McvArticleForm from "../components/ArticleForm";
import {actionTypes} from "../store/modules/createArticle";

export default {
    name: "CreateArticle",
    components:{
        McvArticleForm
    },

    data() {
        return {
            initialValues: {
                title: '',
                description: '',
                body: '',
                tagList: [],
            },
        }
    },

    computed: {
        ...mapState({
            isSubmitting: state => state.createArticle.isSubmitting,
            validationErrors: state => state.createArticle.validationErrors,
        }),
    },

    methods: {
        onSubmit(articleData){
            this.$store.dispatch(actionTypes.createArticle, {articleData})
            .then(articleId => {
                this.$router.push({ name: 'article.show', params: {postId: articleId.data.id} })
            })
        }
    }
}
</script>

<style scoped>

</style>
