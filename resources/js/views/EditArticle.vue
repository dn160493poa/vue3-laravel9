<template>
    <div>
        <mcv-loading v-if="isLoading"></mcv-loading>
        <mcv-article-form
            v-if="initialValues"
            :initial-values="initialValues"
            :errors="validationErrors"
            :is-submitting="isSubmitting"
            @articleSubmit="onSubmit"
        >
            {{article}}
        </mcv-article-form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import McvArticleForm from "../components/ArticleForm";
import McvLoading from "../components/Loading";
import {actionTypes} from "../store/modules/editArticle";

export default {
    name: "McvEditArticle",
    components:{
        McvArticleForm,
        McvLoading
    },

    computed: {
        ...mapState({
            isSubmitting: state => state.editArticle.isSubmitting,
            isLoading: state => state.editArticle.isLoading,
            article: state => state.editArticle.data,
            validationErrors: state => state.editArticle.validationErrors,
        }),
        initialValues() {
            if(!this.article){
                return null
            }
            return {
                title: this.article.title,
                description: this.article.description,
                body: this.article.body,
                tagList: this.article.tags,
            }
        },

    },

    mounted() {
        this.$store.dispatch(actionTypes.getArticle, {
            postId: this.$route.params.postId
        })
    },

    methods: {
        onSubmit(articleData){
            const postId = this.$route.params.postId
            this.$store.dispatch(actionTypes.updateArticle, {postId, articleData})
                .then(articleId => {
                    this.$router.push({ name: 'article.show', params: {postId: articleId.data.id} })
                })
        }
    }
}
</script>

<style scoped>

</style>
