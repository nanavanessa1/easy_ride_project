// import React from "react";
// import { StyleSheet,Text,View } from "react-native";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { SafeAreaView } from "react-native-safe-area-context";
// import tw from "tailwind-react-native-classnames";
// import { setDestination } from "../slices/navSlice";
// import {GOOGLE_MAPS_APIKEY} from "@env";
// import { TextInput } from "react-native-gesture-handler";
// import { useDispatch } from "react-redux";
// import { useNavigation } from "@react-navigation/native";


// const NavigatorCard = () =>{
//     const dispatch = useDispatch();
//     const navigation = useNavigation();
//     return(
//         <SafeAreaView style={tw`bg-white flex-1`}>
//             <Text style={tw`text-center py-5 text-xl`}>
//              Welcome!!!
//             </Text>
//             <View style={tw`border-t border-gray-200 flex-shrink`}>
//                 <View>
//                 <GooglePlacesAutocomplete 
//                 placeholder="Where to?"
//                 styles={toInputBoxStyles}
//                 fetchDetails={true}
//                 returnKeyType={"search"}
//                 minLength={2}
//                 onPress={(data,details = null) =>{
//                     dispatch(setDestination({
//                         location:details.geometry.location,
//                         description: data.description,
//                     })
//                 };
//                     // navigation.navigate('RideOptionsCard')
                    
//                 }}
//                 enablePoweredByContainer={false}
//                 query={{
//                     key: GOOGLE_MAPS_APIKEY,
//                     language: "en"
//                 }
                
//                 }
//                 nearbyPlacesAPI="GooglePlaceSearch"
//                 debounce={400}
//                 />   
//                 </View>
//             </View>
//        </SafeAreaView>
//     )
// }
// export  default NavigatorCard

// const toInputBoxStyles = StyleSheet.create({
//     container:{
//         backgroundColor: "white",
//         paddingTop:20,
//         flex:0,
//     },
//     TextInput:{
//         backgroundColor: "#DDDDDf",
//         paddingTop:20,
//         fontSize:10,  
//     },
//     TextInput:{
      
//         paddingHorizontal:20,
//         paddingBottom:0, 
//     },

// });

// const styles = StyleSheet.create({})
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import { setDestination } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import NavFavourites from "./NavFavourites";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const NavigatorCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>
                Welcome!!!
            </Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}>
                <GooglePlacesAutocomplete 
                    placeholder="Where to?"
                    styles={toInputBoxStyles}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    minLength={2}
                    onPress={(data, details = null) => {
                        dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        }));
                        navigation.navigate("RideOptionsCar");
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: "en"
                    }}
                    nearbyPlacesAPI="GooglePlaceSearch"
                    debounce={400}
                />
                <NavFavourites />
            </View>
            <View style={tw`flex-row bg-white py-2 mt-auto border-t border-gray-100`}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("RideOptionsCar")}
                    style={tw`flex flex-row justify-between items-center w-24 px-4 py-3 rounded-full bg-gray-200 shadow-md`}
                >
                    <Icon name="car" type="font-awesome" color="black" size={16} />
                    <Text style={tw`text-black ml-2`}>Rides</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default NavigatorCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {  // Correction ici
        backgroundColor: "#DDDDDf",
        paddingTop: 20,
        fontSize: 10,
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});
