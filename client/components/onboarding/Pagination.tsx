import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { data } from '@/utils/OnboardingData'

const Pagination = ({ translateX }: any) => {
    const { width } = Dimensions.get("screen")
    const Page = ({ translateX, index }: any) => {
        const animatedStyle = useAnimatedStyle(() => {

            return {
                width: interpolate(translateX.value, [(index - 1) * width, index * width, (index + 1) * width], [10, 30, 10], Extrapolation.CLAMP)
            }
        })
        return (
            <Animated.View style={[animatedStyle, { height: 10, backgroundColor: "#3A6D8C", borderRadius: 20 }]}>
            </Animated.View>
        )
    }
    return (
        <View style={{ flexDirection: "row", gap: 10,}}>
            {
                data?.map((item: any, index: any) => (<Page key={index} translateX={translateX} index={index} />))
            }
        </View>
    )
}

export default Pagination

const styles = StyleSheet.create({})