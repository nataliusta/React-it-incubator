import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import MainPageContainer from './components/MainPage/MainPageContainer';
import Footer from './components/Footer/Footer';
import ForumContainer from './components/Forum/ForumContainer';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/mainpage' element={<MainPageContainer />} />
            <Route path='/forum/*' element={<ForumContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/users' element={<UsersContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
