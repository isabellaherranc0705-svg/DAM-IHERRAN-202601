import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, TextInputProps } from "react-native";
import styles from "./InputStyles";

interface InputProps extends TextInputProps {
    secure?: boolean;
}

const Input = ({ secure = false, ...props }: InputProps) => {
    const [visible, setVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholderTextColor="#9CA3AF"
                secureTextEntry={secure && !visible}
                {...props}
            />
            {secure && (
                <TouchableOpacity onPress={() => setVisible(v => !v)} style={styles.icon}>
                    <Text style={styles.iconText}>{visible ? '🙈' : '👁️'}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Input;