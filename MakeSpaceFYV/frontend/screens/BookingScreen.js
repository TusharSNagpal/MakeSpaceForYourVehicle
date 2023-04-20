import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import MapView from 'react-native-maps';

//importing components:
import * as variables from "../allVariables";
import { Card, ListItem, Icon } from 'react-native-elements'

const BookingScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [profileDetails, setProfileDetails] = useState(props.route.params.userData);
  const [fail, setFail] = useState(false);
  const [slot, setSlot] = useState(props.route.params.slotDetails);
//   const userId = props.route.params.phone;

  return (
    <View style={styles.container}>
      {/* <HeaderIn /> */}
      <Text style={styles.textStyle}>Welcome, {profileDetails?.name}!</Text>
      {/* <MapView style={styles.map} /> */}
      <View style = {styles.subContainer}>

      <Card title="CARD WITH DIVIDER">
        <Text style={[styles.textProp,{fontWeight: 'bold'}]}>Parking Address: {slot.prop_address}</Text>
        <Text style={[styles.textProp,{fontWeight: 'bold'}]}>Confirm Details:</Text>
        <Text style={styles.textProp}>Vehicle Number: {profileDetails.vehicle}</Text>
        <Text style={styles.textProp}>Phone Number: {profileDetails.phone}</Text>

        {/* <View style={styles.slotStyle}> */}
        {/* </View> */}
      </Card>
      </View>
      <Text style={styles.textProp}>Hurry Up! You may loose your slot..!</Text>
      <TouchableOpacity activeOpacity = {0.5} style = {styles.buttonStyle}><Text style = {{color: '#fcfcfc'}}>PAY $100</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: "30%",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  subContainer: {
    marginTop: '15%',
    marginBottom: '14%',
    // flexDirection: "row",
    justifyContent: "center",
    // alignItems: "center",
    // justifyContent: "center",
  },
  slotStyle:{
    // flexDirection: "row",
    // justifyContent: "space-evenly",
  },
  textStyle: {
    fontSize: 25,
    backgroundColor: '#1988da',
    fontWeight: 'bold',
  },
  textProp: {
    textAlign: 'center',
    fontSize: 18,
    // backgroundColor: '#1988da',
    // fontWeight: 'bold',
    margin: '4%',
  },
  buttonStyle: {
      width: '60%',
      alignSelf: 'center',
      alignItems: 'center',
    //   justifyContent: 'center',
      paddingVertical: 12,
    //   paddingHorizontal: 32,
      borderRadius: 20,
      overflow: 'hidden',
      elevation: 3,
      textAlign: 'center',
      backgroundColor: '#1988da',
      color: 'white',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default BookingScreen;