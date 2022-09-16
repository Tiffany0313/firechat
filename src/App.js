import './App.css';
import React, { useEffect } from 'react'
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ls from 'local-storage'

function App() {
  let [user] = useAuthState(auth)
  // let getProfile = ls.get('profile');
  console.log(ls.get('profile'))
  // useEffect(() => {
  //   user = getProfile ? true : false;
  // }, [])

  return (
    <>
      {user ? <Chat user={user} /> : <SignIn user={user} />}

    </>
  );
}

export default App;
