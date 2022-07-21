import React from "react"
import s from "./ProfileInfo.module.css";

//PAY ATTENTION WE DO NOT RENDER PROFILESTATUS ANYMORE,- WE RENDER PROFILESTATUS WITH HOOKS!!!
class ProfileStatus extends React.Component{
    
    /* this is the way we create LocalState */
state = {
    editMode:false,
status:this.props.status
}  




activateEditMode=()=>{
    // this.state.editMode = true; /* this is the way to change the local state, but the page will not rerender after */
    // this.forceUpdate()   /*  this is the way to force update the change of local state */
    /* but to change the local state and rerender the page we have to use setState method. so setState will automatically will take the new 
    object and will combine new state object with an old one and override the changed properties. and then the component will rerender.
    remember that setState asynchronous method */

    this.setState({
editMode:true
    })
}



deactivateEditMode=()=>{
    this.setState({
        editMode:false
    })
    this.props.updateStatus(this.state.status)
}

onStatusChange=(e)=>{
this.setState({
    status:  e.currentTarget.value
}); 
}

/* this method invokes with each rerender */
componentDidUpdate(prevProps, prevState){
     if(prevProps.status !== this.props.status){this.setState({status:this.props.status})}
}


render=()=>{
    return(
        <div>
            {!this.state.editMode &&
<div>
<span onDoubleClick={this.activateEditMode} >{this.props.status||"no status"}</span>
</div>
}


{this.state.editMode &&
<div>
<input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
</div>
}

</div>
    )
}


}



export default ProfileStatus

ProfileStatus.prototype.toString = function(){return("ProfileStatus object")}/* this is just to change the
name of the object, when i was trying to consol.log(this) from the function */














/* LOCAL STATE ON THE BASE OF CLASS */
// class ProfileStatus extends React.Component{
//     /* this is the way we create LocalState */
// state = {
//     editMode:false,
// status:this.props.status
// }  




// activateEditMode=()=>{
//     // this.state.editMode = true; /* this is the way to change the local state, but the page will not rerender after */
//     // this.forceUpdate()   /*  this is the way to force update the change of local state */
//     /* but to change the local state and rerender the page we have to use setState method. so setState will automatically will take the new 
//     object and will combine new state object with an old one and override the changed properties. and then the component will rerender.
//     remember that setState asynchronous method */

//     this.setState({
// editMode:true
//     })
// }


// deactivateEditMode=()=>{
//     this.setState({
//         editMode:false
//     })
//     this.props.updateStatus(this.state.status)
// }

// onStatusChange=(e)=>{
// this.setState({
//     status:  e.currentTarget.value
// }); 
// }

// /* this method invokes with each rerender */
// componentDidUpdate(prevProps, prevState){
//      if(prevProps.status !== this.props.status){this.setState({status:this.props.status})}
// }


// render=()=>{
//     return(
//         <div>
//             {!this.state.editMode &&
// <div>
// <span onDoubleClick={this.activateEditMode} >{this.props.status||"no status"}</span>
// </div>
// }

// {this.state.editMode &&
// <div>
// <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
// </div>
// }

// </div>
//     )
// }


// }



// export default ProfileStatus

// ProfileStatus.prototype.toString = function(){return("ProfileStatus object")}/* this is just to change the
// name of the object, when i was trying to consol.log(this) from the function */