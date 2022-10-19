import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';

const ForumContainer = React.lazy(() => import('./components/Forum/ForumContainer'));
const MainPageContainer = React.lazy(() => import('./components/MainPage/MainPageContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navigation />
          <div className='app-wrapper-content'>
          <React.Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path='/mainpage/:userId' element={<MainPageContainer />} />
              <Route path='/mainpage/*' element={<MainPageContainer />} />
              <Route path='/forum/*' element={<ForumContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/users' element={<UsersContainer />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </React.Suspense>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

/*const withRouter = (Component) => { // HOC

  const ComponentWithRouterProp = (props) => {
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ params }}
          />
      );
  }

  return ComponentWithRouterProp;
}*/

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
