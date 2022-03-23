/* Redirect HOC. redirects user to login page if user is not authorized (logged in). checking
the parameter isAuth */

import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"


let mapStateToProps = (state)=>{
    return({
        isAuth:state.auth.isAuth,
    })
}



export const withAuthRedirect =(Component)=>{

class RedirectComponent extends React.Component {
render = ()=>{
if(this.props.isAuth){return (<Component  {...this.props} />)}
return(<Navigate to="/login"/>);
}
}

let connectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

return  connectedRedirectComponent;

}