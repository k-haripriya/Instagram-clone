import { StyleSheet } from "react-native"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center'

    },
    logo:{
        height:hp('10%'),
        width:hp('10%'),
    }
})


    
