import React from 'react';
import { useSelector } from 'react-redux';

import GraphTemplate from './GraphTemplate';
import { WeeklySleepCont } from './style';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

export default function WeeklySleep() {
  const data = useSelector((state) => state.sleepData.data);

  const dataArr = [];

  // copy all sleep instances and sort oldest to newest
  let newData = data.slice();
  newData = newData.sort((a, b) => new Date(a.date) - new Date(b.date));

  // get last 7 sleep instances (may be gaps in between days if user misses recording)
  newData = newData.slice(-7);
  // add *name* for x-axis label and *uv* for sleepDuration in hours
  newData.forEach((sleep, i) => {
    const update = {};
    Object.assign(update, sleep);
    update.name = new Date(sleep.date).getDay();
    const duration = Math.abs(
      new Date(sleep.sleepStart) - new Date(sleep.sleepEnd)
    );
    update.uv = (duration / 3600000).toFixed(2);
    dataArr.push(update);
  });

  const CustomXAxisTick = (payload) => {
    return days[payload];
  };

  const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">
            {new Date(payload[0].payload.date).toDateString()} <br />
            {<b>{payload[0].payload.sleepDuration}</b>}
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
        data={dataArr}
        yAxis={'Hours'}
        yDomain={[0, (dataMax) => Math.ceil(dataMax * 1.5)]}
        customTooltip={CustomToolTip}
        CustomXAxisTick={CustomXAxisTick}
      />
    </WeeklySleepCont>
  );
}
