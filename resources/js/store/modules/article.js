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
}

export const actionTypes = {
    getArticle: '[article] Get article'
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
    }
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
    }
}

export default {
    state,
    actions,
    mutations
}