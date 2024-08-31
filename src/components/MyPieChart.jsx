import React, { useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import "./myPieChart.css";

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MyPieChart = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="pie-chart">
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        data={data}
        dataKey="value"
        outerRadius={150}
        fill="#8884d8"
        onMouseEnter={onPieEnter}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </div>
  );
};

export default MyPieChart;
