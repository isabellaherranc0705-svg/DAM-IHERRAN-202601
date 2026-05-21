import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#F9FAFB',
    },
    header: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        paddingTop: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#007680',
    },
    subtitle: {
        fontSize: 13,
        color: '#6B7280',
        marginTop: 2,
    },
    scroll: {
        padding: 24,
        flexGrow: 1,
    },
    flat: {
        flex: 1,
        padding: 24,
    },
    content: {
        flex: 1,
    },
});

export default styles;