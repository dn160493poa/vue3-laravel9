import article from "../../api/article";

const state = {
    isSubmitting: false,
    validationErrors: null,
    isLoading: false,
    data: null
}

export const mutationTypes = {
    updateArticleStart: '[updateArticle] Edit Article start',
    updateArticleSuccess: '[updateArticle] Edit Article success',
    updateArticleFailure: '[updateArticle] Edit Article failure',

    getArticleStart: '[getArticle] Get Article start',
    getArticleSuccess: '[getArticle] Get Article success',
    getArticleFailure: '[getArticle] Get Article failure',
}

export const actionTypes = {
    updateArticle: '[updateArticle] Update Article',
    getArticle: '[getArticle] Get Article'
}

const mutations = {
    [mutationTypes.updateArticleStart](state) {
        state.isSubmitting = true
    },
    [mutationTypes.updateArticleSuccess](state) {
        state.isSubmitting = false
    },
    [mutationTypes.updateArticleFailure](state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    },
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getArticleFailure](state) {
        state.isLoading = false
    }
}

const actions = {
    [actionTypes.updateArticle](context, {postId, articleData}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.updateArticleStart)
            article.updateArticle(postId, articleData).then(article => {
                context.commit(mutationTypes.updateArticleSuccess, article)
                resolve(article)
            }).catch(error => {
                context.commit(mutationTypes.updateArticleFailure, error)
                resolve(error)
            })
        })
    },

    [actionTypes.getArticle](context, {postId}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getArticleStart)
            article.getArticle(postId).then(article => {
                context.commit(mutationTypes.getArticleSuccess, article.data.data)
                resolve(article)
            }).catch(error => {
                context.commit(mutationTypes.getArticleFailure, error)
                resolve(error)
            })
        })
    }
}

export default {
    state,
    actions,
    mutations
}
