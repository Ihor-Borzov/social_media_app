import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {getUserProfile, getStatus, updateStatus, savePhoto} from '../../Redux/profile-reducer'
import { withAuthRedirect } from '../../HOC/withAuthRedirect'
import { withMatchIdUrl } from '../../HOC/withMatchIdUrl'
import { compose } from 'redux'
import { Navigate } from 'react-router-dom'




class ProfileContainer extends React.Component{

    state = {
        userId:"",
    }

    refreshProfile=()=>{
        if(!this.props.match){
            this.state.userId= this.props.authorizedId}    /* my id is = 22624 */
        else { this.state.userId=this.props.match.params.userId}
             
        this.props.getUserProfile( this.state.userId);
        this.props.getStatus( this.state.userId); 
    }

componentDidMount=()=>{
    console.log("mount is working")
       this.refreshProfile();
}


componentDidUpdate=(prevProps, prevState,snapshot)=>{
    if(this.props.match){   // if user url exists => rerender might happen
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile();
        }
    }



}



    render=()=>{

{if(this.props.authorizedId === null &&  this.props.match.params.userId === "null"){return (<Navigate to="/login"/>)}}




return(
<Profile {...this.props}   isOwner = { this.state.userId === this.props.authorizedId}   />
)
    }
}


let mapStateToProps =(state)=>{
    return{
        userProfile : state.myPostsPage.userProfile,
        isAuth : state.auth.isAuth,
        status: state.myPostsPage.status,
        authorizedId:state.auth.id,
        isFetching: state.myPostsPage.isFetching
        
    }

}


/* this is the way i did before compose  */
// let ProfileMatchComponent = withMatchIdUrl(ProfileContainer);
// let AuthRedirectComponent = withAuthRedirect(ProfileMatchComponent);
// export default connect(mapStateToProps,{getUserProfile})(AuthRedirectComponent);




 export default compose(
    connect(mapStateToProps,{getUserProfile, getStatus, updateStatus, savePhoto}),
  // withAuthRedirect,
    withMatchIdUrl
)(ProfileContainer);