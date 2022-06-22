import React, { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  HistoryOutlined,
  // EyeOutlined,
  // EyeInvisibleOutlined,
  ArrowRightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

import { SiderContainer } from './style';
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

const { Content } = Layout;

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMock, setIsMock] = useState(false);
  const sleepData = useSelector((state) => state.sleepData.data);
  const [isMobile, setIsMobile] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const id =
    JSON.parse(localStorage.getItem('profile')).data.result._id ||
    JSON.parse(localStorage.getItem('profile')).data.result.googleId;

  useEffect(() => {
    dispatch(getSleepData(id));
  }, [dispatch, id]);

  useEffect(() => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth > 992) {
      setIsMobile(false);
    }
  }, []);

  const logOutUser = () => {
    dispatch(logOutSuccess());
    dispatch(logOut());
    navigate('/');
  };

  function getItem(label, key, icon, children) {
    return {
      label,
      key,
      icon,
      children,
    };
  }

  const items = [
    getItem(
      'Dashboard',
      'graphs',
      <Link to="graphs">
        <PieChartOutlined />
      </Link>
    ),
    getItem(
      'History',
      'history',
      <Link to="history">
        <HistoryOutlined />
      </Link>
    ),
    getItem(
      isMock ? 'Unmock Data' : 'Mock Data',
      'mock data',
      <Link to="#" onClick={() => setIsMock((prev) => !prev)}>
        <FormOutlined />
      </Link>
    ),
    getItem(
      'Logout',
      'logout',
      <Link to="/" onClick={logOutUser}>
        <ArrowRightOutlined />
      </Link>
    ),
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isMobile ? (
        <SiderContainer collapsible breakpoint="lg" collapsedWidth={0}>
          <Menu
            items={items}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['graphs']}
          />
        </SiderContainer>
      ) : (
        <SiderContainer
          collapsible
          collapsed={collapsed}
          onCollapse={(collapsed) => setCollapsed(collapsed)}
        >
          <Menu
            items={items}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['graphs']}
          />
        </SiderContainer>
      )}
      <Layout className="site-layout">
        <Modal id={id} />
        <Content style={{ margin: '5px' }}>
          {isMock && <h1>Mocked Data</h1>}
          <Outlet context={isMock ? mockSleepData : sleepData} />
        </Content>
      </Layout>
    </Layout>
  );
}
