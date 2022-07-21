import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Nav_barContainer from './Components/Nav-bar/Nav_barContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login, { LoginConnect } from './Components/Login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './Redux/app-reduces';
import Preloader from './Components/common/preloader/Preloader';
import store from './Redux/redux-store';


class App extends React.Component {

componentDidMount = ()=>{
  this.props.initializeApp();
}

  render=()=>{
if(!this.props.initialized){
return <Preloader/>
}


    return (
      <div className="App">
        <BrowserRouter>         {/* this the way we work with routing: inside our main div wrapper we create a tag <BrowserRouter> this tag we create once for an app, and then for each variant of the path we create separate attribute <Route> all the path's togethers have to be wrapped in to attribute <Routes> */}
        <HeaderContainer/>
        <Nav_barContainer/>
  <div className="body_wrapper">
     <Routes>                                    {/* Context#3 remove all the props from components, you do not need them anymore */}
    <Route path="/dialogs/*" element={<DialogsContainer />}/>   {/* the path automatically connects to the link (it does not matter where the link is, what matters is the same value(name) in the link attribute 'href' and Route attribute 'path' ) which has the same href as path here, remember to insert start at the end to enable child routs */}
  
    <Route path="/profile/*" element={<ProfileContainer/>}/>   {/*  for the clickable link check Nav_bar.jsx */}
  
    <Route path="/news/*" element={<News/>}/>  
  
    <Route path="/music/*" element={<Music/>}/>  
  
    <Route path="/settings/*" element={<Settings/>}/>  
  
    <Route path="/users/*" element={<UsersContainer/>}/>  
  
    <Route path="/login/*" element={<LoginConnect/>}/>  {/* this is redirect component we do not show it at the Nav-bar */}
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


let ConnectAppContainer = connect(mapStateToProps,{initializeApp})(App);




export default BaseAppComponent

























