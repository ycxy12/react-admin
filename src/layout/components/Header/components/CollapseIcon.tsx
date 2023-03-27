import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons"
import { connect } from "react-redux"
import { updateCollapse } from "@/store/modules/menu/action"

const CollapseIcon = (props: any) => {
    console.log(props)
    const { isCollapse, updateCollapse } = props
    console.log(isCollapse)
    return (
        <div
            className="collapsed"
            onClick={() => {
                updateCollapse(!isCollapse)
            }}
        >
            {isCollapse ? <MenuUnfoldOutlined id="isCollapse" /> : <MenuFoldOutlined id="isCollapse" />}
        </div>
    )
}

const mapStateToProps = (state: any) => state.menu
const mapDispatchToProps = { updateCollapse }
export default connect(mapStateToProps, mapDispatchToProps)(CollapseIcon)
