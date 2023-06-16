import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, username }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        {isLoggedIn ? (
          <Link to="/profile">{username}</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
