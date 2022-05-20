import React from 'react';
import {useNavigate} from "react-router-dom";
import db from './firebase';
import "./SidebarOption.css";

function SidebarOption({Icon,title,id,addChannelOption}) {
  const navigate=useNavigate()
  
  //Changes the url to the respective id of each rooms
  const selectChannel=()=>{
    if(id){ //if there is id then
      navigate(`/rooms/${id}`);//navigate to the url with the id of the selected channel
    }
    else{
      navigate(title);
    }
  }

  //Adds Channels to the sidebar when that particular channel is clicked
  const addChannel=()=>{
    const channelName=prompt('Please Enter the Channel Name');

    if(channelName){ //if channel is there or entered then
      db.collection("rooms").add({  //add that to the rooms as a new channel
        name:channelName
      })
    }
  };

  return (
    <div className='sidebarOption' onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="sidebarOption__icon"/>}
      
      {Icon?(
          <h3>{title}</h3>
      ):(
        <h3 className='sidebarOption__channel'>
            <span className='sidebarOption__hash'>#</span>{title}
        </h3>
      )}
    </div>
  )
}

export default SidebarOption
