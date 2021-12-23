import userEvent from '@testing-library/user-event';
import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs (props){

let displayedDialogs = props.state.navBarPage.friendData.map((dialogObject)=><DialogItems name={dialogObject.name} id={dialogObject.id} picture={dialogObject.picture}/>)

let displayedMessages = props.state.dialogsPage.messagesData.map((messageObject)=><Message message={messageObject.message}/>)    /* this is the way we create new array with  JSX markup */


let textushechka = React.createRef();

/* onKeyUp={()=>{textAreaAdjust(textushechka)}} */

/* function textAreaAdjust(element) {
    let a =   element.current.style.height
    a = a.slice(0,-3);
    console.log(a);
    if (a<15){   
      element.current.style.height = ( 2+ element.current.scrollHeight)+"px";}
    }
    
 */

    let updateUserInput = ()=>{
      let text = textushechka.current.value;
props.dispatch({type:"UPDATE-USER-MESSAGE-INPUT", newText:text});
    }


function send (){
props.dispatch({type:"SEND-USER-MESSAGE"});
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
    <textarea ref={textushechka} className={s.userInput_text} onChange={updateUserInput} value={props.state.dialogsPage.userInputMessage} >  </textarea>   
     <button className={s.buttonSend}   onClick={send} >Send</button>
 </div> 
        </div>
        
    </div>
)
}

export default Dialogs;