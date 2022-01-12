import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store';           /* create new import for new redux store - here is my new store */
import { Provider } from 'react-redux';          /* react-redux#2  import context from react-redux */




let rerender = (state)=>{
ReactDOM.render(
    <React.StrictMode>
<Provider store={store}>       {/* React-redux#1 wrap App in to Provider and specify for him props as value={store}, works exactly as native redux, you just creating a context*/}
      <App />
</Provider>
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
