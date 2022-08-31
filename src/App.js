import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Music from './Components/Music/Music';
import NavBar from './Components/Nav-bar/Nav_bar.jsx';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

import { connect, Provider } from 'react-redux';
import Preloader from './Components/common/preloader/Preloader';
import HeaderContainer from './Components/Header/HeaderContainer';
import { LoginConnect } from './Components/Login/Login';
import UsersContainer from './Components/Users/UsersContainer';
import { initializeApp } from './Redux/app-reduces';
import { showGlobalError } from './Redux/profile-reducer';
import store from './Redux/redux-store';

//import ProfileContainer from './Components/Profile/ProfileContainer';
//import DialogsContainer from './Components/Dialogs/DialogsContainer';
const ProfileContainer = React.lazy(()=> import("./Components/Profile/ProfileContainer"))  // the way to import components lazily
const DialogsContainer = React.lazy(()=> import("./Components/Dialogs/DialogsContainer"))

class App extends React.Component {

  catchAllUnhandledErrors = (reason, promise)=>{
//console.log("the alert in App.js"+reason)
this.props.showGlobalError()
  }

componentDidMount = ()=>{
  this.props.initializeApp();
  window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors) // handle any rejection from the server
}

componentWillUnmount = () =>{
  window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
}

  render=()=>{
if(!this.props.initialized){
return <Preloader/>
}


    return (
      <div className="App">
        <BrowserRouter>         {/* this the way we work with routing: inside our main div wrapper we create a tag <BrowserRouter> this tag we create once for an app, and then for each variant of the path we create separate attribute <Route> all the path's togethers have to be wrapped in to attribute <Routes> */}
        <HeaderContainer/>
        <NavBar/>
  <div className="body_wrapper">
     <Routes>   
                                      
    <Route path="/dialogs/*" element={
    <React.Suspense fallback = {<div>{"React.lazy is working"}</div>}> 
    <DialogsContainer />
    </React.Suspense>
    }/>   
  
    <Route path="/profile/*" element={
    <React.Suspense fallback = {<div>{"React.lazy is working"}</div>}> 
    <ProfileContainer/>
    </React.Suspense>
    }/>   


    <Route exact path="/" element={<Navigate to="/profile/*" />}/>    {/* this is the way to render profile if your url is empty */}

    <Route path="/news/*" element={<News/>}/>  
  
    <Route path="/music/*" element={<Music/>}/>  
  
    <Route path="/settings/*" element={<Settings/>}/>  
  
    <Route path="/users/*" element={<UsersContainer/>}/>  
  
    <Route path="/login/*" element={<LoginConnect/>}/>  {/* this is redirect component we do not show it at the Nav-bar */}
 
    <Route path="*" element={<div>404 NOT FOUND</div>}/>   {/* this is the way to render something, when the current url does not match any path */}
 
 </Routes> 
  </div> 
  </BrowserRouter>
      </div>
    );
  }
 
}




let BaseAppComponent = (props)=>{
  return(
    <React.StrictMode>
<Provider store={store}>       
      <ConnectAppContainer />
</Provider>
    </React.StrictMode>
  )
}



export let mapStateToProps = (state)=>{
  return{
    initialized:state.app.initialized
  }
}


let ConnectAppContainer = connect(mapStateToProps,{initializeApp, showGlobalError})(App);




export default BaseAppComponent

























