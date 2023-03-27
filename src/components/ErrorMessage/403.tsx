import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { HOME_URL } from "@/common/config"
import "./index.less"

const NotAuth = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate(HOME_URL)
    }
    return (
        <Result
            status="403"
            title="403"
            subTitle="很抱歉, 您无权访问此页面!"
            extra={
                <Button type="primary" onClick={goHome}>
                    返回首页
                </Button>
            }
        />
    )
}

export default NotAuth
