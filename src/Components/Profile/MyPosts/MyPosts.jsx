import React from 'react';
import { Field, reduxForm } from "redux-form";
import { maxChar, required } from '../../../Utilities/FormValidators/validators';
import { TextArea } from '../../common/FormControls/FormControls';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPosts(props) {

    let displayedPosts = props.state.postsData.map((postObject) => <Post likes={postObject.likes} key={postObject.likes} message={postObject.message} />)



    let onAddPost = (data) => { 
     props.addPost(data.myPostText);

    }


    return (
        <div className={s.myPosts}>
            <div>
                <MyPostsReduxForm onSubmit={onAddPost}   />
            </div>
            <div className={s.posts}>
                {displayedPosts}
            </div>
        </div>
    )
}




let maximumChar = maxChar(300) /* this is our flexible validator with closure, for now we have to invoke it this way */

const MyPostsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.post}>
                  <Field name="myPostText"  component={TextArea} validate={[required, maximumChar]}
             placeholder="your comment here"> </Field>  
              </div>
            <button className={s.addPostButton} >Add post</button>
        </form>
    )
}



const MyPostsReduxForm = reduxForm({ form: "NewPost" })(MyPostsForm)

export default MyPosts