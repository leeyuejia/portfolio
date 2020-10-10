import React, { Component, Fragment, useState, useContext } from 'react'
import style, { ThemeContext } from 'styled-components'
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
    MDBCollapse,
    MDBHamburgerToggler 
  } from 'mdbreact';
import Switch from '../elements/Switch'
import Logo from './Logo';


export default function NavBar(props) {
    const themeContext = useContext(ThemeContext)

    const [collapseID, setcollapseID] = useState(false)
    const toggleCollapse = () => {
        setcollapseID(!collapseID)
    } 
    console.log(themeContext)

    return(
        <div>
            <div className={style.NavBar} id='navbar1'>
                <Logo/>
                <Switch/>
                    <ul className={style.navList}>
                        <li><a href='#home' className= ''>Home</a></li>
                        <li><a href='#about'className= ''>About</a></li>
                        <li><a href='#project'className= ''>Project</a></li>
                        <li><a href='#contact'className= ''>Contact</a></li>
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
                        <LinkedInIcon  className= {style.LinkedInIcon}/>
                    </a>
                    <a href='https://codepen.io/leeyuejia' target='blank'>
                        <MDBIcon fab icon="codepen" className={style.CodePen}/>
                    </a>
                </div>
            </div>

{/* --------------------------   for mobile user --------------------------*/}

                {/* <MDBNavbar className={style.mobileNavBar} dark>
                    <div className={style.mobileNavBarContainer} >
                        <div className={style.mobileLogoContainer}>
                            <div className={style.logoContainer}>
                                <img src={logo} alt='logo' title='logo' id={style.navLogo}/>
                            </div>
                            <MDBHamburgerToggler color="#FFB633" id="hamburger1" onClick={toggleCollapse} />
                        </div>
                        <MDBCollapse id='navbarCollapse1' isOpen={collapseID} navbar>
                            <MDBNavbarNav right className={style.mobileNavBarMenu}>
                                <li><a href='#home' className= ''>Home</a></li>
                                <li><a href='#about'className= ''>About</a></li>
                                <li><a href='#project'className= ''>Project</a></li>
                                <li><a href='#contact'className= ''>Contact</a></li>
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
                                    <LinkedInIcon  className= ''dInIcon}/>
                                </a>
                                <a href='https://codepen.io/leeyuejia' target='blank'>
                                    <MDBIcon fab icon="codepen" className={style.CodePen}/>
                                </a>
                            </div>
                        </MDBCollapse>
                    </div>
                </MDBNavbar> */}

        </div>

        


    )
    
}