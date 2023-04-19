import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import CarLogo from './CarLogo'
import { Dimensions } from "react-native";
var width = Dimensions.get('window').width; //full width

export default function HeaderIn() {
  return (
      <View style = {styles.headerStyle}>
        <View>
          <Text style = {[styles.textStyle,  {paddingTop: '14%'}]}>MAKE SPACE</Text>
          <Text style = {styles.textStyle}>FOR YOUR VEHICLE</Text>
        </View>
        <CarLogo/>
      </View>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    // top: getStatusBarHeight(),
    backgroundColor: '#1988da',
    width: width,
    height: '15%',
    // marginBottom: "5%",
    flexDirection: "row",
  },
  textStyle: {
    // paddingTop: '13%',
    fontSize: 23,
    // textAlign: 'center',
    color: '#fcfcfc',
    fontWeight: 'bold',
    // fontFamily: 'Inter',
  },
  // image: {
  //   width: 24,
  //   height: 24,
  // },
})