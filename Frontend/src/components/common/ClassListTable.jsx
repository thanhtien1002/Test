import React from 'react';

const ClassListTable = ({ classes, onTransfer, onCancel }) => {
  return (
    <div className="w-full">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-50">
            <th className="p-3 text-left text-sm font-medium text-gray-600 w-1/6">Phòng</th>
            <th className="p-3 text-left text-sm font-medium text-gray-600 w-1/4">Người đặt</th>
            <th className="p-3 text-left text-sm font-medium text-gray-600 w-1/4">Giờ bắt đầu - giờ kết thúc</th>
            <th className="p-3 text-left text-sm font-medium text-gray-600 w-1/6">Ngày</th>
            <th className="p-3 text-left text-sm font-medium text-gray-600 w-1/6"></th>
          </tr>
        </thead>
        <tbody>
          {classes.map((classItem) => (
            <tr key={classItem.id} className="border-t border-gray-200 hover:bg-gray-50">
              <td className="p-3 text-sm truncate">{classItem.room}</td>
              <td className="p-3 text-sm truncate">{classItem.bookedBy}</td>
              <td className="p-3 text-sm truncate">{classItem.time}</td>
              <td className="p-3 text-sm truncate">{classItem.date}</td>
              <td className="p-3 flex space-x-2">
                <button
                  className="bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200 text-sm"
                  onClick={() => onTransfer(classItem)}
                >
                  Chuyển
                </button>
                <button
                  className="bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200 text-sm"
                  onClick={() => onCancel(classItem.id)}
                >
                  Hủy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassListTable;
