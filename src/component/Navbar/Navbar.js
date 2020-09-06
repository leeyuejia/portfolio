import React, { Component, Fragment, useState } from 'react'
import style from './style.module.css'
import logo from '../../logo.svg'
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { MDBIcon } from 'mdbreact';
import anime from 'animejs/lib/anime.es.js'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer,
    MDBHamburgerToggler 
  } from 'mdbreact';


export default function NavBar(props) {
    const [navBarClass, setNavBarClass] = useState(style.NavBar)
    const [toggleClass, settoggleClass] = useState(true)
    const [collapseID, setcollapseID] = useState(false)
    // const anime = require('animejs')
    // anime({
    //     targets: '#navbar',
    //     translateX: 250,
    //     rotate: '1turn',
    //     backgroundColor: '#FFF',
    //     duration: 800
    //   });

    const toggleCollapse = () => {
        setcollapseID(!collapseID)
    } 
    

    // const toggle= () => {
    //     settoggleClass(!toggleClass)
    //     // setNavBarClass(style.NavBarOnScroll)
    // }
    // const handleScroll = (e) => {
    //     const target= e.target
    //     console.log(target.scrollHeight)
    //     console.log(target.scrollTop)
    // }
    // window.onscroll = () => {scrollFunction()}
    // const scrollFunction = () => {
    //     if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         console.log('scrolled 80')
    //         toggle()
    //     } else {
    //         console.log('scrolled -80')
    //         settoggleClass(true)
    //         // setNavBarClass(style.NavBarOnScroll)
    //     }
    // }
    // {toggleClass? style.NavBar : style.NavBarOnScroll}
    return(
        <div className={style.navBarContainer}>
            <div className={navBarClass} id='navbar'>
                <div className={style.logoContainer}>
                    <img src={logo} alt='logo' title='logo' id={style.navLogo}/>
                </div>

                {/* <div className='navLink'> */}
                    <ul className={style.navList}>
                        <li><a href='#home' className={style.link}>Home</a></li>
                        <li><a href='#about'className={style.link}>About</a></li>
                        <li><a href='#project'className={style.link}>Project</a></li>
                        <li><a href='#contact'className={style.link}>Contact</a></li>
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


                <MDBNavbar
                    className={style.mobileNavBar}
                    dark
                    >
                <div className={style.mobileNavBar}>
                    <div className={style.mobileLogoContainer}>
                        <MDBNavbarBrand>Logo</MDBNavbarBrand>
                        <MDBHamburgerToggler color="#FFB633" id="hamburger1" onClick={toggleCollapse} />
                    </div>
                    <MDBCollapse
                    id='navbarCollapse1'
                    isOpen={collapseID}
                    
                    navbar
                    >
                        <MDBNavbarNav right className={style.mobileNavBarMenu}>
                            <li><a href='#home' className={style.link}>Home</a></li>
                            <li><a href='#about'className={style.link}>About</a></li>
                            <li><a href='#project'className={style.link}>Project</a></li>
                            <li><a href='#contact'className={style.link}>Contact</a></li>
                        </MDBNavbarNav>
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

                    </MDBCollapse>
                </div>
                </MDBNavbar>

        </div>

        


    )
    
}