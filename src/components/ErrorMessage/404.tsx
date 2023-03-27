import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { HOME_URL } from "@/common/config"
import "./index.less"

const NotFound = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate(HOME_URL)
    }
    return (
        <Result
            status="404"
            title="404"
            subTitle="很抱歉, 您访问的页面不存在!"
            extra={
                <Button type="primary" onClick={goHome}>
                    返回首页
                </Button>
            }
        />
    )
}

export default NotFound
