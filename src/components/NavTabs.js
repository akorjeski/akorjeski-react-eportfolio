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
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
  </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
</Dropdown.Item>
<Dropdown.Item ><Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>Aboot</Link>
</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      
  
  )};


export default NavTabs;
