// import React from "react";
// import { StyleSheet,Text,View,Image } from "react-native";
// import { FlatList, TouchableOpacity ,Pressable} from "react-native-web";
// import tw from "tailwind-react-native-classnames";
// import { Icon } from "react-native-elements";
// import { useNavigation } from "@react-navigation/native";
// const data = [
//     {
//         id: "123",
//         title:"Get a ride",
//         image:"https://links.papareact.com/3pn",
//         screen:"MapScreen"
//     },{
//     id: "456",
//         title:"Order food",
//         image:"https://links.papareact.com/28w",
//         screen:"EatScreen"
//     },

// ]
// const NavOptions = () =>{
//     const navigation = useNavigation();

//     return(
//        <FlatList
//        data = {data}
//        horizontal
//        keyExtractor={(item) => item.id}

//        renderItem={({item}) => (
//         <Pressable
//         onPress={() =>navigation.navigate(item.screen)}
//          style ={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`} >
//          <View>
//             <Image
//             style={{width:120,height:120,resizeMode:"contain"}}
//             source = {{uri:item.image}}

//             />
//             <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
//          </View>
//          <Icon
//          style = {tw `p-2 bg-black rounded-full w-10 mt-4`}
//          name ="arrowright" color="white" type="antdesign"/>
//         </Pressable>
//        )}/>
//     );
// };

// export default NavOptions
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native"; // Importation correcte de FlatList et Pressable
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { SelectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const  origin = useSelector(SelectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
        {/* rends les boutons invisible tant que l'on n'entre pas sa destination */}
          <View style ={tw`${!origin && "opacity-20"}`}> 
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
          </View>
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </Pressable>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
