import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';

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
