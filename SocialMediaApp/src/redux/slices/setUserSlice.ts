import { PayloadAction, createSlice } from "@reduxjs/toolkit";



const initialState: any  = '';

export const setUserSlice = createSlice ({
    name:'setuser',
    initialState,
    reducers:{
        setuser: (state, action)=>{
            return action.payload
        },
        
        
    }
})

export const { setuser } = setUserSlice.actions;

export default setUserSlice.reducer;