import React from "react"
import lazyLoad from "@/router/utils/lazyLoad"
import { RouteObject } from "@/router/interface"

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
    {
        path: "/dataScreen/index",
        element: lazyLoad(React.lazy(() => import("@/pages/dataScreen/index"))),
        meta: {
            requiresAuth: true,
            title: "数据大屏",
            key: "dataScreen",
        },
    },
]

export default dataScreenRouter
