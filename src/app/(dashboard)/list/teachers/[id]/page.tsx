import Anouncements from "@/components/Anouncements";
import BigCalendar from "@/components/BigCalendar";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-e_sky py-4 px-6 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="/"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Md Abdul Alim</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur, eius, perferendis vero saepe consectetur tempora nisi,
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    width={14}
                    height={14}
                    alt="Blood Icon"
                  />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image
                    src="/date.png"
                    width={14}
                    height={14}
                    alt="Date Icon"
                  />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image
                    src="/mail.png"
                    width={14}
                    height={14}
                    alt="Mail Icon"
                  />
                  <span>alimsujon12@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 2xl:w-1/3 lg:w-full flex items-center gap-2">
                  <Image
                    src="/phone.png"
                    width={14}
                    height={14}
                    alt="Phone Icon"
                  />
                  <span>0131582379</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="bg-gray-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[46%] ">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="font-semibold text-xl">90%</h1>
                <span className="text-sm text-gray-400">attendance</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[46%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="font-semibold text-xl">70%</h1>
                <span className="text-sm text-gray-400">branchs</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[46%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="font-semibold text-xl">20%</h1>
                <span className="text-sm text-gray-400">class</span>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[46%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <div className="">
                <h1 className="font-semibold text-xl">40%</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-4 bg-gray-100 rounded-md p-4 h-[800px]">
          <h1>teacher schedules</h1>
          <BigCalendar></BigCalendar>
        </div>
      </div>

      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-gray-50 rounded-md p-4">
          <h1 className="text-xl font-semibold">Shortcuts</h1>

          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500 ">
            <Link className="p-4 rounded-md bg-e_sky" href="/">
              classess
            </Link>

            <Link className="p-4 rounded-md bg-e_yellow" href="/">
              students{" "}
            </Link>
            <Link className="p-4 rounded-md bg-e_purple" href="/">
              lessons
            </Link>
            <Link className="p-4 rounded-md bg-e_sky" href="/">
              exams
            </Link>
            <Link className="p-4 rounded-md bg-e_yellow" href="/">
              Assignments
            </Link>
          </div>
        </div>
        <Performance></Performance>
        <Anouncements />
      </div>
    </div>
  );
};

export default SingleTeacherPage;
