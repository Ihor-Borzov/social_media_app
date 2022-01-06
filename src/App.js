import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Nav_bar from './Components/Nav-bar/Nav_bar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App(props) {

  return (
    <div className="App">
      <BrowserRouter>         {/* this the way we work with routing: inside our main div wrapper we create a tag <BrowserRouter> this tag we create once for an app, and then for each variant of the path we create separate attribute <Route> all the path's togethers have to be wrapped in to attribute <Routes> */}
      <Header/>
      <Nav_bar state={props.state.navBarPage}/>
<div className="body_wrapper">
  <Routes>
  <Route path="/dialogs/*" element={<DialogsContainer store={props.store}   />}/>   {/* the path automatically connects to the link (it does not matter where the link is, what matters is the same value(name) in the link attribute 'href' and Route attribute 'path' ) which has the same href as path here, remember to insert start at the end to enable child routs */}

  <Route path="/profile" element={<Profile store={props.store} />}/>   {/*  for the clickable link check Nav_bar.jsx */}

  <Route path="/news" element={<News/>}/>  

  <Route path="/music" element={<Music/>}/>  

  <Route path="/settings" element={<Settings/>}/>  
  </Routes> 
</div> 
</BrowserRouter>
    </div>
  );
}

export default App;
