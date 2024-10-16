// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,KeyboardAvoidingView, Platform } from 'react-native';
// import 'react-native-get-random-values';

// //TODOLISTSET UP REDUX
// //
// import {Provider} from "react-redux";
// import { store } from './store';
// import HomeScreen from './screens/HomeScreen';
// import MapScreen from './screens/MapScreen';
// import 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { NavigationContainer } from '@react-navigation/native';



// export default function App() {

//   const Stack = createStackNavigator(); // permets de faire les navigation swipe back sur mon android
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//       <SafeAreaProvider>
//         <KeyboardAvoidingView 
//         behavior={Platform.OS=="android" ? "padding" : "height"}
//         style = {{flex:1}}
//         keyboardVerticalOffset={Platform.OS ==="android" }
        
//         > 
//           {/* permets une meilleur utilisation clientele au niveau du clavier */}
//         <Stack.Navigator>
//          <Stack.Screen
//          name="HomeScreen"
//          component={HomeScreen} options={{
//           headerShown:false,

//          }}/>

//             <Stack.Screen
//          name="MapScreen"
//          component={MapScreen} options={{
//           headerShown:false,
          
//          }}/>
//         </Stack.Navigator>
//         </KeyboardAvoidingView>
        
      
//       </SafeAreaProvider>
//       </NavigationContainer>
      
      
//     </Provider>
    
//   );
// }


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import 'react-native-get-random-values';

// Setup Redux
import { Provider } from "react-redux";
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator(); // Permet la navigation swipe back sur Android

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "android" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "android" ? 0 : 0}
          >
            {/* Meilleure gestion du clavier pour l'utilisateur */}
            <Stack.Navigator>
              <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
