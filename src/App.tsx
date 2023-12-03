import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { DrawerNavigator } from "../navigation/Drawer"
import { StackNavigator } from "../navigation/Stack"

export default function App() {
    return(
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    )
}

