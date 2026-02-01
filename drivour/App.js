import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RouteInputScreen from './src/screens/RouteInputScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#0A0F1E' },
        }}
      >
        <Stack.Screen name="RouteInput" component={RouteInputScreen} />
        {/* TODO: Add more screens - Discovery, RouteBuilder, Navigation, etc. */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
