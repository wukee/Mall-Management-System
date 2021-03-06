/**
 * @Author: wuke
 * @Date: 2018/8/24
 * @Last Modified by: wuke
 * @Last Modified time: 2018/8/24
 */

'use strict';
import *as React from 'react';

import 'font-awesome/css/font-awesome.min.css'
import { Layout, Menu,Breadcrumb, Icon } from 'antd';
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
                            {/*<Icon type="pie-chart" />*/}
                            <Icon type="appstore" theme="outlined" />
                            <span>首页</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="bars" theme="outlined" /><span>商品</span></span>}
                        >
                            <Menu.Item key="3">商品管理</Menu.Item>
                            <Menu.Item key="4">品类管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="check-square" theme="outlined" /><span>订单</span></span>}
                        >
                            <Menu.Item key="6">订单管理</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={<span><Icon type="user" /><span>用户</span></span>}
                        >
                            <Menu.Item key="3">用户管理</Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout>
                    <Header className='header'>
                        <span>电商后台管理系统</span>
                        <div className='user'>
                            {/*<span>wuke<i className='fa fa-user'></i><i className='fa fa-gear'></i></span>*/}
                                <span>wuke <Icon type="user" /><Icon type="setting" /></span>


                        </div>

                    </Header>
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