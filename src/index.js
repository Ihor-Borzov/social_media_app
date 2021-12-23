import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { addRealPost, sendUserMessage, updateNewPostText, updateUserMessage, subscribe } from './Redux/state'; 
import store from './Redux/state';



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
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );}





rerender(store.getState());          

store.subscribe(rerender);




reportWebVitals();
