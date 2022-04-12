
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { sendUserMessageCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';



let mapStateToProps = (state)=>{
return{
    dialogsPage :state.dialogsPage,
    navBarPage : state.navBarPage,
}
}



let mapDispatchToProps=(dispatch)=>{
    return{
        sendMessage:(data)=>{dispatch(sendUserMessageCreator(data));},
    }
}




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



// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// const DialogsContainer = connect(mapStoreToProps,mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer;


export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Dialogs)