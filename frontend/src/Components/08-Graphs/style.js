import styled from 'styled-components';

export const GraphsCont = styled.section`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-areas:
    'weekly weekly weekly streak'
    'monthly monthly avgDay avgDay';
`;

export const GraphTemplateCont = styled.div`
  /* .day-of-the-week {
  } */

  /* width: fit-content; */
  /* width: max-content; */

  .title {
    font-size: 1.125rem;
    text-align: center;
  }
`;

const EachGraphCont = styled.div``;

export const WeeklySleepCont = styled(EachGraphCont)``;

export const MonthlySleepCont = styled(EachGraphCont)``;

export const DayOfTheWeekCont = styled(EachGraphCont)``;

// const EachGraphCont = styled.div`
//   width: fit-content;

//   .title {
//     font-size: 1.125rem;
//     text-align: center;
//   }
// `;

// export const DayOfTheWeekCont = styled(EachGraphCont)`
//   /* width: fit-content;

//   .title {
//     font-size: 1.125rem;
//     text-align: center;
//   } */
// `;
