import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PostsType } from "../../Types/Types";
import uuid from 'react-native-uuid';

export interface Post {
    PostId:any,
    Img:any,
    Description:string,
    UserId:any,
}
const initialState:Post[] = [];

export const PostSlice = createSlice ( {
    name:'posts',
    initialState,
    reducers:{
        addPost:  (state, action:PayloadAction<PostsType>)=>{
            const newPost = {
                PostId : uuid.v4(),
                Img: action.payload.Img,
                Description:action.payload.Description,
                UserId:action.payload.UserId,
            }
            state.push(newPost);
    }
}
})

export const { addPost } = PostSlice.actions;

export default PostSlice.reducer