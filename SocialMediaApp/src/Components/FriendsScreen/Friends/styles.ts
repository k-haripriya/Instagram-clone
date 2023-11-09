import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        padding:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:10,

    },
    view1:{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },

    dpimg:{
        height:60,
        width:60,
        borderRadius:60,
    },
    username:{
        color:'white',
        fontSize:18,
        fontWeight:'500'

    },
    dpname:{
        color:'white',
    },
})