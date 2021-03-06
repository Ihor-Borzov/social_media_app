import React from 'react';
import { reduxForm } from "redux-form"
import { Field } from "redux-form"
import { maxChar, required } from '../../../Utilities/FormValidators/validators';
import { Input, TextArea } from '../../common/FormControls/FormControls';
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




let maximumChar = maxChar(10) /* this is our flexible validator with closure, for now we have to invoke it this way */

const MyPostsForm = (props)=>{
return(
    <form onSubmit={props.handleSubmit}>
        

   <div>  <Field name="myPostText" component={TextArea} validate={[required, maximumChar]} placeholder="you comment here"></Field>   </div>

    <button>Add post</button>
    
    </form>
)
}



 const MyPostsReduxForm = reduxForm({form:"NewPost"})(MyPostsForm) 






export default MyPosts