import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { data } from '@/utils/OnboardingData'
import { router } from 'expo-router'

const CustomizedButton = ({ flatlistIndex, flatlistRef }: any) => {
    return (
        <View style={{ flexDirection: "row", gap: 20,marginBottom:20}}>
            <TouchableOpacity style={{ borderWidth: 1, borderColor: "#333", borderRadius: 20, paddingHorizontal: 28, paddingVertical: 10,flexGrow:1 }} onPress={() => {
                router.push("/(auth)/register");
            }}>
                <Text style={{textAlign:"center"}}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: "#333", borderRadius: 20, paddingHorizontal: 28, paddingVertical: 10,flexGrow:1 }}
                onPress={() => {
                    if (flatlistIndex.value != data.length - 1) {
                        flatlistRef.current.scrollToIndex({
                            index: flatlistIndex.value + 1
                        })
                    }
                    else {
                        router.push("/(auth)/register");
                    }
                }}
            >
                <Text style={{ color: "#fff",textAlign:"center" }}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomizedButton

const styles = StyleSheet.create({})