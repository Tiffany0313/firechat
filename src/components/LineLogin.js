import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'

function LineLogin() {

    function signInWithLine() {
        // const providerGoogle = new firebase.auth.GoogleAuthProvider()
        // auth.signInWithPopup(providerGoogle)
    }

    return (
        <button type="button" id="login-button" onClick={signInWithLine}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 455.731 455.731" >
                <g>
                    <rect x="0" y="0" style={{ fill: "#00C200" }} width="455.731" height="455.731" />
                    <path style={{ fill: "#FFFFFF" }} d="M393.272,219.605c0.766-4.035,1.145-7.43,1.319-10.093c0.288-4.395-0.04-10.92-0.157-12.963
                c-4.048-70.408-77.096-126.503-166.616-126.503c-92.118,0-166.793,59.397-166.793,132.667c0,67.346,63.088,122.97,144.821,131.526
                c4.997,0.523,8.6,5.034,8.046,10.027l-3.48,31.322c-0.79,7.11,6.562,12.283,13.005,9.173
                c69.054-33.326,110.346-67.611,135.004-97.314c4.487-5.405,19.118-25.904,22.101-31.288
                C386.854,244.729,391.219,232.455,393.272,219.605z"/>
                    <path style={{ fill: "#00C500" }} d="M136.103,229.588v-55.882c0-4.712-3.82-8.532-8.532-8.532h0c-4.712,0-8.532,3.82-8.532,8.532
                v64.414c0,4.712,3.82,8.532,8.532,8.532h34.127c4.712,0,8.532-3.82,8.532-8.532v0c0-4.712-3.82-8.532-8.532-8.532H136.103z"/>
                    <path style={{ fill: "#00C500" }} d="M188.731,246.652h-3.73c-3.682,0-6.667-2.985-6.667-6.667v-68.144c0-3.682,2.985-6.667,6.667-6.667
                h3.73c3.682,0,6.667,2.985,6.667,6.667v68.144C195.398,243.667,192.413,246.652,188.731,246.652z"/>
                    <path style={{ fill: "#00C500" }} d="M257.678,173.706v39.351c0,0-34.073-44.443-34.593-45.027c-1.628-1.827-4.027-2.951-6.69-2.85
                c-4.641,0.176-8.2,4.232-8.2,8.876v64.063c0,4.712,3.82,8.532,8.532,8.532h0c4.712,0,8.532-3.82,8.532-8.532v-39.112
                c0,0,34.591,44.83,35.099,45.312c1.509,1.428,3.536,2.312,5.773,2.332c4.738,0.043,8.611-4.148,8.611-8.886v-64.059
                c0-4.712-3.82-8.532-8.532-8.532h0C261.498,165.175,257.678,168.994,257.678,173.706z"/>
                    <path style={{ fill: "#00C500" }} d="M338.729,173.706L338.729,173.706c0-4.712-3.82-8.532-8.532-8.532h-34.127
                c-4.712,0-8.532,3.82-8.532,8.532v64.414c0,4.712,3.82,8.532,8.532,8.532h34.127c4.712,0,8.532-3.82,8.532-8.532v0
                c0-4.712-3.82-8.532-8.532-8.532h-25.595v-15.144h25.595c4.712,0,8.532-3.82,8.532-8.532v0c0-4.712-3.82-8.532-8.532-8.532
                h-25.595v-15.144h25.595C334.909,182.238,338.729,178.418,338.729,173.706z"/>
                </g>
            </svg>
        </button>
    )
}

export default LineLogin
