import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { addRealPost, sendUserMessage, updateNewPostText, updateUserMessage } from './Redux/state'; 




/* I created render.js file and created in it rerender function, which expects to receive an argument state from a caller
- from the file index.js i cut out ReactDOM.render function and past it in to rerender function in the render.js
 - from the file index.js i copied all the imports (except state ) and passed them to render.js
 - rerender function i imported in to index.js and state.js
 
 index.js calls rerender function only once when we start the app. and state.js should call rerender function each time when we need to rerender the app or page
 - in te state.js you have to create the function what a component will be able to call from props.state and that function will change the state and at the
 end will call rerender(state) function with updated state! */


export let rerender = (state)=>{
ReactDOM.render(
    <React.StrictMode>
      <App state={state} posts={addRealPost} updateNewPostText={updateNewPostText}   updateUserMessage={updateUserMessage}  sendUserMessage={sendUserMessage}/>
    </React.StrictMode>,
    document.getElementById('root')
  );}