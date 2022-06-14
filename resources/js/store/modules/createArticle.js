import article from "../../api/article";

const state = {
    isSubmitting: false,
    validationErrors: null
}

export const mutationTypes = {
    createArticleStart: '[createArticle] Create Article start',
    createArticleSuccess: '[createArticle] Create Article success',
    createArticleFailure: '[createArticle] Create Article failure',
}

export const actionTypes ={
    createArticle: '[createArticle] Create Article'
}

const mutations = {
    [mutationTypes.createArticleStart](state) {
        state.isSubmitting = true
    },
    [mutationTypes.createArticleSuccess](state) {
        state.isSubmitting = false
    },
    [mutationTypes.createArticleFailure](state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

const actions = {
    [actionTypes.createArticle](context, {articleData}){
        return new Promise(resolve => {
            context.commit(mutationTypes.createArticleStart)
            article.createArticle(articleData).then(article => {
                context.commit(mutationTypes.createArticleSuccess, article)
                resolve(article)
            }).catch(error => {
                context.commit(mutationTypes.createArticleFailure, error)
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
