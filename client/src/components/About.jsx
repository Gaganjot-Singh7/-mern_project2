import React from 'react'
import { NavLink } from "react-router-dom"
import "../component_css/About.css"

function About() {
  return (
    <>
      <div className="contain">
        about
      </div>
      <div className="bottom">
        <NavLink to="/">Home Page</NavLink>
      </div>
    </>
  )
}

export default About