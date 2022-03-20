import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import GraphTemplate from './GraphTemplate';

import { DayOfTheWeekCont } from './style';

export default function DayOfTheWeek() {
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
    <DayOfTheWeekCont>
      <GraphTemplate
        width={750}
        height={400}
        title={'Which day of the week you get the most sleep on average'}
        data={data}
        yAxis={'Hours on average'}
        customTooltip={CustomToolTip}
      />
      {/* <div className="title">
        Which day of the week you get the most sleep on average
      </div>
      <ComposedChart width={750} height={400} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip content={<CustomToolTip />} />
        <Bar dataKey="uv" barSize={70} fill="#cdcdcd" />
        <Line type="monotone" dataKey="uv" stroke="#413ea0" strokeWidth={2} />
      </ComposedChart> */}
    </DayOfTheWeekCont>
  );
}
