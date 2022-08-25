import React, { useState } from 'react';
import blankUserPicture from '../../../assets/images/user.jpg';
import Preloader from '../../common/preloader/Preloader';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from './ProfileStatusHooks';





function ProfileInfo(props) {
//debugger
    let [isHovering, setIsHovering] = useState(false)
    let [editMode, setEditMode] = useState(false)
    let imageDomElement = React.createRef()


    let removeOnMouseOut = () => {
        console.log("remove listener")
        imageDomElement.current.removeEventListener('mouseout', handleMouseOut)
    }


    let handleMouseOut = () => {
        setTimeout(() => {
            console.log("mouse out")
            setIsHovering(false)
        }, 3000)

    }

    let handleMouseOver = () => {
        setIsHovering(true);
    }


    let changeUsersPhoto = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    let onSubmit = (profileData) => {
        props.saveProfile(profileData).then(() => { setEditMode(false) })   //Only when form submitted and Promise resolved => we change our flag to false 
            .catch((data) => { console.log(data) })

    }


    if (!props.userProfile) {
        return (
            <Preloader />
        )
    }


    return (

        <div className={s.aboutUser}>

            <div className={s.userImgWrapper} /* onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} */ ref={imageDomElement} >
                {props.isFetching ? <Preloader /> 
                : <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : blankUserPicture} alt="avatar" ></img>}


                {  /* isHovering && */  props.isOwner &&
                    <label className={s.photoUpload}     >
                        <input className={s.inputFile} type={"file"} onChange={(e) => { changeUsersPhoto(e) }} onClick={removeOnMouseOut}   ></input>
                    </label>
                }
            </div>


            <div className={s.profileStatus} >  <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />    </div>


            {editMode ? <ProfileDataForm  {...props} initialValues={props.userProfile} onSubmit={onSubmit} /> : <ProfileData {...props} setEditMode={setEditMode} />}

        </div>
    )
}

export default ProfileInfo




