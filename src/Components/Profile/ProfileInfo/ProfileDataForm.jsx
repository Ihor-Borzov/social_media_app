import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from '../../common/FormControls/FormControls';
import { SocialMediaLinksThumbnails } from './ProfileData';
import s from "./ProfileDataForm.module.css";




export const ProfileDataForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            {props.error && <div style={{ color: 'red' }}    > {props.error}</div>}

            <div> Full name: {createField("full name", "fullName", [], Input)}</div>

            <div>  About me: {createField("About me", "aboutMe", [], TextArea)}  </div>

            <div>Looking for a job: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })} </div>

            <div> My professional skills: {createField("About me", "lookingForAJobDescription", [], TextArea)} </div>

            <ul className={s.contacts}><b>Contacts : </b>
                {Object.keys(props.userProfile.contacts).map((key) => {
                    if (SocialMediaLinksThumbnails[key]) {  //! this is the way to render only links I want. (if that property exists in the SocialMediaLinksThumbnails => i render it, if not => then I do not)
                        return (
                            <div className={s.contact_item} key={key} >{createField(`${key}`, `contacts.${key}`, [], Input)}
                            </div>)

                    }
                    return null
                })}
            </ul>

            <button>Submit</button>

        </form>
    )
}



const ProfileDataReduxForm = reduxForm({ form: 'profileDataA' })(ProfileDataForm)
export default ProfileDataReduxForm