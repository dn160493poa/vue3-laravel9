import authApi from './../../api/auth'
import {setItem} from '../../helpers/persistanceStorage'

const state = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}

export const mutationTypes = {
    registerStart: '[auth] registerStart',
    registerSuccess: '[auth] registerSuccess',
    registerFailure: '[auth] registerFailure',

    loginStart: '[auth] loginStart',
    loginSuccess: '[auth] loginSuccess',
    loginFailure: '[auth] loginFailure',

    getCurrentUserStart: '[auth] getCurrentUserStart',
    getCurrentUserSuccess: '[auth] getCurrentUserSuccess',
    getCurrentUserFailure: '[auth] getCurrentUserFailure',
}

const mutations = {
    [mutationTypes.registerStart](state){
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.registerSuccess](state, payload){
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    [mutationTypes.registerFailure](state, payload){
        state.isSubmitting = false
        state.validationErrors = payload
    },
    [mutationTypes.loginStart](state){
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.loginSuccess](state, payload){
        state.isSubmitting = false
        state.currentUser = payload 
        state.isLoggedIn = true
    },
    [mutationTypes.loginFailure](state, payload){
        state.isSubmitting = false
        state.validationErrors = payload
    },
    [mutationTypes.getCurrentUserStart](state){
        state.isLoading = true
    },
    [mutationTypes.getCurrentUserSuccess](state, payload){
        state.isLoading = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    [mutationTypes.getCurrentUserFailure](state){
        state.isLoading = false
        state.isLoggedIn = false
        state.currenUser = null
    }
}

export const actionTypes = {
    register: '[auth] register',
    login: '[auth] login',
    getCurrentUser: '[auth] getCurrentUser'
}

export const gettersType = {
    currentUser: '[auth] currentUser',
    isLoggedIn: '[auth] isLoggedIn',
    isAnonymous: '[auth] isAnonymous'
}

const getters = {
    [gettersType.currentUser]: state => {
        return state.currentUser
    },
    [gettersType.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [gettersType.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
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
    },
    [actionTypes.login](context, credentials){
        return new Promise(resolve => {
            context.commit(mutationTypes.loginStart)
            authApi.login(credentials)
                .then( res => {
                    context.commit(mutationTypes.loginSuccess, res.data)
                    setItem('access_token', res.data.access_token)
                    resolve(res.data)
                })
                .catch( error => {
                    context.commit(mutationTypes.loginFailure, error.response.data.errors)
                })
        })
    },

    [actionTypes.getCurrentUser](context){
        return new Promise(resolve => {
            context.commit(mutationTypes.getCurrentUserStart)
            authApi.getCurrentUser()
                .then( res => {
                    context.commit(mutationTypes.getCurrentUserSuccess, res.data)
                    resolve(res.data)
                })
                .catch( () => {
                    context.commit(mutationTypes.getCurrentUserFailure)
                })
        })
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}