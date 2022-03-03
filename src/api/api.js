import axios from "axios"


/* we create an object for an instance.   the axios.create will automatically set the settings parameters in proper sequence for different server request  */
const instance = axios.create ({
baseURL:"https://social-network.samuraijs.com/api/1.0/",         /* inside we specify our baseURL */
withCredentials:true,                                            /* cookie sender request (we have to specify it manually, because of multi domain requests )*/
headers:{"API-KEY":"f36a6a26-6367-4d7a-9af1-d75a40668f7f"}        /* the access key you required to write in every request you make (except get request - you do not required for get request) */
})



/* create an object for each component and create different methods for server requests   */
export const usersAPI = {

getUsers:(currentPage=1, pageSize=5)=>{
    return(
    instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
        return(     /* //!and this is the way we create promises, read about how it works... */
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
   
}



}