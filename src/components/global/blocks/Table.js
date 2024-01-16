// components/PropertyTable.js
import React from "react";
import { useSortBy, useTable } from "react-table";
import PaginationBlock from "./pagination/paginationBlock";

const Table = ({ columns, data, buttons, params }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
     
    },useSortBy);

  return (
    <div className="overflow-x-auto min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-300 rounded-lg"
      >
        <thead className="bg-gray-100 thead">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-3 px-4 border-b font-semibold text-sm text-gray-600 uppercase tracking-wider text-start"
                  key={columnIndex}
                >
                  {column.render('Header')}
                </th>
              ))}
              {buttons && <th className="py-3 px-4 border-b"></th>}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={rowIndex}
                className="hover:bg-gray-50 transition-all"
              >
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-4 px-6 border-b text-sm text-gray-800 text-start"
                    key={cellIndex}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                {buttons && (
                  <td className="py-4 px-6 border-b text-sm text-gray-800 text-end ">
                    {buttons.map((button, buttonIndex) => (
                      <button
                        key={buttonIndex}
                        onClick={() => button.onClick(row.original)}
                        className="text-blue-500 hover:underline focus:outline-none focus:underline mr-2"
                      >
                        {button.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className=" px-2 pt-5 pb-2 ">
        <PaginationBlock
          totalItems={params.total}
          limit={params.limit}
          currentPage={params.page}
          setPage={params.setPage}
          setLimit={params.setLimit}
        />
      </div>
    </div>
  );
};

export default Table;
