import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import Forum from './components/Forum/Forum';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      {/*<MainPage />*/}
      <div className='app-wrapper-content'>
        <Forum />
      </div>
      <Footer />
    </div>
  );
}

export default App;
