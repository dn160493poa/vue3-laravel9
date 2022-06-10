import api from "./axios";

const getArticle = postId => {
    return api.get(`/api/posts/${postId}`)
}


export default {
    getArticle
}