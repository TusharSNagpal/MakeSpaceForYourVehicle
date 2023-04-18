import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function HeaderIn() {
  return (
      <View style = {styles.headerStyle}>
          <Text style = {styles.textStyle}>MAKE SPACE FOR YOUR VEHICLE</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    top: 0,
    backgroundColor: '#3a2247',
    width: '100%',
    height: '8%',
    marginBottom: "5%",
  },
  textStyle: {
    paddingTop: '2%',
    fontSize: 23,
    textAlign: 'center',
    color: '#fcfcfc',
  },
  // image: {
  //   width: 24,
  //   height: 24,
  // },
})