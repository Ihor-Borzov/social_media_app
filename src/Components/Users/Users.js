import * as axios from "axios";
import React from "react";
import style from "./Users.module.css"
import user from '../../assets/images/user.jpg'





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

class Users extends React.Component {      
/* since we do not make a request from the constructor, and constructor only sends props to his parent constructor at React.Component, we may not write our constructor - it will do its work automatically   */

componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then(receivedResponse => {this.props.setUsers(receivedResponse.data.items)})
}



setCurrentPage=(page)=>{
this.props.setCurrentPage(page);

axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)   /* here we are making request passing the page we just pressed, so rerender will happen already with the proper page, we do request in this function because componentDidMount invokes only once */
.then(receivedResponse => {this.props.setUsers(receivedResponse.data.items);   

this.props.setTotalUsersCount(receivedResponse.data.totalCount/100);     /* get total count from response and dispatch it to the state  */
});


}





render = ()=>{

    let totalPagesCount= Math.ceil(this.props.totalUsersCount/this.props.pageSize);   /* here we calculate how many pages we will need, Math.ceil() rounds to the bigger integer  */ 

    let pagesArray=[];
    for(let i=1; i<=totalPagesCount;i++){
        pagesArray.push(i);
    }




    return(
        <div className={style.wrapper}>
<div className={style.pageNumbers}>


{pagesArray.map((page)=>{
    return <span onClick={(e)=>{this.setCurrentPage(page)}} className={this.props.currentPage===page ? style.activePage : style.notActivePage}>  {`${page}. `}  </span>
})
}


</div>  
{   this.props.users.map(u=>                                      /* so we start and finish our component with curly braces inside the main div wrapper  */

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
         ? <button onClick={()=>{this.props.unFollow(u.id)}}>   Unfollow  </button>
         : <button onClick={()=>{this.props.follow(u.id)}}>   follow  </button>
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

}



export default Users;












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
