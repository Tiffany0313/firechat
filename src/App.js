import './App.css';
import React from 'react'
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import { auth } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  return (
    <>
      {user ? <Chat user={user} /> : <SignIn user={user} />}
    </>

  );
}

export default App;
