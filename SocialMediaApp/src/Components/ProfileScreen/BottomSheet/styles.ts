import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bottomContainer:{
        display:"flex",
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end'

    },
    bottomView:{
        height:300,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'#343434',
        padding:10,
        
    }, 
    items:{
        flexDirection:'row',
        gap:20,
        padding:20,
    },
    itemname:{
        fontSize:18,
        color:'white',
        fontWeight:'600'

    }
})