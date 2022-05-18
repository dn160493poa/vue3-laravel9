import authApi from './../../api/auth'
import {setItem} from './../../helpers/persistanceStorage'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedId: null
}

export const mutationTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailure: '[auth] registerFailure'
}

const mutations = {
    [mutationTypes.registerStart](state){
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.registerSuccess](state, payload){
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedId = true
    },
    [mutationTypes.registerFailure](state, payload){
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

export const actionTypes = {
    register: '[auth] register'
}

const actions = {
    [actionTypes.register](context, credentials){
        return new Promise(resolve => {
            context.commit(mutationTypes.registerStart)
            authApi.register(credentials)
                .then( res => {
                    context.commit(mutationTypes.registerSuccess, res.data)
                    setItem('access_token', res.data.access_token)
                    resolve(res.data)
                })
                .catch( error => {
                    context.commit(mutationTypes.registerFailure, error.response.data.errors)
                })
        })
        // setTimeout(() => {
        //     context.commit('registerStart')
        // }, 1000)
    }
}

export default {
    state,
    mutations,
    actions
}