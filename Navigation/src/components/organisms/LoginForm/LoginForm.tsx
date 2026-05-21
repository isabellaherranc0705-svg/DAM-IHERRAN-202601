import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button } from "../../atoms";
import { FormField } from "../../molecules";
import styles from "./LoginFormStyles";

interface LoginFormProps {
    onSubmit: (username: string, password: string) => void;
    onForgotPassword?: () => void;
    onRegister?: () => void;
}

const LoginForm = ({ onSubmit, onForgotPassword, onRegister }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <FormField
                label="Username"
                placeholder="johndoe"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormField
                label="Password"
                placeholder="Minimum 8 chars"
                value={password}
                onChangeText={setPassword}
                secure
            />

            <TouchableOpacity style={styles.forgotPassword} onPress={onForgotPassword}>
                <Text style={styles.forgotPasswordText}>FORGOT PASSWORD?</Text>
            </TouchableOpacity>

            <Button
                title="LOGIN"
                onSubmit={() => onSubmit(username, password)}
                disabled={!username || !password}
            />

            <View style={styles.registerRow}>
                <Text style={styles.registerText}>Don't have an account? </Text>
                <TouchableOpacity onPress={onRegister}>
                    <Text style={styles.registerLink}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginForm;