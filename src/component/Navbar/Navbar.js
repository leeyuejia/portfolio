import React, { Component, Fragment, useState } from 'react'
import style from './style.module.css'
import logo from '../../logo.svg'
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { MDBIcon } from 'mdbreact';


export default function NavBar(props) {
    const [navBarClass, setNavBarClass] = useState(style.NavBar)
    const [toggleClass, settoggleClass] = useState(true)
    

    const toggle= () => {
        settoggleClass(!toggleClass)
        // setNavBarClass(style.NavBarOnScroll)
    }
    document.addEventListener('scroll', ()=> {
        if (document.body.scrollTop >=10) {
            console.log('scrolled 10')
            toggle()
        } else {
            console.log(document.body.scrollTop)
            settoggleClass(true)
        }
    })
    return(
        <div className={toggleClass? style.NavBar : style.NavBarOnScroll} onScroll={toggle}> {/*{change to on scroll}*/}
            <div className={style.logoContainer}>
                <img src={logo} alt='logo' title='logo' id={style.navLogo}/>
            </div>

            {/* <div className='navLink'> */}
                <ul className={style.navList}>
                    <li><a href='#home' className={style.link}>Home</a></li>
                    <li><a href='#about'className={style.link}>About</a></li>
                    <li><a href='#project'className={style.link}>Project</a></li>
                    <li><a href='#home'className={style.link}>Contact</a></li>
                </ul>
            {/* </div> */}
            
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