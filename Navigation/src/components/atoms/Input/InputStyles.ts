import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 6,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 12,
    },
    input: {
        flex: 1,
        height: 44,
        fontSize: 14,
        color: '#111827',
    },
    icon: {
        padding: 4,
        marginLeft: 8,
    },
    iconText: {
        fontSize: 18,
        color: '#9CA3AF',
    },
});

export default styles;