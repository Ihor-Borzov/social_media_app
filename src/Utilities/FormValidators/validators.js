
export const required =(value)=>{
if (value){return undefined}
return "this field is required"
}


export const maxChar =(max)=>{
    return(
        (value)=>{
            if(value && value.length > max){return ("maximum amount of characters is" + max)}
        }
    )
}