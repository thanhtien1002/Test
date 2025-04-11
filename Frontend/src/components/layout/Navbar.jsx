import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Quản Lý Lớp Học' },
    { path: '/home', label: 'Trang Chủ' },
    { path: '/classlist', label: 'Danh Sách Lớp' },
    { path: '/about', label: 'Giới Thiệu' },
  ];

  return (
    <nav className="bg-blue-600 p-4 text-white w-full">
        <div className="w-full flex justify-start space-x-6 px-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded ${
              location.pathname === item.path
                ? 'bg-blue-800'
                : 'hover:bg-blue-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

