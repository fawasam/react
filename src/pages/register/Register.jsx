import React, { useState } from 'react'
import "./register.scss"
import logo from "./log.png"
import { useRef } from 'react'
const Register = () => {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const emailRef =useRef()
    const passwordRef =useRef()
    const handleStart =()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish =()=>{
        setPassword(passwordRef.current.value)
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src={logo} alt="" />
                <button className="login">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anyehre. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership
                </p>
                {!email ? (
                    <div className="input">
                    <input  type="email" placeholder="email address" ref={emailRef}/>
                    <button className="registerBtn" onClick={handleStart}>Get Started</button>
                </div>
                ):(
                    <from className="input">
                    <input  type="password" placeholder="password" ref={passwordRef}/>
                    <button className="registerBtn" onClick={handleFinish}>
                        Start
                        </button>
                </from>
                )}
                
            </div>
        </div>
    )
}

export default Register
