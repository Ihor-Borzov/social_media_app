
import React from 'react';
import { sendUserMessageCreator, updateUserMessageInputCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css'    /* container component does not need css, because it is responsible only for logic for his presentation component */




/* #1 create a component container, let this container receive store */
function DialogsContainer (props){

    let stateDialogsPage = props.store.getState().dialogsPage;
    let stateNavBarPage = props.store.getState().navBarPage;


     /* №2 create all the functions you presentational component wil need */
    let onUpdateUserInput = (text)=>{
props.store.dispatch(updateUserMessageInputCreator(text));
    }


function onSendMessage (){
props.store.dispatch(sendUserMessageCreator());
}

/*  #3 send all the functions your presentational component will use.  container component returns only his presentation component */
return(
   <Dialogs updateUserInput={onUpdateUserInput} sendMessage={onSendMessage} dialogsPage={stateDialogsPage} navBarPage={stateNavBarPage}/>
)
}

export default DialogsContainer;