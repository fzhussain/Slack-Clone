import React from "react";
import "./SidebarOption.css";
import { useHistory } from 'react-router-dom';
import db from "../../../firebase";

function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`)
    } else {
      history.push(title)
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please Enter The Channel Name:');
    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      })
    }
  };
  return (
    <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel} >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          #<span className="sidebarOption__hash">{title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;

/*
NOTE:
1. history -> Whenever we programatically want to change the URL, in web whenever we see a GO BACK page or GO FORWARD page, we are doing nothing but modifying history. - It can be done by using a powerfull hook called useHistory()
*/
