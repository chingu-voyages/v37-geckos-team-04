import styled from 'styled-components';
import { Layout } from 'antd';
const { Sider } = Layout;

export const SiderContainer = styled(Sider)`
  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 99;
    height: 100vh;
  }
`;
