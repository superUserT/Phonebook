import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateContactScreen from './components/CreateContactScreen';
import ReadContactsScreen from './components/ReadContactsScreen';
import UpdateDeleteContactScreen from './components/UpdateDeleteContactScreen';
import HomeScreen from './components/HomeScreen';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ReadContacts" component={ReadContactsScreen} />
        <Stack.Screen name="CreateContact" component={CreateContactScreen} />
        <Stack.Screen name="UpdateDeleteContact" component={UpdateDeleteContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// need to test on android and web