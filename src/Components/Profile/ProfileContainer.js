import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { compose } from 'redux'
import { withMatchIdUrl } from '../../HOC/withMatchIdUrl'
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../Redux/profile-reducer'
import Profile from './Profile'




class ProfileContainer extends React.Component{

refreshProfile=()=>{
    let userId
    if( !this.props.match.params.userId || isNaN(this.props.match.params.userId)){userId = this.props.authorizedId}
    else {userId = this.props.match.params.userId}
    this.props.getUserProfile(userId);
    this.props.getStatus(userId); 
}




// state = {
//     userId :23
// }



// refreshProfile=()=>{
//     if( !this.props.match.params.userId || isNaN(this.props.match.params.userId))
//     {console.log("empty url fires")
//         this.setState({userId: 1   /* this.props.authorizedId */})
//         console.log(this.userId)
//     }
//     else 
//     {{console.log("good url fires")
//         this.setState({userId:this.props.match.params.userId})}

//     this.props.getUserProfile(this.userId);
//     this.props.getStatus(this.userId); 
// }
// }






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
if(this.props.authorizedId === null &&  this.props.match.params.userId === "null"){return (<Navigate to="/login"/>)}


return(
   
<Profile {...this.props}   isOwner = { +this.props.match.params.userId === this.props.authorizedId}   />
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

// state = {
//     userId : null,
// }

// refreshProfile=()=>{
//     if( !this.props.match.params.userId || isNaN(this.props.match.params.userId))
//     {this.setState({userId:this.props.authorizedId})}
//     else 
//     {this.setState({userId:this.props.match.params.userId})}

//     this.props.getUserProfile(this.userId);
//     this.props.getStatus(this.userId); 
// }