import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import {loginThunk} from "../../Redux/Auth"
import { maxChar, required } from "../../Utilities/FormValidators/validators"
import { createField, Input } from "../common/FormControls/FormControls"
import style from '../common/FormControls/FormControls.module.css'



class Login extends React.Component{

componentDidUpdate=()=>{
    //alert("updated")
}

onSubmit = (data)=>{
    this.props.loginThunk(data)
    }

    render=()=>{
        return(
    <div>
    <div>LOGIN please !</div>
    {this.props.isAuth? <Navigate to={"/profile/"+ this.props.authorizedId}/> : <LoginReduxForm onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl} /> }
    </div>
        )
    }
}




let maximumChar = maxChar(20) /* this is our flexible validator with closure, for now we have to invoke it this way */

let LoginForm=(props)=>{

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
    {props.error && <div className={style.commonError}> {props.error}</div>}
<button>Submit</button>          

{props.captchaUrl && <div>
     <img src={props.captchaUrl}></img> 
     {createField("symbols from image", "captcha", [required], Input)}
     </div>}
        </form>
    )
}



let mapStateToProps = (state)=>{
    return({
isAuth:state.auth.isAuth,
captchaUrl:state.auth.captchaUrl,
authorizedId:state.auth.id
    })
}

const LoginReduxForm = reduxForm({form:"login"})(LoginForm);

export const LoginConnect = connect(mapStateToProps, {loginThunk})(Login)

export default LoginConnect
