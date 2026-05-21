import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStackParamList } from './Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginPage, RegisterPage, DashboardPage, RegisterProductPage } from './screens';
import { setupDatabase } from './core/config';

setupDatabase();

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false,
                        contentStyle: { backgroundColor: '#fff' },
                    }}
                >
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="Register" component={RegisterPage} />
                    <Stack.Screen name="Dashboard" component={DashboardPage} />
                    <Stack.Screen name="RegisterProduct" component={RegisterProductPage} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;