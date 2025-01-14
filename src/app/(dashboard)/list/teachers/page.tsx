import FormModal from "@/components/forms/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/setting";
import { Class, Subject, Teacher } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const renderRows = (
  item: Teacher & { subjects: Subject[] } & { classes: Class[] }
) => (
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-e_purpleLight"
  >
    <td className="flex items-center gap-4 p-4">
      <Image
        src={item.img || ""}
        alt=""
        width={40}
        height={40}
        className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-xs text-gray-500 ">{item?.email}</p>
      </div>
    </td>
    <td className="hidden md:table-cell">{item.username}</td>
    <td className="hidden md:table-cell">
      {item.classes.map((classItem) => classItem.name).join(",")}
    </td>
    <td className="hidden md:table-cell">
      {item.subjects.map((subject) => subject.name).join(",")}
    </td>
    <td className="hidden md:table-cell">{item.phone}</td>
    <td className="hidden md:table-cell">{item.address}</td>
    <td>
      <div className="flex items-center gap-2">
        <Link href={`list/teacher/${item.id}`}>
          <button className="h-7 w-7 flex  items-center justify-center rounded-full bg-e_sky">
            <Image src="/view.png" alt="" height={16} width={16} />
          </button>
        </Link>
        {role === "admin" && (
          // <button className="h-7 w-7 flex justify-center items-center rounded-full bg-e_yellow">
          //   <Image src="/delete.png" alt="" height={16} width={16} />
          // </button>

          <FormModal table="teacher" type="delete" id={item.id} />
        )}
      </div>
    </td>
  </tr>
);

const colomns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Adress",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Action",
    accessor: "action",
  },
];
const TeacherPageList = async ({
  searchParams,
}: {
  [key: string]: string | undefined;
}) => {
  const { page, ...queryParams } = searchParams;
  const p = page ? parseInt(page) : 1;

  const [data, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEM_PER_PAGE,
      skip: (p - 1) * ITEM_PER_PAGE,
    }),
    prisma.teacher.count(),
  ]);

  return (
    <div className="bg-white rounded-md p-4 flex-1 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 red-bg-200 w-full md:w-auto">
          <TableSearch />
          <div className="flex gap-4 items-center self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-e_yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role == "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* this is for list  */}
      <div className=""></div>

      <Table
        colomns={colomns}
        renderRows={renderRows}
        data={teachersData}
      ></Table>
      {/* this is for pagination */}

      <Pagination page={p} count={count} />
    </div>
  );
};

export default TeacherPageList;
