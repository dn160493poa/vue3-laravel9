import authApi from './../../api/auth'

const state = {
    isSubmitting: false
}

const mutations = {
    registerStart(state){
        state.isSubmitting = true
    }
}

const actions = {
    register(context, credentials){
        return new Promise(() => {
            authApi.register(credentials)
                .then( res => {
                    console.log(res)
                })
                .catch( error => {
                    console.log('errors: ', error)
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