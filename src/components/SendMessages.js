import { Input, Button } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { db, auth } from '../firebase'

function SendMessages({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        console.log(e.target.value)
        if (e.target.value !== undefined) {
            e.preventDefault() //the page doesn't refresh when we press the button
            const { uid, photoURL } = auth.currentUser

            await db.collection('messages').add({
                text: msg,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg('') // 清空輸入欄位
        } else {
            e.preventDefault() //the page doesn't refresh when we press the button
        }

        // scroll.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }, [sendMessage])

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <Input style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    <IconButton aria-label="send">
                        <SendRoundedIcon type="submit" />
                    </IconButton>
                </div>
            </form>
        </div>
    )
}

export default SendMessages
