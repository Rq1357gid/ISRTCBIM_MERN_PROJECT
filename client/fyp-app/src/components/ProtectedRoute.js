import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // Check if the user is authenticated (you might implement your own logic here)
  const isAuthenticated = localStorage.getItem('token'); // Assuming you store JWT token in local storage

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/" replace state={{ from: props.location }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
