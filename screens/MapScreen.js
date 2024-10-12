import React from "react";
import { StyleSheet,Text,View } from "react-native";
import Map from "../components/Map";
import tw from "tailwind-react-native-classnames"
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";

import NavigatorCard from "../components/NavigatorCard";
import RideOptionsCar from "../components/RideOptionsCar";
const MapScreen = () => {
    const stack = createStackNavigator();

    return(
        <View>
    
            <View style = {tw`h-1/2`}>
            <Map/>
            </View>
            <View style={tw`h-1/2`}>

            <stack.Navigator>
             <stack.Screen
             name="NavigatorCard"
             component={NavigatorCard}
             options={{
                headerShown:false,
             }}/>
              <stack.Screen
             name="RideOptionsCar"
             component={RideOptionsCar}
             options={{
                headerShown:false,
             }}/>
            </stack.Navigator>
            </View>
        </View>
    );

};


export default MapScreen;

const styles = StyleSheet.create({});