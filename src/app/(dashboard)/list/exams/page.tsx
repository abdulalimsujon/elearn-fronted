import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, examsData, lessonsData, subjectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Texams = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

const renderRows = (item: Texams) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-e_purpleLight"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.subject}</h3>
      </div>
    </td>

    <td className="hidden md:table-cell">{item.class}</td>
    <td className="hidden md:table-cell">{item.teacher}</td>
    <td className="hidden md:table-cell">{item.date}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`list/teacher/${item.id}`}>
          <button className="h-7 w-7 flex  items-center justify-center rounded-full bg-e_sky">
            <Image src="/edit.png" alt="" height={16} width={16} />
          </button>
        </Link>
        {/* {role === "admin" && ( */}
        <button className="h-7 w-7 flex justify-center items-center rounded-full bg-e_yellow">
          <Image src="/delete.png" alt="" height={16} width={16} />
        </button>
        {/* )} */}
      </div>
    </td>
  </tr>
);

const colomns = [
  {
    header: "subject",
    accessor: "subject",
    className: "hidden md:table-cell",
  },

  {
    header: "class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },

  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];
const examList = () => {
  return (
    <div className="bg-white rounded-md p-4 flex-1 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All exams</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 red-bg-200 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* this is for list  */}
      <div className=""></div>

      <Table colomns={colomns} renderRows={renderRows} data={examsData}></Table>
      {/* this is for pagination */}

      <Pagination />
    </div>
  );
};

export default examList;
