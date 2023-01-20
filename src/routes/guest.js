import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Login } from 'src/pages/login';

export const guestRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
]);
