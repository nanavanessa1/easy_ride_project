import React from "react";
import { StyleSheet,Text } from "react-native";
import { FlatList, View } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Code Street, London, UK",
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "London, UK",
    },
];

const NavFavourites = () => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={[tw`bg-gray-200`, { height: 0.5 }]}
                />
            )}
            renderItem={({ item: { location, destination, icon } }) => {
                return ( 
                    <TouchableOpacity style={tw`flex-row items-center p-5`}>
                        <Icon
                            style={tw`mr-4 rounded-full bg-gray-200 p-2`}
                            name={icon}
                            type="ionicon"
                            color="white"
                            size={18}
                        />
                        <View>
                            <Text style={tw`mr-2 rounded-full`}>
                                {location}
                            </Text>
                            <Text style={tw`text-gray-500`}>
                                {destination}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            }}
        />
    );
};

export default NavFavourites;

const styles = StyleSheet.create({});
