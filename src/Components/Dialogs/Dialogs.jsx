import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



function DialogItems (props){
    let myCurrentPath = "/dialogs/"+ props.id       /* before return I can use regular javascript, and only in hte return i have to use JSX */
return(
<div>
    <NavLink to ={myCurrentPath}>{props.name}</NavLink>
    </div>
)
}


function Message (props){
    return(
<div className={s.message}>{props.message}</div>
    )

}



function Dialogs (props){

/* THIS is the way we will receive information from the back end in a way of arrays or objects. we have to put this information in the jsx markup  */

let receivedFromBackEndDialogs = [
{id:1, name:"Dimych"},
{id:2, name:"Ahmed"},
{id:3, name:"Pahsa"},
{id:4, name:"Olya"},
{id:5, name:"Vita"},
{id:6, name:"Maksym"},
]


let receivedFromBackEndMessages = [
    {id:1, message:"hi"},
    {id:1, message:"koorva mach ego"},
    {id:1, message:"Hi how are you?"},
]
    
/* With  the help of method "map* we go through whall array and do some function for each element (in our case each element is an object and we getting some information from it) the function "map" returns new array with modified data*/
let displayedDialogs = receivedFromBackEndDialogs.map((dialogObject)=><DialogItems name={dialogObject.name} id={dialogObject.id}/>)

let displayedMessages = receivedFromBackEndMessages.map((messageObject)=><Message message={messageObject.message}/>)    /* this is the way we create new array with  JSX markup */

return(
    <div className={s.content}>
        <div className="s.dialogsItems">
{displayedDialogs}     {/* to Display our JSX markup from the array - just insert javascript in JSX with curley  brackets with your new array*/}
        </div>

        <div className="s.messages">
{displayedMessages}
        </div>
        
    </div>
)
}

export default Dialogs;