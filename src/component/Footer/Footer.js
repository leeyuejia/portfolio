import React, { Component, Fragment, useState } from 'react'
import style from './style.module.css'
import logo from '../../logo.svg'
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { MDBIcon } from 'mdbreact';
import { StepLabel } from '@material-ui/core';


export default function Footer(props) {

    
    return(
        <div className={style.footer}>
            <a className={style.footerText} href='https://github.com/leeyuejia'>
                Designed and built by Lee Yue Jia, {new Date().getFullYear()}
            </a>


                <ul className={style.navList}>
                    <li><a href='#home' className={style.link}>Home</a></li>
                    <li><a href='#about'className={style.link}>About</a></li>
                    <li><a href='#project'className={style.link}>Project</a></li>
                    <li><a href='#contact'className={style.link}>Contact</a></li>
                </ul>
            
            <div className={style.socialBtn}>
                <a href='https://pinterest.com/leeyuejia/boards' target='blank'>
                    <PinterestIcon  className={style.PinterestIcon}/>
                </a>
                <a href='https://www.instagram.com/leeyuejia/' target='blank'>
                    <InstagramIcon  className={style.InstagramIcon}/>
                </a>
                <a href='https://github.com/leeyuejia' target='blank'>
                    <GitHubIcon  className={style.GitHubIcon}/>
                </a>
                <a href='https://linkedin.com/in/leeyuejia' target='blank'>
                    <LinkedInIcon  className={style.LinkedInIcon}/>
                </a>
                <a href='https://codepen.io/leeyuejia' target='blank'>
                    <MDBIcon fab icon="codepen" className={style.CodePen}/>
                </a>
            </div>
        </div>
    )
    
}