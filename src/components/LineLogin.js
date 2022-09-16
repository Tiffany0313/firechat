import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase'
import { Link } from '@material-ui/core'
import moment from 'moment';
import { stringify } from 'querystring';
import ls from "local-storage";
import config from '../config';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Line/Login';
import Auth from './Line/Auth';
import Chat from './Chat'

function LineLogin() {

    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/chat" component={Chat} />
        </Router>

    )
}

export default LineLogin
