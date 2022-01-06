import React from 'react';
import { addNewPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




function MyPostsContainer (props){
    let state = props.store.getState().myPostsPage;

 let onAddPost = ()=>{
 props.store.dispatch(addNewPostCreator()); 
}
 
let onPostInputChange = (text)=>{
    props.store.dispatch(updateNewPostTextCreator(text));    /* method dispatch is a callback. because we received it here and call it from here. it receives an object with a property "type" which describes what function should we execute, also in that object we send all other date we need */
}


    return(
<MyPosts state={state} addPost={onAddPost} postInputChange={onPostInputChange} />
    )
}

export default MyPostsContainer;