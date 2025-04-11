// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="py-4 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Không Tìm Thấy Trang</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 inline-block"
      >
        Về Trang Chủ
      </Link>
    </div>
  );
};

export default NotFound;