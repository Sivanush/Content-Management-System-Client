import { User } from "../../interface/user/user.interface"


export interface userResponse{
    user:User
}

export interface authorizationResponse extends userResponse{
    token:string
} 