import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#343434',
        padding:10,
        margin:10,
    },
    postheader:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    dp:{
        height:40,
        width:40,
        borderRadius:50
    },
    user:{
        flexDirection:"row",
        gap:10,
        alignItems:'center',
    },
    username:{
        fontSize:20,
        color:'white',
        fontWeight:'500'
    },
    post:{
        marginVertical:15,
        height:300,
        width:370,
    },
    description:{
        position:'relative',
        flexDirection:'row',
        gap:10,
        marginTop:15,
        // alignItems:'center',
        
    },
    username1:{
        fontSize:18,
        color:'white',
        fontWeight:'700',
        
    },
    des:{
        fontSize:15,
        color:'white',
        fontWeight:'300',
        maxWidth:270,
        marginTop:3,
    },
    commentsView:{
        marginTop:10,
    },
    commentsText:{
        color:'white',
    }
})