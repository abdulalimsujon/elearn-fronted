import Anouncements from "@/components/Anouncements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React from "react";

const Teacher = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
      {/* this is left  */}

      <div className="w-full xl:w-2/3 h-full">
        <h1 className="text-xl font-semibold">Schudle</h1>
        <BigCalendar />
      </div>

      {/* this is right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <Anouncements />
      </div>
    </div>
  );
};

export default Teacher;
