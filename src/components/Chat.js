import React, { useState, useEffect, useRef } from 'react'
import { auth, db } from '../firebase'
import SendMessages from './SendMessages'
import SignOut from './SignOut'

function Chat() {
    const [messages, setMessages] = useState([])
    const scroll = useRef()

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map(doc => doc.data()))
            //拿到 messages 這個collection的所有document
        })
    }, [])
    // onSnapshot => 當 messages 這個 collection 有變動時，就會自動再執行

    return (
        <div>
            <SignOut />
            <div className="msgs">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div>
                        <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                            <img src={photoURL} alt="" />
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessages scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
