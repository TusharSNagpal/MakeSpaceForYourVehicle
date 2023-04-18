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

const CustomerScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);
  const [fail, setFail] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderIn />
      <Text>Welcome, {props.cust_name}!</Text>
      <ProfileImage></ProfileImage>
      {loading?
        <ActivityIndicator size="large" color="#0000ff" />
      :null}
      <Text>Don't have an account?</Text>
      <Button title = 'REGISTER' onPress = {() => props.navigation.navigate("CUSTOMER REGISTRATION")}/>
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

export default CustomerScreen;
