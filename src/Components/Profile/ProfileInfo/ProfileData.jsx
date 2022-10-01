import React from 'react';
import s from "./ProfileInfo.module.css";


export const SocialMediaLinksThumbnails = {
    facebook: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png",
    instagram: "https://tbrsteakhouse.com/wp-content/uploads/2018/11/instagram-colourful-icon.png",
    youtube: "https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png",
    website: "http://cdn.onlinewebfonts.com/svg/img_504359.png",
    github: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
}




function ProfileData(props) {

    return (
        <div>
            <div className={s.fullName} > {props.userProfile.fullName}</div>
            <div className={s.aboutMe}>  <div>{props.userProfile.aboutMe}</div>  </div>

            <div className={s.lookingForAJob}>Looking for a job: {props.userProfile.lookingForAJob ?
                <span style={{ color: "green" }}>yes</span> : <span>no</span>}  </div>

            <div className={s.JobDescription}> {props.userProfile.lookingForAJobDescription ?
                `my professional skills: ${props.userProfile.lookingForAJobDescription} ` : null}</div>



            <ul className={s.item_social}><b>Contacts : </b>
                {Object.keys(props.userProfile.contacts).map((key) => {
                    if (props.userProfile.contacts[key] && SocialMediaLinksThumbnails.hasOwnProperty(key))
                    // if the property is not empty and this property value exist in the SocialMediaLinksThumbnails object => i will render it
                    {
                        return (
                            <Contact key={key} contactTitle={key} contactValue={props.userProfile.contacts[key]} />)
                    }
                    return null
                })}
            </ul>

            {props.isOwner && <button className={s.editButton} onClick={() => { props.setEditMode(true) }} >Edit</button>}
        </div>

    )
}







export const Contact = ({ contactValue, contactTitle }) => {

    return (
        <li>
            <a href={contactValue} target="_blank" rel="noreferrer">
                <img src={SocialMediaLinksThumbnails[contactTitle]} alt="social media links" />
            </a>
        </li>
    )
}




export default ProfileData