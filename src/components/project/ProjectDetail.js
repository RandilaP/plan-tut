import React from 'react'
import { useParams } from 'react-router-dom';

const ProjectDetails = (props) =>{
    const {id} = useParams();
  return (
    <div className='container section project-detail'>
        <div className="card z-depth-0">
            <div className="card-title">Project Title - {id} </div>
            <p>Lorem ipsum dolar sit amet constanit apcisdcar. elitasdaf asdfadf</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
            <div>Posted by the Net ninja</div>
            <div>2nd September, 2am</div>
        </div>
    </div>
  )
}

export default ProjectDetails
