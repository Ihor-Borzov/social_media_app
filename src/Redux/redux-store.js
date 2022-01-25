/* #1 we install Redux and create redux-store.js */
import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


/*#4 implemented reducers to Redux */
let reducers = combineReducers({       
    dialogsPage:dialogsReducer,
    myPostsPage:profileReducer,
    navBarPage:sidebarReducer,
    usersPage:usersReducer,                /* it means that this part of code will be in the state like: an object usersPage and inside this object i will have things what i have in the initialState - so an array users. */
})



/*#5 inserted reducers to store */
let store = createStore(reducers);


export default store;