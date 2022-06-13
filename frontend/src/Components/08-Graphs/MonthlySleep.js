import React from 'react';
import { useOutletContext } from 'react-router-dom';
import GraphTemplate from './GraphTemplate';
import { MonthlySleepCont } from './style';

export default function MonthlySleep() {
  const data = useOutletContext();
  // group all sleep data by month
  const formatData = {};
  data.reduce((accu, curr) => {
    const date = new Date(curr.date);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const key = month + '/' + year;

    if (!accu[key]) {
      accu[key] = [];
    }
    accu[key].push(curr);
    return accu;
  }, formatData);

  // format data for graph
  const graphData = [];
  for (const month in formatData) {
    let meanDuration = 0;
    let meanSleepStart = 0;
    let meanSleepEnd = 0;

    const name = new Date(formatData[month][0].date).toLocaleString('default', {
      month: 'short',
      year: 'numeric',
    });

    formatData[month].forEach((sleep) => {
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

    meanDuration = (meanDuration / formatData[month].length).toFixed(2);
    // prettier-ignore
    meanSleepStart = new Date(meanSleepStart / formatData[month].length).toLocaleTimeString();
    // prettier-ignore
    meanSleepEnd = new Date(meanSleepEnd / formatData[month].length).toLocaleTimeString();

    graphData.push({ name, uv: meanDuration, meanSleepStart, meanSleepEnd });
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
    }
    return null;
  };

  return (
    <MonthlySleepCont>
      <GraphTemplate
        height={400}
        title={'Monthly Sleep Duration Average'}
        data={graphData}
        yAxis={'Hours on Average'}
        customTooltip={CustomToolTip}
      />
    </MonthlySleepCont>
  );
}
