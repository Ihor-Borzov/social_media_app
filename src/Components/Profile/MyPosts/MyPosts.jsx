import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (props){


  let  userPostInput = React.createRef();

let addPost = ()=>{
let text = userPostInput.current.value;
 props.posts(text); 
 userPostInput.current.value = "";
}


let displayedPosts = props.state.postsData.map((postObject)=> <Post likes={postObject.likes} message={postObject.message} />)

    return(
<div className={s.myPosts}>
<div>
    <textarea ref={userPostInput} ></textarea>
    <button onClick={addPost}>Add post</button>
</div>
<div className={s.posts}>
{displayedPosts}
</div>
</div>
    )
}

export default MyPosts