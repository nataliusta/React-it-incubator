import React from "react";
import Preloader from "../../Preloader/Preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if(!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={classes.profile}>
            <div className={classes.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} className={classes.avatar} alt='Avatar' />
                { isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

                <div>
                    <div>
                        <b>Full name</b>: {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
                    </div>
                    { profile.lookingForAJob &&
                    <div>
                        <b>My professional skills</b>: {profile.lookingForAJobDescription}
                    </div>
                    }
                    <div>
                        <b>About me</b>: {profile.aboutMe}
                    </div>
                </div>

                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
    )
}

export default ProfileInfo; 