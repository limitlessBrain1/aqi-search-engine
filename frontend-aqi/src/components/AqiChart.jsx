import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const AqiChart = ({ iaqi }) => {
  if (!iaqi || Object.keys(iaqi).length === 0) return null;

  const data = Object.keys(iaqi).map((key) => ({
    pollutant: key.toUpperCase(),
    value: iaqi[key].v
  }));

  return (
    <div style={{ width: "100%", height: 300, marginTop: 20 }}>
      <h3>Pollutant Levels</h3>

      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="pollutant" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AqiChart;