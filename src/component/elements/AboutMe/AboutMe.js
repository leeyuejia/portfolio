import React from 'react'
import style from './style.module.css'
import profilePic from '../../assets/Profileshot_sq.png'

export default function AboutMe (props) {
    return (
        <div className={style.aboutMe}>
        <div className={style.aboutMeTitle}><p className={style.title}>About me</p></div>
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
            <img 
                src={profilePic} 
                alt='profilepicture' 
                title='profilepicture' 
                className={style.profilePic}
            />
        </div>
    </div>
    )
}