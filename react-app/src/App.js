import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import MainPageContainer from './components/MainPage/MainPageContainer';
import Footer from './components/Footer/Footer';
import ForumContainer from './components/Forum/ForumContainer';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navigation />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/mainpage/:userId' element={<MainPageContainer />} />
            <Route path='/mainpage/*' element={<MainPageContainer />} />
            <Route path='/forum/*' element={<ForumContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
