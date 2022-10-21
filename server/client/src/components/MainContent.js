import './MainContent.css';
import React, { useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  useEffect(() => {});

  return (
    <div className="contents">
      <p>
        Hello, welcome and you finally made it to this page, after the
        neccessary signup and login, and I am proud of you
      </p>
    </div>
  );
};

export default MainContent;
