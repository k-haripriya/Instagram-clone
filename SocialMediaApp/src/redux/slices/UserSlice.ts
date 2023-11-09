import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { DataProps, FollowUserType } from "../../Types/Types";
import uuid from 'react-native-uuid';



export interface User {
    Id:any,
    DisplayName:string | undefined,
    Email:string | undefined,
    Username:string | undefined,
    Password:string | undefined,
    PhoneNumber:string | undefined,
    Dp:any | undefined,
    Bio:string | undefined,
    Pronoun:string | undefined,
    Followers: any[] | undefined,

}

const initialState:User[] =[];

export const UserSlice = createSlice ({
    name:'user',
    initialState,
    reducers:{
        adduser:  (state, action:PayloadAction<DataProps>)=>{
            const newuser = {
               Id:uuid.v4(),
               Email:action.payload.Email,
               Username:action.payload.Username,
               Password:action.payload.Password,
               PhoneNumber:action.payload.PhoneNumber,
               Dp:action.payload.Dp,
               Bio:action.payload.Bio,
               Pronoun:action.payload.Pronoun,
               DisplayName:action.payload.DisplayName,
               Followers:[],
               
            }
            state.push(newuser);
            
        },

        updateUser :(state, action:PayloadAction<User>)=>{
           return state.map((user)=>{
                if(user.Id === action.payload.Id)
                {
                   return {
                    ...user,
                    Id:action.payload.Id,
                    DisplayName:action.payload.DisplayName,
                    Email:action.payload.Email,
                    Username:action.payload.Username,
                    Password:action.payload.Password,
                    PhoneNumber:action.payload.PhoneNumber,
                    Dp:action.payload.Dp,
                    Bio:action.payload.Bio,
                    Pronoun:action.payload.Pronoun,
                   }
                }
                else
                {
                    return user
                }
            })
        },

        followuser:(state, action:PayloadAction<FollowUserType>)=>{
            const selectedUser = state.find((user)=> user.Id === action.payload.userId);
            selectedUser?.Followers?.push(action.payload.followerId);

        },

        unfollowuser: ( state, action:PayloadAction<FollowUserType>)=>{
            const selectedUser = state.find((user)=> user.Id === action.payload.userId);
            if (selectedUser)
            {
                selectedUser.Followers = selectedUser?.Followers?.filter((item)=>item!==action.payload.followerId);
            }
        },

        removeFollower : ( state, action:PayloadAction<FollowUserType>) => {
            const selectedUser = state.find((user)=> user.Id === action.payload.userId);
            if (selectedUser)
            {
                selectedUser.Followers = selectedUser?.Followers?.filter((item)=>item!==action.payload.followerId);
            }
        }
        
        
    }
})

export const { adduser,updateUser,followuser, unfollowuser, removeFollower } = UserSlice.actions;

export default UserSlice.reducer;