import React, { useEffect } from 'react';
import request from 'request';
import ls from 'local-storage'
import { parse } from 'querystring';
import jwt from 'jsonwebtoken';
import config from '../config';

const Auth = () => {

    function handleAuthorization() {
        let query = parse(window.location.href.split('?')[1]); //拿code換accessToken物件
        console.log('query', query);
        if (query.code && +query.state === ls.get('state')) { //驗證回傳的code和state是否正確，以防止駭客入侵
            let params = {
                grant_type: 'authorization_code',
                code: query.code,
                redirect_uri: config.callbackUrl,
                client_id: config.channelID,
                client_secret: config.channelSecret
            };
            request.post('https://api.line.me/oauth2/v2.1/token', { form: params }, handleAccessToken);
            // 以post的方式請求，填入必要參數後，這裡是用callback function去處理拿取profile的一連串過程
        } else {
            window.location = '/';
        }
    }

    function handleAccessToken(error, response, body) {  //請求後會回傳JSON格式
        console.log('accessToken Body', body);
        let accessToken = JSON.parse(body); //JSON物件轉換成JS物件
        ls.set('accessToken', accessToken)

        // 用openid登入的，用accessToken物件取得id_token才可以拿到用戶profile
        verifyIdToken(accessToken.id_token)
    }

    function verifyIdToken(id_token) {
        try {
            const decoded = jwt.verify(id_token, config.channelSecret); //用JWT解碼id_token，以看到使用者資訊
            console.log('verifyIdToken decoded', decoded);
            ls.set('profile', {
                userId: decoded.sub,
                displayName: decoded.name,
                pictureUrl: decoded.picture,
                email: decoded.email,
                statusMessage: 'jwt has no status message'
            })
            window.location = '/profile';
        } catch (err) {
            console.log('verifyIdToken error', err);
            window.location = '/';
        }
    }

    useEffect(() => {
        handleAuthorization()
    })


    return (
        <div className="page-content">
            <div className="col-lg-3" />
            <div className="col-lg-6">
                <div>
                    LOGIN With LINE<br />
                </div>
                <span>Authenticating...</span>
            </div>
            <div className="col-lg-3" />
        </div >
    );
}


export default Auth;