import React from "react";

import { View, Text, StyleSheet, TextInput, Button, ScrollView } from "react-native";
import { useState, useRef } from "react";

const RegisterInput = (props) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [password, setPassword] = useState('');
  const [againPass, setAgainPass] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };
  const handlePhoneChange = (text) => {
    setPhone(text);
  }
  const handleAddressChange = (text) => {
    setAddress(text);
  };
  const handleVehicleChange = (text) => {
    setVehicle(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleAgainPassChange = (text) => {
    setAgainPass(text);
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.inputText}
        placeholder="ENTER FULL NAME"
        onChangeText={handleNameChange}
        value={name}
      />
      <TextInput
        style={styles.inputText}
        placeholder="ENTER ADDRESS"
        onChangeText={handleAddressChange}
        value={address}
      />
      <TextInput
        style={styles.inputText}
        placeholder="ENTER PHONE NUMBER"
        onChangeText={handlePhoneChange}
        value={phone}
      />
      <TextInput
        style={styles.inputText}
        placeholder="ENTER VEHICLE REGISTRATION NUMBER"
        onChangeText={handleVehicleChange}
        value={vehicle}
      />
      <TextInput
        style={styles.inputText}
        placeholder="PASSWORD"
        secureTextEntry={true}  
        onChangeText={handlePasswordChange}
        value={password}
      />
      <TextInput
        style={styles.inputText}
        placeholder="PASSWORD"
        secureTextEntry={true}  
        onChangeText={handleAgainPassChange}
        value={againPass}
      />
      <Button title="REGISTER" onPress={props.onRegister.bind(this, name, phone, address, vehicle, password, againPass)} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputText: {
    margin: '5%',
    borderColor: "black",
    borderWidth: 1,
    padding: 18,
    width: '80%',
  },
});

export default RegisterInput;
