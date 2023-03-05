import React, { Fragment, useEffect, useState } from 'react'
import ProjectNavbar from './ProjectNavbar'
import SideBarNav from './SideBarNav'
import '../Staticfiles/Edit.css'
function ProjectWorkspace() {
const[projectdata,setprojectdata]=useState([])
  useEffect(()=>{
  const fetchProject = async () => {
    const response = await fetch('http://localhost:3001/dataproject');
    const data = await response.json();
    setprojectdata(data);
    console.log(projectdata);
    };
    fetchProject()
},[]);
  return (
    
    <Fragment>
<ProjectNavbar></ProjectNavbar>
<br></br>
<SideBarNav></SideBarNav>

<div className='my-container'>

{projectdata.map((item)=>(
<div className="card text-white bg-info mb-3" style={{maxWidth:"350px",display:"flex",}} >
  <div className="card-data">ProjectDetails</div>
  <div className="card-body">
    <h5 className="card-title">{item.ProjectData}</h5>
    <p className="card-text">Deadline :{item.deadline}</p>
    <button className="btn btn-danger"  >   Delete  </button>
  </div>  
</div>

))}
</div>
</Fragment>


  )
}

export default ProjectWorkspace