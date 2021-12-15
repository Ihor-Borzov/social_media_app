import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';







let dialogsData = [
  {id:1, name:"Dimych"},
  {id:2, name:"Ahmed"},
  {id:3, name:"Pahsa"},
  {id:4, name:"Olya"},
  {id:5, name:"Vita"},
  {id:6, name:"Maksym"},
  ]
  
  
  let messagesData = [
      {id:1, message:"hi"},
      {id:1, message:"koorva mach ego"},
      {id:1, message:"Hi how are you?"},
  ]


  let postsData = [
    {likes:"10", message:"some message"},
    {likes:"12", message:"momolongmo"},
    {likes:"11", message:"some hurucasami"},
]












ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
