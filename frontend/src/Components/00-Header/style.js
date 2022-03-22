import styled from 'styled-components';

export const HeaderCont = styled.header`
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  align-items: center;
  /* padding: 2em 2em 2em 2em; */
  padding: 2em 0 2em 0;
  /* background-color: #f2f4ff; */
  /* background-color: #31263e; */
  /* mask-image: linear-gradient(to top, transparent 5%, black 100%); */
  /* mask-image: linear-gradient(to top, transparent 2%, black 70%); */
  /* color: white; */
  color: #f7f4f3;
  flex-shrink: 1;

  .app-name {
    font-size: 2.25rem;
    font-weight: 800;
    /* letter-spacing: 1px; */
    /* color: #eca72c; */
  }
`;
