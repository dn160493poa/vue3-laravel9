import api from "./axios";

const toggleFavorite = postId => {
    return api.post(`/api/post/${postId}/like`)
        .then(res => {
            res.data.post
        })
}

export default {
    toggleFavorite
};
