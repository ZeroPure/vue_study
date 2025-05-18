import Navbar from "@/components/navbar/index.vue"

export default [
    {
        path: "/regionControl",
        name: "regionControl",
        component: Navbar,
        meta: {
            title: "地址管理",
            icon: 'city-10',
        },
        children:[
            {
                meta:{title: '地址管理',},
                path: 'address-management',
                component: () => import('@/pages/regionControl/addressControl/index.vue')
            }
        ],
    }
]