import React, {useState} from 'react';
//import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(true);

    return (
        <div>
            { !editMode &&
                <div>
                    <span>{props.status || 'Enter something'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input autoFocus={true} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;