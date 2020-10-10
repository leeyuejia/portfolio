import React, { Component, Fragment, useState, useContext } from 'react'
import { ThemeContext } from 'styled-components'
import logo from '../../../logo.svg'
import styled from 'styled-components'

const LogoStyle = styled.img `
    width:50px;
    height:auto;
    float: left;
`
const LogoContainer = styled.div `
    width:200px;
    height:50px;
`


export default function Logo ({...props}) {
    const themeContext = useContext(ThemeContext)
    return (
        <LogoContainer >
            <LogoStyle src={logo} alt='logo' title='logo' className={props.className}/>
        </LogoContainer>
    )
}