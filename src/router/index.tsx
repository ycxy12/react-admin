import React, { lazy } from "react"
//Navigate 路由重定向组件
import { Navigate } from "react-router-dom"

import Layout from "@/layout/index"
//懒加载 引入跳转的组件
//懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件 React.suspense 
const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/about'))

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: '/home',
                element: withLoadingComponent(<Home />)
            },
            {
                path: '/about',
                element: withLoadingComponent(<About />)
            },
        ]
    },
]

export default routes