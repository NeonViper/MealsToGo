import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Restaurants: "restaurant",
    Map: "map",
    Settings: "settings",
};

function SettingsScreen() {
    return (
        <SafeArea>
            <Text>Settings!</Text>
        </SafeArea>
    );
}

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
    };
};

export const AppNavigator = () => {
    return (
        <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
};
