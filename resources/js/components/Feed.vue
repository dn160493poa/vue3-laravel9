<template>
    <div>
        <mcv-loading v-if="isLoading"></mcv-loading>

        <mcv-error-message v-if="error" :message="error" ></mcv-error-message>

        <div v-if="feed">
            <div class="article-preview" v-for="(article, index) in feed.posts" :key="index">
                <div class="article-meta">
                    <router-link :to="{ name: 'user.profile', params: {slug: article.author.username} }">
                        <img :src="article.author.image" alt="" class="user-icon">
                    </router-link>
                    <div class="info">
                        <router-link :to="{ name: 'user.profile', params: {slug: article.author.username} }"
                                     class="author">
                            {{ article.author.username }}
                        </router-link>
                        <span class="date">{{ article.createdAt }}</span>

                    </div>
                    <div class="float-end">
                        <button class="btn btn-sm btn-outline-success">
                            <i class="ion-heart"></i>
                            <span class="ng-binding ng-scope"> 1429</span>
                        </button>
                    </div>
                </div>
                <router-link :to="{ name: 'article.show', params: {slug: article.slug, postId: article.id}}" class="preview-link">
                    <h1>{{ article.title }}</h1>
                    <p>{{ article.description }}</p>
                    <span>Read more...</span>
                    TAG LIST
                </router-link>
            </div>
            <McvPagination
                :total="feed.total"
                :limit="limit"
                :current-page="currentPage"
                :url="baseUrl"
            ></McvPagination>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from "../store/modules/feed";
import McvPagination from "./Pagination";
import {limit} from "../helpers/vars";
import {stringify, parseUrl} from 'query-string'
import McvLoading from "./Loading";
import McvErrorMessage from "./ErrorMessage";

export default {
    name: "McvFeed",
    components: {
        McvPagination,
        McvLoading,
        McvErrorMessage
    },

    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            limit,
            url: '/tags/dragons'
        }
    },

    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        currentPage() {
            return Number(this.$route.query.page || "1")
        },
        baseUrl() {
            return this.$route.path
        },
        offset (){
            return this.currentPage * limit - limit
        }
    },

    watch: {
        currentPage() {
            this.fetchFeed()
        }
    },

    mounted() {
        this.fetchFeed()
    },

    methods: {
        fetchFeed() {
            const parsedUrl = parseUrl(this.apiUrl)
            const stringifiedParams = stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
            this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
        }
    }
}
</script>

<style scoped>
.user-icon {
    height: 26px;
    border-radius: 50px;
    float: left;
    margin-right: 5px;
}

.article-meta {
    display: block;
    position: relative;
    font-weight: 300;
}

.article-meta img {
    display: inline-block;
    vertical-align: middle;
    height: 32px;
    width: 32px;
    border-radius: 30px;
}

.article-meta .info {
    margin: 0 1.5rem 0 0.3rem;
    display: inline-block;
    vertical-align: middle;
    line-height: 1rem;
}

.info .article-meta .author {
    display: block;
    font-weight: 500 !important;
}

.article-meta .info .date {
    color: #bbb;
    font-size: 0.8rem;
    display: block;
}

.article-preview {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.5rem 0;
}

.article-preview .article-meta {
    margin: 0 0 1rem 0;
}

.article-preview .preview-link h1 {
    font-weight: 600 !important;
    font-size: 1.5rem !important;
    margin-bottom: 3px;
}

.article-preview .preview-link p {
    font-weight: 300;
    font-size: 24px;
    color: #999;
    margin-bottom: 15px;
    font-size: 1rem;
    line-height: 1.3rem;
}

.article-preview .preview-link span {
    max-width: 30%;
    font-size: 0.8rem;
    font-weight: 300;
    color: #bbb;
    vertical-align: middle;
}

.article-preview .preview-link ul {
    float: right;
    max-width: 50%;
    vertical-align: top;
}

.article-preview .preview-link ul li {
    font-weight: 300;
    font-size: 0.8rem !important;
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}

.info .article-meta .date {
    color: #bbb;
    font-size: 0.8rem;
    display: block;
}

.article-meta .info .author {
    display: block;
    font-weight: 500 !important;
}

a {
    color: #5CB85C;
    text-decoration: none;
    background-color: transparent;
}


</style>