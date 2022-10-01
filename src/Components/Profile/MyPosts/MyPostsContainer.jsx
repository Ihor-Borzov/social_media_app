import { connect } from 'react-redux';
import { addPostAndCleanReduxForm } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';





let mapStateToProps = (state) => {
    return {
        state: state.myPostsPage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => { dispatch(addPostAndCleanReduxForm(text)) },
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;