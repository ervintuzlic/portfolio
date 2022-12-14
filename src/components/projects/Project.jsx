import React from 'react'
import './Project.css';
import {projectList} from '../../data/data';
import {FiGithub} from 'react-icons/fi';
import {BiWorld} from 'react-icons/bi';

const Project = () => {
  return (
    <section id='projects'>
      <div class="projectsHeadline">Projects</div>
      <div id="projectsContainer">
        <div class="project">
            {projectList.map((item)=>(
              <div className="projectIndividual" key={item.id}>
                <div class="projectImage">
                  <img className="image-for-project" alt="projectImage" src={item.image} {...item}/>
                </div>
                <div class="projectSection">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div>
                    <a href={item.demo} className={item.classEl} target="_blank" rel="noreferrer"><BiWorld style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
                    <a href={item.github} target="_blank" rel="noreferrer"><FiGithub style={{width:"24px", height:"24px", cursor:"pointer"}}/></a>
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