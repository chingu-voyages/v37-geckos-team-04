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
  padding: 1em;
  background-color: rgb(214, 214, 214);
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.48);

  h1 {
    font-size: 1.75em;
    letter-spacing: 1.5px;
    font-weight: 300;
  }

  @media screen and (max-width: 577px) {
    h1 {
      font-size: 1.25em;
    }
  }
`;
