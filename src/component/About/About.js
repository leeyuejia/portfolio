import React, { Component, Fragment, useState } from 'react'
import style from './style.module.css'
import AboutMe from '../elements/AboutMe'
import SkillSet from '../elements/SkillSet'

export default function About (props) {


    return (
        <div className={style.aboutContainer} id='about'>
            <div className={style.about}>
                <AboutMe/>
                <SkillSet/>
            </div>
            <div className={style.bgTitle}>
            ABOUT ME
            </div>
        </div>
    )
}