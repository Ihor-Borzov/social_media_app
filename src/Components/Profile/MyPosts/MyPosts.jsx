import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (props){


  let  userPostInput = React.createRef();

let addPost = ()=>{
let text = userPostInput.current.value;
 props.dispatch({type:"ADD-NEW-POST"}); 
}




let onPostChange = ()=>{
    let text = userPostInput.current.value;
    props.dispatch({type:"UPDATE-NEW-POST-TEXT", newText:text});    /* method dispatch is a callback. because we received it here and call it from here. it receives an object with a property "type" which describes what function should we execute, also in that object we send all other date we need */
}



let displayedPosts = props.state.postsData.map((postObject)=> <Post likes={postObject.likes} message={postObject.message} />)

    return(
<div className={s.myPosts}>
<div>
    <textarea ref={userPostInput} onChange={onPostChange} value={props.state.newPostText} ></textarea>
    <button onClick={addPost}>Add post</button>
</div>
<div className={s.posts}>
{displayedPosts}
</div>
</div>
    )
}

export default MyPosts