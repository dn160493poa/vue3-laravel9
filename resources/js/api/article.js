import api from "./axios";

const getArticle = postId => {
    return api.get(`/api/posts/${postId}`)
}

const deleteArticle = postId => {
    return api.delete(`/api/posts/${postId}`)
}


export default {
    getArticle,
    deleteArticle
}