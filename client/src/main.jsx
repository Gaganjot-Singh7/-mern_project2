import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Services from './components/Services.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: < App />
  },
  {
    path: '/about',
    element: < About />
  },

  {
    path: '/contact',
    element: < Contact />
  },

  {
    path: '/login',
    element: < Login />
  },

  {
    path: '/register',
    element: < Register />
  },
  {
    path: '/services',
    element: < Services />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    </RouterProvider>

  </React.StrictMode>,
)
