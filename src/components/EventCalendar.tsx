"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

const events = [
  {
    id: 1,
    title: "Team Meeting",
    time: "10:00 AM - 11:00 AM",
    description: "Discussing project updates and next steps.",
  },
  {
    id: 2,
    title: "Lunch Break",
    time: "12:30 PM - 1:30 PM",
    description: "Enjoy a relaxing lunch with colleagues.",
  },
  {
    id: 3,
    title: "Client Call",
    time: "2:00 PM - 3:00 PM",
    description:
      "Meeting with the client to gather feedback on the deliverables.",
  },
  {
    id: 4,
    title: "Code Review",
    time: "4:00 PM - 5:00 PM",
    description: "Reviewing code submitted for the current sprint.",
  },
  {
    id: 5,
    title: "Wrap-Up",
    time: "5:30 PM - 6:00 PM",
    description: "End-of-day recap and planning for tomorrow.",
  },
];

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-gray-50 p-8 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold my-4">events</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="border-2 p-5 border-t-4  border-gray-200 "
            key={event.id}
          >
            <div className=" rounded-md flex items-center justify-between  odd:border-t-e_sky even: border-t-e_purple ">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
