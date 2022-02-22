import styled from 'styled-components';

export const BtnsContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  border: thin black solid;
  border-radius: 0.875rem;
  padding: 0.5rem 0.875rem 0.5rem 0.875rem;
`;
