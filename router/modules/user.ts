import Navbar from "@/components/navbar/index.vue"
export default [
    {
        path: "/user",
        name: "user",
        component: () => Navbar,
        meta: {
            title: '用户管理',
            icon: 'user-1',
        },
        children: [
            {
                meta:{title: '用户余额记录',},
                path: 'user-balance-record',
                component: () => import('@/pages/user/record/index.vue')
            }
        ]
    }
]