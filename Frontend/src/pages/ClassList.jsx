import React, { useState, useEffect } from 'react';
import ClassListTable from '../components/common/ClassListTable';
import TransferModal from '../components/common/TransferModal';

const ClassList = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      room: 'H6 - 001',
      bookedBy: 'Nguyễn Minh Hùng',
      time: '7 giờ - 9 giờ',
      date: '17/03/2025',
    },
    {
      id: 2,
      room: 'H6 - 002',
      bookedBy: 'Nguyễn Minh Hùng',
      time: '8 giờ - 9 giờ',
      date: '18/03/2025',
    },
    {
      id: 3,
      room: 'H6 - 003',
      bookedBy: 'Trần Văn An',
      time: '9 giờ - 11 giờ',
      date: '18/03/2025',
    },
  ]);
  const [filteredClasses, setFilteredClasses] = useState(classes);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterValue, setFilterValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    let filtered = classes;

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter((classItem) =>
        [classItem.room, classItem.bookedBy, classItem.date]
          .join(' ')
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    if (filterType !== 'all' && filterValue) {
      filtered = filtered.filter((classItem) =>
        classItem[filterType].toLowerCase() === filterValue.toLowerCase()
      );
    }

    setFilteredClasses(filtered);
  }, [searchQuery, filterType, filterValue, classes]);

  const handleTransfer = (classItem) => {
    setSelectedClass(classItem);
    setIsModalOpen(true);
  };

  const handleCancel = (classId) => {
    if (window.confirm('Bạn có chắc muốn hủy lớp này?')) {
      const updatedClasses = classes.filter((classItem) => classItem.id !== classId);
      setClasses(updatedClasses);
      setFilteredClasses(filteredClasses.filter((classItem) => classItem.id !== classId));
    }
  };

  const handleConfirmTransfer = (classId, newTime) => {
    const updatedClasses = classes.map((classItem) =>
      classItem.id === classId ? { ...classItem, time: newTime } : classItem
    );
    setClasses(updatedClasses);
    setFilteredClasses(
      filteredClasses.map((classItem) =>
        classItem.id === classId ? { ...classItem, time: newTime } : classItem
      )
    );
  };

  const getUniqueValues = (key) => {
    return [...new Set(classes.map((classItem) => classItem[key]))];
  };

  return (
    <div className="p-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-5 space-y-3 sm:space-y-0">
        <h1 className="text-2xl font-bold">Danh sách các lớp đã đặt</h1>
        <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
          <input
            type="text"
            placeholder="Tìm kiếm thêm..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg p-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
              setFilterValue('');
            }}
            className="border rounded-lg p-2 w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Lọc theo...</option>
            <option value="room">Phòng</option>
            <option value="date">Ngày</option>
          </select>
        </div>
      </div>
      <ClassListTable
        classes={filteredClasses}
        onTransfer={handleTransfer}
        onCancel={handleCancel}
      />
      <TransferModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmTransfer}
        classItem={selectedClass}
      />
    </div>
  );
};

export default ClassList;