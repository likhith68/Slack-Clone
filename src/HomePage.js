import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className='homepage'>
        <div className="homepage__container">
            <h1>Welcome To Slack-Clone</h1>
            <img src="https://png.pngitem.com/pimgs/s/303-3033323_slack-new-logo-png-transparent-png.png" alt="Slack-Image" />
            <p>Go to channels to chat</p>
            <p>Refresh The Page to Logout</p>
            <a target="_blank" href='https://github.com/likhith68'>Check Out My Github Page</a>
        </div>
    </div>
  )
}

export default HomePage
