import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import CarLogo from './CarLogo'

export default function HeaderIn() {
  return (
      <View style = {styles.headerStyle}>
          <Text style = {styles.textStyle}>MAKE SPACE FOR YOUR VEHICLE</Text>
          <CarLogo />
      </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    // top: getStatusBarHeight(),
    backgroundColor: '#1988da',
    width: 400,
    height: '18%',
    marginBottom: "5%",
  },
  textStyle: {
    paddingTop: '13%',
    fontSize: 20,
    textAlign: 'center',
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
  // image: {
  //   width: 24,
  //   height: 24,
  // },
})