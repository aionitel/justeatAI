import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-end'}}>
      <NavBar />
    </View>
  );
}

export default App