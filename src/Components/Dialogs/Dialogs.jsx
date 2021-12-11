import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



function DialogItems (props){
    let currentPath = "/dialogs/"+ props.id       /* before return I can use regular javascript, and only in hte return i have to use JSX */
return(
<div>
    <NavLink to ={currentPath}>{props.name}</NavLink>
    </div>
)
}



function Message (props){
    return(
<div className={s.message}>{props.message}</div>
    )

}



function Dialogs (props){
return(
    <div className={s.content}>
        <div className="s.dialogsItems">
<DialogItems name="Dimych" id="1"/>
<DialogItems name="Ahmed" id="2"/>
<DialogItems name="Pahsa" id="3"/>
<DialogItems name="Olya" id="4"/>
<DialogItems name="Vita" id="5"/>
<DialogItems name="Maksym" id="6"/>
        </div>

        <div className="s.messages">
<Message message="hi"/>
<Message message="koorva mach ego"/>
<Message message="Hi how are you?"/>
        </div>
        
    </div>
)
}

export default Dialogs;