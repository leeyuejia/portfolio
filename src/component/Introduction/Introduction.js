import React, { Component, Fragment, useState } from 'react'
import style from './style.module.css'

export default function Introduction (props) {
    return (
        <div className={style.introContainer}>
            <div className={style.introductionCard}>
                <div className={style.leftBar}></div>
                <div className={style.contentContainer}>
                    <p id={style.hi}>hi,
                    <span id={style.afterHi}>I am a</span><br></br>
                    <span id={style.largeTitle}>Full-Stack Developer</span><br></br>
                    <span id={style.designBG}>with design Background</span><br></br>
                    </p>
                    {/* <p id={style.largeTitle}>Full-Stack Developer</p>
                    <p id={style.designBG}>with design Background</p> */}
                    <p id={style.intro}>
                    I have been designing physical products since graduation and 
                    now I am looking to design meaningful digital products. 
                    I love to connect and bring people together.
                    </p>
                </div>
                <h1>Intro</h1>
            </div>
        </div> 
    )
}