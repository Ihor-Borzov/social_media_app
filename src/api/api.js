import axios from "axios"


/* we create an object for an instance.   the axios.create will automatically set the settings parameters in proper sequence for different server request  */
const instance = axios.create ({
baseURL:"https://social-network.samuraijs.com/api/1.0/",         /* inside we specify our baseURL */
withCredentials:true,                                            /* cookie sender request (we have to specify it manually, because of multi domain requests )*/
headers:{"API-KEY":"dcee9e24-009d-463a-88e9-8f7f599b9d34"}        /* the access key you required to write in every request you make (except get request - you do not required for get request) */
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
    return(  instance.put('profile/status', {status} ))   //remember put and post have payload you can send to server - it is an object 
},


//! read about "Content-Type":'multipart/form-data'  and how to send a file to the server
savePhoto:(photo)=>{
const formData = new FormData();
formData.append("image", photo)     //this is the way we create a special object, before sending the photo file to the server 

    return(  instance.put('profile/photo', formData, {headers:{"Content-Type":'multipart/form-data'}}))   
},


saveProfile : (profileData)=>{
    return(instance.put('profile', profileData))
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

    getCaptchaUrl:()=>{
        return(
            instance.get('/security/get-captcha-url')
        )
    },



    logout:()=>{
        return(
            instance.delete('auth/login/')
        )
    }


}