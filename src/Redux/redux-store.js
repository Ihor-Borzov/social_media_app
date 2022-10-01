/* #1 we install Redux and create redux-store.js */
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./Auth";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as fromReducer}from 'redux-form'
import appReducer from "./app-reduces";
import headerReducer from "./header-reducer";


/*#4 implementing reducers to Redux */
let reducers = combineReducers({       
    dialogsPage:dialogsReducer,
    myPostsPage:profileReducer,
    navBarPage:sidebarReducer,
    usersPage:usersReducer, 
    auth:authReducer,               /* it means that this part of code will be in the state like: an object usersPage and inside this object i will have things what i have in the initialState - so an array users. */
form:fromReducer,
app:appReducer,
header : headerReducer
})



/*#5 inserted reducers to store */
/* let store = createStore(reducers, applyMiddleware(thunkMiddleware) );*/

/* this is the way to enable Redux DevTools */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)));


export default store;


window.__store = store;