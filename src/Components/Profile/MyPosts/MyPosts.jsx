import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (props){


let displayedPosts = props.posts.map((postObject)=> <Post likes={postObject.likes} message={postObject.message} />)

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