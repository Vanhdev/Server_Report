import React from 'react';
import './App.css';
import { LoginPage, DashboardPage } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter(
    [
      { path: '/', Component: LoginPage },
      { path: '/dashboard', Component: DashboardPage },
    ]
  )
  return (
    <RouterProvider router={router} />);
}

export default App;
