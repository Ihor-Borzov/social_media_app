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

function App() {
  return (
    <div className="App">
      <BrowserRouter>         {/* this the way we work with routing: inside our main div wrapper we create a tag <BrowserRouter> and then for each variant of the path we create separate attribute <Routes> and inside this attribute we create attribute <Route> */}
      <Header/>
      <Nav_bar/>
<div className="body_wrapper">
  <Routes>
  <Route path="/dialogs" element={<Dialogs/>}/>   {/* the path automatically connects to the link (it does not matter where the link is, what matters is the same value(name) in the link attribute 'href' and Route attribute 'path' ) which has the same href as path here */}
  </Routes>
  <Routes>
  <Route path="/profile" element={<Profile/>}/>   {/*  for the clickable link check Nav_bar.jsx */}
  </Routes> 
  <Routes>
  <Route path="/news" element={<News/>}/>  
  </Routes> 
  <Routes>
  <Route path="/music" element={<Music/>}/>  
  </Routes> 
  <Routes>
  <Route path="/settings" element={<Settings/>}/>  
  </Routes> 
</div> 
</BrowserRouter>
    </div>
  );
}

export default App;
