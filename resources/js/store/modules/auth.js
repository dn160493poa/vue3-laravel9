import authApi from './../../api/auth'
import {setItem} from './../../helpers/persistanceStorage'

const state = {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isLoggedId: null
}

const mutations = {
    registerStart(state){
        state.isSubmitting = true
        state.validationErrors = null
    },
    registerSuccess(state, payload){
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedId = true
    },
    registerFailure(state, payload){
        state.isSubmitting = false
        state.validationErrors = payload
    }
}

const actions = {
    register(context, credentials){
        return new Promise(resolve => {
            context.commit('registerStart')
            authApi.register(credentials)
                .then( res => {
                    context.commit('registerSuccess', res.data)
                    setItem('access_token', res.data.access_token)
                    resolve(res.data)
                })
                .catch( error => {
                    context.commit('registerFailure', error.response.data.errors)
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