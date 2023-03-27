import { Layout } from "antd"
import AvatarIcon from "./components/AvatarIcon"
import CollapseIcon from "./components/CollapseIcon"
import Fullscreen from "./components/Fullscreen"
import "./index.less"

const LayoutHeader = () => {
    const { Header } = Layout

    return (
        <Header>
            <div className="header-lf">
                <CollapseIcon />
            </div>
            <div className="header-ri">
                <Fullscreen />
                <span className="username">Admin</span>
                <AvatarIcon />
            </div>
        </Header>
    )
}

export default LayoutHeader
