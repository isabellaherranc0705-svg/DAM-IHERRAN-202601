import React, { useState } from "react";
import { AuthTemplate } from "../../components/templates";
import { RegisterForm } from "../../components/organisms";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../Routes";
import { AuthService } from "../../core/services";
import { User } from "../../core/entities";

const RegisterPage = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (userData: Omit<User, 'id'>) => {
        try {
            setLoading(true);
            await AuthService.register(userData as User);
            navigation.navigate('Login');
        } catch (error) {
            console.error('Error al registrar:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthTemplate title="REGISTER" subtitle="Create a new account">
            <RegisterForm onSubmit={handleRegister} disabledAction={loading} />
        </AuthTemplate>
    );
};

export default RegisterPage;