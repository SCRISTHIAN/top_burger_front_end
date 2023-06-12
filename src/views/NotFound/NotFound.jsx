
import React, { Fragment } from 'react';
import './style/index.css';

const NotFound = () => {
    return (
      <div className="not-found-container">
        <div className="animation-container">
          <div className="loader">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="dot"></div>
            ))}
          </div>
          <h2>404</h2>
          <span>Page Not Found!</span>
        </div>
      </div>
    );
  };

export default NotFound
