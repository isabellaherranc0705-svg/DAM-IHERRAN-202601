import React from "react";
import { Pressable, Text } from "react-native";

interface ButtonProps {
    title: String;
    disabled: boolean;
    onSubmit?: () => void;
}

const Button = (
    {title, disabled, onSubmit}: ButtonProps
) => {
    return (
        <Pressable onPress={onSubmit} disabled={disabled}>
            <Text>{title}</Text>
        </Pressable>
    );
};

export default Button;