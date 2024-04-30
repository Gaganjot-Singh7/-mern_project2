import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Services from './components/Services.jsx';
import Home from './components/Home.jsx';
import Logout from './components/Logout.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin_dashboard from './components/Admin_dashboard.jsx';
import Admin_user from './components/Admin_user.jsx';
import Admin_contact from './components/Admin_contact.jsx';
import Admin_addservices from './components/Admin_addservices.jsx';
import AdminServices from './components/AdminServices.jsx';
import UserUpdate from './components/UserUpdate.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },

  {
    path: '/contact',
    element: <Contact />
  },

  {
    path: '/login',
    element: <Login />
  },

  {
    path: '/register',
    element: < Register />
  },
  {
    path: '/services',
    element: <Services />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path:"/admin",
    element:<Admin_dashboard/>,
    children:[{
      path:"user",
      element:<Admin_user/>
  
    },
    {
      path:"contact",
      element:<Admin_contact/>
    },
  {path:"addservices",
  element:<Admin_addservices/>
  },
{
  path:"services",
  element:<AdminServices/>
},
{
  path:"userUpdate",
  element:<UserUpdate/>
}


]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
    <RouterProvider router={router}>


    </RouterProvider>
    <ToastContainer />
  </>

);
