// import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        scroll-behavior: smooth;
        margin: 0;
        padding: 0;
        position: relative;
        /* font-family: 'Poppins', sans-serif; */
        /* font-family: 'Roboto', sans-serif; */
        font-family: 'Montserrat', sans-serif;
        /* min-height: 100vh; */
        /* display: flex;
        flex-direction: column; */
        /* align-items: stretch; */
    }

    .ant-card-body{
        padding: 8px;
    }
`;
