import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { AuthStackParamList } from "./Routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LoginPage, RegisterPage } from "./screens";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    contentStyle: {
                        backgroundColor: "#fff"
                    }
                }}>
                    <Stack.Screen name="Login" component={(LoginPage)}></Stack.Screen>
                    <Stack.Screen name="Register" component={(RegisterPage)}></Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;