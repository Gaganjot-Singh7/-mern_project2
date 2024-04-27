import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
function Admin_dashboard() {
  return (
   <div className="container bg-gray-300 ">
    <ul className='flex gap-6'>
        <li><NavLink to="/admin/user">Users</NavLink></li>
        <li><NavLink to="/admin/contact">Messages</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        
    </ul>
    <Outlet/>
   </div>
  )
}

export default Admin_dashboard