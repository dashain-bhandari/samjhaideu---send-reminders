import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={{flexDirection:"row",alignItems:"center"}}>
      <View style={{backgroundColor:"#257180",paddingHorizontal:10,borderRadius:5}}><Text style={{color:"#fff",fontSize:28}}>स</Text></View>
      <Text style={{fontSize:20}}>मझाइदेउ</Text>
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({})