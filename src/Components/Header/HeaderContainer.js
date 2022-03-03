import React from 'react'
import axios from 'axios'
import Header from './Header'
import { connect } from 'react-redux'
import {authorizationAC}from "../../Redux/Auth"
import { authenticationAPI } from '../../api/api'


class HeaderContainer extends React.Component{
componentDidMount=()=>{


    authenticationAPI.authenticate().then((response)=>{
        if(response.resultCode===0){
            let {id, email, login} = response.data;
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