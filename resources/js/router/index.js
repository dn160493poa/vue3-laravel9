import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'globalFeed',
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
        component: () => import(/* webpackChunkName: "about" */ '../views/YourFeed')
    },
    {
        path: '/tags/:slug',
        name: 'tag',
        component: () => import(/* webpackChunkName: "about" */ '../views/TagFeed')
    },
    {
        path: '/post/new',
        name: 'article.store',
        component: () => import(/* webpackChunkName: "about" */ '../views/CreateArticle')
    },
    {
        path: '/post/:postId',
        name: 'article.show',
        component: () => import(/* webpackChunkName: "about" */ '../views/Article')
    },
    {
        path: '/post/:postId/edit',
        name: 'article.edit',
        component: () => import(/* webpackChunkName: "about" */ '../views/EditArticle')
    },
    {
        path: '/settings',
        name: 'user.settings',
        component: () => import(/* webpackChunkName: "about" */ '../views/Settings')
    },
    {
        path: '/profile/:userId',
        name: 'user.profile',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile')
    },
    {
        path: '/profile/:userId/favorites',
        name: 'user.favorites',
        component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
