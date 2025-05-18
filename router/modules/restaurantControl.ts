import Navbar from "@/components/navbar/index.vue"

export default [
    {
        path: '/restaurantControl',
        name: 'restaurantControl',
        component: Navbar,
        meta: {
            title: '餐厅管理',
            icon: 'shop-3',
        },
        children: [
            {
                meta:{title: '员工管理',},
                path: 'list',
                component: () => import('@/pages/restaurantControl/list/index.vue')
            },
            {
                meta: { title: '菜单管理' },
                path: 'dish',
                component: () => import('@/pages/restaurantControl/dish/index.vue')
            }
        ]
    }
]