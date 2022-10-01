import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, TextArea } from '../../common/FormControls/FormControls';
import { SocialMediaLinksThumbnails } from './ProfileData';
import s from "./ProfileDataForm.module.css";




export const ProfileDataForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit} className={s.profileDataForm}>

            {props.error && <div style={{ color: 'red' }}    > {props.error}</div>}

            <div>{createField("Full name", "fullName", [], Input)}</div>

            <div>{createField("About me", "aboutMe", [], TextArea)}</div>

            <div className={s.lookingForAJob}>Looking for a job: {createField("", "lookingForAJob", [], Input, { type: "checkbox" })} </div>

            <div>{createField("My professional skills", "lookingForAJobDescription", [], TextArea)} </div>

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

            <div className={s.buttons}>
                <button className={s.submitButton}>Submit</button>
                <div className={s.discardButton} onClick={() => { props.setEditMode(false) }} >Discard changes</div>
            </div>


        </form>

    )
}



const ProfileDataReduxForm = reduxForm({ form: 'profileDataA' })(ProfileDataForm)
export default ProfileDataReduxForm