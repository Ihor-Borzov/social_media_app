import React from 'react';
import { addNewPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (props){
    
let displayedPosts = props.state.postsData.map((postObject)=> <Post likes={postObject.likes} key={postObject.likes} message={postObject.message} />)

 let onAddPost = ()=>{
 props.addPost();
}
 

let onPostInputChange = (e)=>{
    let text = e.target.value;
    props.postInputChange(text);
}


    return(
<div className={s.myPosts}>
<div>
    <textarea /* ref={userPostInput} */ onChange={onPostInputChange} value={props.state.newPostText} placeholder='kabzda kak prosto' ></textarea>
    <button onClick={onAddPost}>Add post</button>
</div>
<div className={s.posts}>
{displayedPosts}
</div>
</div>
    )
}

export default MyPosts