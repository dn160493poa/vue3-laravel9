import api from "./axios";

const getArticle = postId => {
    return api.get(`/api/post/${postId}`)
}

const deleteArticle = postId => {
    return api.delete(`/api/post/${postId}`, {data: {post: postId}} )
}

const createArticle = articleData => {
    return api.post('/api/post', {data: articleData})
}

const updateArticle = (postId, articleData) => {
    return api.patch(`/api/post/${postId}`,  {post: postId, data: articleData})
}

export default {
    getArticle,
    deleteArticle,
    createArticle,
    updateArticle
}
