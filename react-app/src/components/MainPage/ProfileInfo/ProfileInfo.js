import React from "react";
import Preloader from "../../Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} className={classes.avatar} alt='Avatar' />
                <ProfileStatus status={'Hello,guys!'}/>
            </div>
        </div>
    )
}

export default ProfileInfo; 