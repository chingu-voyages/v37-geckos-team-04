import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

import { GraphTemplateCont } from './style';

export default function GraphTemplate(props) {
  // const { width, height, title, data, yAxis, customTooltip } = props;
  const { height, title, data, yAxis, customTooltip } = props;

  return (
    <GraphTemplateCont>
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis label={{ value: yAxis, angle: -90 }} />
          <Tooltip content={customTooltip} />
          <Bar dataKey="uv" barSize={70} fill="#cdcdcd" />
          <Line type="monotone" dataKey="uv" stroke="#413ea0" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </GraphTemplateCont>
  );
}
