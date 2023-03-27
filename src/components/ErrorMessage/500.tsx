import { Button, Result } from "antd"
import { useNavigate } from "react-router-dom"
import { HOME_URL } from "@/common/config"
import "./index.less"

const NotNetwork = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate(HOME_URL)
    }
    return (
        <Result
            status="500"
            title="500"
            subTitle="抱歉, 出错了!"
            extra={
                <Button type="primary" onClick={goHome}>
                    返回首页
                </Button>
            }
        />
    )
}

export default NotNetwork
