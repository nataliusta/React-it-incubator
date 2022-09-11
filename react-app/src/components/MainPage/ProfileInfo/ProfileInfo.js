import React from "react";
import Preloader from "../../Preloader/Preloader";
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt='Avatar' />
                <span>Avatar</span>
            </div>
        </div>
    )
}

export default ProfileInfo; 