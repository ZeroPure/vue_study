import Navbar from "@/components/navbar/index.vue"
export default [
    {
        path: '/access-control',
        name: 'access-control',
        component: Navbar,
        meta: {
            title: '权限管理',
            icon: 'user-business',
            requiresAuth: true,
        },
        children: [
            {
                path: 'admin',
                meta:{
                    title: '管理员管理',
                    requiresAuth: true,
                },
                component: () => import('@/pages/accessControl/adminControl/index.vue'),
            },
        ]
    }
]