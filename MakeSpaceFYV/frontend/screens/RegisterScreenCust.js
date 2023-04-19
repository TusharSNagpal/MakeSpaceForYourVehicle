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

const RegisterScreenCust = (props) => {
  const [loading, setLoading] = useState(false);

  const submitHandler = ( name, phone, address, vehicle, password, againPass) => {
    setLoading(true);
    if(againPass !== password){
        Alert.alert(
            'Password Mismatch',
            '',
            [
              {
                text: 'Try Again',
              },
            ],
            {
              cancelable: true,
            },
          );
        setLoading(false);
    }
    else if(name === '' || phone === '' || address === '' || vehicle === '' || password === ''){
        Alert.alert(
            'ALL FIELD ARE MANDATORY',
            '',
            [
              {
                text: 'Try Again',
              },
            ],
            {
              cancelable: true,
            },
          )
        setLoading(false);
    }
    else{
        const data = {
            name: name,
            phone: phone,
            address: address,
            vehicle: vehicle,
            password: password
        };
        const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        };
        fetch(`${variables.API_CUST_REGISTER}`, options).then((response) => {
            setLoading(false);
            console.log(response.status);
            if(response.status === 201){
                // setFail(false);
                Alert.alert(
                    'REGISTRATION SUCCESSFUL',
                    '',
                    [
                    {
                        text: 'LOGIN using these credentials',
                    },
                    ],
                    {
                    cancelable: true,
                    },
                )

                const redirect = () => {
                    navigation.goBack();
                }
                redirect();
            }
            else{
                Alert.alert(
                    'USER ALREADY EXISTS! Please Try With Another Phone Number',
                    '',
                    [
                    {
                        text: 'OK',
                    },
                    ],
                    {
                    cancelable: true,
                    },
                )
            }
        });
    }
  };

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
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    justifyContent: "center",
  },
});

export default RegisterScreenCust;
