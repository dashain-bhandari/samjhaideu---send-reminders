import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const TabLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='home' options={{ headerShown: false }}></Stack.Screen>
        </Stack>
    )
}

export default TabLayout

const styles = StyleSheet.create({})