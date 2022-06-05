import React from 'react';
import { useSelector } from 'react-redux';
import GraphTemplate from './GraphTemplate';
import { MonthlySleepCont } from './style';

import mockSleepData from '../09-History/mockSleepData';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
];

export default function MonthlySleep() {
  // const data = useSelector((state) => state.sleepData.data);
  const data = mockSleepData;
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
  // other calculations could be added like average sleep time which could be passed to tooltip
  const graphData = [];
  for (const month in formatData) {
    let meanDuration = 0;
    let meanSleepStart = 0;
    let meanSleepEnd;
    let meanMoodStart;
    let meanMoodEnd;

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
    });

    meanDuration = (meanDuration / formatData[month].length).toFixed(2);
    meanSleepStart = new Date(
      meanSleepStart / formatData[month].length
    ).toLocaleTimeString();

    graphData.push({ name, uv: meanDuration, meanSleepStart });
  }

  const CustomToolTip = ({ active, payload, label }) => {
    console.log(payload);
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">
            <b>{label}</b>
            <br />
            <b>Average hours of sleep:</b> {payload[0].value} hours
            <br />
            <b>Average sleep time:</b> {payload[0].payload.meanSleepStart}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <MonthlySleepCont>
      <GraphTemplate
        // width={750}
        height={400}
        title={'Monthly averages'}
        data={graphData}
        yAxis={'Hours on average'}
        customTooltip={CustomToolTip}
      />
    </MonthlySleepCont>
  );
}
