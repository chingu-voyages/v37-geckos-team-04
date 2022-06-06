import React from 'react';
import { useSelector } from 'react-redux';

import GraphTemplate from './GraphTemplate';
import { DayOfTheWeekCont } from './style';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function DayOfTheWeek() {
  const data = useSelector((state) => state.sleepData.data);

  const formatData = {};
  data.reduce((acc, curr) => {
    const date = new Date(curr.date);
    const day = date.getDay();

    if (!formatData[day]) {
      formatData[day] = [];
    }
    formatData[day].push(curr);
    return acc;
  }, formatData);

  const graphData = [];
  for (const day in formatData) {
    let meanDuration = 0;
    let meanSleepStart = 0;
    let meanSleepEnd = 0;

    formatData[day].forEach((sleep) => {
      // prettier-ignore
      const duration = Math.abs(new Date(sleep.sleepStart) - new Date(sleep.sleepEnd)) / 3600000;
      meanDuration += duration;

      let sleepStart = new Date(sleep.sleepStart);
      sleepStart.setFullYear(2020, 1, 1);
      sleepStart = sleepStart.getTime();
      meanSleepStart += sleepStart;

      let sleepEnd = new Date(sleep.sleepEnd);
      sleepEnd.setFullYear(2020, 1, 1);
      sleepEnd = sleepEnd.getTime();
      meanSleepEnd += sleepEnd;
    });

    meanDuration = (meanDuration / formatData[day].length).toFixed(2);
    // prettier-ignore
    meanSleepStart = new Date(meanSleepStart / formatData[day].length).toLocaleTimeString();
    // prettier-ignore
    meanSleepEnd = new Date(meanSleepEnd / formatData[day].length).toLocaleTimeString();
    graphData.push({
      name: days[day],
      uv: meanDuration,
      meanSleepStart,
      meanSleepEnd,
    });
  }

  const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">
            <b>{label}</b>
            <br />
            <b>Average Sleep Duration:</b> {payload[0].value} hours
            <br />
            <b>Average Sleep Time:</b> {payload[0].payload.meanSleepStart}
            <br />
            <b>Average Wake Time:</b> {payload[0].payload.meanSleepEnd}
          </div>
        </div>
      );
    } else return null;
  };

  return (
    <DayOfTheWeekCont>
      <GraphTemplate
        // width={750}
        height={400}
        title={'Which day of the week you get the most sleep on average'}
        data={graphData}
        yAxis={'Hours on Average'}
        customTooltip={CustomToolTip}
        yDomain={[0, (dataMax) => Math.ceil(dataMax * 2.5)]}
      />
    </DayOfTheWeekCont>
  );
}
