import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    text:{
        color:'grey',
        fontSize:20,
        fontWeight:'500'
    },
    activecat:{
        color:'white',
        fontSize:20,
        fontWeight:'700',
    },
    btn:{
        padding:20,
    },

    activebtn:{
        padding:20,
        borderBottomColor:'white',
        borderWidth:1,
    }

})