import React, { lazy } from "react"
//Navigate 路由重定向组件
import { Navigate } from "react-router-dom"

import Layout from "@/layout/index"
const Login = lazy(() => import('@/views/login'))

import pages from './pages'

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
        path: "/login",
        element: withLoadingComponent(<Login />)
    },
    {
        path: "/",
        element: <Layout />,
        children: pages
    },
]

export default routes