/* #1 we install Redux and create redux-store.js */
import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


/*#4 implemented reducers to Redux */
let reducers = combineReducers({       
    dialogsPage:dialogsReducer,
    myPostsPage:profileReducer,
    navBarPage:sidebarReducer
})



/*#5 inserted reducers to store */
let store = createStore(reducers);


export default store;