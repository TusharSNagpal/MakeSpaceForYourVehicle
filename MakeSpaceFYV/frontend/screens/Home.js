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
import HeaderIn from "../components/HeaderIn";

import * as variables from "../allVariables.js";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomerStackScreen from "../components/navigation/CustomerStackScreen";
import OwnerStackScreen from "../components/navigation/OwnerStackScreen";
import CustomerLogo from "../components/CustomerLogo";
import OwnerLogo from "../components/OwnerLogo";

const Home = (props) => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <HeaderIn />
      <NavigationContainer >
        <Tab.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Tab.Screen name="CUSTOMER" component={CustomerStackScreen} options={{
          tabBarIcon: ({ color }) => (
            <CustomerLogo></CustomerLogo>
         ), 
         tabBarLabel: 'CUSTOMER'             
        }}/>
          <Tab.Screen name="OWNER" component={OwnerStackScreen} options={{
          tabBarIcon: ({ color }) => (
            <OwnerLogo></OwnerLogo>
         ), 
         tabBarLabel: 'OWNER'             
        }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
