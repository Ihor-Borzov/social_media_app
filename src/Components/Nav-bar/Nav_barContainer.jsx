import React from 'react';
import { Link } from 'react-router-dom';
import StoreContext from '../../StoreContext';
import Friend from './Friend/Friend';
import Nav_bar from './Nav_bar';
import s from "./Nav_bar.module.css";




function Nav_barContainer (props){


    return(
<StoreContext.Consumer>
{
  (store)=>{

return <Nav_bar state={store.getState().navBarPage}/>

}
}
</StoreContext.Consumer>
    )
}

export default Nav_barContainer;