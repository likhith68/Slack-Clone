import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentRoundedIcon from '@mui/icons-material/InsertCommentRounded';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';

function Sidebar() {
  const[channels,setChannels]=useState([]);
  const[{user}]=useStateValue();

  useEffect(()=>{
    //run this code ONCE when sidebar components Loads
    db.collection("rooms").onSnapshot(snapshot=>(
      setChannels(
        snapshot.docs.map((doc)=>({
          id:doc.id,
          name:doc.data().name
        })))
    ));
  },[])


  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <div className="sidebar__info">
                <h2>React Programmer</h2>
                <h3><FiberManualRecordSharpIcon/>{user?.displayName}</h3>
            </div>
            <CreateIcon/>
        </div>
        <Link className="Links" to="/Threads"><SidebarOption Icon={InsertCommentRoundedIcon} title={"Threads"}/></Link>
        <Link className='Links' to="/Mentions&reactions"><SidebarOption Icon={InboxIcon} title={"Mentions & reactions"}/></Link>
        <Link className='Links' to="/saveditems"><SidebarOption Icon={DraftsIcon} title={"Saved items"}/></Link>
        <Link className='Links' to="/channelbrowser"> <SidebarOption Icon={BookmarkBorderIcon} title={"Channel browser"}/></Link>
        <Link className='Links' to="/peopleandusergroups"> <SidebarOption Icon={PeopleAltIcon} title={"People and user groups"}/></Link>
        <Link className='Links' to="/apps"><SidebarOption Icon={AppsIcon} title={"Apps"}/></Link>
        <Link className='Links' to="/filebrowser"><SidebarOption Icon={FileCopyIcon} title={"File Browser"}/></Link>
        
        <SidebarOption Icon={ExpandLessIcon} title={"Show Less"}/>
        <hr />
        <SidebarOption Icon={ExpandMoreIcon} title={"Channels"}/>
        <hr />
        <SidebarOption Icon={AddIcon} addChannelOption title={"Add Channel"}/>
        {/* Connect db and List all Channels */}
        {/* Using SidebarOption */}
        {channels.map((channel)=>(
          <SidebarOption title={channel.name}  id={channel.id}/>
        ))}
   </div>
  )
}

export default Sidebar 
