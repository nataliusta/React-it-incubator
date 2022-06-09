import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <MainPage />
    </div>
  );
}

export default App;
