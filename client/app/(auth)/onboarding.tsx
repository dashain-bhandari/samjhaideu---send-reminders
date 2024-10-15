import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList } from 'react-native'
import OnboardingScreen from '@/components/onboarding/OnboardingScreen'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { data } from '@/utils/OnboardingData'


const Onboarding = () => {
    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler(event => {
        translateX.value = event.contentOffset.x;
    })

    const flatlistIndex=useSharedValue(0);
const flatlistRef=useRef(null);
const onViewableChanged=({viewableItems}:any)=>{
    flatlistIndex.value=viewableItems[0].index
}
    
    return (
        <View style={styles.container}>
            <Animated.FlatList
            ref={flatlistRef}
           onViewableItemsChanged={onViewableChanged}
                onScroll={scrollHandler}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal={true} data={data}
                renderItem={({ item, index }) => <OnboardingScreen data={item} translateX={translateX} index={index} 
flatlistIndex={flatlistIndex} flatlistRef={flatlistRef}
                ></OnboardingScreen>}></Animated.FlatList>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})