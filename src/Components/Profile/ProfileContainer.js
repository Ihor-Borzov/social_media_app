import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {getUserProfile} from '../../Redux/profile-reducer'
import { useMatch } from 'react-router-dom'




class ProfileContainer extends React.Component{

componentDidMount=()=>{

let userId
if(!this.props.match){userId=2}
else {userId=this.props.match.params.userId}

this.props.getUserProfile(userId);
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
        isAuth : state.auth.isAuth
    }

}


/* #1 lesson#60 */
let ProfileMatchComponent = (props)=>{
    let match = useMatch("/profile/:userId");
    return(
        <ProfileContainer {...props} match={match} />
    )
}



export default connect(mapStateToProps,{getUserProfile})(ProfileMatchComponent);