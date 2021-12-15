import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (){

let receivedFromBackEndPosts = [
    {likes:"10", message:"some message"},
    {likes:"12", message:"momolongmo"},
    {likes:"11", message:"some hurucasami"},
]

let displayedPosts = receivedFromBackEndPosts.map((postObject)=> <Post likes={postObject.likes} message={postObject.message} />)

    return(
<div className={s.myPosts}>
<div>
    <textarea></textarea>
    <button>Add post</button>
</div>
<div className={s.posts}>
{displayedPosts}
</div>
</div>
    )
}

export default MyPosts