import React from 'react'
import { formValues } from 'redux-form'
import style from './FormControls.module.css'

export const Input =(props)=>{
    let {input, ...otherProps } = props
return(
    <FormControl {...props}>  <input {...input} {...otherProps}></input>   </FormControl>
)
}



export const TextArea =(props)=>{
    let {input, ...otherProps } = props
return(
    <FormControl {...props}>  <textarea {...input} {...otherProps}></textarea>   </FormControl>
)
}



const FormControl = (props)=>{

    let {input, meta, children, ...someProps}= props
    let error = meta.touched && meta.error
    return(
        <div className = {`${style.formControle} ${error ? style.error:""}`} >
<div>
{props.children}
</div>
{error && <span> {meta.error}</span>}
</div>
    )
}