<template>
    <div class="banner">
        <div class="container">
            <h1>Posts as Real World IO</h1>
            <p>Please to share knowledge</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MvcBanner"
}
</script>

<style scoped>
.banner {
    color: #fff;
    background: #333;
    padding: 2rem;
    margin-bottom: 2rem; }
.banner h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    margin-bottom: 0px; }
.home-page .banner {
    background: #7349b8;
    box-shadow: inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3); }
.home-page .banner p {
    color: #fff;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300 !important;
    margin-bottom: 0px; }
.home-page .banner h1 {
    text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    font-weight: 700 !important;
    text-align: center;
    font-size: 3.5rem;
    padding-bottom: 0.5rem; }
.article-page .banner {
    padding: 2rem 0 2rem 0; }
.article-page .banner h1 {
    font-size: 2.8rem;
    font-weight: 600; }
.article-page .banner .btn {
    opacity: 0.8; }
.article-page .banner .btn:hover {
    transition: 0.1s all;
    opacity: 1; }
.article-page .banner .article-meta {
    margin: 2rem 0 0 0; }
.article-page .banner .article-meta .author {
    color: #fff; }
</style>
