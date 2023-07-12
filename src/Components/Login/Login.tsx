import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { loginThunk } from "../../Redux/Auth"
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
    isAuth:boolean,
    captchaUrl:string | null,
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

let mapDispatchToProps = (dispatch:any) => {
    return {
        loginThunk: (data:any) => { dispatch(loginThunk(data)); },
    }
  }

export const LoginConnect = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginConnect