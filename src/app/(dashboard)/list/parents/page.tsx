import FormModal from "@/components/forms/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Tparents = {
  id: number;
  studentId: string;
  name: string;
  students: string[];
  phone: string;
  email?: string;
  photo: string;
  grade: number;
  class: string;
  address: string;
};

const colomns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "phone",
    accessor: "phone",
    className: "hidden md:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const renderRows = (item: Tparents) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-e_purpleLight"
  >
    <td className="flex items-center gap-4 p-4">
      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500 ">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.students.join(",")}</td>

    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            {" "}
            <FormModal type="update" table="parent" id={item.id} data={item} />
            <FormModal type="delete" table="parent" id={item.id} />
          </>
        )}
      </div>
    </td>
  </tr>
);

const parentPageList = () => {
  return (
    <div className="bg-white rounded-md p-4 flex-1 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 red-bg-200 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <FormModal type="create" table="parent" />
          </div>
        </div>
      </div>
      {/* this is for list  */}
      <div className=""></div>

      <Table
        colomns={colomns}
        renderRows={renderRows}
        data={parentsData}
      ></Table>
      {/* this is for pagination */}

      <Pagination />
    </div>
  );
};

export default parentPageList;
