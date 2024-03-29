import { User } from "../redux/slices/UserSlice"

export type NavigationStackParams = {
    SplashScreen:undefined,
    LoginScreen:undefined,
    MainScreen:undefined,
}
export type BottomTabsParams = {
    HomeScreen:undefined,
    ProfileScreen:undefined,
    FriendsScreen:undefined,
}
export type TabsType = {
    route: keyof BottomTabsParams,
    component: React.ComponentType<any>,
    name:string
}
export type LoginProps = {
    isLogin:Boolean,
    handleLogin: Function,
    redirect:Function
}

export type Inputfields = {
    name:string,
    handleInputChange:Function,
    value:string | undefined,
}

export type Inputfields1 = {
    name:string,
    handleInputChange:Function,
    value:any,
}
export type Posts = {
    dp:any,
    username:string | undefined,
    img:any,
    description:string | undefined,
    userId: any,
    saved: boolean,
    liked:boolean,
    postId:any
}
export type Button = {
    name:string,
    type:string,
    OnClick: Function,
}

export type Modal = {
    handleModal:Function,
    openImagePicker:Function
}

export type BottomSheetType = {
    handleModal : Function,
    isModalVisible: boolean,
    handleLogout:Function,
    handleSavedPosts:Function,
    handleSettingsScreen :Function
}

export type DisplayType = {
    onClick:Function,
    
}

export type EditType = {
    isEdit:boolean,
    handleEdit:Function,
    
}



export type DataProps = {
    
    Email:string,
    Username:string,
    DisplayName:string,
    Password:string,
    PhoneNumber:string,
    Bio:string,
    Dp:any,
    Pronoun:string
}

export type InputProps = {
    field:string,
    value:string 
}

export type PostModal = {
    handlePost: Function,
    selectedImage:any
}

export type PostsType = {
    PostId:any,
    Img:any,
    Description:string,
    UserId:any,
}

export type CategoryType = {
    handleType:Function,
}

export type FriendsType = {
    type:string,
    handleSetUser: Function,
}

export type FollowUserType = {
    userId:any,
    followerId:any,
}

export type BackNavigation = {
    handleBack:Function,
}

export type PhotosType = {
    handleVisible:Function,
    handleVisiblePhoto:Function,

}
export type PhotoModalType = {
    isPhotoVisible:boolean,
    photo:any,
    handleVisible:Function
}

export type SavePosts = {
    isSavedScreenOpen:boolean,
    handleSavedPosts:Function,
}

export type CommentsType = {
    isCommentsVisible: boolean,
    handleComments:Function,
    postId:any,
}

export type AddCommentType = {
    postId:any;
    comment:string;
    userId:any;
}

export type CommentsPageType = {
    postId: any;
}

export type commentcardType = {
    userId:any;
    comment:string;
}

export type settingsScreenType = {
    isSettingsOpen:boolean,
}