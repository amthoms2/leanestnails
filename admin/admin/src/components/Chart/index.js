import React from "react";
import { ChartContainer, Title } from "./ChartElements";
// eslint-disable-next-line
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <>
      <ChartContainer>
        <Title>{title}</Title>

        <ResponsiveContainer width="100%" aspect={4 / 1}>
          {/*if the width is 4 units, the height will be 1 unit */}
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            {/*changes lines to lighter color and strokeDash adds the dashes*/}
            <Legend />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </>
  );
};

export default Chart;
