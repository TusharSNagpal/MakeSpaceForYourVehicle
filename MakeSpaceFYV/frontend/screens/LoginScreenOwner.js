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
} from "react-native";
import { useState, useRef } from "react";

//importing components:
import LoginInput from "../components/LoginInput";
import ProfileImage from "../components/ProfileImage";
import HeaderIn from "../components/HeaderIn";

import * as variables from "../allVariables.js";

const LoginScreenOwner = (props) => {
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
    fetch(`${variables.API_OWNER_LOGIN}`, options).then((response) => {
      setLoading(false);
      console.log(response.status);
      if(response.status === 200){
        setAuth(true);
        setFail(false);
        props.navigation.navigate("PARKING SLOTS")
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
      <Button title = 'REGISTER' onPress = {() => props.navigation.navigate("OWNER REGISTRATION")}/>
      <LoginInput onAuthReq={submitHandler}></LoginInput>
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
    justifyContent: "center",
  },
});

export default LoginScreenOwner;
