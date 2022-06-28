<template>
    <ul class="pagination flex-wrap">
        <li v-for="page in pages" :key="page" class="page-item" :class="{active: currentPage === page }">
            <router-link class="page-link" :to="{ path: url, query:{page: page} }">{{ page }}</router-link>
        </li>
    </ul>
</template>

<script>
import {range} from "../helpers/utils";

export default {
    name: "McvPagination",
    props: {
        total: {
            required: true,
            type: Number
        },
        limit: {
            required: true,
            type: Number
        },
        currentPage: {
            required: true,
            type: Number
        },
        url: {
            required: true,
            type: String
        }
    },

    computed: {
        pages() {
            const pagesCount = Math.ceil(this.total / this.limit)
            return range(1, pagesCount)
        }
    }
}
</script>

<style scoped>

    .pagination-lg .page-link {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem; }

    .pagination-lg .page-item:first-child .page-link {
        border-bottom-left-radius: 0.3rem;
        border-top-left-radius: 0.3rem; }

    .pagination-lg .page-item:last-child .page-link {
        border-bottom-right-radius: 0.3rem;
        border-top-right-radius: 0.3rem; }

    .pagination-sm .page-link {
        padding: 0.275rem 0.75rem;
        font-size: 0.875rem; }

    .pagination-sm .page-item:first-child .page-link {
        border-bottom-left-radius: 0.2rem;
        border-top-left-radius: 0.2rem; }

    .pagination-sm .page-item:last-child .page-link {
        border-bottom-right-radius: 0.2rem;
        border-top-right-radius: 0.2rem; }

    .page-item {
        display: inline; }
    .page-item:first-child .page-link {
        margin-left: 0;
        border-bottom-left-radius: 0.25rem;
        border-top-left-radius: 0.25rem; }
    .page-item:last-child .page-link {
        border-bottom-right-radius: 0.25rem;
        border-top-right-radius: 0.25rem; }
    .page-item.active .page-link, .page-item.active .page-link:focus, .page-item.active .page-link:hover {
        z-index: 2;
        color: #fff;
        cursor: default;
        background-color: #431987;
        border-color: #431987; }
    .page-item.disabled .page-link, .page-item.disabled .page-link:focus, .page-item.disabled .page-link:hover {
        color: #818a91;
        pointer-events: none;
        cursor: not-allowed;
        background-color: #fff;
        border-color: #ddd; }
</style>
