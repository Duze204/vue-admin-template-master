import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isShowLoading: false, // 全局 loading
        // 左侧菜单栏数据
        // http://v1.iviewui.com/components/icon
        menuItems: [
            {
                name: 'home',
                type: 'md-home', // icon类型
                text: '主页', // 文本内容
            },
            {
                name: '0',
                type: 'md-albums',
                text: '页面零',
            },
            {
                type: 'md-list',
                name: '1',
                text: '页面一',
            },
            {
                type: 'md-stats',
                name: '2',
                text: '页面二',
            },
            {
                type: 'ios-trending-up',
                name: '3',
                text: '页面三',
            },
        ],
    },
    mutations: {
        setMenus(state, items) {
            state.menuItems = [...items]
        },
        setLoading(state, isShowLoading) {
            state.isShowLoading = isShowLoading
        },
    },
})

export default store
