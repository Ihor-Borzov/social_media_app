import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (){
    return(
<div className={s.myPosts}>
<div>
    <textarea></textarea>
    <button>Add post</button>
</div>
<div className={s.posts}>

<Post likes="10" message=" I made this post with a help of Props: it is an attribute specified for a component in the proses of invoking component (check the code at this string)  "/ >
<Post likes="12" message=" when you invoke a component adding a attribute (with any name you want and variable) you automatically push this attribute(as a key) and its value, in to the object PROPS"/ >
<Post likes="9" message=" the invoked component receives the object PROPS and you can pull keys and values from this object like this: {props.message}"/>


</div>
</div>
    )
}

export default MyPosts