import React from 'react';
import classes from './Forum.module.css';
import DialogItem from './DialogItem/DialogItem.js';
import MessageItem from './MessageItem/MessageItem.js';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../FormControls/FormControls';
import { maxLengthCreator, required } from '../../utils/validators';

const Forum = (props) => {

    let dialogsElements = props.dialogsData.map ( dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> );
    let messagesElements = props.messagesData.map ( message => <MessageItem message={message.message} key={message.id} /> );

    const addNewMessage = (values) => {
        props.addMessage(values.newTextMessage);
    };

    return (
        <div className={classes.forumDialogs}>
            <div className={classes.dialogs}>
                <ul className={classes.dialogsList}>
                    <div>{dialogsElements}</div>
                </ul>
            </div>
            <div className={classes.messages}>
                <ul className={classes.messagesList}>
                    <div>{messagesElements}</div>
                </ul>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return ( 
        <form onSubmit={props.handleSubmit} className={classes.messagesField}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name='newTextMessage' 
                       placeholder='Enter your message' />
            </div>
                <button className={classes.buttonMessages}>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Forum;