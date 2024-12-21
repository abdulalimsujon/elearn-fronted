"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK); // Default to WORK_WEEK view

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView); // Update the view state
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={["work_week", "day"]} // Use Views enum correctly
        view={view} // Controlled view state
        style={{ height: "98vh" }} // Adjusted height for better display
        min={new Date(2025, 0, 1, 8, 0)} // January 1, 2025, 8:00 AM
        max={new Date(2025, 0, 1, 17, 0)} // January 1, 2025, 5:00 PM
        onView={handleOnChangeView} // Handle view change correctly
      />
    </div>
  );
};

export default BigCalendar;
