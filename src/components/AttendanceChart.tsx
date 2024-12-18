"use client";

import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 55,
    absent: 45,
  },
  {
    name: "Wed",
    present: 30,
    absent: 70,
  },
  {
    name: "Thur",
    present: 65,
    absent: 35,
  },
  {
    name: "Fri",
    present: 65,
    absent: 35,
  },
  {
    name: "Sat",
    present: 20,
    absent: 80,
  },
  {
    name: "Sun",
    present: 90,
    absent: 10,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-slate-50 rounded-lg p-4 h-[450px]">
      <div className="">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} color="#ddd" />
          <XAxis dataKey="name" tick={{ fill: "#d1d5db" }} tickLine={false} />
          <YAxis tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px ", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
