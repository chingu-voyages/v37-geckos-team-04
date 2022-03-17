import React, { useState } from 'react';
import { Layout, Menu, Input, Card, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  HistoryOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';

import Modal from '../07-Modal/Modal';


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
            <Menu.Item key="2" icon={<DashboardOutlined />}>
              SleepGoal        <Input min={4} max={12} defaultValue={8}></Input>
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<EyeInvisibleOutlined />}>Bed-Time</Menu.Item>
            <Menu.Item key="4" icon={<EyeOutlined />}>Wake-Time</Menu.Item> */}
          </SubMenu>
          <Menu.Item key="5" icon={<HistoryOutlined />}>
            History
          </Menu.Item>
          <Menu.Item key="6" icon={<ArrowRightOutlined />}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0, float: "right", color:"white", textAlign:"center" }}> 
          Header Content Goes Here
          <Modal />
        </Header>
        <Content style={{ margin: '50px 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div className="site-card-wrapper">
              <Row gutter={15}>
                <Col>
                  <Card title="Chart 1" bordered={true} style={{ width: "39vw", height: 250}}>
                    Chart Content
                  </Card>
                </Col>
                <Col>
                  <Card title="Chart 2" bordered={false} style={{ width: "39vw", height: 250}}>
                    Chart Content
                  </Card>
                </Col>
              </Row>
              <Row style={{ marginTop: 15 }}>
                <Col>
                  <Card title="Chart 3" bordered={false} style={{ width: "79vw", height: 320}}>
                    Chart content
                  </Card>
                </Col>
              </Row>
             
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Sleep Tracker ©2022 Created at Chingu!</Footer>
      </Layout>
    </Layout>
  )
} 