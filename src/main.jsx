import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TableX from './pages/TableX/TableX';
import Title from './pages/Title/Title';
import AddComponent from './pages/AddComponent/AddComponent';


import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import About from './pages/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/about",
        element: <About></About>

      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      }

    ]
  },
  {
    path: "home",
    element: <HomePage></HomePage>,
    children: [
      {
        path: 'tableX',
        element: <TableX></TableX>
      },
      {
        path: 'title',
        element: <Title></Title>

      },
      {
        path: 'components',
        element: <AddComponent></AddComponent>
      }
    ]


  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
