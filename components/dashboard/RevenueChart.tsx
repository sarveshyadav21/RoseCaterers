"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 20000 },
  { value: 35000 },
  { value: 42000 },
  { value: 60000 },
];

export default function RevenueChart() {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl h-64">
      <h3 className="mb-4 font-semibold">Revenue</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line type="monotone" dataKey="value" stroke="#facc15" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
