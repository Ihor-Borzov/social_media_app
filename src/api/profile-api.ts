import {ResponseType, instance,} from'./api'
import { PhotosType, UserProfileType } from "../Redux/profile-reducer"




export const profileAPI = {
    getUserProfile: (userId:number|null) => {
        return (
            instance.get<UserProfileType>(`profile/ ${userId}`).then((response) => {
                return (
                    response.data
                )
            })
        )
    },

    getStatus: (userId:number) => {
        return (
            instance.get<string>('profile/status/' + userId)
        )
    },

    setStatus: (status:string) => {
        return (instance.put<ResponseType>('profile/status', { status }))   //remember put and post have payload you can send to server - it is an object 
    },


    //! read about "Content-Type":'multipart/form-data'  and how to send a file to the server
    savePhoto: (photo:any) => {
        const formData = new FormData();
        formData.append("image", photo)     //this is the way we create a special object, before sending the photo file to the server 

        return (instance.put<ResponseType<PhotosType>>('profile/photo', formData, { headers: { "Content-Type": 'multipart/form-data' } }))
    },


    saveProfile: (profileData:UserProfileType) => {
        return (instance.put<ResponseType>('profile', profileData))
    }

}