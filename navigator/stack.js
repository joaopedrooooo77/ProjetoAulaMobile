// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/home';
import Login from './components/login';



export default function App() {
const BottomTab = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
