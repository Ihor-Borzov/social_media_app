import * as axios from "axios";
import React from "react";
import style from "./Users.module.css"
import user from '../../assets/images/user.jpg'


let Users = (props)=>{

if (props.users.length ===6){
axios.get("https://social-network.samuraijs.com/api/1.0/users").then(receivedResponse => {props.setUsers(receivedResponse.data.items)})
}





    return(      
<div className={style.wrapper}>
    
{   props.users.map(u=>                                      /* so we start and finish our component with curly braces inside the main div wrapper  */

<div key={u.id} className={style.ussers_container}>          {/* first we have to give a key attribute to user wrapper (react requires) */}

<div className={style.usser_icon}>
<div className={style.wrapper__for_AspectRatio}>
   <div className={style.imgAspectRatio_wrapper}> 
       <div className={style.img_wrapper}>  
           <img src={u.photos.large ?u.photos.large :user} alt="picture"/>   {/* if there is a photo use that photo if not use aa photo from import */}
        </div>
    </div>
    <div className={style.button_wrapper}>  ....Subscribe.... 
    {u.followed
         ? <button onClick={()=>{props.unFollow(u.id)}}>   Unfollow  </button>
         : <button onClick={()=>{props.follow(u.id)}}>   follow  </button>
        }
     </div>
</div>
</div>

<div className={style.user_info}>
    <div className={style.name_and_status}>
        <div className={style.name}>{u.name}</div>
        <div className={style.status}>{u.status}</div>
    
    </div>
    <div className={style.country_and_city}>
        <div className={style.country}>{"u.location.country"}</div>
        <div className={style.city}>{"u.location.city"}</div>
    </div>
</div>

</div>

) }
</div>
    )
}


export default Users;