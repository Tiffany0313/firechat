import { Input } from '@material-ui/core'
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react'
import firebase from 'firebase'
import { db, auth } from '../firebase'

function SendMessages({ scroll }) {
    const [msg, setMsg] = useState('')

    const sendMessage = async (e) => {
        e.preventDefault() //the page doesn't refresh when we press the button

        if (msg !== "") {
            const { uid, photoURL } = auth.currentUser

            await db.collection('messages').add({
                text: msg,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg('') // 清空輸入欄位
            scroll.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    })

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    {/* width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' */}
                    <Input style={{ display: 'flex', flex: 4 }} placeholder='Message...' type="text" value={msg} onChange={e => setMsg(e.target.value)} />

                    <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                        <IconButton aria-label="send" >
                            <SendRoundedIcon />
                        </IconButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SendMessages
