import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // For React Router v5
import './style.css';

function NotFound() {
  const history = useHistory();
  const [hover, setHover] = useState(false);

  const goHome = () => {
    history.push('/');
  };

  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">The page you requested could not be found.</p>
      <button
        className="notfound-button"
        onClick={goHome}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? "Let's Go Home!" : 'Go Home'}
      </button>
    </div>
  );
}

export default NotFound;
