import React, { useState } from 'react';
import { Layout, Menu, Input, Card, Row, Col } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  HistoryOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

import Modal from '../07-Modal/Modal';
import History from '../09-History/History';
import Temp from '../08-Graphs/Temp';

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
        <Menu theme="dark" defaultSelectedKeys={['graphs']} mode="inline">
          <Menu.Item key="graphs" icon={<PieChartOutlined />}>
            <Link to="graphs">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<DesktopOutlined />} title="Preferences">
            <Menu.Item key="2" icon={<DashboardOutlined />}>
              SleepGoal <Input min={4} max={12} defaultValue={8}></Input>
            </Menu.Item>
            {/* <Menu.Item key="3" icon={<EyeInvisibleOutlined />}>Bed-Time</Menu.Item>
              <Menu.Item key="4" icon={<EyeOutlined />}>Wake-Time</Menu.Item> */}
          </SubMenu>
          <Menu.Item key="history" icon={<HistoryOutlined />}>
            <Link to="history">History</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<ArrowRightOutlined />} onClick={logOutUser}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Modal />
        <Content style={{ margin: '25px 35px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
