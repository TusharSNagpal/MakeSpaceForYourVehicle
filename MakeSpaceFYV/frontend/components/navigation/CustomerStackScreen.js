import { useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreenCust from "../../screens/LoginScreenCust";
import RegisterScreenCust from "../../screens/RegisterScreenCust";
import CustomerScreen from "../../screens/CustomerScreen";

const CustomerStack = createNativeStackNavigator();

//importing components:

export default function CustomerStackScreen() {
  return (
    <CustomerStack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <CustomerStack.Screen name="CUSTOMER LOGIN" component={LoginScreenCust} />
      <CustomerStack.Screen
        name="CUSTOMER REGISTRATION"
        component={RegisterScreenCust}
      />
      <CustomerStack.Screen
        name="FIND PARKING SLOT"
        component={CustomerScreen}
      />
    </CustomerStack.Navigator>
  );
}
