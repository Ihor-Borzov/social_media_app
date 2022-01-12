import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import Friend from './Friend/Friend';
import Nav_bar from './Nav_bar';
import s from "./Nav_bar.module.css";




let mapStoreToProps = (state)=>{
  return{
    state:state.navBarPage,
  }
  }
  
  
  let mapDispatchToProps=(dispatch)=>{
      return{
         
      }
  }
  
  
  const Nav_barContainer = connect(mapStoreToProps,mapDispatchToProps)(Nav_bar);



export default Nav_barContainer;