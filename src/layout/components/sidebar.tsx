import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import type { MenuProps } from 'antd';
import { Layout, Menu, } from 'antd';
import routes from "@/router/pages"

const { Sider } = Layout;


const Sidebar = () => {
    //展开 收起
    const [collapsed, setCollapsed] = useState(false);
    // 路由
    const [router, setRouter] = useState(routes)

    //设置路由key 为跳转地址
    const setKeyPath = (item: any) => {
        item.children.forEach((element: any) => {
            element['key'] = item.key + '/' + element.path
            if (element.children) {
                setKeyPath(element)
            }
        });
    }
    router.forEach((item: any) => {
        item['key'] = item.path
        if (item.children) {
            setKeyPath(item)
        }
    })

    // 选择的菜单
    const [selectKeys, setSelectKeys] = useState<string[]>([])
    // 展开 的菜单
    const [openkeys, setOpenKeys] = useState<string[]>([])
    // 路由导航
    const navigate = useNavigate()

    // 点击菜单事件
    const handlerMenu: MenuProps['onClick'] = e => {
        setOpenKeys([e.key])
        setSelectKeys([e.key])
        // 路由跳转
        navigate(e.key)
    };


    return (
        <Sider width={200} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Menu
                mode="inline"
                theme="dark"
                defaultSelectedKeys={selectKeys}
                defaultOpenKeys={openkeys}
                style={{ height: '100%', borderRight: 0 }}
                items={router}
                onClick={handlerMenu}
            />
        </Sider>
    )
}

export default Sidebar