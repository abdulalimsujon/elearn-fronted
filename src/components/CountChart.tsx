"use client";

import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,

    fill: "white",
  },
  {
    name: "Girls",
    count: 30,

    fill: "#FAE27C",
  },

  {
    name: "Boys",
    count: 70,
    fill: "#EDF9FD",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* this is title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/* this is Chart */}
      <div className="w-full h-[75%] relative">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          width={50}
          height={50}
          alt=""
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* this is bottom */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 bg-e_sky rounded-full  " />
          <h1 className="font-bold">2143</h1>
          <h2 className="texr-xs text-gray-300">Boys 55%</h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="h-5 w-5 bg-e_yellow rounded-full  " />
          <h1 className="font-bold">2143</h1>
          <h2 className="texr-xs text-gray-300">girls 55%</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
