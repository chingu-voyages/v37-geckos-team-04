import React from 'react';
import { useSelector } from 'react-redux';
import GraphTemplate from './GraphTemplate';
import { MonthlySleepCont } from './style';

export default function MonthlySleep() {
  const data = useSelector((state) => state.sleepData.data);

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
    const date = new Date(formatData[month][0].date);
    const key = date.getMonth() + 1 + '/' + date.getFullYear();

    formatData[month].map((sleep) => {
      const duration =
        Math.abs(new Date(sleep.sleepStart) - new Date(sleep.sleepEnd)) /
        3600000;
      meanDuration += duration;
    });

    meanDuration = (meanDuration / formatData[month].length).toFixed(2);

    graphData.push({ name: key, uv: meanDuration });
  }

  const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">
            {/* <b>{label}</b>: {payload[0].value} hours */}
            {payload[0].value} hours
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
        title={'Monthly average daily sleep duration'}
        data={graphData}
        yAxis={'Hours on average'}
        customTooltip={CustomToolTip}
      />
    </MonthlySleepCont>
  );
}
