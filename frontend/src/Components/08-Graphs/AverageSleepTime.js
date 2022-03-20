// import React from 'react';

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   Brush,
//   AreaChart,
//   Area,
//   ResponsiveContainer,
// } from 'recharts';

// import GraphTemplate from './GraphTemplate';

// export default function AverageSleepTime() {
//   const data = [
//     { name: 'Sundays', uv: 10.0667, pv: 6, amt: 24 },
//     { name: 'Mondays', uv: 11.7167, pv: 6.4, amt: 24 },
//     { name: 'Tuesdays', uv: 10.51, pv: 6.67, amt: 24 },
//     { name: 'Wednesdays', uv: 9.9667, pv: 7.4, amt: 24 },
//     { name: 'Thursdays', uv: 10.9167, pv: 7.9, amt: 24 },
//     { name: 'Fridays', uv: 12.2333, pv: 9.34, amt: 24 },
//     { name: 'Saturdays', uv: 12.2223, pv: 8.5, amt: 24 },
//   ];

//   const data2 = [
//     { name: 'Sundays', uv: 0, pv: 8.7, amt: 24 },
//     { name: 'Mondays', uv: 0, pv: 7.4, amt: 24 },
//     { name: 'Tuesdays', uv: 0, pv: 6.9, amt: 24 },
//     { name: 'Wednesdays', uv: 0, pv: 7.1, amt: 24 },
//     { name: 'Thursdays', uv: 0, pv: 7.3, amt: 24 },
//     { name: 'Fridays', uv: 0, pv: 6.2, amt: 24 },
//     { name: 'Saturdays', uv: 0, pv: 9.4, amt: 24 },
//   ];

//   const data3 = data.map((day) => {
//     debugger;
//     return;
//   });

//   data3();

//   // const CustomToolTip = ({ active, payload, label }) => {
//   //   if (active && payload && payload.length) {
//   //     return (
//   //       <div className="custom-tooltip">
//   //         <div className="label">
//   //           {/* <b>{label}</b>: {payload[0].value} hours */}
//   //           {payload[0].value}
//   //         </div>
//   //       </div>
//   //     );
//   //   } else return null;
//   // };

//   // return (
//   //   <>
//   //     <GraphTemplate
//   //       width={750}
//   //       height={400}
//   //       title="Average time you go to sleep each day"
//   //       data={data}
//   //       yAxis={'Average time you go to sleep'}
//   //       customTooltip={CustomToolTip}
//   //     />
//   //   </>
//   // );

//   // const data = [
//   //   {
//   //     name: 'Sunday',
//   //     uv: 4000,
//   //     pv: 2400,
//   //     amt: 2400,
//   //   },
//   //   {
//   //     name: 'Monday',
//   //     uv: 3000,
//   //     pv: 1398,
//   //     amt: 2210,
//   //   },
//   //   {
//   //     name: 'Tuesday',
//   //     uv: 2000,
//   //     pv: 9800,
//   //     amt: 2290,
//   //   },
//   //   {
//   //     name: 'Wednesday',
//   //     uv: 2780,
//   //     pv: 3908,
//   //     amt: 2000,
//   //   },
//   //   {
//   //     name: 'Thursday',
//   //     uv: 1890,
//   //     pv: 4800,
//   //     amt: 2181,
//   //   },
//   //   {
//   //     name: 'Friday',
//   //     uv: 2390,
//   //     pv: 3800,
//   //     amt: 2500,
//   //   },
//   //   {
//   //     name: 'Saturday',
//   //     uv: 3490,
//   //     pv: 4300,
//   //     amt: 2100,
//   //   },
//   // ];

//   return (
//     <div>
//       <LineChart
//         width={500}
//         height={200}
//         data={data}
//         syncId="anyId"
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//       </LineChart>
//       <LineChart
//         width={500}
//         height={200}
//         data={data}
//         syncId="anyId"
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//         <Brush />
//       </LineChart>
//       <AreaChart
//         width={500}
//         height={200}
//         data={data2}
//         syncId="anyId"
//         margin={{
//           top: 10,
//           right: 30,
//           left: 0,
//           bottom: 0,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
//       </AreaChart>
//     </div>
//   );
// }
