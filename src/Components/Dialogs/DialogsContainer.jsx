
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
    isAuth : state.auth.isAuth
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


/* lesson#47.2 inside connect is a local subscriber function to change the app when changed the state:
 each time when there is a change in a state, state invokes the function mapStateToProps and creates a new object,
 new object compares with an old object. if nothing changed in that peace of new state from mapStateToProps object
 then there is no reason to rerender the page.
 React-redux expects us not to change existing objects in state by ourselves, that is why when we were changing them
 straight from reducers React-Redux was thinking that nothing changed and did not compare state objects - because our
  reducers were returning changed state, but changed only through the link - so when connect was trying compare them he
   sees that that is the same object, that is why we have to duplicate the needed peace of state object in the reducer, before working with it.
   and after return duplicated changed state object - so connect can compare it to an old state object and can see the difference.
 so to make it work - we have to in the reducer work and return not our native sate, but duplicate our native state 
 and work with duplicated copy, then when reducer will return to dispatch  changed stateCopy - dispatch will give it to
 connect and connect will check the difference between stateCopy and state and rerender the page if there are any differences
*/

const DialogsContainer = connect(mapStoreToProps,mapDispatchToProps)(Dialogs)



export default DialogsContainer;