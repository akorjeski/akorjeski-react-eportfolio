import React from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';


function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (

    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-justify" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>
  </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
</Dropdown.Item>
<Dropdown.Item ><Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      
  
  )};


export default NavTabs;
