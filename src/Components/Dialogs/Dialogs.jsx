import React from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import DialogItems from './DialogItems/DialogItems';
import s from './Dialogs.module.css'
import Message from './Message/Message';




function Dialogs (props){

let displayedDialogs = props.navBarPage.friendData.map((dialogObject)=><DialogItems name={dialogObject.name} id={dialogObject.id} key={dialogObject.id} picture={dialogObject.picture}/>)

let displayedMessages = props.dialogsPage.messagesData.map((messageObject)=><Message message={messageObject.message}  id={messageObject.id} key={messageObject.id} />)    /* this is the way we create new array with  JSX markup */


function onSendMessage (data){
    alert(data.usersText)
props.sendMessage(data.usersText);
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

<DialogsReduxForm onSubmit={onSendMessage}/> 
  
 </div> 
        </div>
        
    </div>
)
}




const DialogsForm=(props)=>{

    return(
        <form  onSubmit={props.handleSubmit}  >

<Field component="input" className={s.userInput_text}  placeholder="type the message" name="usersText"></Field>   
     <button className={s.buttonSend} >Send</button>

        </form>
    )

}



const DialogsReduxForm = reduxForm({form:"dialogsForm"})(DialogsForm)


export default Dialogs;