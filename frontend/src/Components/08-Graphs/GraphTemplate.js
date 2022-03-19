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

import { GraphsCont } from './style';

export default function GraphTemplate(props) {
  const { width, height, title, data, yAxis, customTooltip } = props;
  // console.log(width);
  // console.log(height);
  // console.log(title);
  // console.log(data);
  // console.log(customTooltip);

  // debugger;

  return (
    <GraphsCont>
      <div className="title">{title}</div>
      <ComposedChart width={width} height={height} data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis
          label={{ value: yAxis, angle: -90 }}
          // label={<customYAxisLabel />}
        />
        {/* <Tooltip content={<CustomToolTip />} /> */}
        <Tooltip content={customTooltip} />
        {/* <Tooltip /> */}
        <Bar dataKey="uv" barSize={70} fill="#cdcdcd" />
        <Line type="monotone" dataKey="uv" stroke="#413ea0" strokeWidth={2} />
        {/* <GraphTemplate /> */}
      </ComposedChart>
    </GraphsCont>
  );
}
