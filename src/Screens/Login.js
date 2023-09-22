import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React,{useState} from 'react'

const Login = ({navigation}) => {
    const [hidepass1, sethidepass1] = useState(true);



    const [next, setNext] = useState(0)
    
    return (
        <>
        <View style={{ flex: 1, backgroundColor: '#B0B0B0', justifyContent: 'center' }}>

            <View style={{ height: 450, width: '90%', backgroundColor: '#097969', alignSelf: 'center', borderRadius: 15 }}>

                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 30, color: '#fff', fontWeight: '900', marginLeft: 80 }}>LOTUS</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 30, color: 'yellow', fontWeight: '900' }}>365</Text>

                    {/* <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: '#000', justifyContent: 'center', borderRadius: 100, marginTop: 7, marginLeft: 45 }}>
                        <Image source={require('../images/cross1.png')} style={{ height: 15, width: 15, alignSelf: 'center' }} />
                    </TouchableOpacity> */}
                </View>

                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 17 }}>Log In</Text>

                <TextInput placeholder='Phone Number' placeholderTextColor={"#fff"}
                 style={{ marginLeft: 40, marginTop: 30, fontSize: 20, color: '#fff' }} />

                <View style={{ borderBottomWidth: 1, borderColor: 'yellow', marginHorizontal: 30, marginTop: 10 }}></View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <TextInput placeholder='Password' placeholderTextColor={"#fff"}
                    secureTextEntry={hidepass1 ? true : false}
                     style={{ marginLeft: 40, marginTop: 30, fontSize: 20, color: '#fff' }} />
                     <TouchableOpacity onPress={() => sethidepass1(!hidepass1)}>
                    <Image source={require('../images/eye2-removebg-preview.png')} style={{height:26,marginTop:30,width:30,alignSelf:'center',marginRight:40}}/>
                    </TouchableOpacity>

                </View>
                <View style={{ borderBottomWidth: 1, borderColor: 'yellow', marginHorizontal: 30, marginTop: 10 }}></View>

                <TouchableOpacity style={{ marginLeft: 17, marginTop: 30 }}>
                    <Text style={{ color: '#fff' }}>Forgot Password</Text>
                    <View style={{ borderBottomWidth: 1, borderColor: '#fff', marginRight: 210 }}></View>
                </TouchableOpacity>

                <TouchableOpacity style={{height:40,width:'90%',backgroundColor:'#fff',marginTop:20,alignSelf:'center',justifyContent:'center',borderRadius:5}} 
                onPress={()=>navigation.navigate("Home")}>
                    <Text style={{fontSize:18,alignSelf:'center',fontWeight:'500'}}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{height:40,width:'90%',backgroundColor:'#fff',marginTop:20,alignSelf:'center',justifyContent:'center',borderRadius:5}}
                onPress={()=>navigation.navigate("SignUp")}>
                
                    <Text style={{fontSize:18,alignSelf:'center',fontWeight:'500'}}>Register Now</Text>
                </TouchableOpacity>


            </View>

        </View>
        </>
    )
}

export default Login