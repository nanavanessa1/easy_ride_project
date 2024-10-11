import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-get-random-values';

//TODOLISTSET UP REDUX
//
import {Provider} from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const Stack = createStackNavigator(); // permets de faire les navigation swipe back sur mon android
  return (
    <Provider store={store}>
      <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
         <Stack.Screen
         name="HomeScreen"
         component={HomeScreen} options={{
          headerShown:false,

         }}/>

            <Stack.Screen
         name="MapScreen"
         component={MapScreen} options={{
          headerShown:false,
          
         }}/>
        </Stack.Navigator>
      
      </SafeAreaProvider>
      </NavigationContainer>
      
      
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
