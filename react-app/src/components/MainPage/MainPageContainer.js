import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import MainPage from './MainPage';
import { getUserProfile, getStatus, updateStatus } from '../../redux/main-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";

class MainPageContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
             this.refreshProfile();
        }
    }


    render() {
        return (
                <MainPage {...this.props} 
                          isOwner={!this.props.router.params.userId}
                          profile={this.props.profile} 
                          status={this.props.status} 
                          updateStatus={this.props.updateStatus} 
                          savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.mainPage.profile,
    status: state.mainPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

const withRouter = (Component) => { // HOC

    const ComponentWithRouterProp = (props) => { // Container component
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(MainPageContainer);
