import React from 'react'



class AboutMe extends React.Component{

state={
    editMode:false,
    title:'yo',
    aboutMeStatus: this.props.aboutMe?  this.props.aboutMe :"I am a cool dude from the world you never been before",
}


activateEditMode (){
    this.setState({
        editMode:true
    })
}

deActivateEditMode (e){
    this.setState({
        editMode:false,
        aboutMeStatus: e.target.value
    })
}



render=()=>{
    return(
        <>
{!this.state.editMode && <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.aboutMeStatus}</span>}

{this.state.editMode && <input autoFocus onBlur={this.deActivateEditMode.bind(this)} defaultValue={this.state.aboutMeStatus}></input>}
        </>
    )
}

}

export default AboutMe