import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';




function Profile (){
    return(
<div className={s.content}>  {/* this is the way you encapsulate css: s- means your css class is in an object, and you call your className from the object, where s - is an object (separate for each component if you named css file with the word .module.) and body is a key in an object; and value for the key body is some complicated class name automatically generated by the object   */}

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Despicable_Me_logo.svg/2560px-Despicable_Me_logo.svg.png"/>
<div>ava + description</div>

<MyPosts/>



</div>
    )
}

export default Profile