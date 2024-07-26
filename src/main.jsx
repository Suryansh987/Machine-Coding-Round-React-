import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Otp from './Components/Otp.jsx'
import CourseContainer from './Components/CourseContainer.jsx';
import Table from './Components/Table.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Otp />
      },
      {
        path: '/course-list',
        element: <CourseContainer />
      },
      {
        path:'/table',
        element: <Table/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
