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
let rootReducer = combineReducers({       
    dialogsPage:dialogsReducer,
    myPostsPage:profileReducer,
    navBarPage:sidebarReducer,
    usersPage:usersReducer, 
    auth:authReducer,               /* it means that this part of code will be in the state like: an object usersPage and inside this object i will have things what i have in the initialState - so an array users. */
form:fromReducer,
app:appReducer,
header : headerReducer
})


type RootReducerType = typeof rootReducer; 
export type AppStateType = ReturnType<RootReducerType>   //distinguish whatever returns from this type and type it

/*#5 inserted rootReducer to store */
/* let store = createStore(rootReducer, applyMiddleware(thunkMiddleware) );*/

/* this is the way to enable Redux DevTools */
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunkMiddleware)));


export default store;

//@ts-ignore       //the string which goes after @ts-ignore will be ignored by typescript
window.__store = store;