import userProfileApi from "../../api/userProfile";

const state = {
    data: null,
    isLoading: false,
    error: null
}

export const mutationTypes = {
    getUserProfileStart: '[userProfile] Get user profile start',
    getUserProfileSuccess: '[userProfile] Get user profile success',
    getUserProfileFailure: '[userProfile] Get user profile failure',
}

export const actionTypes = {
    getUserProfile: '[userProfile] Get user profile'
}

const mutations = {
    [mutationTypes.getUserProfileStart](state){
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getUserProfileSuccess](state, payload){
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getUserProfileFailure](state){
        state.isLoading = false
    }
}

const actions = {
    [actionTypes.getUserProfile](context, {userId}){
        return new Promise(resolve => {
            context.commit(mutationTypes.getUserProfileStart)
            userProfileApi.getUserProfile(userId)
                .then(user => {
                    context.commit(mutationTypes.getUserProfileSuccess, user)
                    resolve(user)
                })
                .catch(error => {
                    context.commit(mutationTypes.getUserProfileFailure)
                    resolve(error)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}
