import { AxiosPromise } from 'axios'
import {GetItemsType, ResponseType, instance,} from'./api'







export const usersAPI = {

    getUsers: (currentPage = 1, pageSize = 5, isFriend: null | boolean, userName:null|string) => {
        return (
            instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}
            &friend=${typeof isFriend != "undefined"? isFriend:null}
            &term=${typeof userName != "undefined"? userName:"" }
            `)
        
                .then((response) => {
                    return (
                        response.data
                    )
                })
        )
    },

    follow: (userId:number) => {
        return (
            instance.post<ResponseType>(`follow/${userId}`)
                .then((response) => {
                    return (
                        response.data.resultCode
                    )
                })

        )

    },

    unfollow: (userId:number) => {
        return (
            instance.delete(`follow/${userId}`)
                .then((response) => {
                    return (
                        response.data.resultCode
                    )
                })

        )
    }


}

