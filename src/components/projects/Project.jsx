import React from 'react'
import './Project.css';
import {projectList} from '../../data/data';


const Project = () => {
  return (
    <section id='projects'>
      <div id="projectsContainer">
        <div class="project">
            {projectList.map((item)=>(
              <div key={item.id}>
                <div class="projectImage">
                  <img src={item.image} {...item} style={{width:"300px", height:"180px"}}/>
                </div>
                <div class="projectSection">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    <button>
                      GitHub
                    </button>
                    <button>
                      Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>


  )
}

export default Project