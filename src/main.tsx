import React from "react"
import ReactDOM from "react-dom/client"
import "reset-css" //重置css
import "@/styles/index.less"
import "virtual:svg-icons-register" //引入svg
import { Provider } from "react-redux" //通过Provider将数据传递react子组件
import { PersistGate } from "redux-persist/integration/react" //持久化数据 & 页面刷新缓存初始化问题
import { store, persistor } from "./store"
import App from "./App"

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root")!).render(
    // * react严格模式
    // <React.StrictMode>
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    // </React.StrictMode>
)
