// import React from "react";
// import lazyLoad from "@/router/util/lazyLoad";
import { LayoutIndex } from "@/router/constant"
import { RouteObject } from "@/router/interface"
import Home from "@/pages/home/index"

// 首页模块
const homeRouter: Array<RouteObject> = [
    {
        element: <LayoutIndex />,
        children: [
            {
                path: "/home",
                // element: lazyLoad(React.lazy(() => import("@/views/home/index"))),
                element: <Home />,
                meta: {
                    requiresAuth: true,
                    title: "首页",
                    key: "home",
                },
            },
        ],
    },
]

export default homeRouter
