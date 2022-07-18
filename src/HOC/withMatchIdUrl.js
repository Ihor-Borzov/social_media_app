import React from "react"
import { useMatch } from "react-router-dom";




export const withMatchIdUrl = (Component)=>{

    let ProfileMatchComponent = (props)=>{
        let match = useMatch("/profile/:userId");  //here specifying that after slash we may have useeId - we will be able to extract it later from the variable match
        return(
            <Component {...props} match={match} />
        )}

return ProfileMatchComponent
}


// I made this HOC component because we can not use hooks in the Class component and our ProfileContainer is a class 
//component - so we have to create HOC, which will get needed us data from url and then will render that component based
// of that url (the Id  of the user)