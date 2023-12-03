import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { Home } from "../src/Home"
import { Details } from "../src/Details"
import { DrawerNavigator } from "./Drawer"

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}
        initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            {/* <Stack.Screen name="Details" component={Details} /> */}
        </Stack.Navigator>
    )
}