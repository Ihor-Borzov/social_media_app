import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'
import { withMatchIdUrl } from '../../HOC/withMatchIdUrl'
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../Redux/profile-reducer'
import Profile from './Profile'




class ProfileContainer extends React.Component{

    refreshProfile=()=>{
    //debugger
let userId 
    if( !this.props.match || isNaN(this.props.match.params.userId)){
        userId = this.props.authorizedId? this.props.authorizedId: null}
    else { userId=this.props.match.params.userId}

    if(userId){ 
    this.props.getUserProfile(userId);
    this.props.getStatus(userId); 
    }
}



componentDidMount=()=>{
       this.refreshProfile();
}


componentDidUpdate=(prevProps, prevState,snapshot)=>{
    if(this.props.match){   // if user url exists => rerender might happen
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile();
        }
    }
}



    render=()=>{
if(this.props.authorizedId === null &&  (this.props.match.params.userId === "null" ||
 isNaN(this.props.match.params.userId))   ){return (<Navigate to="/login"/>) }


return(
   
<Profile {...this.props}    isOwner = { +this.props.match.params.userId === this.props.authorizedId}  />
)
    }
}


let mapStateToProps =(state)=>{
    return{
        userProfile : state.myPostsPage.userProfile,
        isAuth : state.auth.isAuth,
        status: state.myPostsPage.status,
        authorizedId:state.auth.id,
        isFetching: state.myPostsPage.isFetching,
        errorFlag:state.myPostsPage.errorFlag
    }

}


/* this is the way i did before compose  */
// let ProfileMatchComponent = withMatchIdUrl(ProfileContainer);
// let AuthRedirectComponent = withAuthRedirect(ProfileMatchComponent);
// export default connect(mapStateToProps,{getUserProfile})(AuthRedirectComponent);




 export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  // withAuthRedirect,
    withMatchIdUrl
)(ProfileContainer);









//25361
//25497
