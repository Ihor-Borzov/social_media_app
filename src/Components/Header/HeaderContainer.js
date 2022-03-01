import React from 'react'
import axios from 'axios'
import Header from './Header'
import { connect } from 'react-redux'
import {authorizationAC}from "../../Redux/Auth"


class HeaderContainer extends React.Component{
componentDidMount=()=>{
axios.get('https://social-network.samuraijs.com/api/1.0/auth/me/', {withCredentials:true})
.then((response)=>{
    if(response.data.resultCode===0){  /* check if you received positive response  */
        let {id, email, login} = response.data.data;
        this.props.authorizationAC(id,email,login);
    }
   
})
}



render=()=>{ 
    return(
    <Header {...this.props}/>
    )}

}




let mapStateToProps = (state)=>{
    return({
isAuth:state.auth.isAuth,
login:state.auth.login,
    })
}




export default connect(mapStateToProps,{authorizationAC})(HeaderContainer)