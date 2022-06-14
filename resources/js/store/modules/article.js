import article from "../../api/article";

const state = {
    data:null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getArticleStart: '[article] Get article start',
    getArticleSuccess: '[article] Get article success',
    getArticleFailure: '[article] Get article failure',

    deleteArticleStart: '[article] Delete article start',
    deleteArticleSuccess: '[article] Delete article success',
    deleteArticleFailure: '[article] Delete article failure',
}

export const actionTypes = {
    getArticle: '[article] Get article',
    deleteArticle: '[article] Delete article'
}

const mutations = {
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getArticleFailure](state) {
        state.isLoading = true
    },

    [mutationTypes.deleteArticleStart]() {},
    [mutationTypes.deleteArticleSuccess]() {},
    [mutationTypes.deleteArticleFailure]() {},
}

const actions = {
    [actionTypes.getArticle](context, {postId}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getArticleStart, postId)
            article.getArticle(postId)
                .then(res => {
                    context.commit(mutationTypes.getArticleSuccess, res.data.data)
                    resolve(res.data.data)
                })
                .catch(() => {
                    context.commit(mutationTypes.getArticleFailure)
                })
        })
    },
    [actionTypes.deleteArticle](context, {postId}) {
        return new Promise(() => {
            context.commit(mutationTypes.deleteArticleStart, postId)
            article.deleteArticle(postId)
                .then(() => {
                    context.commit(mutationTypes.deleteArticleSuccess)
                })
                .catch(() => {
                    context.commit(mutationTypes.deleteArticleFailure)
                })
        })
    }
}

export default {
    state,
    actions,
    mutations
}
