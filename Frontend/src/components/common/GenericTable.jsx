// components/common/GenericTable.jsx
import React, { useState } from 'react';

const GenericTable = ({ columns, data, actions }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Lọc dữ liệu dựa trên tìm kiếm
  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      {/* Thanh tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      {/* Bảng */}
      <div className="overflow-x-auto shadow-sm">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="py-2 px-4 text-left text-gray-600">
                  {column.header}
                </th>
              ))}
              {actions && <th className="py-2 px-4 text-left"></th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="py-2 px-4">
                    {column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
                {actions && (
                  <td className="py-2 px-4 flex space-x-2">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => action.onClick(row)}
                        className={action.className}
                      >
                        {action.label}
                      </button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenericTable;