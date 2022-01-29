import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';           /* create new import for new redux store - here is my new store */
import { Provider } from 'react-redux';          /* react-redux#2  import context from react-redux */



/*############# EVERY LESSON SUMMARY:
LESSON #51
installed axios library: npm install axios --save
import axios in to users.jsx component
made first server request with axios.get().then()   at users.jsx component
add a folder with a picture and imported that picture to users.jsx
*/




ReactDOM.render(
    <React.StrictMode>
<Provider store={store}>       {/* React-redux#1 wrap App in to Provider and specify for him props as value={store}, works exactly as native redux, you just creating a context*/}
      <App />
</Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );





reportWebVitals();





/*lesson#47.1 we removed rerenderEntireTree subscriber function on state change, 
and we removed invoking the function rerenderEntireTree. so now we could remove actual function rerenderEntireTree
and live only what was inside it, because only at the start this code will be rendering our app, we do not 
need to call it again.
 */