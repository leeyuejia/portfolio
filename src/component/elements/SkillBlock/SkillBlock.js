import React, { Fragment } from 'react'
import style from './style.module.css'

export default function SkillBlock (props) {
    return (
        <div className={style.skillBlock}>
            <p className={style.text}>{props.text}</p>
        </div>
    )
}