import api from "./axios";

const getArticle = postId => {
    return api.get(`/api/posts/${postId}`)
}

const deleteArticle = postId => {
    return api.delete(`/api/posts/${postId}`, {data: {post: postId}} )
}

const createArticle = articleData => {
    return api.post('/api/posts', {data: articleData})
}

const updateArticle = (postId, articleData) => {
    return api.patch(`/api/posts/${postId}`,  {post: postId, data: articleData})
}

export default {
    getArticle,
    deleteArticle,
    createArticle,
    updateArticle
}
