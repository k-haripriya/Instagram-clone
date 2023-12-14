import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {AddCommentType, FollowUserType, PostsType} from '../../Types/Types';
import uuid from 'react-native-uuid';

export interface Post {
  PostId: any;
  Img: any;
  Description: string;
  UserId: any;
  Saved: any[] | undefined;
  liked: any[] | undefined;
  comments: any[] | undefined;
}
const initialState: Post[] = [];

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<PostsType>) => {
      const newPost = {
        PostId: uuid.v4(),
        Img: action.payload.Img,
        Description: action.payload.Description,
        UserId: action.payload.UserId,
        Saved: [],
        liked: [],
        comments:[],
      };
      state.push(newPost);
    },
    savePost: (state, action: PayloadAction<FollowUserType>) => {
      const selectedPost = state.find(
        post => post.PostId === action.payload.userId,
      );
      selectedPost?.Saved?.push(action.payload.followerId);
    },
    removeSavedPost: (state, action: PayloadAction<FollowUserType>) => {
      const selectedPost = state.find(
        post => post.PostId === action.payload.userId,
      );
      if (selectedPost) {
        selectedPost.Saved = selectedPost?.Saved?.filter(
          savedId => savedId !== action.payload.followerId,
        );
      }
    },
    likePost: (state, action: PayloadAction<FollowUserType>) => {
      const selectedPost = state.find(
        post => post.PostId === action.payload.userId,
      );
      selectedPost?.liked?.push(action.payload.followerId);
    },
    unlikePost: (state, action: PayloadAction<FollowUserType>) => {
      const selectedPost = state.find(
        post => post.PostId === action.payload.userId,
      );
      if (selectedPost) {
        selectedPost.liked = selectedPost?.liked?.filter(
          Id => Id !== action.payload.followerId,
        );
      }
    },
    addComment:( state, action:PayloadAction<AddCommentType>) => {
      const selectedPost = state.find((post)=> post.PostId === action.payload.postId);
      selectedPost?.comments?.push([action.payload.userId,action.payload.comment]);
    },
  },
});

export const {addPost, savePost, removeSavedPost, likePost, unlikePost, addComment} = PostSlice.actions;

export default PostSlice.reducer;
