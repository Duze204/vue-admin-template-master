import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const commonRoutes = [
    {
        path: '/login',
        name: 'login',
        meta: { title: '登录' },
        component: () => import('../components/Login.vue'),
    },
    {
        path: '/other', // 点击侧边栏跳到一个单独的路由页面，需要定义，层级和其他顶级路由一样
        name: 'other',
        meta: { title: '单独的路由' },
        component: () => import('../views/Other.vue'),
    },
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

// 本地所有的页面 需要配合后台返回的数据生成页面
export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    0: {
        path: '0',
        name: '0',
        meta: { title: '页面0' },
        component: () => import('../views/0.vue'),
    },
    1: {
        path: '1',
        name: '1',
        meta: { title: '页面1' },
        component: () => import('../views/1.vue'),
    },
    2: {
        path: '2',
        name: '2',
        meta: { title: '页面2' },
        component: () => import('../views/2.vue'),
    },
    3: {
        path: '3',
        name: '3',
        meta: { title: '页面3' },
        component: () => import('../views/3.vue'),
    },
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router
