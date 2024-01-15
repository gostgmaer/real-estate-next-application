// components/PropertyTable.js
import React from 'react';
import { useTable } from 'react-table';

const Table = ({ columns, data, buttons }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100 thead">
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps()}
                  className="py-3 px-4 border-b font-semibold text-sm text-gray-600 uppercase tracking-wider"
                  key={columnIndex}
                >
                  {column.render('Header')}
                </th>
              ))}
              {buttons && (
                <th className="py-3 px-4 border-b"></th>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={rowIndex} className="hover:bg-gray-50 transition-all">
                {row.cells.map((cell, cellIndex) => (
                  <td
                    {...cell.getCellProps()}
                    className="py-4 px-6 border-b text-sm text-gray-800"
                    key={cellIndex}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
                {buttons && (
                  <td className="py-4 px-6 border-b text-sm text-gray-800">
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
    </div>
  );
};

export default Table;
