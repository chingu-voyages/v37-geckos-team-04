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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em;

  h1 {
    font-size: 1.75em;
  }
`;
