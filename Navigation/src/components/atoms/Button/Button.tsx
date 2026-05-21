import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./ButtonStyles";

interface ButtonProps {
    title: string;
    onSubmit?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
}

const Button = ({ title, onSubmit, disabled = false, variant = 'primary' }: ButtonProps) => {
    return (
        <Pressable
            onPress={onSubmit}
            disabled={disabled}
            style={[
                styles.base,
                variant === 'primary' && styles.primary,
                variant === 'secondary' && styles.secondary,
                variant === 'danger' && styles.danger,
                disabled && styles.disabled,
            ]}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default Button;