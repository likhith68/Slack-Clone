import Login from './Login';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Sidebar from './Sidebar';
import { useStateValue } from './StateProvider';
import HomePage from './HomePage';

function App() {
  const[{user},dispatch]=useStateValue();

  return (
    <div className="app">
      {!user?
      (
        <Login/>
      ):
      ( <>
          <Header/>
          <div className="app__body">
            <Sidebar/>
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/rooms/:roomId" element={<Chat/>}></Route>
              <Route path="/Threads" element={<h1>Threads Page</h1>}></Route>
              <Route path="/Mentions&reactions" element={<h1>Mentions And Reactions</h1>}></Route>
              <Route path="/saveditems" element={<h1>Saved Items</h1>}></Route>
              <Route path="/channelbrowser" element={<h1>Channel Browser</h1>}></Route>
              <Route path="/peopleandusergroups" element={<h1>People and User Groups</h1>}></Route>
              <Route path="/apps" element={<h1>Apps</h1>}></Route>
              <Route path="/filebrowser" element={<h1>File Browser</h1>}></Route>
              
            </Routes>
          </div>
        </>
      )
      }
    </div>
  );
}

export default App;
