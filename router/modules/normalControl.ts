import Navbar from "@/components/navbar/index.vue"

export default [
    {
        path: '/normalControl',
        name: 'normalControl',
        component: Navbar,
        meta: {
            title: '常规管理',
            icon: 'setting-1',
        },
        children: [
            {
                meta:{title: '个人资料',},
                path: 'personal-profile',
                component: () => import('@/pages/normalControl/perProfile/index.vue')
            },
        ],
    }
]