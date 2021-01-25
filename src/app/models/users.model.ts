export interface UserResponse{
    statusID: number;
    statusName: string;
    statusDescription: string;
    data: UserModel[];
}



export class UserModel{
    uid: string;
    displayName: string;
    email: string;
    photoUrl: string;
    type: string;
    password: string;
    created: Date;
    updated: Date;

}