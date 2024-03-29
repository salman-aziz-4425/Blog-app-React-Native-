import { AppRegistry, Platform } from 'react-native';
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './screens/Details'
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
  <Stack.Screen name="Details" component={Details} options={{ headerShown: false }}/>
  </Stack.Navigator>
  
</NavigationContainer>
  );
}