import React from 'react'



class ProfileStatus extends React.Component{

state={
    editMode:false,
    status: this.props.status?  this.props.status :"No-Status",
}


activateEditMode =()=>{
    this.setState({
        editMode:true
    })
}

deActivateEditMode =()=>{
    this.setState({
        editMode:false,
    })
    this.props.updateStatus(this.state.status)    
}

onStatusChange=(e)=>{
this.setState({
    status: e.target.value, 
})
}



render=()=>{
    return(
        <>
{!this.state.editMode && <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}

{this.state.editMode && <input autoFocus onBlur={this.deActivateEditMode} onChange={this.onStatusChange} value={this.state.status}></input>}
        </>
    )
}

}

export default ProfileStatus