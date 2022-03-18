import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  HistoryOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';

import Graphs from '../08-Graphs/Graphs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutSuccess } from '../../reducers/userSlice';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  // const showDrawer = () => {
  //   setVisible(true);
  // };

  // const onClose = () => {
  //   setVisible(false);
  // };

  const logOutUser = () => {
    dispatch(logOutSuccess());
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
      >
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="Preferences">
            <Menu.Item key="2" icon={<DashboardOutlined />}>
              Sleep Goal
            </Menu.Item>
            <Menu.Item key="3" icon={<EyeInvisibleOutlined />}>
              Bed-Time
            </Menu.Item>
            <Menu.Item key="4" icon={<EyeOutlined />}>
              Wake-Time
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="5" icon={<HistoryOutlined />}>
            History
          </Menu.Item>
          <Menu.Item key="6" icon={<ArrowRightOutlined />} onClick={logOutUser}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            float: 'right',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Header content goes here.
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Graphs />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Sleep Tracker ©2022 Created at Chingu!
        </Footer>
      </Layout>
    </Layout>
  );
}
