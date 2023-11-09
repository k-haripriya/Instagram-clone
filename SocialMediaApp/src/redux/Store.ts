import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { User } from "./slices/UserSlice";
import UserReducer from './slices/UserSlice'
import SetUserReducer from './slices/setUserSlice'
import PostReducer, { Post } from './slices/PostSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";



export type RootState = {
    user: User[],
    setuser: any,
    posts: Post[],
    
  };

  const persistConfig = {
    key: "root", 
    storage: AsyncStorage, 
  };

  const rootReducer = combineReducers<RootState>( {
    
    user: UserReducer,
    setuser: SetUserReducer,
    posts: PostReducer,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  
  export const persistor = persistStore(store);
  
  export default store;