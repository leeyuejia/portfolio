import React from 'react'
import style from './style.module.css'
import SkillBlock from '../SkillBlock'
import resume from '../../assets/resume.pdf'

export default function SkillSet (props) {
    const techSkill = ['Javascript(ES6+)', 'HTML&CSS', 'React', 'Jquery', 'ExpressJS',
    'NodeJS', 'Mongoose', 'MongoDB']
    const softSkill = ['Visual Design', 'Research','Design Strategy', 'Design Education',
    'Project Management']
    return (
        <div className={style.skillset}>
            <div className={style.skillsetTitle}>
            <p className={style.title}>Skillset</p>
            </div>

            <div className={style.skillContainer}>
                <div className={style.tech}>
                    <div className={style.techTitle}>
                        Technology
                    </div>
                    <div className={style.techContainer}>

                        {techSkill.map((tech,index)=> {
                            return <SkillBlock 
                                        text={tech} 
                                        key={index}
                                    />
                        })}

                    </div>
                </div>
                <div className={style.soft}>
                    <div className={style.softTitle}>
                        SoftSkill
                    </div>
                    <div className={style.softContainer}>
                        {softSkill.map((soft,index)=> {
                            return <SkillBlock 
                                        text={soft} 
                                        key={index}
                                    />
                        })}
                    </div>
                </div>
            </div>

            <div className={style.resumeContainer}>
                <a href={resume} download>
                <button id={style.resumeBtn}>resume</button>
                </a>
            </div>

    </div>

    )
}