import { connect } from 'react-redux';
import { addNewPostCreator, } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';





let mapStateToProps = (state)=>{
    return{
        state :state.myPostsPage,
    }
    }
    
    
    let mapDispatchToProps=(dispatch)=>{
        return{
           
            addPost:(text)=>{dispatch(addNewPostCreator(text));},
        }
    }
    
    
    const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
    

export default MyPostsContainer;