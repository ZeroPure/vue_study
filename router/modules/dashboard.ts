import Navbar from "@/components/navbar/index.vue"

export default [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Navbar,
        meta: {
            title: '仪表盘',
            icon: 'dashboard',
        },
        children: [
            {
                path: 'workspace',
                meta:{
                    title: '工作台',
                },
                component: () => import('@/pages/dashboard/workspace/index.vue')
            }
        ],
    }
]