import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { addRealPost, sendUserMessage, updateNewPostText, updateUserMessage, subscribe } from './Redux/store'; 
/* import store from './Redux/store'; */    /*#3 comment my old state import */
import store from './Redux/redux-store';           /*#2 create new import for new redux store */
import StoreContext from './StoreContext';


/* WE IMPLEMENTED "SUBSCRIBE and OBSERVER" 
- We removed render.js file. we cut everything out from render.js and insert it to
index.js file.
- We imported state.js and all needed functions from it into index.js 
- In the state.js we created an empty function "rerender". Also we created a function 
subscribe, what receives an argument (observer). inside the function subscribe we assign empty 
function rerender to a received argument (observer).
- wwe import function subscribe to index.js file. then we invoke function subscribe 
sending her a argument a function rerender from index.js

This way when we start our app first time function rerender()  will take imported file
state and render everything.
- also state.js can call function rerender, not importing the function in to the state.js.
because we received rerender as a callback in to the function subscribe and assign it to our local function with the same name
(could be different, but then we have to change all our methods what end calling rerender)

this way we did not import a function, but we can use it!!!

*/



let rerender = (state)=>{
ReactDOM.render(
    <React.StrictMode>
<StoreContext.Provider value={store}>       {/* Context#2 wrap App in to StoreContext.Provider and specify for him props as value={store}, also remove all the props from <App/> */}
      <App />
</StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );}





rerender(store.getState());           /* state is imported to this file, so we just use it freely from import */



/* #8 change the subscriber function, because Redux does not change current state to our subscriber (like we had in our hand-made store version)
so we have to take care that our subscribe each time gets updated state. we will execute that by anonymous function with callback, so each time we call our subscriber from the state, he will be executing anonymous arrow function */

/* so we subscribed on data change with subscribe, but redux works not like our previous state - redux does not return store when data changes: instead  (this._callSubscriber(this._state)) we have (this._callSubscriber()). so because (store.subscribe) is inner function of store library we can not change it from inside that she can send us new state each time we change data.So when we create our subscriber we have to send him callback function - so that function will get current state each time when subscriber been called  */

store.subscribe(()=>{
  let state = store.getState();
  rerender(state)
}
);







reportWebVitals();
