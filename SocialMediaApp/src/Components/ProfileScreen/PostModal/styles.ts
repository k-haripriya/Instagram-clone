import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modal:
    {
        
        backgroundColor:'black',
        display:'flex',
        flex:1,
        justifyContent:'center'
    },
    text:{
        color:'white',
        textAlign:'center',
        fontSize:30,
        margin:10,
        fontWeight:'900'
    },
    image:{
        height:300,
        width:300,
        alignSelf:'center',
        marginVertical:20,
        borderRadius:50,

    },
    buttonView:{
        flexDirection:'row',
        margin:30,
        justifyContent:'center',
        alignItems:'center',
        gap:30,
        
    }
    
})