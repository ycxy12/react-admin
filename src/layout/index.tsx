import React from 'react';
import { Breadcrumb, Layout, } from 'antd';
import { Outlet } from "react-router-dom"
import Header from './components/header';
import Sidebar from './components/sidebar';

const { Content } = Layout;

const layout: React.FC = () => {
    return (
        <Layout className="app_wrapper">
            <Header />
            <Layout>
                <Sidebar />
                <Layout style={{ padding: '0 10px 10px' }}>
                    <Breadcrumb style={{ margin: '10px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 16,
                            margin: 0,
                            minHeight: 280,
                            background: '#fff',
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default layout;