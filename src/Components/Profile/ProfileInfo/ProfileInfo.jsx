import React, { useState } from 'react';
import blankUserPicture from '../../../assets/images/user.jpg';
import Preloader from '../../common/preloader/Preloader';
import ProfileData from './ProfileData';
import ProfileDataForm from './ProfileDataForm';
import s from "./ProfileInfo.module.css";
import ProfileStatusHooks from './ProfileStatusHooks';





function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false)
    let imageDomElement = React.createRef()




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
            <div className={s.preloaderWrapper}>
                <div>
                <Preloader />
                </div>
            </div>
        )
    }


    return (

        <div className={s.aboutUser}>
            <div className={s.wrapper}>

                {props.errorFlag && <div className={s.error}>An error occurred in data fetching</div>}

                <div className={s.userImgWrapper} ref={imageDomElement} >
                    {props.isFetching ? <Preloader />
                        : <img src={props.userProfile.photos.large != null ? props.userProfile.photos.large : blankUserPicture} alt="avatar" ></img>}


                    {props.isOwner &&
                        <label className={s.photoUpload}     >
                            <input className={s.inputFile} type={"file"} onChange={(e) => { changeUsersPhoto(e) }}   ></input>
                        </label>
                    }
                </div>


                <div className={s.profileStatusWrapper} >
                    <div className={s.profileStatus}>
                    <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} />
                    </div>
                    </div>

                <div className={s.userInfo}>
                    {editMode ? <ProfileDataForm  {...props} initialValues={props.userProfile} onSubmit={onSubmit} setEditMode={setEditMode} />
                        : <ProfileData {...props} setEditMode={setEditMode} />}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo




