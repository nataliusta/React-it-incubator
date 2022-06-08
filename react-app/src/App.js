import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp88JRLfvIPwabmfdyD-Vh11ptnX0TnPBSng&usqp=CAU' alt='chanel logo' />
      </header>
      <nav className='navigation'>
        <ul>
          <li>Profile</li>
          <li>Messages</li>
          <li>News</li>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className='main-content'>
        Main content
      </div>
    </div>
  );
}

export default App;
