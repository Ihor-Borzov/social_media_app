import React from 'react';
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts (props){
    
let displayedPosts = props.state.postsData.map((postObject)=> <Post likes={postObject.likes} key={postObject.likes} message={postObject.message} />)

 let onAddPost = (data)=>{
     alert(data.myPostText)
 props.addPost(data.myPostText);
}
 

    return(
<div className={s.myPosts}>
<div>

   <MyPostsReduxForm onSubmit={onAddPost}/>

</div>
<div className={s.posts}>
{displayedPosts}
</div>
</div>
    )
}





const MyPostsForm = (props)=>{
return(
    <form onSubmit={props.handleSubmit}>
        

   <div>  <Field name="myPostText" component="input" ></Field>   </div>

    <button>Add post</button>
    
    </form>
)
}



 const MyPostsReduxForm = reduxForm({form:"NewPost"})(MyPostsForm) 






export default MyPosts