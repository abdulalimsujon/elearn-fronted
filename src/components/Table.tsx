import React from "react";

const Table = ({
  colomns,
  renderRows,
  data,
}: {
  colomns: { header: string; accessor: string; className?: string }[];
  data: any[];
  renderRows: (item: any) => React.ReactNode;
}) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className="text-left text-gray-500 text-sm">
          {colomns.map((col) => (
            <th key={col.header} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data?.map((item) => renderRows(item))}</tbody>
    </table>
  );
};

export default Table;
