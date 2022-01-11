
import React from 'react';
import { sendUserMessageCreator, updateUserMessageInputCreator } from '../../Redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css'    /* container component does not need css, because it is responsible only for logic for his presentation component */




/* #1 create a component container, let this container receive store */
function DialogsContainer (props){


/* Context#3 in the componentsContainer return create StoreContext.Consumer, this way we say that a component which
 is nested inside the StoreContext.Consumer will be consuming (in our case it is <Dialogs/> ).
 inside StoreContext.Consumer we create a function which receives (store) from context and does most of the calculations.
 at the end of this function is return which will return jsx markup of the consumer component */

return(
<StoreContext.Consumer>
{ 
(store)=>{

    let stateDialogsPage = store.getState().dialogsPage;
    let stateNavBarPage = store.getState().navBarPage;

    let onUpdateUserInput = (text)=>{
store.dispatch(updateUserMessageInputCreator(text));
    }

function onSendMessage (){
store.dispatch(sendUserMessageCreator());
}

return <Dialogs updateUserInput={onUpdateUserInput} sendMessage={onSendMessage} dialogsPage={stateDialogsPage} navBarPage={stateNavBarPage}/>
}
}
   </StoreContext.Consumer>
)
}

export default DialogsContainer;