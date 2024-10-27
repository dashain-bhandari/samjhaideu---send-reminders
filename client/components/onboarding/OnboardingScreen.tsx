import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pagination from './Pagination';
import { useSharedValue } from 'react-native-reanimated';
import CustomizedButton from './CustomizedButton';

const { width, height } = Dimensions.get("screen");

const OnboardingScreen = ({ data, index,translateX ,flatlistIndex,flatlistRef}: any) => {
 console.log(translateX.value);
    return (
        <View style={{ ...styles.container, backgroundColor: data.color }} key={index}>
            <View style={styles.flexContainer} >
                <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <View style={{ width: 300, height: 300, marginTop:20,marginBottom:5 }}>
                    <Image resizeMode='contain' source={data.image} style={{ width: "100%", height: "100%" }}></Image>
                </View>
                <View style={{marginBottom:20}}>
                    <Text style={{ textAlign: "center", color: "#111", fontWeight: "600", fontSize: 22, marginBottom: 5 }}>
                        {data?.title}
                    </Text>
                    <View style={{ width: 0.7 * width }}>
                        <Text style={{ textAlign: "center", color: "#333", fontWeight: "400" }}>
                            {data?.message}
                        </Text>
                    </View>
                </View>
                <Pagination translateX={translateX} />
                </View>
             {/* <CustomizedButton  flatlistIndex={flatlistIndex} flatlistRef={flatlistRef} /> */}
            </View>
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    //   height:0.8*height,
    flexGrow:1,
        justifyContent: "center",
        alignItems: "center",
        width: width,
        paddingHorizontal: 16

    },
    flexContainer: {
        flex:1,
       
        flexDirection:"column",
       
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})