import React from 'react';

import WeeklySleep from './WeeklySleep';
import MonthlySleep from './MonthlySleep';
import DayOfTheWeek from './DayOfTheWeek';
import AverageSleepTime from './AverageSleepTime';
import { GraphsCont } from './style';

export default function Graphs() {
  return (
    <GraphsCont>
      {/* // <section> */}
      <WeeklySleep />
      <MonthlySleep />
      <DayOfTheWeek />
      {/* <AverageSleepTime /> */}
      {/* // </section> */}
    </GraphsCont>
  );
}
