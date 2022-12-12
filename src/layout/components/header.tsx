import type { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';
import logo from "@/assets/images/logo.png"
import avatar from "@/assets/images/avatar.png"

const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info("退出");
};

const items: MenuProps['items'] = [
    { key: '1', label: '退出', },
];

const Header = () => (
    <header className="header">
        <div className="header_left">
            <img src={logo} alt="" className='header_logo' />
            <span>后台管理系统</span>
        </div>
        <div className="header_right">
            <span>User Name</span>
            <Dropdown menu={{ items, onClick }} placement="bottomLeft">
                <img src={avatar} alt="" className='header_avatar' />
            </Dropdown>
        </div>
    </header>
)

export default Header