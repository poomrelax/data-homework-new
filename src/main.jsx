import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Information from './components/information/information.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Login from './components/login/login.jsx'
import HomeWork from './components/HomeWork/HomeWork.jsx'
import Content from './components/content/content.jsx'
import HomeworkLogin from './components/HomeworkLogin/HomeworkLogin.jsx'
import Homeworkadmin from './components/Homeworkadmin/Homeworkadmin.jsx'


const router = createBrowserRouter([
  {
    path: "/content",
    element: <Content/>
  },
  {
    path: "/information",
    element: <Information/>
  },
  {
    path: "/homework",
    element: <HomeWork/>
  },
  {
    path: "/homeworklogin",
    element: <HomeworkLogin/>
  },
  {
    path: "/homeworkadmin",
    element: <Homeworkadmin/>
  },
  {
    path: "/",
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
