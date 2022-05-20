import React from 'react';
import './Login.css';
import { Button } from '@mui/material';
import {auth,provider} from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
  const[state,dispatch]=useStateValue();

  //passing the data from the google auth to the data layer and updating the user from null to the recieved data
  const signIn=()=>{
    auth.signInWithPopup(provider)
    .then((result)=>{
      console.log(result);
      dispatch({//pushing the data into the data layer
        type:actionTypes.SET_USER, //calling set user from the reducer
        user:result.user, //user data is there in the datalayer with this line of code
      })
    })
    .catch((error)=>{
      alert(error.message);
    });
  }

  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://png.pngitem.com/pimgs/s/303-3033323_slack-new-logo-png-transparent-png.png" alt="" />
        <h1><Button onClick={signIn}>Sign in with Google</Button></h1>
        
        </div>
    </div>
  )
}

export default Login
