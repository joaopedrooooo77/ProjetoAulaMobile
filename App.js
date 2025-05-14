import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './screens/home';
import Login from './screens/login';
import Feed from './screens/feed';
import Counter from './screens/counter';
import Produtos from './screens/produtos';
import Register from './screens/register';
import cadastroproduto from './screens/cadastroproduto';

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

        <BottomTabs.Screen name = 'produtos' component= {Produtos}
                options={{
                  tabBarIcon: () => (
                  <MaterialIcons name="produtos" size={40} color="black" />
                  ),
                }}
                />
                
        <Bottom.Screen name='home' component={Home}
        options={{
          tabBarIcon: () => (
          <MaterialIcons name="home" size={40} color="black" />
          ),
        }}
        />

        <Bottom.Screen name='feed' component={Feed}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name="feed" size={40} color="black" />
          ),
        }}
        />

        <Bottom.Screen name='counter' component={Counter}
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

        <Stack.Screen name = 'login' component = {Login}/>
        <Stack.Screen options = {{headerShown:false}} name = 'HomeTab' component= {BottomTabs}/>
        <Stack.Screen name = 'cadastro' component = {Register}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

