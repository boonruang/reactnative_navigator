import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
