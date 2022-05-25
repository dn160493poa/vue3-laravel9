import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "about" */ '../views/Register')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login')
    },
    {
        path: '/feed',
        name: 'yourFeed',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/feed/:slug',
        name: 'tag',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/article/new',
        name: 'article.store',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/article/:slug',
        name: 'article.show',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/article/:slug/edit',
        name: 'article.edit',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/settings',
        name: 'user.settings',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/profile/:slug',
        name: 'user.profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    },
    {
        path: '/profile/:slug/favorites',
        name: 'user.favorites',
        component: () => import(/* webpackChunkName: "about" */ '../views/GlobalFeed')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router