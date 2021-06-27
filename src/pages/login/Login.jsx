import React, { useState } from 'react'
import "./login.scss"
import logo from "./log.png"
import { useRef } from 'react'
const Login = () => {

    // const [email,setEmail] =useState("")
    // const [password,setPassword] =useState("")
    // const emailRef =useRef()
    // const passwordRef =useRef()
    // const handleStart =()=>{
    //     setEmail(emailRef.current.value)
    // }
    // const handleFinish =()=>{
    //     setPassword(passwordRef.current.value)
    // }
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src={logo} alt="" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginBtn">Sign In</button>
                    <span>New to Netflix? <b> Sign up now</b> </span>
                    <small>
                        This page is protecteed by Google reCAPTCHA to ensure you're not a robot <b>Learn more.</b>
                    </small>
                </form>

            </div>
            
        </div>
    )
}

export default Login
