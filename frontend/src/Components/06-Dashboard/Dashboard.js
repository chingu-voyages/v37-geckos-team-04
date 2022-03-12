import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  HistoryOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Dashboard() {
  const [visible, setVisible] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  
  const onClose = () => {
    setVisible(false);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={collapsed => setCollapsed(collapsed)}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Preferences">
              <Menu.Item key="2" icon={<DashboardOutlined />}>Sleep Goal</Menu.Item>
              <Menu.Item key="3" icon={<EyeInvisibleOutlined />}>Bed-Time</Menu.Item>
              <Menu.Item key="4" icon={<EyeOutlined />}>Wake-Time</Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<HistoryOutlined />}>
              History
            </Menu.Item>
            <Menu.Item key="6" icon={<ArrowRightOutlined />}>
              Log Out
            </Menu.Item>
          </Menu>
        </Sider>
      {/* <Space style={{float: "right", padding: '15px'}}>
        <Button type="primary" onClick={showDrawer} shape="round" icon={<UserOutlined />} size="large" style={{ marginLeft: "auto" }}></Button>
          
        <Drawer
          title="Drawer with extra actions"
          placement={"left"}
          width={500}
          onClose={onClose}
          visible={visible}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </Space> */}
    </Layout>
  )
} 