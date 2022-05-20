import React, { useState } from 'react';
import './ChatInput.css';
import { Button } from '@mui/material';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function ChatInput({channelName,channelId}) {
    
    const[input,setInput]=useState('');
    const[{user}]=useStateValue();


    //stops the page from reloading
    const sendMessage=e=>{
        e.preventDefault();

        if(channelId){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message:input,
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                userName:user.displayName,
                userImage:user.photoURL,
            });
            setInput('');
        }
    }
  return (
    <div className='chatInput'>
        <form action="">
            <input value={input} onChange={e=>setInput(e.target.value)}
            type="text" placeholder={`Message  #${channelName}`} />
            <Button type="submit" onClick={sendMessage}>Send</Button>
        </form>
    </div>
  )
}

export default ChatInput
