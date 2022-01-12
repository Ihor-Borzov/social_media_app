
import React from 'react';
import { connect } from 'react-redux';
import { sendUserMessageCreator, updateUserMessageInputCreator } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css'    /* container component does not need css, because it is responsible only for logic for his presentation component */




/* those two function have to return an object and parameters of that object will be props.
first function by default receives state. 
first functions object will be data from state 
second functions object will be callback functions*/

let mapStoreToProps = (state)=>{
return{
    dialogsPage :state.dialogsPage,
    navBarPage : state.navBarPage,
}
}

/* here this function has dispatch which binded to store, so you can call dispatch an do not worry about anything */

let mapDispatchToProps=(dispatch)=>{
    return{
        updateUserInput:(text)=>{dispatch(updateUserMessageInputCreator(text));},
        sendMessage:()=>{dispatch(sendUserMessageCreator());},
    }
}

/* connect returns new container component 
  How it works... 
  function connect creates container component, inside that container component it renders presentational component
  and sends to presentational component attributes what sits in those two objects (as keys) from functions f1 and f2
so in the Dialogs you will get props.a props.b
 */

const DialogsContainer = connect(mapStoreToProps,mapDispatchToProps)(Dialogs)



export default DialogsContainer;