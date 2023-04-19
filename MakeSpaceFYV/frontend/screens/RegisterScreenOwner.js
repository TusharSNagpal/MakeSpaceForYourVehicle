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
import RegisterInput from "../components/RegisterInput";
import ProfileImage from "../components/ProfileImage";
import HeaderIn from "../components/HeaderIn";

import * as variables from "../allVariables.js";

const RegisterScreenOwner = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      {/* <HeaderIn /> */}
      <RegisterInput onRegister={submitHandler}></RegisterInput>
      {loading?
        <ActivityIndicator size="small" color="#0000ff" />
      :null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  subContainer: {
    justifyContent: "center",
  },
});

export default RegisterScreenOwner;