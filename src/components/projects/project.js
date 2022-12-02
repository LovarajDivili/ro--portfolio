import React from 'react'
import './project.css'

import TerraPlanner from '../../images/movie.png'
import ReactJs from '../../images/tec_icons/react.png'
import NodeJs from '../../images/tec_icons/node.png'
import ES6Js from '../../images/tec_icons/es6.svg'

import ProjectItem from './project_item'

const Project = ({ UserData }) => {

    const projects = UserData.projects

    return (
        <section id="projects" className='Project-section-main'>
            <div className="Project-section-title">
                <h1>Welcome to <span className='text-gradient'>Project Gallery</span></h1>
                <p>A small gallery of my projects done by me.These <br />
                    project includes various techonologies.</p>
            </div>
            <div className="Project-items">
                {projects && projects.map((P, i) => (
                    <ProjectItem key={i} data={P} />
                ))}

            </div>
        </section>
    );
}
export default Project;
