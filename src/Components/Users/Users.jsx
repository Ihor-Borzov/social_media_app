import React from 'react';
import style from "./Users.module.css"
import user from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';

let Users=(props)=>{
    let totalPagesCount= Math.ceil(props.totalUsersCount/props.pageSize);   /* here we calculate how many pages we will need, Math.ceil() rounds to the bigger integer  */ 

    let pagesArray=[];
    for(let i=1; i<=totalPagesCount;i++){
        pagesArray.push(i);
    }


return(

    <div className={style.wrapper}>
    <div className={style.pageNumbers}>
    
    
    {pagesArray.map((page)=>{
        return <span onClick={(e)=>{props.setCurrentPage(page)}} className={props.currentPage===page ? style.activePage : style.notActivePage}>  {`${page}. `}  </span>
    })
    }
    
    
    </div>  
    {   props.users.map(u=>                                      /* so we start and finish our component with curly braces inside the main div wrapper  */
    
    <div key={u.id} className={style.ussers_container}>          {/* first we have to give a key attribute to user wrapper (react requires) */}
    
    <div className={style.usser_icon}>
    <div className={style.wrapper__for_AspectRatio}>
       <div className={style.imgAspectRatio_wrapper}> 
           <div className={style.img_wrapper}>  
<NavLink to="/profile/2">
               <img src={u.photos.large ?u.photos.large :user} alt="picture"/>   {/* if there is a photo use that photo if not use aa photo from import */}
               </NavLink>
            </div>
        </div>
        <div className={style.button_wrapper}>  ....Subscribe.... 
        {u.followed
             ? <button onClick={()=>{props.unfollow(u.id)}}>   Unfollow  </button>
             : <button onClick={()=>{props.follow(u.id)}}>   follow  </button>
            }
         </div>
    </div>
    </div>
    
    <div className={style.user_info}>
        <div className={style.name_and_status}>
            <div className={style.name}>{u.name}</div>
            <div className={style.status}>{u.status? u.status: "I am lazy and do not have a status"}</div>
        
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


export default Users






















/* my new Class component! */
/* 
#1 You create a class and you required to extend from React.Component

#2 the constructor function is invokes only first time when the component object is born, any rerendering do not invoke constructor
but invoke render() function. when you go to another component - this component object kills. and next time when you visit this 
component it will born again.

#3 by the default constructor has to pass props to the React.Component's constructor (if he does only that, then you do not have to 
    write constructor at all, it will happen automatically), but if you add some variables to the class object, or you want him
    to do something only once when he is born, you have to write constructor, as in this sample

#4 Each class requires to have render function, which requires to return jsx.

#5 each additional function you want to create you have to create like this:   
functionName = ()=>{}

*/

















/* MY OLD FUNCTIONAL COMPONENT */

// let Users = (props)=>{

// if (props.users.length ===6){
// axios.get("https://social-network.samuraijs.com/api/1.0/users").then(receivedResponse => {props.setUsers(receivedResponse.data.items)})
// }



// //     return(      
// <div className={style.wrapper}>
    
// {   props.users.map(u=>                                      /* so we start and finish our component with curly braces inside the main div wrapper  */

// <div key={u.id} className={style.ussers_container}>          {/* first we have to give a key attribute to user wrapper (react requires) */}

// <div className={style.usser_icon}>
// <div className={style.wrapper__for_AspectRatio}>
//    <div className={style.imgAspectRatio_wrapper}> 
//        <div className={style.img_wrapper}>  
//            <img src={u.photos.large ?u.photos.large :user} alt="picture"/>   {/* if there is a photo use that photo if not use aa photo from import */}
//         </div>
//     </div>
//     <div className={style.button_wrapper}>  ....Subscribe.... 
//     {u.followed
//          ? <button onClick={()=>{props.unFollow(u.id)}}>   Unfollow  </button>
//          : <button onClick={()=>{props.follow(u.id)}}>   follow  </button>
//         }
//      </div>
// </div>
// </div>

// <div className={style.user_info}>
//     <div className={style.name_and_status}>
//         <div className={style.name}>{u.name}</div>
//         <div className={style.status}>{u.status}</div>
    
//     </div>
//     <div className={style.country_and_city}>
//         <div className={style.country}>{"u.location.country"}</div>
//         <div className={style.city}>{"u.location.city"}</div>
//     </div>
// </div>

// </div>

// ) }
// </div>
// //     )
// // }
