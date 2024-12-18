import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const Adminpage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student"></UserCard>
          <UserCard type="teacher"></UserCard>
          <UserCard type="parent"></UserCard>
          <UserCard type="staff"></UserCard>
        </div>
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* this is count chart */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default Adminpage;
