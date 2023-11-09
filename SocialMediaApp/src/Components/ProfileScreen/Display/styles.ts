import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#343434',
        marginHorizontal:10,
        padding:10,   
    },
    innerContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    profile:{
        height:80,
        width:80,
        borderRadius:80
    },
    buttons:{
        justifyContent:'center',
        alignItems:'center'

    }
    
})