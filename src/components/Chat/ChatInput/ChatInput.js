import React, { useState } from 'react'
import "./ChatInput.css";

import db from '../../../firebase';
import { useStateValue } from '../../../StateProvider';

import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {

    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();  // So that it does not refresh the page on submit

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(), // current time -  regardless what timezone you're in it will consider the server time
                user: user.displayName,
                userimage: user.photoURL,
            });
        }
    };
    return (
        <div className='chatInput'>
            <form >
                <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Send a Message to #${channelName}`} />
                <button type='submit' onClick={sendMessage}>Send</button>

            </form>
        </div>
    )
}

export default ChatInput
