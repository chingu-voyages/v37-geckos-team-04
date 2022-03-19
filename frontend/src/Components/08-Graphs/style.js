import styled from 'styled-components';

export const GraphsCont = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const EachGraphCont = styled.div`
  /* .day-of-the-week {
  } */

  width: fit-content;

  .title {
    font-size: 1.125rem;
    text-align: center;
  }
`;

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
