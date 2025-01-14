"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
// import TeacherForm from "./TeacherForm";
// import StudentForm from "./StudentForm";

const TeacherForm = dynamic(() => import("./TeacherForm"), {
  loading: () => <h1>loading...</h1>,
});
const StudentForm = dynamic(() => import("./StudentForm"), {
  loading: () => <h1>loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data}></TeacherForm>,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcements";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-e_yellow"
      : type === "update"
      ? "bg-e_sky"
      : "bg-e_purple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium ">
          all data will be lost ..are you sure you want to delete this ? {table}
        </span>
        <button className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center ">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "form not found"
    );
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className=" absolute top-4 right-4 cursor-pointer "
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" width={14} height={14} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
