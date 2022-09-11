import React from 'react';
import {connect} from 'react-redux';
import MainPage from './MainPage';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/main-reducer';
import { useParams } from 'react-router-dom';


class MainPageContainer extends React.Component {
    
    componentDidMount() {
        debugger;
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

const TakeParams = (props) => {
    return <MainPageContainer {...props} param={useParams()} match={match} />
}

export default connect(mapStateToProps, {setUserProfile}) (TakeParams);