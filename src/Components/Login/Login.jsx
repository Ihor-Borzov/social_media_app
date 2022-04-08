import React from "react"
import { reduxForm } from "redux-form"
import { Field } from "redux-form"


let Login = ()=>{
    let onSubmit=(data)=>{console.log(data)}
    return(
<div>
<div>LOGIN please !</div>
<LoginReduxForm onSubmit={onSubmit}/>
</div>
    )
}



let LoginForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
<div><Field placeholder='email' component="input" name="email"></Field></div>
<div><Field placeholder='password' component="input" name="password"></Field></div>
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


const LoginReduxForm = reduxForm({form:"login"})(LoginForm)

export default Login
