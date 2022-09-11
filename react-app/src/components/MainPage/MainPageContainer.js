import React from 'react';
import {connect} from 'react-redux';
import MainPage from './MainPage';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/main-reducer';

class MainPageContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <>
                <MainPage {...this.props} />
            </>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.mainPage.profile
});


export default connect(mapStateToProps, {setUserProfile}) (MainPageContainer);