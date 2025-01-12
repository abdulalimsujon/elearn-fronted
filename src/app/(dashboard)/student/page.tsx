import Anouncements from "@/components/Anouncements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

import React from "react";

const page = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row ">
      {/* this is left  */}

      <div className="w-full xl:w-2/3 h-full">
        <h1 className="text-xl font-semibold">Schudle (4A)</h1>
        <BigCalendar />
      </div>

      {/* this is right  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Anouncements />
      </div>
    </div>
  );
};

export default page;
