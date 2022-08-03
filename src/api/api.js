import axios from "axios"


/* we create an object for an instance.   the axios.create will automatically set the settings parameters in proper sequence for different server request  */
const instance = axios.create ({
baseURL:"https://social-network.samuraijs.com/api/1.0/",         /* inside we specify our baseURL */
withCredentials:true,                                            /* cookie sender request (we have to specify it manually, because of multi domain requests )*/
headers:{"API-KEY":"f6711121-e528-4f72-b6ce-39150dd4eb42"}        /* the access key you required to write in every request you make (except get request - you do not required for get request) */
})



/* create an object for each component and create different methods for server requests   */
export const usersAPI = {

getUsers:(currentPage=1, pageSize=5)=>{
    return(
    instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
        return(     
response.data
        )
    })
    )
},

follow:(userId)=>{
    return(
        instance.post(`follow/${userId}`)
        .then((response)=>{
            return(
                response.data.resultCode
            )
        })

    )

},

unfollow:(userId)=>{
    return(
        instance.delete(`follow/${userId}`)
        .then((response)=>{
            return(
                response.data.resultCode
            )
        })

    )
}


}




export const profileAPI = {
    getUserProfile : (userId)=>{
        return(
            instance.get(`profile/ ${userId}`).then((response)=>{
                return(
                    response.data
                )
            })
        )
    },

getStatus:(userId)=>{
    return(
        instance.get('profile/status/'+ userId)
    )
},

setStatus:(status)=>{
    return(  instance.put('profile/status/',{status}))   //remember put and post have payload you can send to server - it is an object 
}
}


export const authenticationAPI = {

authenticate:()=>{
    return(
        instance.get("auth/me/").then((response)=>{
            return(
                response.data
            )
        })
    )
   
},


login:(data)=>{
    return(
        instance.post('auth/login/',data)
    )},



    logout:()=>{
        return(
            instance.delete('auth/login/')
        )
    }


}