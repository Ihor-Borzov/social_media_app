import React, { useEffect, useState } from 'react'
import s from "./ProfileInfo.module.css";


 const ProfileStatusHooks = (props) =>{

let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.status)

useEffect(()=>{setStatus(props.status)},[props.status])


let activateEditMode = ()=>{
    setEditMode(true);
}

let deactivateEditMode = ()=>{
    setEditMode(false);
  props.updateStatus(status);
}

let onStatusChange = (e) =>{
    setStatus(e.target.value)
}


return(

    <div className= {setEditMode.status}>
{!editMode &&
<span onDoubleClick={activateEditMode}>{props.status? `Status : ${props.status}` : "-----"}</span>
}

{editMode &&
<input autoFocus={true} value = {status} onBlur = {deactivateEditMode} onChange = {onStatusChange}></input>
}

    </div>
)

}



export default ProfileStatusHooks
















// import React from 'react'



// class ProfileStatus extends React.Component{

// state={
//     editMode:false,
//     status: this.props.status?  this.props.status :"No-Status",
// }


// activateEditMode =()=>{
//     this.setState({
//         editMode:true
//     })
// }

// deActivateEditMode =()=>{
//     this.setState({
//         editMode:false,
//     })
//     this.props.updateStatus(this.state.status)    
// }

// onStatusChange=(e)=>{
// this.setState({
//     status: e.target.value, 
// })
// }


// /* this method invokes with each rerender */
// componentDidUpdate(prevProps, prevState){
//     if(prevProps.status !== this.props.status){this.setState({status:this.props.status})}
// }


// render=()=>{
//     return(
//         <>
// {!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}

// {this.state.editMode && <input autoFocus onBlur={this.deActivateEditMode} onChange={this.onStatusChange} value={this.state.status}></input>}
//         </>
//     )
// }

// }

// export default ProfileStatus