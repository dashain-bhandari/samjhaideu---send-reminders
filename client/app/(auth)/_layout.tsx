import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='onboarding' options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='select-language' options={{ headerShown: false }}></Stack.Screen>
      <Stack.Screen name='register' options={{ headerShown: false }}></Stack.Screen>
    </Stack>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})