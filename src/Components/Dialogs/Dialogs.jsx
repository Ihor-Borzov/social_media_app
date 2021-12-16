import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs (props){

let displayedDialogs = props.state.navBarPage.friendData.map((dialogObject)=><DialogItems name={dialogObject.name} id={dialogObject.id} picture={dialogObject.picture}/>)

let displayedMessages = props.state.dialogsPage.messagesData.map((messageObject)=><Message message={messageObject.message}/>)    /* this is the way we create new array with  JSX markup */

return(
    <div className={s.content}>

        <div className={s.dialogsItems}>
{displayedDialogs}    
        </div>


        <div className={s.messages}>
 {displayedMessages} 
        </div>
        
    </div>
)
}

export default Dialogs;