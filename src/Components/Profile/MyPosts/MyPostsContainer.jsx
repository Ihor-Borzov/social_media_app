import React from 'react';
import { connect } from 'react-redux';
import { addNewPostCreator, updateNewPostTextCreator } from '../../../Redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';
import s from "./MyPosts.module.css";
import Post from './Post/Post';



let mapStoreToProps = (state)=>{
    return{
        state :state.myPostsPage,
    }
    }
    
    
    let mapDispatchToProps=(dispatch)=>{
        return{
            postInputChange:(text)=>{dispatch(updateNewPostTextCreator(text));},
            addPost:()=>{dispatch(addNewPostCreator());},
        }
    }
    
    
    const MyPostsContainer = connect(mapStoreToProps,mapDispatchToProps)(MyPosts);
    

export default MyPostsContainer;