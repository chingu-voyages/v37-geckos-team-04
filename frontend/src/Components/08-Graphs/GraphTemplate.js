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
  const {
    height,
    title,
    data,
    yAxis,
    customTooltip,
    yDomain,
    CustomXAxisTick,
  } = props;

  return (
    <GraphTemplateCont>
      <h1 className="title">{title}</h1>
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" tickFormatter={CustomXAxisTick} interval={0} />
          <YAxis label={{ value: yAxis, angle: -90 }} domain={yDomain} />
          <Tooltip content={customTooltip} />
          <Bar dataKey="uv" barSize={70} fill="#cdcdcd" />
          <Line type="monotone" dataKey="uv" stroke="#413ea0" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </GraphTemplateCont>
  );
}
