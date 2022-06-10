<template>
  <div class="article-page">
    <div class="banner">
      <div class="container" v-if="article">
        <h1>{{article.title}}</h1>
        <div class="article-meta">
          <router-link :to="{name: 'user.profile', params: {userId: article.author.id}}">
            <img :src="article.author.image" alt="" class="user-icon">
          </router-link>
          <div class="info">
            <router-link :to="{name: 'user.profile', params: {userId: article.author.id}}">
              {{article.author.username}}
            </router-link>
            <span class="date">{{article.createdAt}}</span>
          </div>
          <span v-if="isAuthor">
            <router-link class="btn btn-outline-secondary btn-sm" :to="{name: 'article.edit', params: {postId: article.id}}">
              <i class="ion-edit"></i>Edit Article
            </router-link>
            <button class="btn btn-outline-danger btn-sm " @click="deleteArticle">
              <i class="ion-trash-a"></i>Delete Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="container page">
        <mcv-loading v-if="isLoading"></mcv-loading>
        <mcv-error-message v-if="error" :message="error"></mcv-error-message>
        <div class="row article-content" v-if="article">
          <div class="col-sm-12">
            <div>
              <p>{{ article.body }}</p>
            </div>
            TAGLIST
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {actionTypes as articleActionTypes} from "../store/modules/article";
import {gettersType as authGetterTypes} from "../store/modules/auth";
import {mapState, mapGetters} from 'vuex'
import McvLoading from "../components/Loading";
import McvErrorMessage from "../components/ErrorMessage";

export default {
  name: "McvArticle",
  components: {
    McvLoading,
    McvErrorMessage
  },

  computed: {
    ...mapState({
      isLoading: state => state.article.isLoading,
      error: state => state.article.error,
      article: state => state.article.data
    }),
    ...mapGetters({
      currentUser: authGetterTypes.currentUser
    }),
    isAuthor(){
      if(!this.article || ! this.currentUser){
        return false
      }
      return this.currentUser.id === this.article.author.id
    }
  },

  mounted() {
    this.$store.dispatch(articleActionTypes.getArticle, {postId: this.$route.params.postId})
  },

  methods: {
    deleteArticle() {
      this.$store
        .dispatch(articleActionTypes.deleteArticle, {
          postId: this.$route.params.postId
        })
        .then(this.$router.push({name: 'globalFeed'}))
    }

  }
}
</script>

<style scoped>
  .banner {
    color: #fff;
    background: #333;
    padding: 2rem;
    margin-bottom: 2rem; }
  .banner h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 0px; }

  .banner {
    padding: 2rem 0 2rem 0; }
  .banner h1 {
    font-size: 2.8rem;
    font-weight: 600; }
  .banner .btn {
    opacity: 0.8; }
  .banner .btn:hover {
    transition: 0.1s all;
    opacity: 1; }
   .banner .article-meta {
    margin: 2rem 0 0 0; }

  .article-meta {
    display: block;
    position: relative;
    font-weight: 300; }
  .article-meta img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px; }
  .article-meta .info {
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem; }

  .article-meta .info .date {
    color: #bbb;
    font-size: 0.8rem;
    display: block; }

  .info {
    text-align: left; }

  .container.page {
    margin-top: 1.5rem; }

  .user-icon {
    height: 26px;
    border-radius: 50px;
    float: left;
    margin-right: 5px;
  }

  .article-page .article-content p {
    font-family: 'Source Serif Pro', serif;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-bottom: 2rem; }

  .article-page .article-content h1, .article-page .article-content h2, .article-page .article-content h3, .article-page,
  .article-content h4, .article-page .article-content h5, .article-page .article-content h6 {
    font-weight: 500 !important;
    margin: 1.6rem 0 1rem 0; }

</style>