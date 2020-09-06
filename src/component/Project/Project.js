import React from 'react'
import style from './style.module.css'
import projects from '../assets/Projects/index'
import ProjectCard from '../elements/ProjectCard/ProjectCard'

export default function Project (props) {
    

    return (
        <div className={style.projectContainer} id='project'>
            <div className={style.bgTitle}>
            PROJECT
            </div>
            <div className={style.project}>
                {
                projects.map(project => {
                    return < ProjectCard
                        image={project.image}
                        number={project.number}
                        title={project.title}
                        description={project.description}
                        listTech={project.listTech}
                        partners={project.partners? project.partners : null}
                        date={project.date}
                        githubLink={project.githubLink}
                        launchLink={project.launchLink}
                    />
                })
            }
            </div>
            

        </div>
    )
}