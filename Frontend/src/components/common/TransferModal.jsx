
import React, { useState } from 'react';

const TransferModal = ({ isOpen, onClose, onConfirm, classItem }) => {
  const [selectedTime, setSelectedTime] = useState('');

  if (!isOpen) return null;

  const availableTimes = [
    { time: '8h - 11h', value: '8h-11h' },
    { time: '14h - 16h', value: '14h-16h' },
  ];

  const handleConfirm = () => {
    if (selectedTime) {
      onConfirm(classItem.id, selectedTime);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          Bạn đang chọn lớp {classItem.room}
        </h2>
        <div className="flex justify-between mb-3">
          <div>
            <label className="block text-sm font-medium">Thời gian bắt đầu</label>
            <p className="text-gray-600">8h</p>
          </div>
          <div>
            <label className="block text-sm font-medium">Thời gian kết thúc</label>
            <p className="text-gray-600">9h</p>
          </div>
        </div>
        {availableTimes.map((timeSlot) => (
          <div
            key={timeSlot.value}
            className="flex justify-between items-center p-3 bg-gray-50 mb-2 rounded"
          >
            <p>{classItem.room}</p>
            <p>Trống</p>
            <p>{timeSlot.time}</p>
            <button
              className="bg-green-100 text-green-800 px-3 py-1 rounded hover:bg-green-200"
              onClick={() => setSelectedTime(timeSlot.value)}
            >
              Chọn
            </button>
          </div>
        ))}
        <div className="flex justify-end space-x-3 mt-5">
          <button
            className="bg-green-100 text-green-800 px-4 py-2 rounded hover:bg-green-200"
            onClick={handleConfirm}
          >
            Xác nhận
          </button>
          <button
            className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200"
            onClick={onClose}
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;