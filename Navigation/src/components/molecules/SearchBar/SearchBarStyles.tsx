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
        marginBottom: 16,
    },
    icon: {
        fontSize: 16,
        marginRight: 8,
        color: '#9CA3AF',
    },
    input: {
        flex: 1,
        height: 44,
        fontSize: 14,
        color: '#111827',
    },
});

export default styles;