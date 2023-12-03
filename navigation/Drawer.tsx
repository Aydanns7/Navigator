import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Details } from "../src/Details"
import { Home } from "../src/Home"

const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}} initialRouteName="Details">
            <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
    )
}