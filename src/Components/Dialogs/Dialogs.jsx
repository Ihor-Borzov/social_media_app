import userEvent from '@testing-library/user-event';
import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import { sendUserMessageCreator, updateUserMessageInputCreator } from '../../Redux/dialogs-reducer';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs (props){

let displayedDialogs = props.navBarPage.friendData.map((dialogObject)=><DialogItems name={dialogObject.name} id={dialogObject.id} picture={dialogObject.picture}/>)

let displayedMessages = props.dialogsPage.messagesData.map((messageObject)=><Message message={messageObject.message}  id={messageObject.id}/>)    /* this is the way we create new array with  JSX markup */


/*  let textushechka = React.createRef();  */    /* there is no need for reference anymore, because I use e.target*/

/* onKeyUp={()=>{textAreaAdjust(textushechka)}} */

/* function textAreaAdjust(element) {
    let a =   element.current.style.height
    a = a.slice(0,-3);
    console.log(a);
    if (a<15){   
      element.current.style.height = ( 2+ element.current.scrollHeight)+"px";}
    }
    
 */

    let onUpdateUserInput = (e)=>{
      let text = e.target.value;
props.updateUserInput(text)
    }


function onSendMessage (){
props.sendMessage();
}



return(
    <div className={s.content}>

        <div className={s.listOfDialogs}>
{displayedDialogs}    
        </div>


        <div className={s.messenger}>


        <div className={s.messageHistory}>         
 {displayedMessages} 
 </div>


 <div className={s.textWrapper}>
    <textarea /* ref={textushechka} */ className={s.userInput_text} onChange={onUpdateUserInput} value={props.dialogsPage.userInputMessage} placeholder="type the message" >  </textarea>   
     <button className={s.buttonSend}   onClick={onSendMessage} >Send</button>
 </div> 
        </div>
        
    </div>
)
}

export default Dialogs;