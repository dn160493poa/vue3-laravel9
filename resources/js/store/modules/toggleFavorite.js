import togglePostApi from "../../api/toggleFavorite";

export const mutationTypes = {
    toggleToFavoriteStart: '[toggleToFavorite] Toggle to favorite start',
    toggleToFavoriteSuccess: '[toggleToFavorite] Toggle to favorite success',
    toggleToFavoriteFailure: '[toggleToFavorite] Toggle to favorite failure'
}

export const actionTypes = {
    toggleToFavorite: '[toggleToFavorite] Toggle to favorite'
}

const mutations = {
    [mutationTypes.toggleToFavoriteStart](){},
    [mutationTypes.toggleToFavoriteSuccess](){},
    [mutationTypes.toggleToFavoriteFailure](){}
}

const actions = {
    [actionTypes.toggleToFavorite](context, {postId}){
        return new Promise(resolve => {
            context.commit(mutationTypes.toggleToFavoriteStart)
            togglePostApi.toggleFavorite(postId)
                .then(res => {
                    context.commit(mutationTypes.toggleToFavoriteSuccess, res)
                    resolve(res)
                    console.log(res)
                })
                .catch(error => {
                    context.commit(mutationTypes.toggleToFavoriteFailure, error)
                    resolve(error)
                })
        })
    }
}

export default {
    actions,
    mutations
}
