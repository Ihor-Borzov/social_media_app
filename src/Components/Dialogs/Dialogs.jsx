import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs (props){

let displayedDialogs = props.state.dialogsData.map((dialogObject)=><DialogItems name={dialogObject.name} id={dialogObject.id}/>)

let displayedMessages = props.state.messagesData.map((messageObject)=><Message message={messageObject.message}/>)    /* this is the way we create new array with  JSX markup */

return(
    <div className={s.content}>
        <div className="s.dialogsItems">
{displayedDialogs}     {/* to Display our JSX markup from the array - just insert javascript in JSX with curley  brackets with your new array*/}
        </div>

        <div className="s.messages">
{displayedMessages}
        </div>
        
    </div>
)
}

export default Dialogs;