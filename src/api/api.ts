import axios from "axios"
import { UserProfileType } from "../Redux/profile-reducer"
import { DataType } from "../Redux/Auth"
import { UserType } from "../Redux/users-reducer"


/* we create an object for an instance.   the axios.create will automatically set the settings parameters in proper sequence for different server request  */
export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",         /* inside we specify our baseURL */
    withCredentials: true,                                            /* cookie sender request (we have to specify it manually, because of multi domain requests )*/
    headers: { "API-KEY": "dcee9e24-009d-463a-88e9-8f7f599b9d34" }        /* the access key you required to write in every request you make (except get request - you do not required for get request) */
})

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export enum ResultCodesEnum {
    Success =0,
    Error =1,
    CaptchaIsRequired=10
}


export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}



