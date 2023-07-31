import {ResponseType, ResultCodesEnum, instance,} from'./api'








type LoginResponseDataType = {
    userId:number,

}

type MeResponseDataType = { 
    id:number,
    email:string,
    login:string,
}


export const authenticationAPI = {

    authenticate: () => {
        return (
            instance.get<ResponseType<MeResponseDataType>>("auth/me/").then((response) => {
                return (
                    response.data
                )
            })
        )

    },


    login: (data:any) => {
        return (
            instance.post<ResponseType<LoginResponseDataType, ResultCodesEnum >>('auth/login/', data)
        )
    },

    getCaptchaUrl: () => {
        return (
            instance.get('/security/get-captcha-url')
        )
    },



    logout: () => {
        return (
            instance.delete('auth/login/')
        )
    }


}