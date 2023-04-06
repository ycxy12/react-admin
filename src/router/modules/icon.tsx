import React from "react"
import lazyLoad from "@/router/utils/lazyLoad"
import { LayoutIndex } from "@/router/constant"
import { RouteObject } from "@/router/interface"

//icon svg 图标
const SvgIcon: Array<RouteObject> = [
    {
        element: <LayoutIndex />,
        children: [
            {
                path: "/icon",
                element: lazyLoad(React.lazy(() => import("@/pages/Icon/index"))),
                meta: {
                    requiresAuth: true,
                    title: "图标",
                    key: "icon",
                },
            },
        ],
    },
]

export default SvgIcon
