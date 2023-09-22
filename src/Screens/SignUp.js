import { View, Text, Image, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Clipboard from 'expo-clipboard';
import * as ImagePicker from 'expo-image-picker';

const SignUp = ({navigation}) => {
    const [image, setImage] = useState(null);

    const [hidepass, sethidepass] = useState(true);
    const [copiedText, setCopiedText] = useState('7689026961@yble');

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(copiedText);

        ToastAndroid.show(copiedText, ToastAndroid.SHORT);

    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };
    

    useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access media library denied');
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [10, 20],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };


    return (
        <View style={{ flex: 1, backgroundColor: '#B0B0B0', justifyContent: 'center' }}>

            <View style={{ height: 500, width: '90%', backgroundColor: '#097969', alignSelf: 'center', borderRadius: 15 }}>

                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={{ alignSelf: 'center', fontSize: 30, color: '#fff', fontWeight: '900', marginLeft: 80 }}>LOTUS</Text>
                    <Text style={{ alignSelf: 'center', fontSize: 30, color: 'yellow', fontWeight: '900' }}>365</Text>

                    <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: '#000', justifyContent: 'center', borderRadius: 100, marginTop: 7, marginLeft: 45 }}
                    onPress={()=>navigation.goBack()}>
                        <Image source={require('../images/cross1.png')} style={{ height: 15, width: 15, alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500', marginTop: 20, marginLeft: 17 }}>Sign Up</Text>

                <TextInput placeholder='Phone Number' placeholderTextColor={"#fff"}
                    style={{ marginLeft: 40, marginTop: 30, fontSize: 20, color: '#fff' }} />

                <View style={{ borderBottomWidth: 1, borderColor: 'yellow', marginHorizontal: 30, marginTop: 10 }}></View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput placeholder='Password' placeholderTextColor={"#fff"}
                        secureTextEntry={hidepass ? true : false}
                        style={{ marginLeft: 40, marginTop: 30, fontSize: 20, color: '#fff' }} />
                    <TouchableOpacity onPress={() => sethidepass(!hidepass)}>
                        <Image source={require('../images/eye2-removebg-preview.png')} style={{ height: 26, marginTop: 30, width: 30, alignSelf: 'center', marginRight: 40 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ borderBottomWidth: 1, borderColor: 'yellow', marginHorizontal: 30, marginTop: 10 }}></View>

                <View>

                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', borderRadius: 2,
                    marginTop: 30, marginHorizontal: 20, borderColor: '#fff', paddingHorizontal: 10, width: '89%', height: 55, borderWidth: 1, borderColor: 'yellow'
                }}>

                    <View style={{ justifyContent: 'center', flex: 0.77, marginRight: 2 }}>
                        <Text style={{ fontWeight: '600', fontSize: 16, alignSelf: 'center', color: '#fff' }}>
                            {copiedText}
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            width: 70, height: 30, borderRadius: 5, flexDirection: 'row', backgroundColor: '#fff', alignSelf: 'center', flex: 0.23,

                        }}
                        onPress={copyToClipboard}
                    >
                        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 15, marginLeft: 7 }}>Copy</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={require('../images/prime_copy.png')} style={{ height: 20, width: 20, marginRight: 5 }} />
                        </View>
                    </TouchableOpacity>


                </View>


                <TouchableOpacity style={{ height: 40, width: '90%', backgroundColor: '#fff', marginTop: 40, alignSelf: 'center', justifyContent: 'center', borderRadius: 5 }}
                    onPress={pickImage}>
                    {/* {image && <Image source={{ uri: image }} style={{ width: 50, height: 50 }} />} */}
                    

                
   
                    <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: '500' }}> {image === null ?"Upload Screenshot":<View style={{justifyContent:'space-between',flexDirection:'row'}}><Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: '500' }}>Uploaded</Text><Image source={require('../images/check011.webp')} style={{height:25,width:25}}/></View>}</Text>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{ height: 40, width: '90%', backgroundColor: '#fff', marginTop: 20, alignSelf: 'center', justifyContent: 'center', borderRadius: 5 }}
                onPress={()=>navigation.navigate("Home")}>
                    <Text style={{ fontSize: 18, alignSelf: 'center', fontWeight: '500' }}>Register Now</Text>
                </TouchableOpacity>

                





            </View>

        </View>
    )
}

export default SignUp