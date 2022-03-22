import styled from 'styled-components';

export const GraphsCont = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    'weekly weekly'
    'monthly dayOfTheWeek';

  justify-items: center;
  width: 100%;
  row-gap: 4rem;
  column-gap: 4rem;
`;

export const GraphTemplateCont = styled.div`
  .title {
    font-size: 1.125rem;
    text-align: center;
  }
`;

const EachGraphCont = styled.div``;

export const WeeklySleepCont = styled(EachGraphCont)`
  width: 100%;
  grid-area: weekly;
`;

export const MonthlySleepCont = styled(EachGraphCont)`
  width: 100%;
  grid-area: monthly;
`;

export const DayOfTheWeekCont = styled(EachGraphCont)`
  width: 100%;
  grid-area: dayOfTheWeek;
`;
