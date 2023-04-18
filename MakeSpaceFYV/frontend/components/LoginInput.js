import React from "react";

import { View, Text, StyleSheet, TextInput, Button, ScrollView } from "react-native";
import { useState, useRef } from "react";

const LoginInput = (props) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleUserIdChange = (text) => {
    setUserId(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <ScrollView>
      <TextInput
        style={styles.inputText}
        placeholder="USER ID / PHONE NUMBER"
        onChangeText={handleUserIdChange}
        value={userId}
      />
      <TextInput
        style={styles.inputText}
        placeholder="PASSWORD"
        secureTextEntry={true}  
        onChangeText={handlePasswordChange}
        value={password}
      />
    
      <Button title="LOGIN" onPress={props.onAuthReq.bind(this, userId, password)} />
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputText: {
    margin: '5%',
    borderColor: "black",
    borderWidth: 1,
    padding: 18,
    width: '90%',
  },
});

export default LoginInput;
