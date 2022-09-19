import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        title: 'Hi'
    }

    activateEditMode() {
        this.setState({ // rewrites properties of editMode (false to true)
            editMode: true
        });
    }

    deactivateEditMode() {
        this.setState({
            editMode: false // rewrites to false
        });
    }

    render() {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;