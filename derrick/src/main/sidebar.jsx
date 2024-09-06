// Sidebar.js
import React from 'react';
import './style.css'; // Add styles for the sidebar

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>✕</button>
      <ul className="sidebar-nav">
        <li><a href="#">خانه</a></li>
        <li><a href="#">درباره ما</a></li>
        <li><a href="#">تماس با ما</a></li>
        <li><a href="#">ثبت نام/ ورود</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;