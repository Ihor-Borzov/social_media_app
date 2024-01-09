import React from 'react';
import s from "./Friend.module.css";
import userThumbnail from '../../../assets/images/user.jpg';
import { NavLink } from 'react-router-dom';





function Friend(props) {

    return (
        
        <div className={s.friend}>
<NavLink to={"/profile/" + props.id}>
            <div className={s.circle}>
                <img src={props.picture.large ? props.picture.large : userThumbnail} alt="avatar" />   {/* if there is a photo use that photo if not use aa photo from import */}
</div>
            <span className={s.friends_name}>{props.name}</span>
            </NavLink>
        </div>
        
    )
}

export default Friend;





