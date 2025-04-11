// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Trang Chủ</h1>
      <p className="mb-4">Chào mừng đến với ứng dụng quản lý lớp học!</p>
      <Link
        to="/classlist"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Xem Danh Sách Lớp Đã Đặt
      </Link>
    </div>
  );
};

export default Home;