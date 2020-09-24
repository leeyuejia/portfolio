import React from 'react'
import style from './style.module.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

export default function ProjectCard (props) {

    return (
        <div className={style.ProjectCard}>
            <div className={style.imgContainer}>
                <img 
                    className={style.projectSS} 
                    src={props.image} 
                    alt={props.title}
                    title={props.title}/>
                <div className={style.overlay}>
                    <p className={style.projectTitleOverlay}>{props.title}</p>
                </div>
            </div>
            <div className={style.descriptionContainer}>
                <div className={style.projectDescription}>

                    <div className={style.leftContainer}>
                        <div className={style.description}>
                            {props.description}
                        </div>
                        <ul className={style.listOfTech}>
                            {props.listTech.map((eachTech,index) => {
                                return <li className={style.eachTech}>{eachTech}</li>
                            })}
                        </ul>
                    </div>

                    <div className={style.rightContainer}>
                        <p className={style.number}>{props.number}</p>
                        <p className={style.projectTitle}>{props.title}</p>
                        {!props.partners? null :
                        
                        <p className={style.partner}>
                            with
                            <br></br>
                        {props.partners.map((partner,index) => {
                                return <a 
                                    href={partner.link}
                                    className={style.partnerLink}
                                    target='blank'>
                                    {partner.name}
                                    <br></br>
                                    </a>
                            })}
                            </p>
                        }
                        
                        <p className={style.date}>{props.date}</p>
                    </div>

                </div>

                <div className={style.linkContainer}>
                    <a href={props.githubLink} target='blank'>
                        <GitHubIcon  className={style.GitHubIcon}/>
                    </a>
                    <a href={props.launchLink} target='blank'>
                        <LaunchIcon  className={style.LaunchIcon}/>
                    </a>
                </div>
            </div>
        </div>
    )
}