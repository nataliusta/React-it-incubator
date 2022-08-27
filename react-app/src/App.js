import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import ForumContainer from './components/Forum/ForumContainer';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Gallery from './components/Gallery/Gallery';

const App = (props) => {
debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/mainpage' element={<MainPage />} />
            <Route path='/forum/*' element={<ForumContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/gallery' element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
