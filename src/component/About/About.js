import React, { Component, Fragment, useState } from 'react'
import style from './style.module.css'
import SkillBlock from '../elements/SkillBlock'
import profilePic from '../assets/tempProfilePic.png'

export default function About (props) {
    const techSkill = ['Javascript(ES6+)', 'HTML&CSS', 'React', 'Jquery', 'ExpressJS',
                        'NodeJS', 'Mongoose', 'MongoDB']
    const softSkill = ['Visual Design', 'Research','Design Strategy', 'Design Education',
                        'Project Management']

    return (
        <div className={style.about}>

            <div className={style.aboutMe}>
                <div className={style.aboutMeTitle}>About me</div>
                <div className={style.aboutMeDescription}>
                    <p className={style.description}>
                        Hi, I am Yue Jia, a full-stack developer based in Singapore. 
                        I hope to enter into the social media or gaming industry. 
                        <br>
                        </br>
                        <br>
                        </br>
                        I strive to design products that not only help users to perform 
                        their task but also having a positive and meaningful experience 
                        during the process. 
                        <br>
                        </br>
                        <br>
                        </br>
                        I graduated with BA in Industrial design and worked as an 
                        Industrial designer for 6 years before embarking on a new 
                        journey as a software engineer.
                    </p>
                </div>
                <div className={style.aboutMeProfile}>
                    <img src={profilePic} alt='profilepicture' title='profilepicture' className={style.profilePic}/>
                </div>
            </div>
            
            <div className={style.skillset}>
                <div className={style.skillsetTitle}>
                    SkillSet
                </div>

                <div className={style.skillContainer}>
                    <div className={style.tech}>
                        <div className={style.techTitle}>
                            Technology
                        </div>
                        <div classNmae={style.techBlock}>

                            {techSkill.map((tech,index)=> {
                                return <SkillBlock 
                                            text={tech} 
                                            className={style.skillblock}
                                        />
                            })}

                        </div>
                    </div>
                    <div className={style.soft}>
                        <div className={style.softTitle}>
                            SoftSkill
                        </div>
                        <div classNmae={style.softBlock}>
                            {softSkill.map((soft,index)=> {
                                return <SkillBlock 
                                            text={soft} 
                                            className={style.skillblock}
                                        />
                            })}
                        </div>
                    </div>
                </div>

                <div className={style.resumeContainer}>
                    <button id={style.resumeBtn}>Resume</button>
                </div>

            </div>

        </div>
    )
}