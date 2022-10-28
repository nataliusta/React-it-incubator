import React from "react";
import Preloader from "../../Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if(!profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.avatar} alt='Avatar' />
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo; 