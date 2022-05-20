import { Avatar } from '@mui/material';
import React from 'react';
import "./Header.css";
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import HelpOutlineSharpIcon from '@mui/icons-material/HelpOutlineSharp';
import { useStateValue } from './StateProvider';
import {Link} from 'react-router-dom';

function Header() {
  const[{ user }]=useStateValue();


  return (
    <div className='header'>
        <div className="header__left">
            <Link to="/"><Avatar className='header__avatar' alt={user?.displayName} src={user?.photoURL}/ ></Link>
            <AccessTimeSharpIcon/>
        </div>
        <div className="header__search">
                <SearchSharpIcon/>
                <input type="text" placeholder='Search'/>
            </div>
        <div className="header__right">
            <HelpOutlineSharpIcon/>
        </div>
    </div>
  )
}

export default Header
