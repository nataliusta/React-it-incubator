import React from 'react';
import {connect} from 'react-redux';
import MainPage from './MainPage';
import * as axios from 'axios';
import { setUserProfile } from '../../redux/main-reducer';
import { useLocation, useNavigate, useParams } from "react-router-dom";


class MainPageContainer extends React.Component {
    
    componentDidMount() {
        
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
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

export default connect(mapStateToProps, {setUserProfile}) (withRouter(MainPageContainer));