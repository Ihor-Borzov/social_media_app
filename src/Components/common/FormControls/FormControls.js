import React from 'react'
import { Field } from 'redux-form'
import style from './FormControls.module.css'



export const Input = (props) => {
    let { input, ...otherProps } = props
    return (
        <FormControl {...props}>  <input {...input} {...otherProps}></input>   </FormControl>
    )
}



export const TextArea = (props) => {
    let { input, ...otherProps } = props
    return (
        <FormControl {...props}>  <textarea {...input} {...otherProps}></textarea>   </FormControl>
    )
}



const FormControl = (props) => {

    let {meta, children} = props
    let error = meta.touched && meta.error
    return (
        <div className={`${style.formControle} ${error ? style.error : ""}`} >
            <div>
                {children}
            </div>
            {error && <span> {meta.error}</span>}
        </div>
    )
}



export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return (
        <div>
            <Field placeholder={placeholder} component={component} validate={validators} name={name}   {...props}></Field>
            {text}
        </div>
    )
}