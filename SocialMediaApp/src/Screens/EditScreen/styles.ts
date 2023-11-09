import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'black',
    },
    dpcont:{
        padding:20,
        alignItems:'center',
        justifyContent:'center',
    },
    dpimg:{
        height:100,
        width:100,
        borderRadius:50,
    },
    username:{
        fontSize:18,
        fontWeight:'600',
        color:'#0073cf'
    },
    btncont:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        gap:30,
    }
})