/**
 * @Author: wuke
 * @Date: 2018/8/24
 * @Last Modified by: wuke
 * @Last Modified time: 2018/8/24
 */

'use strict';
import *as React from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import "./SideBar.scss";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderLayout extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            logo:'MALL Manage'
        };
    }

    onCollapse (collapsed) {
        this.setState({
            collapsed,
            logo:this.state.logo=='WKE'?'MALL Manage':'WKE'
        });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={(collapsed)=>{this.onCollapse(collapsed)}}
                >
                    <div className="logo">{this.state.logo}</div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user" /><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team" /><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className='header'><span>电商后台管理系统</span></Header>
                    <Content style={{ margin: '10px' ,height:'80%'}}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>wuke</Breadcrumb.Item>
                            <Breadcrumb.Item>content</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ padding: 24, background: '#fff', height:'85%'}}>
                            content
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center',height:'30px',background:'#aca8a8'}}>
                        Layout ©2018 Created by wuke
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
export default SiderLayout