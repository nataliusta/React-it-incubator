import React from 'react';
import {connect} from 'react-redux';
import MainPage from './MainPage';
import * as axios from 'axios';

class MainPageContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <MainPage {...this.props} />
        )
    }
}

mapStateToProps = (state) => ({
    a: 13
});


export default connect(mapStateToProps, {setUserProfile}) (MainPageContainer);