import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Main } from 'src/pages/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);
