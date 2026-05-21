import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    info: {
        flex: 1,
        marginRight: 12,
    },
    nombre: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 2,
    },
    detail: {
        fontSize: 12,
        color: '#6B7280',
        marginBottom: 1,
    },
    ganancia: {
        fontSize: 12,
        color: '#007680',
        fontWeight: '600',
        marginTop: 2,
    },
});

export default styles;