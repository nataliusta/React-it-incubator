import React from "react";
import Preloader from "../../Preloader/Preloader";
import classes from './ProfileInfo.module.css';
//import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} className={classes.avatar} alt='Avatar' />
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo; 