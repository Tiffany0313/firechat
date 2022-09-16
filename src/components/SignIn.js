import React, { useState, useEffect } from 'react'
// import firebase from 'firebase'
// import { auth } from '../firebase'
import $ from 'jquery'
import $_ from 'jquery.transit'
import GitHubLogin from './GitHubLogin'
import GoogleLogin from './GoogleLogin'
import Login from './Line/Login'

function SignIn({ user }) {

    const [isActive, setActive] = useState("true")

    const handleBulbClick = () => {
        setActive(!isActive)
    }

    useEffect(() => {
        // JQUERY
        $(function () {
            setTimeout(function () {
                $_('.acceptContainer').transition({ height: '431.5px' });
                setTimeout(function () {
                    $('.acceptContainer').addClass('loadIn');
                    setTimeout(function () {
                        $('.formDiv, form h1').addClass('loadIn');
                    }, 300)
                }, 300)
            }, 200)
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
                    <div className="acceptContainer">
                        <form>
                            <h1>線上簡易聊天室</h1>
                            <div className="formContainer">
                                <div className="formDiv" style={{ transitionDelay: '0.2s' }}>
                                    <p>帳號</p>
                                    <input type="email" required="" />
                                </div>
                                <div className="formDiv" style={{ transitionDelay: '0.4s' }}>
                                    <p>密碼</p>
                                    <input type="password" required="" />
                                    <a className="forgotPas" href="">忘記密碼？</a>
                                </div>
                                <div className="formDiv" style={{ transitionDelay: '0.6s' }}>
                                    <button className="acceptBtn" type="submit">登入</button>
                                    <span className="register"><a href="">我要註冊</a></span>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly", alignContent: "center" }}>
                                    <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                        <GoogleLogin />
                                    </div>

                                    <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                        <GitHubLogin />
                                    </div>

                                    {/* <div className="formDiv" style={{ transitionDelay: '0.8s', paddingTop: 0 }}>
                                        <Login />
                                    </div> */}
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
