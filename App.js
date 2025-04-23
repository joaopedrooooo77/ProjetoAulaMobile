// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



import Home from './screens/home';
import Login from './screens/login';
import Feed from './screens/feed';
import Counter from './screens/counter';


function BottomTabs () {

  const Bottom = createBottomTabNavigator();

    return (

      <Bottom.Navigator

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
          <MaterialIcons name="home" size={40} color="black" />
          ),
        }}
        />

        <Bottom.Screen name='Feed' component={Feed}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={40} color="black" />
          ),
        }}
        />

        <Bottom.Screen name='Counter' component={Counter}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="counter" size={40} color="black" />
          ),
        }}
        />
      
      </Bottom.Navigator>

  );
}

export default function App() {

  const Stack = createStackNavigator();

  return(

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name = 'login ' component = {Login}/>
        <Stack.Screen options = {{headerShown:false}} name = 'HomeTab' component= {BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

