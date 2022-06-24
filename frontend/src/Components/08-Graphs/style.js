import styled from 'styled-components';

export const GraphTemplateCont = styled.div`
  .title {
    text-align: center;
  }
`;

const EachGraphCont = styled.div`
  -webkit-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.48);
  box-shadow: 0px 0px 14px -2px rgba(0, 0, 0, 0.48);
`;

export const WeeklySleepCont = styled(EachGraphCont)``;

export const MonthlySleepCont = styled(EachGraphCont)``;

export const DayOfTheWeekCont = styled(EachGraphCont)``;
