import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "../../atoms";
import { FormField } from "../../molecules";
import { User } from "../../../core/entities";
import styles from "./RegisterFormStyles";

interface RegisterFormProps {
    onSubmit: (user: Omit<User, 'id'>) => void;
    disabledAction?: boolean;
}

const RegisterForm = ({ onSubmit, disabledAction = false }: RegisterFormProps) => {
    const [nombre, setNombre] = useState('');
    const [username, setUsername] = useState('');
    const [correo, setCorreo] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [confirmar, setConfirmar] = useState('');

    const isValid = nombre && username && correo && fechaNacimiento && contrasena && contrasena === confirmar;

    return (
        <View style={styles.container}>
            <FormField label="Full Name" placeholder="Tu nombre" value={nombre} onChangeText={setNombre} />
            <FormField label="Username" placeholder="tunombre123" value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} />
            <FormField label="Email Address" placeholder="tucorreo@example.com" value={correo} onChangeText={setCorreo} keyboardType="email-address" autoCapitalize="none" />
            <FormField label="Date of Birth" placeholder="YYYY-MM-DD" value={fechaNacimiento} onChangeText={setFechaNacimiento} keyboardType="numeric" />
            <FormField label="Password" placeholder="Minimum 8 chars" value={contrasena} onChangeText={setContrasena} secure />
            <FormField label="Confirm Password" placeholder="Re-enter password" value={confirmar} onChangeText={setConfirmar} secure />

            <Button
                title="CREATE ACCOUNT"
                onSubmit={() => onSubmit({ nombre, username, correo, fechaNacimiento, contrasena })}
                disabled={!isValid || disabledAction}
            />
        </View>
    );
};

export default RegisterForm;