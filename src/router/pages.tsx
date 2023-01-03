import React, { lazy } from "react"

//懒加载 引入跳转的组件
//懒加载的模式的组件的写法，外面需要套一层 Loading 的提示加载组件 React.suspense 
const Home = lazy(() => import('@/views/home'))
const About = lazy(() => import('@/views/about'))

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>
)

const pages = [
    {
        path: 'home',
        label: '首页',
        element: withLoadingComponent(<Home />)
    },
    {
        path: 'about',
        label: "关于",
        children: [
            {
                path: 'list',
                label: '关于',
                element: withLoadingComponent(<About />)
            }
        ]
    },
]

export default pages