// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import ClassList from './pages/ClassList';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
      <div className="w-full">
          <Navbar />
          <div className="bg-white rounded-lg shadow-sm">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classlist" element={<ClassList />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;