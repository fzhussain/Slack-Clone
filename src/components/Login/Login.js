import './Login.css'
import React from 'react'
import { Button } from '@material-ui/core'

import { auth, provider } from "../../firebase";
import { useStateValue } from '../../StateProvider';
import { actionTypes } from "../../reducer";

function Login() {

    const [state, dispatch] = useStateValue();
    const signIn = (e) => {
        auth.signInWithPopup(provider).then(result => {
            console.log("Result ->", result)

            // Once we login
            dispatch({
                // Dispatch the action
                type: actionTypes.SET_USER,
                user: result.user,  // Push the user into the datalayer
            })

        }).catch(error => {
            alert(error.message)
        })
    }
    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
                    alt=""
                />
                <h1>Sign in to Faraz Hussain's Slack Clone</h1>
                <p>farazhussain.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
