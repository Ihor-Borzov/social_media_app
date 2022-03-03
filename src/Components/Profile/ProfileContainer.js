import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import {setUserProfile} from '../../Redux/profile-reducer'
import { useMatch } from 'react-router-dom'
import { profileAPI } from '../../api/api'



class ProfileContainer extends React.Component{

componentDidMount=()=>{

let userId
if(!this.props.match){userId=2}
else {userId=this.props.match.params.userId}



profileAPI.getUserProfile(userId).then((data)=>{
    this.props.setUserProfile(data)
})

}



    render=()=>{
return(
<Profile {...this.props}/>
)
    }
}


let mapStateToProps =(state)=>{
    return{
        userProfile : state.myPostsPage.userProfile
    }

}


/* #1 lesson#60 */
let ProfileMatchComponent = (props)=>{
    let match = useMatch("/profile/:userId");
    return(
        <ProfileContainer {...props} match={match} />
    )
}



export default connect(mapStateToProps,{setUserProfile})(ProfileMatchComponent);