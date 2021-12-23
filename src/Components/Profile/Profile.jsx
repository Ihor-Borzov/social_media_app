import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';




function Profile (props){
    return(
<div className={s.content}>  {/* this is the way you encapsulate css: s- means your css class is in an object, and you call your className from the object, where s - is an object (separate for each component if you named css file with the word .module.) and body is a key in an object; and value for the key body is some complicated class name automatically generated by the object   */}

<ProfileInfo/>
<MyPosts state={props.state} dispatch={props.dispatch} />

</div>
    )
}

export default Profile