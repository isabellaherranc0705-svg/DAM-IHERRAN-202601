import React from "react";
import { View, TextInput, Text } from "react-native";
import styles from "./SearchBarStyles";

interface SearchBarProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const SearchBar = ({ value, onChangeText, placeholder = 'Buscar productos...' }: SearchBarProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.icon}>🔍</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#9CA3AF"
            />
        </View>
    );
};

export default SearchBar;