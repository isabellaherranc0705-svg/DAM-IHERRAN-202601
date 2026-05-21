import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    base: {
        height: 48,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    primary: {
        backgroundColor: '#007680',
    },
    secondary: {
        backgroundColor: '#ef7f00',
    },
    danger: {
        backgroundColor: '#DC2626',
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

export default styles;