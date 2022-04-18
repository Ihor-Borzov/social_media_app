import React from "react"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import {loginThunk} from "../../Redux/Auth"
import { maxChar, required } from "../../Utilities/FormValidators/validators"
import { Input } from "../common/FormControls/FormControls"

//! HOW TO RERENDER HEADER WHEN I RERENDER MY LOGIN COMPONENT

class Login extends React.Component{
componentDidUpdate=()=>{
    //alert("updated")
}
    render=()=>{

        let onSubmit=(data)=>{
            this.props.loginThunk(data)
            }
    
        return(
    <div>
    <div>LOGIN please !</div>
    {this.props.isAuth? <span>You are successfully logged in</span> : null}
    <LoginReduxForm onSubmit={onSubmit}/>
    </div>
        )
    }
}










/* I DO NOT KNOW WHY, BUT FUNCTIONAL COMPONENT DID NOT WANT TO UPDATE AFTER LOGINISATION  */
/* 
let Login = (props)=>{
    let onSubmit=(data)=>{
        props.loginThunk(data)
        }

    return(
<div>
<div>LOGIN please !</div>
{props.isAuth? <span>You are successfully logged in</span> : null}
<LoginReduxForm onSubmit={onSubmit}/>
</div>
    )
}
 */


let maximumChar = maxChar(20) /* this is our flexible validator with closure, for now we have to invoke it this way */

let LoginForm=(props)=>{
    alert("component rerendered")
    return(
        <form onSubmit={props.handleSubmit}>
<div><Field placeholder='email' component={Input} name="email"  validate={[required, maximumChar]}  ></Field></div>
<div><Field placeholder='password' component={Input} name="password"  validate={[required, maximumChar]}  ></Field></div>
<div>
    <label>
    <Field type="checkbox" component="input" name="rememberMe"></Field>
    remember me
    </label>
    </div>
<button>Submit</button>          
        </form>
    )
}



let mapStateToProps = (state)=>{
    return({
isAuth:state.auth.isAuth
    })
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm);

export const LoginConnect = connect(mapStateToProps, {loginThunk})(Login)

export default Login
