import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SliderBox } from 'react-native-image-slider-box'


const Home = () => {


    

    const Img = [
        require('../images/l1.webp'),
        require('../images/l2.png'),
        require('../images/l3.jpg'),
        require('../images/l4.webp'),
        require('../images/l5.webp'),
        require('../images/l6.jpg')

    ]

    return (
        <View style={{ flex: 1, backgroundColor: '#B0B0B0' }}>
            <View style={{ height: 100, width: '100%', backgroundColor: '#097969' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginTop: 40 }}>
                    <Image source={require('../images/Vector78.png')} style={{ height: 22, width: 22, marginTop: 10 }} />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 30, color: '#fff', fontWeight: '900' }}>LOTUS</Text>
                        <Text style={{ fontSize: 30, color: 'yellow', fontWeight: '900' }}>365</Text>
                    </View>

                    <Image source={require('../images/Group12.png')} style={{ height: 25, width: 25, marginTop: 10 }} />
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10, borderRadius: 10, height: 200 }}>

                <SliderBox images={Img}
                    sliderBoxHeight={178}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    autoplay
                    circleLoop
                />

            </View>

            <View style={{ width: '100%', height: '65%', backgroundColor: '#B0B0B0' }}>
                <View style={{ width: '100%', height: 40, backgroundColor: 'green', justifyContent: 'flex-start', flexDirection: 'row', marginTop: 10, }}>
                    <Image source={require('../images/play-removebg-preview.png')} style={{ height: 20, width: 20, marginTop: 9, marginLeft: 20 }} />
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 18, marginTop: 7, marginLeft: 10 }}>In Play</Text>

                </View>
                <ScrollView>
                    <Image source={require('../images/scree.png')} style={{ height: 120, width: '100%', resizeMode: "stretch" }} />
                    <Image source={require('../images/Screensh.png')} style={{ height: 500, width: '100%', resizeMode: "stretch" }} />
                    <Image source={require('../images/Screensh.png')} style={{ height: 500, width: '100%', resizeMode: "stretch" }} />
                </ScrollView>

            </View>

        </View>
    )
}

export default Home