import React from 'react';
import './Banner.css';

const Banner = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="banner">
      <div className="banner-left">
        <div className="banner-title">Operations</div>
        <div className="banner-subtitle">Department Name</div>
      </div>
      <div className="banner-right">
        <div className="banner-user">User: admin</div>
        <div className="banner-date">Date: {currentDate}</div>
      </div>
    </div>
  );
};

export default Banner;
