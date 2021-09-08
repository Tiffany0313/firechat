import React, { useState, useEffect } from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import $ from 'jquery'
import $_ from 'jquery.transit'

function SignIn({ user }) {

    const [isActive, setActive] = useState("true")

    const handleBulbClick = () => {
        setActive(!isActive)
    }

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    useEffect(() => {
        // JQUERY
        $(function () {

            setTimeout(function () {
                $_('.logoContainer').transition({ scale: 1 }, 700, 'ease');
                setTimeout(function () {
                    $('.logoContainer .logo').addClass('loadIn');
                    setTimeout(function () {
                        $('.logoContainer .text').addClass('loadIn');
                        setTimeout(function () {
                            $_('.acceptContainer').transition({ height: '431.5px' });
                            setTimeout(function () {
                                $('.acceptContainer').addClass('loadIn');
                                setTimeout(function () {
                                    $('.formDiv, form h1').addClass('loadIn');
                                }, 500)
                            }, 500)
                        }, 500)
                    }, 500)
                }, 1000)
            }, 10)
        });
    }, [user])

    return (
        <>
            <div className="container">
                <div className={`bulb ${isActive ? "" : "off"}`} onClick={handleBulbClick}>
                    <div className={`filaments ${isActive ? "" : "off"}`}></div>
                </div>
            </div>

            <div id="formContainer">
                <div id="inviteContainer">
                    <div class="logoContainer">
                        <img className="logo" alt="" src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" />
                    </div>


                    <div className="acceptContainer">
                        <form>
                            <h1>WELCOME BACK!</h1>
                            <div className="formContainer">
                                <div className="formDiv" style={{ transitionDelay: '0.2s' }}>
                                    <p>EMAIL</p>
                                    <input type="email" required="" />
                                </div>
                                <div className="formDiv" style={{ transitionDelay: '0.4s' }}>
                                    <p>PASSWSORD</p>
                                    <input type="password" required="" />
                                    <a className="forgotPas" href="">FORGOT YOUR PASSWORD?</a>
                                </div>
                                <div className="formDiv" style={{ transitionDelay: '0.6s' }}>
                                    <button className="acceptBtn" type="submit">Login</button>
                                    <span className="register">Need an account?<a href="">Register</a></span>
                                </div>
                                <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                    <button type="button" id="login-google-button" onClick={signInWithGoogle}><svg class="active" version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 48 48">
                                        <g>
                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </g>
                                    </svg><span class="icon-loading"></span> <span>Sign in with Google</span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="floor" style={{ zIndex: -10 }}>
                <div className={`shadow ${isActive ? "" : "off"}`}></div>
            </div>

        </>
    )
}

export default SignIn
