import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '@/components/Logo'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';
const { height, width } = Dimensions.get("screen")
import Animated from 'react-native-reanimated';
import { router } from 'expo-router';
const SelectLanguage = () => {

    const [selectedLang, setSelectedLang] = useState("");
    const translate = useSharedValue(0);
    const opacity = useSharedValue(0)
    const animatedButtonStyle = useAnimatedStyle(() => {
        return {

            opacity: opacity.value,

        }
    });

    const animatedDivStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: translate.value
            }]
        }
    })
    useEffect(() => {
        if (selectedLang == "en-NP" || selectedLang == "np-NP") {

            opacity.value = withTiming(1, { duration: 300 })
            translate.value = withTiming(-20, { duration: 300 })
        }
        else {
            translate.value = withTiming(0, { duration: 100 })
            opacity.value = withTiming(0)
        }
    }, [selectedLang])

    return (
        <SafeAreaView style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 }}>
            <Logo />
            <Animated.View style={[animatedDivStyle, styles.languageContainer]}>
                <Text style={{ fontSize: 24 }}>Select language</Text>
                <View style={styles.languageNameContainer}>
                    <Pressable style={styles.individualLangContainer} onPress={() => setSelectedLang("en-NP")}>
                        <Text>English</Text>
                        {
                            selectedLang == "en-NP" && (
                                <AntDesign name="checkcircle" size={24} color="#257180" />

                            )
                        }
                    </Pressable>
                    <Pressable style={[styles.individualLangContainer,{borderBottomWidth:0}]} onPress={() => setSelectedLang("np-NP")}>
                        <Text>Nepali</Text>
                        {
                            selectedLang == "np-NP" && (
                                <AntDesign name="checkcircle" size={24} color="#257180" />

                            )
                        }
                    </Pressable>
                </View>



            </Animated.View>
            <Animated.View

                style={[animatedButtonStyle, { flexDirection: "row", alignItems: "center", },]}>
                <TouchableOpacity
                onPress={()=>router.replace("/(auth)/onboarding")}
                    activeOpacity={0.5}
                    style={{ backgroundColor: "#257180", padding: 10, borderRadius: 10, paddingHorizontal: 20, flexGrow: 1, }}><Text style={{ color: "#fff", textAlign: "center" }}>Next</Text></TouchableOpacity>
            </Animated.View>

        </SafeAreaView>
    )
}

export default SelectLanguage

const styles = StyleSheet.create({
    welcomeText: { textAlign: "center", fontSize: 28, fontWeight: 800, color: "#333" },
    languageContainer: { marginTop: 40, alignItems: "center", width: "100%", justifyContent: "center", position: "relative", zIndex: 100, },
    languageNameContainer: { borderWidth: 1, borderColor: "#ccc", width: "100%", borderRadius: 10, marginTop: 20, },
    individualLangContainer: { borderBottomColor: "#ccc", borderBottomWidth: 1, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 50 }
})