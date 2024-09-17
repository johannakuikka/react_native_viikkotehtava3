import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CustomNavigationBar from './components/CustomNavigationBar';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="MD Nav Demo"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}>
        <Stack.Screen name="MD Nav Demo" component={HomeScreen} />
        <Stack.Screen 
          name="Second" 
          component={SecondScreen}
          options={{ headerTitle: 'MD Nav Demo' }} // Asetetaan haluttu teksti yläpalkkiin
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
