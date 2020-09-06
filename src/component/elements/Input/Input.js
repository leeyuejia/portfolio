import React from 'react'
import style from './style.module.css'

function Input(props) {
    return (
        <input 
        className={style.inputLine}
            type={props.type}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            require = {props.require}
        />    
    )
}

export default Input