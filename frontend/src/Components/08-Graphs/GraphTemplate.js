import React, { useState, useEffect } from 'react';
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

  const [yLabel, setYLabel] = useState({ value: yAxis, angle: -90 });
  const [margin, setMargin] = useState({
    top: 0,
    right: 10,
    left: 5,
    bottom: 0,
  });

  useEffect(() => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 576) {
      setYLabel((prev) => ({ ...prev, value: null }));
      setMargin((prev) => ({ ...prev, left: -25 }));
    }
  }, []);

  return (
    <GraphTemplateCont>
      <h1 className="title" style={{ padding: '1em' }}>
        {title}
      </h1>
      <ResponsiveContainer width="100%" height={height}>
        <ComposedChart data={data} margin={margin}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" tickFormatter={CustomXAxisTick} interval={0} />
          <YAxis label={yLabel} domain={yDomain} />
          <Tooltip content={customTooltip} />
          <Bar dataKey="uv" barSize={70} fill="#cdcdcd" />
          <Line type="monotone" dataKey="uv" stroke="#413ea0" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </GraphTemplateCont>
  );
}
