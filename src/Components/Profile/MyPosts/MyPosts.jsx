import React from 'react';
import { addNewPostCreator, updateNewPostTextCreator } from '../../../Redux/state';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (props){


  /*  let  userPostInput = React.createRef();  */   /* no need reference anymore, because I use e.target */

 let addPost = ()=>{
 props.dispatch(addNewPostCreator()); 
}
 



let onPostInputChange = (e)=>{
    let text = e.target.value;
    props.dispatch(updateNewPostTextCreator(text));    /* method dispatch is a callback. because we received it here and call it from here. it receives an object with a property "type" which describes what function should we execute, also in that object we send all other date we need */
}



let displayedPosts = props.state.postsData.map((postObject)=> <Post likes={postObject.likes} message={postObject.message} />)

    return(
<div className={s.myPosts}>
<div>
    <textarea /* ref={userPostInput} */ onChange={onPostInputChange} value={props.state.newPostText} placeholder='kabzda kak prosto' ></textarea>
    <button onClick={addPost}>Add post</button>
</div>
<div className={s.posts}>
{displayedPosts}
</div>
</div>
    )
}

export default MyPosts