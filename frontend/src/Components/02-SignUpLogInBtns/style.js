import styled from 'styled-components';

export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 2rem;
`;

const Button = styled.button`
  background: none;
  font-weight: bold;
  border: none;
  font-size: 1.125rem;
  font-family: inherit;
`;

export const LogInBtn = styled(Button)``;

export const SignUpBtn = styled(Button)`
  /* border: 0.125rem solid #93acb5; */
  border: 0.125rem solid #96c5f7;
  /* background-color: #a9d3ff; */
  border-radius: 1.5rem;
  padding: 0.5rem 1.125rem 0.5rem 1.125rem;
`;