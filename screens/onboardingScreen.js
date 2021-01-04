import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Colors from '../constants/Colors';

const OnboardingScreen =(props)=> {

    const [loading,setLoading] = useState(true);
    // const [complete,setComplete] = useState(0)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },2000);
    }, [])

    if(loading){
        return(
            <LinearGradient colors={[Colors.accent,Colors.primary]} style={styles.content}>
                <View style={styles.content}>
                    <Image source={require('../assets/images/chef_logo.png')} 
                        style={styles.image}
                    />
                    <Text style={styles.fontTitle}>Unity Food Delivery</Text>
                </View>
            </LinearGradient>
        )
    }else{
        return(
            <View style={styles.wrapper}>
                <Swiper 
                    showsButtons={false} 
                    activeDotColor={Colors.primary} 
                    autoplay={true}
                    >
                    <View style={styles.slide1}>
                        <Image style={{width:wp(35),height:hp(30)}} source={require('../assets/images/chef_1.png')}/>
                        <View style={styles.contentText}>
                            <Text style={styles.title}>Fresh Foods</Text>
                            <Text style={styles.text}>In particular,the garbled words of bear an unmistakeable</Text>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={styles.slideImg} source={require('../assets/images/chef_2.png')}/>
                        <View style={styles.contentText}>
                            <Text style={styles.title}>Fresh Foods</Text>
                            <Text style={styles.text}>In particular,the garbled words of bear an unmistakeable</Text>
                        </View>
                    </View>
                    <View style={styles.slide3}>
                        <Image style={styles.slideImg} source={require('../assets/images/chef_3.png')}/>
                        <View style={styles.contentText}>
                            <Text style={styles.title}>Easy Payment</Text>
                            <Text style={styles.text}>In particular,the garbled words of bear an unmistakeable</Text>
                        </View>
                    </View>
                </Swiper>
                <View style={styles.footer}> 
                    <TouchableOpacity style={styles.btnSign} onPress={()=>props.navigation.navigate('Login')}>
                        <Text style={{color:'#fff',fontSize:15}}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSkip} onPress={()=>props.navigation.navigate('Register')}>
                        <Text style={{color:'#fff',fontSize:15}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:hp(23),
        width:wp(40),
    },
    title:{
        fontSize:23,
        color:Colors.primary,
        marginTop:hp(5),
        fontFamily:'cookieBold'
    },
    text:{
        marginTop:hp(5),
        fontSize:13,
        color:'gray',
        textAlign:'center',
        fontFamily:'hotpizza'
    },
    btnSign:{
        paddingHorizontal:hp(18),
        paddingVertical:hp(2),
        backgroundColor:Colors.accent,
        marginBottom:hp(2),
        borderRadius:hp(50),
        shadowOffset:{width:0,height:5},
        shadowColor:'#000',
        elevation:5
    },
    btnSkip:{
        paddingHorizontal:hp(18),
        paddingVertical:hp(2),
        backgroundColor:Colors.primary,
        marginBottom:hp(2),
        borderRadius:hp(50),
        shadowOffset:{width:0,height:5},
        shadowColor:'#000',
        elevation:5
    },
    contentText:{
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        marginBottom:-hp(10),
        width:wp(70)
    },
    fontTitle:{
        color:'#fff',
        fontSize:25,
        fontFamily:'cookieBold',
        marginTop:hp(3)
    },
    wrapper: {
        flex:1,
        backgroundColor:'#fff'
    },
    footer:{
        flexDirection:'column',
        height:hp(30),
        alignItems:'center',
        justifyContent:'center'
    },
    slideImg:{
        width:wp(55),
        height:hp(25)
    },  
    slide1: {
        height:hp(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        height:hp(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        height:hp(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    // text: {
    //     color: '#fff',
    //     fontSize: 30,
    //     fontWeight: 'bold'
    // }
})