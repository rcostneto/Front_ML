import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Registeruser } from './pages/Registeruser';
import Listuser from './pages/Listuser';
import { Cadastrouser } from './pages/Cadastrouser';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Registeruser />,
//   },
//   {
//     path: "Listuser",
//     element: <Listuser />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App  />,
    children: [
      {
        path: "/",
        element: <Registeruser />,
      },
      {
        path: "/Listuser",
        element: <Listuser />,
      }, 
      { 
        path: "/Listuser/Cadastrouser",
        element: <Cadastrouser />,
      },  
  
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
