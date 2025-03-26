// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from './components/home';
import Login from './components/login';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {

const Bottom = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Bottom.Navigator
      initialRouteName = 'Login'
      screenOptions={{
        tabBarActiveBackgroundColor: '#aaff00',
        tabBarActiveTintColor: '#0022ff',
        tabBarInactiveBackgroundColor: '#ff0044',
        tabBarInactiveTintColor: '#00ffe1',
        headerStyle:{backgroundColor:'#00ffe1'},
        headerTintColor:'#0022ff',
      }} 
      >
        
        <Bottom.Screen name='Home' component={Home}
        options={{
          tabBarIcon: () => (
          <MaterialIcons name="add-home" size={40} color="black" />
          ),
        }}
        />
        <Bottom.Screen name='Login' component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="login" size={40} color="black" />
          ),
        }}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
}

