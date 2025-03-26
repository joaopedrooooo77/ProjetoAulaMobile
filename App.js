import { StyleSheet, Text, View } from 'react-native';

import Home from './components/home';
import Login from './components/login';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
