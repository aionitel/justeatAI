import { ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './components/nav/NavBar';
import { RecoilRoot } from 'recoil';

const App = () => {
  return (
    <RecoilRoot>
      <View style={{ flex: 1 }}>
        <NavBar />
      </View>
    </RecoilRoot>
  );
}

export default App