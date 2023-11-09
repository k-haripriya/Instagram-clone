import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'#000000',   
        justifyContent:'space-between', 
    },
    topcontainer:
    {
        alignItems:'center',
        justifyContent:'center',
        padding:50
    },
    images:{
        flexDirection:'row',
        alignItems:'center',
        gap:5,
    },
    logo:{
        height:hp('5%'),
        width:hp('5%'),
    },
    text1:{
        color: '#FFFFFF',
        fontSize:28,
        fontWeight:'900',
    },
    // form:{
    //     display:'flex',
       
        
    // },
    bottomcont:{
       
        borderTopWidth:1,
        borderColor:'white',
        margin:50,
        alignItems:'center',
       

    },
    signup:{
        marginTop:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'

    },
    text2:{
        
        color:'white',
        fontSize:15
    },
    text3:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    }
    
})