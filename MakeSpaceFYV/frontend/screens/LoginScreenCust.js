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
import { useState, useRef } from "react";

//importing components:
import LoginInput from "../components/LoginInput";
import ProfileImage from "../components/ProfileImage";
import HeaderIn from "../components/HeaderIn";

import * as variables from "../allVariables.js";

const LoginScreenCust = (props) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [fail, setFail] = useState(false);
  const [id, setId] = useState('');

  const submitHandler = (userId, password) => {
    setAuth(false);
    setId(userId);
    setLoading(true);
    console.log(userId);
    console.log(password);
    const data = {
      phone: userId,
      password: password
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(`${variables.API_CUST_LOGIN}`, options).then((response) => {
      setLoading(false);
      console.log(response.status);
      if(response.status === 200){
        props.navigation.navigate("FIND PARKING SLOT", {phone : {id}});
        setAuth(true);
        setFail(false);
      }
      else{
        setAuth(false);
        Alert.alert(
          'Incorrect Phone Number/Password',
          '',
          [
            {
              text: 'Try Again',
            },
          ],
          {
            cancelable: true,
            onDismiss: () => setFail(true)
          },
        )
      }
    });
  };

  return (
    <View style={styles.container}>
      {/* <HeaderIn /> */}
      <ProfileImage></ProfileImage>
      {loading?
        <ActivityIndicator size="large" color="#0000ff" />
      :null}
      <Text>Don't have an account?</Text>
      <TouchableOpacity title = 'REGISTER' onPress = {() => props.navigation.navigate("CUSTOMER REGISTRATION")} ><Text style = {styles.textStyle}>REGISTER</Text></TouchableOpacity>
      <Text></Text>
      <LoginInput onAuthReq={submitHandler}></LoginInput>
      {/* {auth ? props.navigation.navigate("FIND PARKING SLOT", id):null} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: "30%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    // flexDirection: "row",
    // justifyContent: "center",
  },
  textStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    textAlign: 'center',
    backgroundColor: '#1988da',
    color: 'white',
    marginTop: 20,
  }
});

export default LoginScreenCust;
