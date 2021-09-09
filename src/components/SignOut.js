import React from 'react'
import { auth } from '../firebase'
import { Button } from '@material-ui/core'

function SignOut() {
    return (
        <div>
            <Button onClick={() => auth.signOut()} style={{ color: '#FFF' }} >Sign Out</Button>
        </div>
    )
}

export default SignOut
