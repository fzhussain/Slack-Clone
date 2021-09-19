import React from 'react'
import "./Chat.css"
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import StarBorderOutlineIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import db from '../../firebase';

import Message from "../Message/Message";
import ChatInput from "./ChatInput/ChatInput";


function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoommessages] = useState([]);


    useEffect(() => {
        // Runs when a component loads
        if (roomId) {
            // Only run the code if the roomId exists
            db.collection('rooms').doc(roomId).onSnapshot(
                snapshot => {
                    setRoomDetails(snapshot.data());
                }
            )
            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(
                (snapshot) => {
                    setRoommessages(snapshot.docs.map(doc => doc.data()));
                }

            )
        }

    }, [roomId])

    console.log(roomDetails);
    console.log(roomMessages);

    return (
        <div className='chat'>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>  {/* Optional Chaining - similar to try catch*/}
                        <StarBorderOutlineIcon />
                    </h4>
                </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat-messages">
                {
                    roomMessages.map(({ message, timestamp, user, userimage }) => {
                        return (<Message
                            message={message}
                            timestamp={timestamp}
                            user={user}
                            userimage={userimage}
                        />)
                    }

                    )
                }
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomId} />
        </div>
    )
}

export default Chat

/*
NOTES:
1. In our React app sometimes we want to access the parameters of the current route in this case useParams hook comes into action.

2. useEffect(() => {
        // Runs when a component loads

    }, [roomId]) -> update the code when the roomId changes.

3. document('roomId') -> get the value of roomId from the URL

4. Whenever we click on the Link(channels) ->   It changes the URL
                                                It connects to databases
                                                Uses the roomId from useParams() - to fetch the room details

5. Optional Chaining -> Whenever you are unsure or any async work (such as - db connection)
 - instant try catch

*/
