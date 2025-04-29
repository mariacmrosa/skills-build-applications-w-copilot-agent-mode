import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="text-center" style={{ padding: '50px' }}>
      <h1 className="display-4">404</h1>
      <p className="lead">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Go Back Home</Link>
    </div>
  );
}

export default PageNotFound;