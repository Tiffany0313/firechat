import React, { useState, useEffect } from 'react'
// import firebase from 'firebase'
// import { auth } from '../firebase'
import $ from 'jquery'
import $_ from 'jquery.transit'
import GitHubLogin from './GitHubLogin'
import GoogleLogin from './GoogleLogin'
import LineLogin from './LineLogin'

function SignIn({ user }) {

    const [isActive, setActive] = useState("true")

    const handleBulbClick = () => {
        setActive(!isActive)
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
                    <div className="logoContainer">
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

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignContent: "center" }}>
                                    <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                        <GoogleLogin />
                                    </div>

                                    <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                        <GitHubLogin />
                                    </div>

                                    <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                        <LineLogin />
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div >

            <div className="floor" style={{ zIndex: -10 }}>
                <div className={`shadow ${isActive ? "" : "off"}`}></div>
            </div>

        </>
    )
}

export default SignIn
