import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { Form, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import '../Staticfiles/Edit.css'
import { useState } from 'react';
import ProjectForm from './ProjectForm'
function SideBarNav() {
  const [fstate,fsetstate]=useState(false);
    return (
    <div>
      {fstate && <ProjectForm></ProjectForm> }
<div style={{display:"flex",alignItems:"center",flexDirection:'row', minWidth:"300px",marginLeft:"400px"}}>
    <Navbar bg='light' expand='lg'>
        <Nav >
        <Nav.Link href="/">
          <FaHome /> Home
        </Nav.Link>
        <br></br>
        <Nav.Link href="/profile">
          <FaUser />Company Profile
        </Nav.Link>
        <br></br>
        <Nav.Link href="/profile">
          <FaUser />User Profile
        </Nav.Link>
        <NavDropdown title="Project" id="settings-dropdown">
            <NavDropdown.Item href="/settings/general">
              Backlog
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/settings/security">
              Current Projects
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        <Nav.Link href="/settings">
          <FaCog /> Settings
        </Nav.Link>
        <NavItem>
      <button className="btn btn-info" onClick={()=>{fsetstate(!fstate)}}>add project</button>
      </NavItem>
      </Nav>
      </Navbar>
      </div>
      </div>
    );
  }
  
  export default SideBarNav;