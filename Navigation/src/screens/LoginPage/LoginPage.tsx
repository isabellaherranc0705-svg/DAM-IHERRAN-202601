import React, { useState } from "react";
import { Alert } from "react-native";
import { AuthTemplate } from "../../components/templates";
import { LoginForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import { AuthService } from "../../core/services";

const LoginPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (username: string, password: string) => {
        try {
            setLoading(true);

            await AuthService.login(username, password);

            navigation.navigate("Dashboard");
        } catch (error: any) {
            Alert.alert(
                "Error al iniciar sesión",
                error?.message || "Usuario o contraseña incorrectos"
            );
            console.error("Error al iniciar sesión:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthTemplate title="LOGIN" subtitle="Welcome back">
            <LoginForm
                onSubmit={handleLogin}
                onRegister={() => navigation.navigate("Register")}
            />
        </AuthTemplate>
    );
};

export default LoginPage;