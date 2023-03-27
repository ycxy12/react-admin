import { useState, useEffect } from "react"
import { ConfigProvider } from "antd"
import { HashRouter } from "react-router-dom"
import AuthRouter from "@/router/utils/authRouter"
import Router from "@/router/index"

const App = (props: any) => {
    const theme = {
        token: {
            // colorPrimary: "#b14449",
            // colorPrimaryHover: "#c75b59",
        },
    }

    return (
        <HashRouter>
            <ConfigProvider theme={theme}>
                <AuthRouter>
                    <Router />
                </AuthRouter>
            </ConfigProvider>
        </HashRouter>
    )
}

export default App
