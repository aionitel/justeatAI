import { ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/nav/NavBar';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
    </View>
  );
}

export default App