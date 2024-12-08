import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';

export const Navbar = () => {
  const location = useLocation();

  const isLessonPlanner = location.pathname === '/lessonPlanner';

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: '#8172db',
        height: '60px',
        opacity: 1,
      }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/MainPlanner" style={{ paddingLeft: '13px' }}>
          <img src={logo} alt="ChimpVine Logo" width="185" height="56" />
        </a>
        <div className="navbar-nav ml-auto">
          {isLessonPlanner ? (
            <>
              <Link
  className="nav-link"
  to="/home"
  style={{ color: 'rgba(255, 0, 0, 0.4)', marginRight: '60px' }}
>
  Home
</Link>

              <Link className="nav-link" to="/for-student" style={{ color: 'white', marginRight: '60px' }}>
                For Students
              </Link>
              <Link className="nav-link" to="/for-teacher" style={{ color: 'white', marginRight: '60px' }}>
                For Teachers
              </Link>
              <Link className="nav-link" to="/about-us" style={{ color: 'white' ,marginRight: '170px' }}>
                About Us
              </Link>
            </>
          ) : (
            <Link className="nav-link" to="/other-page" style={{ color: 'white' }}>
              jjkkk
                     </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
