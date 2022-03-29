import React from "react"
import { useMatch } from "react-router-dom";


export const withMatchIdUrl = (Component)=>{

    let ProfileMatchComponent = (props)=>{
        let match = useMatch("/profile/:userId");
        return(
            <Component {...props} match={match} />
        )}

return ProfileMatchComponent
}