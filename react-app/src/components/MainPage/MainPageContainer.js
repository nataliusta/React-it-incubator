import React from 'react';
import {connect} from 'react-redux';
import { compose } from 'redux';
import MainPage from './MainPage';
import { getUserProfile } from '../../redux/main-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";
//import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class MainPageContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
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
    connect(mapStateToProps, {getUserProfile}),
    withRouter
    //withAuthRedirect
)(MainPageContainer);
