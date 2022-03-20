import React from 'react';
import GraphTemplate from './GraphTemplate';
import { MonthlySleepCont } from './style';

export default function MonthlySleep() {
  // data should be fetched from the user's sleep data from the past month
  // 'uv' should be fetched from the backend, just for those past 7 days
  // 'pv' isn't necessary for our needs here

  const data = [
    { name: 'Sundays', uv: 8.7, pv: 0, amt: 24 },
    { name: 'Mondays', uv: 7.4, pv: 0, amt: 24 },
    { name: 'Tuesdays', uv: 6.9, pv: 0, amt: 24 },
    { name: 'Wednesdays', uv: 7.1, pv: 0, amt: 24 },
    { name: 'Thursdays', uv: 7.3, pv: 0, amt: 24 },
    { name: 'Fridays', uv: 6.2, pv: 0, amt: 24 },
    { name: 'Saturdays', uv: 9.4, pv: 0, amt: 24 },
  ];

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
    } else return null;
  };

  return (
    <MonthlySleepCont>
      <GraphTemplate
        // width={750}
        height={400}
        title={'Monthly average daily sleep duration'}
        data={data}
        yAxis={'Hours on average'}
        customTooltip={CustomToolTip}
      />
    </MonthlySleepCont>
  );
}
