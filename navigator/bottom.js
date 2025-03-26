// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/home';
import Login from './components/login';



export default function Bottom() {
const Bottom = createBottomTabNavigator();


  return (
    <NavigationContainer>
      <Bottom.Navigator>
        <Bottom.Screen name='Login' component={Login}/>
        <Bottom.Screen name='Home' component={Home}/>
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

