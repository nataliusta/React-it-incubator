import React, {useState} from 'react';
//import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Enter something'}</span>
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