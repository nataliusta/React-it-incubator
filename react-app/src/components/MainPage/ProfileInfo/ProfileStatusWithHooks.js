import React from 'react';
//import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    return (
        <div>
            { !this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.status || 'Enter something'}</span>
                </div>
            }
            { this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } 
                            value={this.state.status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;