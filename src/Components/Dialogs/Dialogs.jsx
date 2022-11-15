import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxChar, required } from '../../Utilities/FormValidators/validators';
import { Input } from '../common/FormControls/FormControls';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs(props) {

    let displayedDialogs = props.navBarPage.friendData.map(
        (dialogObject) => <DialogItems name={dialogObject.name} id={dialogObject.id} 
        key={dialogObject.id} picture={dialogObject.picture} />)

    let displayedMessages = props.dialogsPage.messagesData.map(
        (messageObject, index) => <Message message={messageObject.message}
         id={messageObject.id} key={index} />)    /* this is the way we create new array with  JSX markup */


    function onSendMessage(data) {
        props.sendMessage(data.usersText);
    }

    let [chatsOnOff, switchChats] = useState(true);


    let updateWindowWidth = () => {
        if (window.innerWidth >= 768) {
            switchChats(true)
        }
    }


    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => { window.removeEventListener('resize', updateWindowWidth); }
    }, [])



    return (
        <div>
            <div className={s.chats} onClick={() => { switchChats(!chatsOnOff) }} > {chatsOnOff ? "hide chats" : "show chats"}</div>

            <div className={s.content}>

                {chatsOnOff &&
                    <div className={s.listOfDialogs}>
                        {displayedDialogs}
                    </div>
                }

                <div className={s.messenger}>

                    <div className={s.messageHistory}>
                        {displayedMessages}
                    </div>

                    <div className={s.textWrapper}>

                        <DialogsReduxForm onSubmit={onSendMessage} />

                    </div>
                </div>

            </div>

        </div>
    )
}


let maximumChar = maxChar(300) /* this is our flexible validator with closure, for now we have to invoke it this way */

const DialogsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}  >

            <Field component={Input} className={s.userInput_text} placeholder="type the message" name="usersText" validate={[required, maximumChar]} ></Field>
            <button className={s.buttonSend} >Send</button>

        </form>
    )

}



const DialogsReduxForm = reduxForm({ form: "dialogsForm" })(DialogsForm)


export default Dialogs;