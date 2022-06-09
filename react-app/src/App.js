import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainPage from './components/MainPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
