import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import uniq from 'lodash/uniq'
import { useLoginStore } from '@/store'

// 导入modules相关路由
const modules = import.meta.glob('./modules/*.ts',{ eager: true })

const routerList = mapModuleRouterList(modules)

const defaultRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/index.vue'),
        meta: {
            hideNavbar: true,
        }
    },
    {
        path: '/',
        redirect: '/login',
    }
]

export const allRoutes = [...defaultRoutes,...routerList]

// 导入modules的所有路由
export function mapModuleRouterList(modules: Record<string, unknown>): Array<RouteRecordRaw> {
    const routerList: Array<RouteRecordRaw> = []
    Object.keys(modules).forEach((key) => {
        // @ts-ignore
        const mod = modules[key].default || {}
        const modList = Array.isArray(mod) ? [...mod] : [mod]
        routerList.push(...modList)
    })
    return routerList
}

// 创建路由菜单转换
export const generateMenuList = () => {
    const menuList = routerList
        .filter(route => route.children && route.children.length > 0)
        .map(route => {
            return {
                title: route.meta.title ?? '',
                icon: route.meta.icon ?? 'circle',
                path: route.path,
                children: route.children.map(child => {
                    return {
                        title: child.meta.title ?? '',
                        icon: child.meta.icon ?? 'circle',
                        path: `${route.path}/${child.path}`
                    }
                })
            }
        })
    //console.log(menuList)
    return menuList
}

const router = createRouter({
    history: createWebHistory(),
    routes: allRoutes,
})


// 全局路由守卫，用来做一些全局的拦截
router.beforeEach(async (to, from, next) => {
    const loginStore = useLoginStore()

    // 已登录状态，直接放行
    if(loginStore.loginResult && loginStore.loginResult !== undefined){
        console.log(loginStore.loginResult)
        return next()
    }

    // 白名单，无需登录即可访问
    const whiteList = ['/login']

    // 直接放行
    if(whiteList.includes(to.path)){
        return next()
    }

    // 未登录状态，跳转到登录页
    return next('/login')
})

export default router