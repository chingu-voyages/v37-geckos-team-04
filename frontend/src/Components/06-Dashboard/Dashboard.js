import React, { useState, useEffect } from 'react';
import { Layout, Menu, Input, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  DashboardOutlined,
  HistoryOutlined,
  // EyeOutlined,
  // EyeInvisibleOutlined,
  ArrowRightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

import Modal from '../07-Modal/Modal';
// import History from '../09-History/History';
// import Temp from '../08-Graphs/Temp';

// import Graphs from '../08-Graphs/Graphs';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutSuccess } from '../../reducers/userSlice';
import { logOut } from '../../reducers/sleepSlice';
import { getSleepData } from '../../reducers/Sleep';
import mockSleepData from '../../__mocks__/mockSleepData';

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isMock, setIsMock] = useState(false);
  const sleepData = useSelector((state) => state.sleepData.data);

  const id =
    JSON.parse(localStorage.getItem('profile')).data.result._id ||
    JSON.parse(localStorage.getItem('profile')).data.result.googleId;

  useEffect(() => {
    dispatch(getSleepData(id));
  }, [dispatch, id]);

  const logOutUser = () => {
    dispatch(logOutSuccess());
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        breakpoint="lg"
        collapsedWidth="0"
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
          <Menu.Item
            key="mock data"
            icon={<FormOutlined />}
            onClick={() => setIsMock((prev) => !prev)}
          >
            <Button
              style={{ padding: 0, color: 'rgba(255, 255, 255, 0.65)' }}
              type="text"
            >
              {isMock ? 'Unmock Data' : 'Mock Data'}
            </Button>
          </Menu.Item>
          <Menu.Item key="6" icon={<ArrowRightOutlined />} onClick={logOutUser}>
            Log Out
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Modal id={id} />
        <Content style={{ margin: '25px 35px' }}>
          {isMock && <h1>Mocked Data</h1>}
          <Outlet context={isMock ? mockSleepData : sleepData} />
        </Content>
      </Layout>
    </Layout>
  );
}
