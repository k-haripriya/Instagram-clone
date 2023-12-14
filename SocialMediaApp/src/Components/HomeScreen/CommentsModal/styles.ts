import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end',
        
    },
    bottomView:{
        height:600,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'#343434',
        padding:5,
        
        
    }, 
    heading:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
    },
    line:{
        borderBottomWidth:1,
        borderBottomColor:'#454545',
        paddingBottom:30,

    },
    box:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        
        
    },
    dp:{
        height:50,
        width:50,
        borderRadius:25,

    },
    dpandname:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    username:{
        color:'white',
        fontWeight:'bold',
        fontSize:15,
    },
    comments:{
        color:'white',
        maxWidth:250,
    },
    nameandcomments:{
        marginLeft:15,    
    },
    addcomment:{
        marginVertical:5,
        paddingRight:15,
        backgroundColor:'#454545',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    input:{
        minHeight:40,
        margin:5,
        color:'#F5F5F5',
        width:300,

    },

});