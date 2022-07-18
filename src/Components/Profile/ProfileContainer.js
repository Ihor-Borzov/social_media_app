import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {getUserProfile, getStatus, updateStatus} from '../../Redux/profile-reducer'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { withMatchIdUrl } from '../../HOC/withMatchIdUrl'
import { compose } from 'redux'




class ProfileContainer extends React.Component{

componentDidMount=()=>{
debugger
let userId
if(!this.props.match){
    userId= this.props.authorizedId}    /* my id is = 22624 */
else {userId=this.props.match.params.userId}


this.props.getUserProfile(userId);
this.props.getStatus(userId);        
}



    render=()=>{


return(
<Profile {...this.props}/>
)
    }
}


let mapStateToProps =(state)=>{
    return{
        userProfile : state.myPostsPage.userProfile,
        isAuth : state.auth.isAuth,
        status: state.myPostsPage.status,
        authorizedId:state.auth.id
        
    }

}


/* this is the way i did before compose  */
// let ProfileMatchComponent = withMatchIdUrl(ProfileContainer);
// let AuthRedirectComponent = withAuthRedirect(ProfileMatchComponent);
// export default connect(mapStateToProps,{getUserProfile})(AuthRedirectComponent);




 export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus}),
   // withAuthRedirect,
    withMatchIdUrl
)(ProfileContainer);