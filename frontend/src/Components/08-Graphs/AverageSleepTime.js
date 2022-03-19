import React from 'react';
import GraphTemplate from './GraphTemplate';

export default function AverageSleepTime() {
  const data = [
    { name: 'Sundays', uv: '10:04pm', pv: 0, amt: 24 },
    { name: 'Mondays', uv: '11:43pm', pv: 0, amt: 24 },
    { name: 'Tuesdays', uv: '10:31pm', pv: 0, amt: 24 },
    { name: 'Wednesdays', uv: '9:58pm', pv: 0, amt: 24 },
    { name: 'Thursdays', uv: '10:55pm', pv: 0, amt: 24 },
    { name: 'Fridays', uv: '12:14pm', pv: 0, amt: 24 },
    { name: 'Saturdays', uv: '12:32pm', pv: 0, amt: 24 },
  ];

  const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <div className="label">
            {/* <b>{label}</b>: {payload[0].value} hours */}
            {payload[0].value}
          </div>
        </div>
      );
    } else return null;
  };

  return (
    <>
      <GraphTemplate
        width={750}
        height={400}
        title="Average time you go to sleep each day"
        data={data}
        yAxis={'Average time you go to sleep'}
        customTooltip={CustomToolTip}
      />
    </>
  );
}
