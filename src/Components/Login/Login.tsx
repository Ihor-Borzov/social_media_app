import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { InjectedFormProps, reduxForm } from "redux-form"
import { Field } from "redux-form"
import { loginThunk } from "../../Redux/Auth"
import { maxChar, required } from "../../Utilities/FormValidators/validators"
import { createField, Input } from "../common/FormControls/FormControls"
import s from "../Login/Login.module.css"
import { AppStateType } from "../../Redux/redux-store"
import { useFormik } from "formik"

type LoginFormDataType = {
    email:string,
    password:string,
    rememberMe?:boolean | undefined,
    captchaUrl?:string | null | undefined
    }

type MapStatePropsType = {
    captchaUrl:string | null,
    isAuth:boolean,
    authorizedId:number | null,
}

type MapDispatchPropsType = {
    loginThunk:(data:LoginFormDataType)=>void
}



class Login extends React.Component <MapStatePropsType &  MapDispatchPropsType> {

    componentDidMount = () => {
    }

    componentDidUpdate = () => {

    }

    onSubmit = (data:LoginFormDataType) => {
        this.props.loginThunk(data)  // over here we hae all the data from the form, that data based on  the attribute "name", this way we usually submit email and password, and whenever we get captcha then we also submit captcha  
    }

    render = () => {
        return (
            <div>
                <div>LOGIN please!</div>
                <div>You are welcome to visit my page - find me in the best friends (Nav-Bar): Ihor Borzov</div>

                {this.props.isAuth ? <Navigate to={"/profile/" + this.props.authorizedId} /> : <LoginForm captchaUrl={this.props.captchaUrl} loginThunk = {this.props.loginThunk} />}
            </div>
        )
    }
}



type PropsType = {
    loginThunk:(data:LoginFormDataType)=>void 
    captchaUrl: null | string
}

type ErrorsType = {
    email?:string,
    password?:string
}



let LoginForm: React.FC<PropsType> = (props) => { 

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            captchaUrl:"",
            rememberMe:false,
        },
        
        validate:(values)=>{
            const errors: ErrorsType={}
            if (!values.email || !values.password){
               errors.email = "Required field"}
            return errors
        },

        onSubmit:(data:LoginFormDataType)=>{
            props.loginThunk(data)
        }
        
        
            })

    return (
<form onSubmit={formik.handleSubmit} className={s.loginForm}>
             <div className={s.wrapper}>

                 <div>
                    <input 
                    name="email"
                    value = {formik.values.email}
                    onChange={formik.handleChange}
                    onBlur = {formik.handleBlur}
                    required
                    type="email"
                    placeholder='email' 
                    />
                    </div>
{formik.touched.email && formik.errors.email?<div style={{color:"red"}}>{formik.errors.email}</div>:null}

                <div>
                    <input 
                    name="password"
                    value = {formik.values.password}
                    onChange={formik.handleChange}
                    onBlur = {formik.handleBlur}
                    required
                    type="password"
                    placeholder='password' 
                    />
                    </div>
{formik.touched.password && formik.errors.password?<div style={{color:"red"}}>{formik.errors.password}</div>:null}

<div className={s.rememberMe}>
                     <label>
                         <span> remember me </span>
                         <input
                          name="rememberMe"
                          type="checkbox"
                          onChange={formik.handleChange} 
                          />
                     </label>
                </div>

                 <div className={s.buttonsWrapper}>
                 <button 
                 className={s.loginButton}
                 type="submit"
                 >
                    Login
                 </button>

                  <div className={s.loginButton}
                  onClick={()=>{props.loginThunk({email:"free@samuraijs.com",password:"free"})}}>Guest Login
                  </div> 
                  
                   </div>

                 {props.captchaUrl && <div>
                     <img src={props.captchaUrl} alt="captcha" ></img>
                     <input
                      name="captchaUrl"
                     // value = {formik.values.captchaUrl}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder='captcha'
                     />
                </div>} 
                    

             </div>
         </form>
    )
}



let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return ({
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        authorizedId: state.auth.id
    })
}


export const LoginConnect = connect(mapStateToProps, { loginThunk })(Login)

export default LoginConnect





















































































// import React from "react"
// import { connect } from "react-redux"
// import { Navigate } from "react-router-dom"
// import { InjectedFormProps, reduxForm } from "redux-form"
// import { Field } from "redux-form"
// import { loginThunk } from "../../Redux/Auth"
// import { maxChar, required } from "../../Utilities/FormValidators/validators"
// import { createField, Input } from "../common/FormControls/FormControls"
// import s from "../Login/Login.module.css"
// import { AppStateType } from "../../Redux/redux-store"



// class Login extends React.Component <MapStatePropsType & MapDispatchPropsType> {

//     componentDidMount = () => {
//     }

//     componentDidUpdate = () => {

//     }

//     onSubmit = (data:any) => {
//         this.props.loginThunk(data)  // over here we hae all the data from the form, that data based on  the attribute "name", this way we usually submit email and password, and whenever we get captcha then we also submit captcha  
//     }

//     render = () => {
//         return (
//             <div>
//                 <div>LOGIN please!</div>
//                 <div>You are welcome to visit my page - find me in the best friends (Nav-Bar): Ihor Borzov</div>

//                 {this.props.isAuth ? <Navigate to={"/profile/" + this.props.authorizedId} /> : <LoginReduxForm onSubmit={this.onSubmit} captchaUrl={this.props.captchaUrl} loginThunk = {this.props.loginThunk} />}
//             </div>
//         )
//     }
// }




// let maximumChar = maxChar(20) /* this is our flexible validator with closure, for now we have to invoke it this way */


// type LoginFormOwnProps = {
//     captchaUrl:string
// }


// let LoginForm: React.FC<InjectedFormProps<LoginFormDataType> & LoginFormOwnProps> = (props) => { //injectedFormProps are the props, we get from a container component

//     return (
//         <form onSubmit={props.handleSubmit} className={s.loginForm}>
//             <div className={s.wrapper}>
//                 <div><Field placeholder='email' component={Input} name="email" validate={[required, maximumChar]}  ></Field></div>
//                 <div><Field placeholder='password' component={Input} name="password" validate={[required, maximumChar]}  ></Field></div>
//                 <div className={s.rememberMe}>
//                     <label>
//                         <span> remember me </span>
//                         <Field type="checkbox" component="input" name="rememberMe"></Field>
//                     </label>
//                 </div>
//                 {props.error && <div className={s.commonError}> {props.error}</div>}

//                 <div className={s.buttonsWrapper}>
//                 <button className={s.loginButton}>Login</button>
//                 <div className={s.loginButton} onClick={()=>{props.loginThunk({email:"free@samuraijs.com",password:"free"})}}>Guest Login</div>
//                 </div>

//                 {props.captchaUrl && <div>
//                     <img src={props.captchaUrl} alt="captcha" ></img>
//                     {createField("symbols from image", "captcha", [required], Input)}
//                 </div>}
                    

//             </div>
//         </form>
//     )
// }

// type MapStatePropsType = {
//     captchaUrl:string | null,
//     isAuth:boolean,
//     authorizedId:number | null,
// }

// type LoginFormDataType = {
// email:string,
// password:string,
// rememberMe?:boolean,
// captchaUrl?:string | null
// }


// type MapDispatchPropsType = {
//     loginThunk:(data:LoginFormDataType)=>void
// }


// let mapStateToProps = (state:AppStateType):MapStatePropsType => {
//     return ({
//         isAuth: state.auth.isAuth,
//         captchaUrl: state.auth.captchaUrl,
//         authorizedId: state.auth.id
//     })
// }

// const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

// export const LoginConnect = connect(mapStateToProps, { loginThunk })(Login)

// export default LoginConnect









