import React from 'react';
import { useSelector } from 'react-redux';

import GraphTemplate from './GraphTemplate';
import { WeeklySleepCont } from './style';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function WeeklySleep() {
  const data = useSelector((state) => state.sleepData.data);

  const graphData = [];

  // copy all sleep instances and sort oldest to newest
  let newData = data.slice();
  newData = newData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // get last 7 sleep instances (may be gaps in between days if user misses recording)
  newData = newData.slice(-7);
  // add *name* for x-axis label and *uv* for sleepDuration in hours
  newData.forEach((sleep) => {
    const update = {};
    Object.assign(update, sleep);
    update.name = new Date(sleep.date).getDay();
    // prettier-ignore
    const duration = Math.abs(new Date(sleep.sleepStart) - new Date(sleep.sleepEnd));
    update.uv = (duration / 3600000).toFixed(2);
    update.sleepStart = new Date(update.sleepStart).toLocaleTimeString();
    update.sleepEnd = new Date(update.sleepEnd).toLocaleTimeString();
    graphData.push(update);
  });

  const CustomXAxisTick = (payload) => {
    return days[payload];
  };

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">
            {<b>{new Date(payload[0].payload.date).toDateString()}</b>} <br />
            <b>Sleep Duration:</b> {payload[0].payload.sleepDuration} hours{' '}
            <br />
            <b>Sleep Time:</b> {payload[0].payload.sleepStart} <br />
            <b>Wake Time:</b> {payload[0].payload.sleepEnd}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <WeeklySleepCont>
      <GraphTemplate
        height={400}
        title={'Hours of sleep per day for the last seven days'}
        data={graphData}
        yAxis={'Hours'}
        yDomain={[0, (dataMax) => Math.ceil(dataMax * 1.5)]}
        customTooltip={CustomToolTip}
        CustomXAxisTick={CustomXAxisTick}
      />
    </WeeklySleepCont>
  );
}
