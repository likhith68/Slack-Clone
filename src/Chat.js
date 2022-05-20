import { InfoOutlined, StarBorderOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Chat.css'
import db from './firebase';
import Message from './Message';
import ChatInput from './ChatInput';
import { useStateValue } from './StateProvider';

function Chat() {
    //we use useparams to read the id from the url
    const{roomId}=useParams();
    const[roomDetails,setRoomDetails]=useState('');
    const[messages,setMessages]=useState([]);
    const[{user}]=useStateValue();
    

    //As we are using useParams to read the id from the url 
    //we can directly use RoomID here and read the data of that channel from database
    useEffect(() => {
        if(roomId)
        {
            db.collection("rooms").doc(roomId)
            .onSnapshot((snapshot)=>(
                setRoomDetails(snapshot.data())//set the details into an array roomDetails
            ))
        }
        //to pull messages from db
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp','asc').onSnapshot((snapshot)=>
            setMessages(snapshot.docs.map((doc)=>doc.data()))
        );
        
    },[roomId]);

  return (
    <div className='chat'>
        <div className="chat__header">
          <div className="chat__headerLeft">
            <h4 className="chat__channelName">
                <strong>{roomDetails.name}</strong>
                <StarBorderOutlined/>
            </h4>
          </div>
          <div className="chat__headerRight">
            <p>
                <InfoOutlined/>Details
            </p>
          </div>
        </div>
        <div className='chat__messages'>
            {messages.map(({message,timestamp,userImage,userName})=>(
                <Message message={message}
                         timestamp={timestamp}
                         userName={userName}
                         userImage={userImage}/>
            ))}
        </div>

        <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
    </div>
  )
}

export default Chat 
