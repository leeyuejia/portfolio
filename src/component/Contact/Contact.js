import React, {useState} from 'react'
import style from './style.module.css'
import { TextareaAutosize } from '@material-ui/core'
import OwnInput from '../elements/Input'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import emailjs from 'emailjs-com';


export default function Contact (props) {
    emailjs.init("user_Q2bBOG6OvlcM0uEtjpiuf");
    const [input, setinput] = useState({name:'',email:'',message:''})

    const handleChange = (e) => {
        setinput({...input, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = document.getElementById('form')
        const payload = {
            sender_name : input.name,
            sender_email : input.email,
            message : input.message,
            to_name : 'leeyuejia',
        }
        console.log(payload)
        emailjs.sendForm('serviceID_gmail','ContactFromID', '#form')
    }
    const whatsapp = (e) => {
        e.preventDefault()
        const number = '+6590293526'
        window.location.href='https://wa.me/+6590293526'
        console.log('whatsapp')
    }

    return (
        <div className={style.contactContainer} id='contact'>
            <div className={style.bgTitle}>
            CONTACT
            </div>
            <div className={style.contact}>
                <div className={style.contactTitle}>
                    <p>Send me a message! <br></br>
                        <span >
                            <a href='mailto:leeyuejia@gmail.com'className={style.emailLink}>
                                leeyuejia@gmail.com
                            </a>
                        </span>
                    </p>
                </div>
                <form className={style.formContainer} id='form' onSubmit={handleSubmit}>
                    <OwnInput
                        required= {true}
                        onChange ={handleChange}
                        type='text' 
                        placeholder='Your name' 
                        name='name' 
                        value={input.name}
                        >
                    </OwnInput>
                    <OwnInput 
                        required= {true}
                        onChange ={handleChange}
                        type='email' 
                        placeholder='Your email' 
                        name='email' 
                        value={input.email}
                        >
                    </OwnInput>
                    <TextareaAutosize
                        onChange ={handleChange}
                        required
                        placeholder='Your message...'
                        name='message'
                        className={style.textarea}
                        value={input.message}>
                    </TextareaAutosize>
                    <button type='submit' id={style.sendBtn}>send</button>
                </form>
                
                <div className={style.whatsappContainer}>
                    <p className={style.coffeeText}>
                    I enjoy connecting and bringing people together from all walks of life 
                    together to share their unique experiences and to create meaningful relationship. Coffee
                    and video games are my thing. Coffee for life.
                    </p>
                    <div className={style.whatsappBtnContainer}>
                        <a href='https://wa.me/+6590293526/?text=Hello_free_for_coffee' target='blank'>
                        <button id={style.sendBtn}>
                                <WhatsAppIcon className={style.WhatsAppIcon}/> 
                                Let's have coffee
                        </button>
                        </a>
                    </div>
                </div>
            </div>

    </div>
    )
} 