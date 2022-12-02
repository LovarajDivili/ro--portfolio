import React from 'react'

import TerraPlanner from '../../images/movie.png'
import ReactJs from '../../images/tec_icons/react.png'
import NodeJs from '../../images/tec_icons/node.png'
import ES6Js from '../../images/tec_icons/es6.svg'

const ProjectItem = ({ data }) => {


    return (
        <div className="Project-item">
            <div className="Project-item-thump">
                <img src={data.image} alt="" />
            </div>
            <div className="Project-item-description">
                <h2 className="Project-item-title">
                    {data.name}
                </h2>
                <p className='description'><span>Description: </span>{data.sub_desc}</p>
                <div className="Project-item-tech">
                    <p className='company'><span>Techonologies: </span> {data.skills}</p>

                </div>
            </div>

            <div className="Project-item-description-brief">
                <h2 className="Project-item-title">
                    {data.name}
                </h2>
                <p className='description'>{data.description}</p>

                <p className='company'><span>Company:</span> {data.company}.</p>
                {data.link ? (<p className='company'><span>View Site: </span><a href={data.link} target={'_blank'}>Open</a></p>) : null}

                <div className='portion'>
                    <span>Portion:</span>
                    <div className='portion-items'>
                        {data.portion && data.portion.map((_p, j) => (
                            <p key={j}>{_p}</p>
                        ))}

                    </div>
                </div>
                <div className="Project-item-tech">
                    <p className='company'><span>Techonologies:</span></p>
                    <div className="Project-item-tech-items">
                        {data.skills}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectItem;
